/**
 * services/extra.service.js
 * Handles additional requested platforms: Threads, Tumblr, Discord, Quora, etc.
 */
import { ytdlpExtract, normaliseFormats } from '../utils/ytdlp.js';

export async function getExtraInfo(url, platformName) {
  const info = await ytdlpExtract(url);
  const formats = normaliseFormats(info.formats || [], info);
  return {
    platform: platformName,
    title: info.title || `${platformName} Post`,
    thumbnail: info.thumbnail || '',
    duration: info.duration || 0,
    author: info.uploader || platformName,
    originalUrl: url,
    categories: formats,
    quality: formats.bestVideo?.quality || 'Full HD',
    downloadUrl: formats.bestVideo?.url || info.url || '',
  };
}

export const getThreadsInfo = (u) => getExtraInfo(u, 'threads');
export const getTumblrInfo  = (u) => getExtraInfo(u, 'tumblr');
export const getDiscordInfo = (u) => getExtraInfo(u, 'discord');
export const getQuoraInfo   = (u) => getExtraInfo(u, 'quora');
export const getSteamInfo   = (u) => getExtraInfo(u, 'steam');
