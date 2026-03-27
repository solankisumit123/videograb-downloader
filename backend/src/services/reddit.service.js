/**
 * services/reddit.service.js
 * Reddit extraction via yt-dlp.
 */
import { ytdlpExtract, normaliseFormats } from '../utils/ytdlp.js';

export async function getRedditInfo(url) {
  const info = await ytdlpExtract(url);
  const formats = normaliseFormats(info.formats || [], info);
  return {
    platform: 'reddit',
    title: info.title || 'Reddit Video',
    thumbnail: info.thumbnail || '',
    duration: info.duration || 0,
    author: info.uploader || 'Reddit User',
    originalUrl: url,
    categories: formats,
    quality: formats.bestVideo?.quality || 'Source',
    downloadUrl: formats.bestVideo?.url || info.url || '',
  };
}
