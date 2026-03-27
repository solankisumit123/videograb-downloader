/**
 * controllers/download.controller.js
 * POST /api/download  – streams the file directly to the client.
 *
 * Body: { url, format, quality, formatId, needsMerge }
 */
import { ytdlpStream } from '../utils/ytdlp.js';
import { recordDownload } from '../services/downloader.service.js';

export async function downloadController(req, res, next) {
  const { url, format, formatId, needsMerge } = req.body;

  const isAudio    = format === 'mp3' || format === 'm4a';
  const container  = isAudio ? 'mp3' : 'mp4';
  const ext        = container;
  const filename   = `videograb_${Date.now()}.${ext}`;

  // Build yt-dlp format spec
  let formatSpec;
  if (isAudio) {
    formatSpec = formatId ? formatId : 'bestaudio/best';
  } else if (formatId && needsMerge) {
    formatSpec = `${formatId}+bestaudio/best`;
  } else if (formatId) {
    formatSpec = formatId;
  } else {
    formatSpec = 'bestvideo+bestaudio/best';
  }

  console.log(`[Download] url=${url} spec=${formatSpec} container=${container}`);

  res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);
  res.setHeader('Content-Type', isAudio ? 'audio/mpeg' : 'video/mp4');
  res.setHeader('Cache-Control', 'no-cache');
  res.setHeader('Accept-Ranges', 'none');

  try {
    const ytdlpProcess = ytdlpStream(url, formatSpec, container);

    ytdlpProcess.stderr.on('data', d => {
      const msg = d.toString();
      if (msg.includes('ERROR')) console.error('[yt-dlp stderr]', msg.trim());
    });

    ytdlpProcess.on('error', (err) => {
      console.error('[yt-dlp spawn error]', err.message);
      if (!res.headersSent) next(err);
    });

    // Pipe stdout straight to response
    ytdlpProcess.stdout.pipe(res);

    // If client disconnects, kill yt-dlp
    req.on('close', () => ytdlpProcess.kill('SIGINT'));

    res.on('finish', () => {
      recordDownload({
        userId:   req.user?.id,
        url,
        platform: 'download',
        title:    filename,
        format:   ext,
      });
    });
  } catch (err) {
    next(err);
  }
}
