/**
 * services/multimedia.service.js
 * Consolidated block for multiple niche platforms.
 * (Vimeo, Twitch, SoundCloud, Spotify, Dailymotion)
 */
import { ytdlpExtract, normaliseFormats } from '../utils/ytdlp.js';

export async function getGeneralMediaInfo(url, platformName) {
  const info = await ytdlpExtract(url);
  const formats = normaliseFormats(info.formats || [], info);
  return {
    platform: platformName,
    title: info.title || `${platformName} Content`,
    thumbnail: info.thumbnail || '',
    duration: info.duration || 0,
    author: info.uploader || info.channel || platformName,
    originalUrl: url,
    categories: formats,
    quality: formats.bestVideo?.quality || 'High Quality',
    downloadUrl: formats.bestVideo?.url || info.url || '',
  };
}

export const getVimeoInfo = (u) => getGeneralMediaInfo(u, 'vimeo');
export const getTwitchInfo = (u) => getGeneralMediaInfo(u, 'twitch');
export const getSoundCloudInfo = (u) => getGeneralMediaInfo(u, 'soundcloud');
export const getSpotifyInfo = (u) => getGeneralMediaInfo(u, 'spotify');
export const getDailymotionInfo = (u) => getGeneralMediaInfo(u, 'dailymotion');
export const getFlickrInfo = (u) => getGeneralMediaInfo(u, 'flickr');
export const getBehanceInfo = (u) => getGeneralMediaInfo(u, 'behance');
export const getDribbbleInfo = (u) => getGeneralMediaInfo(u, 'dribbble');
