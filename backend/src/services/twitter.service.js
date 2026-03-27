/**
 * services/twitter.service.js
 * Twitter/X extraction via yt-dlp.
 */
import { ytdlpExtract, normaliseFormats } from '../utils/ytdlp.js';

export async function getTwitterInfo(url) {
  const info = await ytdlpExtract(url);
  const formats = normaliseFormats(info.formats || [], info);
  return {
    platform: 'twitter',
    title: info.title || 'Twitter/X Video',
    thumbnail: info.thumbnail || '',
    duration: info.duration || 0,
    author: info.uploader || 'Twitter User',
    originalUrl: url,
    categories: formats,
    quality: formats.bestVideo?.quality || 'Standard',
    downloadUrl: formats.bestVideo?.url || info.url || '',
  };
}
