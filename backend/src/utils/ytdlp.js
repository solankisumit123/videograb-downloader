/**
 * utils/ytdlp.js
 * Wrapper around the yt-dlp CLI for metadata extraction and streaming.
 * yt-dlp must be installed and available on PATH.
 */
import { exec, spawn } from 'child_process';
import { promisify } from 'util';
import ffmpegStatic from 'ffmpeg-static';

const execAsync = promisify(exec);
const FFMPEG    = process.env.FFMPEG_PATH || ffmpegStatic;
console.log(`[ytdlp] FFMPEG Path: ${FFMPEG}`);
const COOKIES   = process.env.COOKIE_PATH; // absolute path to cookies.txt if available

/**
 * Runs yt-dlp -j to extract JSON metadata for a URL.
 * @param {string} url
 * @returns {Promise<object>} yt-dlp info dict
 */
export async function ytdlpExtract(url) {
  const userAgent = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36';
  // Use -j and more robust flags
  let cmd = `yt-dlp -j --no-warnings --no-playlist --skip-download --no-check-certificate --no-part --no-continue --user-agent "${userAgent}"`;
  if (COOKIES) cmd += ` --cookies "${COOKIES}"`;
  cmd += ` "${url}"`;
  
  try {
    console.log(`[yt-dlp] Executing: ${cmd.substring(0, 100)}...`);
    const { stdout, stderr } = await execAsync(cmd, { timeout: 45_000, maxBuffer: 30 * 1024 * 1024 });
    
    if (stderr && !stderr.includes('warnings')) {
      console.warn(`[yt-dlp stderr] ${stderr.substring(0, 500)}`);
    }
    
    const parsed = JSON.parse(stdout);
    console.log(`[yt-dlp success] Title: ${parsed.title}`);
    return parsed;
  } catch (err) {
    console.error(`[yt-dlp extract failed] ${url}`);
    console.error(`ERROR: ${err.message}`);
    if (err.stderr) console.error(`STDERR: ${err.stderr}`);
    const friendlyMsg = err.message.includes('Instagram') 
      ? 'Instagram media is temporarily unavailable or private.' 
      : 'Failed to extract video information. Please try again.';
    throw new Error(friendlyMsg);
  }
}

/**
 * Returns a ChildProcess whose stdout streams the video/audio.
 * @param {string} url          Original page URL
 * @param {string} formatSpec   yt-dlp format string, e.g. '137+bestaudio'
 * @param {'mp4'|'mp3'} container
 * @returns {ChildProcess}
 */
export function ytdlpStream(url, formatSpec, container = 'mp4') {
  const userAgent = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36';
  const args = [
    '-f', formatSpec || 'best',
    '--no-warnings',
    '--no-part',
    '--no-continue',
    '--no-playlist',
    '--no-check-certificate',
    '--user-agent', userAgent,
    '--ffmpeg-location', FFMPEG,
    '--merge-output-format', container,
    '--prefer-ffmpeg',
    '--hls-prefer-ffmpeg',
  ];

  if (container === 'mp3') {
    args.push('--extract-audio', '--audio-format', 'mp3', '--audio-quality', '0');
  } else {
    // For MP4, ensure we use ffmpeg to merge properly even when piping
    // Using recode-video to ensure standard MP4 even if input is webm/etc
    args.push(
      '--recode-video', 'mp4',
      '--postprocessor-args', 
      'ffmpeg:-c:v copy -c:a aac -strict experimental -movflags frag_keyframe+empty_moov+faststart'
    );
  }

  if (COOKIES) args.push('--cookies', COOKIES);
  
  args.push('--force-overwrites', '-o', '-', url);

  const ytBinary = 'yt-dlp';
  console.log(`[yt-dlp stream] URL: ${url} Spec: ${formatSpec} Container: ${container}`);
  console.log(`[yt-dlp stream] Args: ${args.join(' ')}`);

  const proc = spawn(ytBinary, args, { 
    stdio: ['ignore', 'pipe', 'pipe']
  });

  if (process.env.NODE_ENV === 'development') {
    proc.stderr.on('data', d => {
      const msg = d.toString();
      if (msg.includes('ERROR') || msg.includes('Usage:')) console.error(`[yt-dlp stderr]`, msg.trim());
    });
  }

  return proc;
}

