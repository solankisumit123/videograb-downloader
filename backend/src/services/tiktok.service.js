/**
 * services/tiktok.service.js
 * TikTok-specific extraction via yt-dlp.
 */
import { ytdlpExtract, normaliseFormats } from '../utils/ytdlp.js';

export async function getTikTokInfo(url) {
  const info    = await ytdlpExtract(url);
  const formats = normaliseFormats(info.formats || [], info);

  return {
    platform:    'tiktok',
    title:       info.title || info.description?.substring(0, 100) || 'TikTok Video',
    thumbnail:   info.thumbnail || '',
    duration:    info.duration || 0,
    author:      info.uploader || info.creator || 'TikTok',
    originalUrl: url,
    categories:  formats,
    quality:     formats.bestVideo?.quality || 'N/A',
    downloadUrl: formats.bestVideo?.url || info.url || '',
    formats:     [],
  };
}
