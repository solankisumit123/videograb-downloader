/**
 * services/facebook.service.js
 * Facebook extraction via yt-dlp.
 */
import { ytdlpExtract, normaliseFormats } from '../utils/ytdlp.js';

export async function getFacebookInfo(url) {
  const info = await ytdlpExtract(url);
  const formats = normaliseFormats(info.formats || [], info);
  return {
    platform: 'facebook',
    title: info.title || 'Facebook Video',
    thumbnail: info.thumbnail || '',
    duration: info.duration || 0,
    author: info.uploader || 'Facebook User',
    originalUrl: url,
    categories: formats,
    quality: formats.bestVideo?.quality || 'Full HD',
    downloadUrl: formats.bestVideo?.url || info.url || '',
  };
}