/**
 * Normalises a raw yt-dlp formats array into our VideoFormat shape.
 * @param {object[]} rawFormats
 * @param {object}   info        Top-level yt-dlp info dict
 * @returns {{ videoFormats: object[], audioFormats: object[], bestVideo: object|null, bestAudio: object|null }}
 */
export function normaliseFormats(rawFormats, info) {
  const formats = rawFormats.length === 0 && info.url
    ? [{ format_id: info.format_id || 'default', url: info.url, ext: info.ext || 'mp4',
         height: info.height, width: info.width, vcodec: info.vcodec,
         acodec: info.acodec, filesize: info.filesize, fps: info.fps }]
    : rawFormats;

  // ── Video formats ─────────────────────────────────────────────────────────
  const vMap = new Map();
  for (const f of formats) {
    // Explicitly audio-only
    if (f.vcodec === 'none') continue;
    
    // Check if it's likely a video format
    const hasVideoProps = f.height || f.width || (f.vcodec && f.vcodec !== 'none' && f.vcodec !== 'unknown');
    const isVideoExt = ['mp4', 'webm', 'mov', 'mkv', 'flv', '3gp'].includes(f.ext);
    
    if (hasVideoProps || isVideoExt || formats.length === 1) {
      const key = f.height ? `${f.height}p` : (f.resolution || (f.width ? `${f.width}p` : 'HQ'));
      if (!vMap.has(key) || (f.tbr || 0) > (vMap.get(key).tbr || 0)) vMap.set(key, f);
    }
  }

  let videoFormats = [...vMap.values()].map((f, i) => {
    const isProgressive = (f.acodec && f.acodec !== 'none' && f.acodec !== 'unknown')
      || (f.ext === 'mp4' && !f.protocol?.includes('dash'));
    return {
      formatId:     f.format_id || `v${i}`,
      quality:      f.height ? `${f.height}p` : (f.resolution || 'High Quality'),
      resolution:   f.resolution || (f.width && f.height ? `${f.width}x${f.height}` : 'Variable'),
      ext:          f.ext || 'mp4',
      fps:          f.fps || 30,
      filesize:     f.filesize || f.filesize_approx || 0,
      url:          f.url || '',
      hasAudio:     isProgressive,
      isProgressive,
      needsMerge:   !isProgressive,
      vcodec:       f.vcodec,
      acodec:       f.acodec,
      tbr:          f.tbr || 0,
    };
  }).sort((a, b) => (parseInt(b.quality) || 0) - (parseInt(a.quality) || 0));

  // EMERGENCY FALLBACK: if still empty but info.url is there
  if (videoFormats.length === 0 && info.url) {
    videoFormats = [{
      formatId: 'direct',
      quality: 'High Quality',
      resolution: 'Source',
      ext: info.ext || 'mp4',
      fps: info.fps || 30,
      filesize: info.filesize || 0,
      url: info.url,
      hasAudio: true,
      isProgressive: true,
      needsMerge: false,
      vcodec: info.vcodec || 'h264',
      acodec: info.acodec || 'aac',
    }];
  }

  // ── Audio formats ───────────────────────────────────────────────────────── (No changes needed)
  const aMap = new Map();
  for (const f of formats) {
    if (f.acodec === 'none' || (f.vcodec && f.vcodec !== 'none')) continue;
    const key = f.abr ? `${Math.round(f.abr)}k` : (f.tbr ? `${Math.round(f.tbr)}k` : 'hq');
    if (!aMap.has(key) || (f.abr || f.tbr || 0) > (aMap.get(key).abr || aMap.get(key).tbr || 0)) {
      aMap.set(key, f);
    }
  }

  const audioFormats = [...aMap.values()].map((f, i) => ({
    formatId: f.format_id || `a${i}`,
    quality:  f.abr ? `${Math.round(f.abr)}kbps` : (f.tbr ? `${Math.round(f.tbr)}kbps` : 'HQ'),
    ext:      f.ext || 'm4a',
    filesize: f.filesize || f.filesize_approx || 0,
    url:      f.url || '',
    abr:      f.abr || 0,
    tbr:      f.tbr || 0,
    acodec:   f.acodec,
  })).sort((a, b) => (b.tbr || b.abr) - (a.tbr || a.abr));

  return {
    videoFormats,
    audioFormats,
    bestVideo: videoFormats[0] || null,
    bestAudio: audioFormats[0] || null,
  };
}
