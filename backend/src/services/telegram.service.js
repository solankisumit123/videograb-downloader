/**
 * services/telegram.service.js
 */
import { ytdlpExtract, normaliseFormats } from '../utils/ytdlp.js';

export async function getTelegramInfo(url) {
  const info = await ytdlpExtract(url);
  const formats = normaliseFormats(info.formats || [], info);
  return {
    platform: 'telegram',
    title: info.title || 'Telegram Video',
    thumbnail: info.thumbnail || '',
    duration: info.duration || 0,
    author: info.uploader || 'Telegram User',
    originalUrl: url,
    categories: formats,
    quality: formats.bestVideo?.quality || 'Full HD',
    downloadUrl: formats.bestVideo?.url || info.url || '',
  };
}
