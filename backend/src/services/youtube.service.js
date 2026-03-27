/**
 * services/youtube.service.js
 * YouTube-specific utilities using yt-dlp as the primary extraction engine.
 * ytdl-core is kept as a fallback only.
 */
import ytdl from '@distube/ytdl-core';
import { ytdlpExtract, normaliseFormats } from '../utils/ytdlp.js';

/**
 * Returns true if this URL is a YouTube link.
 * @param {string} url
 */
export function isYouTubeUrl(url) {
  return /youtube\.com|youtu\.be/.test(url);
}

/**
 * Fetches YouTube metadata via yt-dlp (Primary) with ytdl-core fallback.
 * @param {string} url
 * @returns {Promise<object>} VideoInfo
 */
export async function getYouTubeInfo(url) {
  try {
    console.log(`[YouTube Service] Attempting yt-dlp extraction for: ${url}`);
    const info = await ytdlpExtract(url);
    const formats = normaliseFormats(info.formats || [], info);

    return {
      platform:    'youtube',
      title:       info.title || 'YouTube Video',
      thumbnail:   info.thumbnail || '',
      duration:    info.duration || 0,
      author:      info.uploader || info.channel || 'YouTube',
      originalUrl: url,
      categories:  formats,
      quality:     formats.bestVideo?.quality || 'High Quality',
      downloadUrl: formats.bestVideo?.url || info.url || '',
      formats:     [],
    };
  } catch (err) {
    console.warn(`[YouTube Service] yt-dlp failed, trying ytdl-core fallback:`, err.message);
    
    try {
      const info = await ytdl.getInfo(url);
      const vd   = info.videoDetails;

      const videoFormats = ytdl.filterFormats(info.formats, 'videoandaudio')
        .map(f => ({
          formatId:     f.itag.toString(),
          quality:      f.qualityLabel || f.quality,
          resolution:   f.width && f.height ? `${f.width}x${f.height}` : 'N/A',
          ext:          f.container || 'mp4',
          fps:          f.fps || 30,
          filesize:     parseInt(f.contentLength || '0'),
          url:          f.url,
          hasAudio:     true,
          isProgressive: true,
          needsMerge:   false,
        }))
        .sort((a, b) => (parseInt(b.quality) || 0) - (parseInt(a.quality) || 0));

      const audioFormats = ytdl.filterFormats(info.formats, 'audioonly')
        .map(f => ({
          formatId: f.itag.toString(),
          quality:  f.audioBitrate ? `${f.audioBitrate}kbps` : 'HQ',
          ext:      f.container || 'm4a',
          filesize: parseInt(f.contentLength || '0'),
          url:      f.url,
          abr:      f.audioBitrate || 0,
        }))
        .sort((a, b) => b.abr - a.abr);

      return {
        platform:    'youtube',
        title:       vd.title,
        thumbnail:   vd.thumbnails?.[vd.thumbnails.length - 1]?.url || '',
        duration:    parseInt(vd.lengthSeconds || '0'),
        author:      vd.author?.name || 'YouTube',
        originalUrl: url,
        categories: {
          videoFormats,
          audioFormats,
          bestVideo: videoFormats[0] || null,
          bestAudio: audioFormats[0] || null,
        },
        quality:     videoFormats[0]?.quality || 'N/A',
        downloadUrl: videoFormats[0]?.url     || '',
        formats:     [],
      };
    } catch (fallbackErr) {
      console.error(`[YouTube Service] All extraction methods failed for ${url}:`, fallbackErr.message);
      return null;
    }
  }
}

/**
 * Returns a readable stream for a YouTube video format.
 * @param {string} url
 * @param {string} itag
 */
export function streamYouTube(url, itag) {
  return ytdl(url, { filter: f => f.itag.toString() === itag });
}
