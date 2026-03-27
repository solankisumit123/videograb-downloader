/**
 * services/instagram.service.js
 * Instagram-specific extraction via yt-dlp (handles Reels, Posts, Stories).
 */
import { ytdlpExtract, normaliseFormats } from '../utils/ytdlp.js';

export async function getInstagramInfo(url) {
  const info    = await ytdlpExtract(url);
  const formats = normaliseFormats(info.formats || [], info);

  return {
    platform:    'instagram',
    title:       info.title || info.description?.substring(0, 100) || 'Instagram Video',
    thumbnail:   info.thumbnail || '',
    duration:    info.duration || 0,
    author:      info.uploader || info.channel || 'Instagram',
    originalUrl: url,
    categories:  formats,
    quality:     formats.bestVideo?.quality || 'N/A',
    downloadUrl: formats.bestVideo?.url || info.url || '',
    formats:     [],
  };
}
