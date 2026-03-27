/**
 * services/snapchat.service.js
 * Snapchat extraction via yt-dlp.
 */
import { ytdlpExtract, normaliseFormats } from '../utils/ytdlp.js';

export async function getSnapchatInfo(url) {
  const info = await ytdlpExtract(url);
  const formats = normaliseFormats(info.formats || [], info);
  return {
    platform: 'snapchat',
    title: info.title || 'Snapchat Story',
    thumbnail: info.thumbnail || '',
    duration: info.duration || 0,
    author: info.uploader || 'Snapchat',
    originalUrl: url,
    categories: formats,
    quality: formats.bestVideo?.quality || 'Full HD',
    downloadUrl: formats.bestVideo?.url || info.url || '',
  };
}
