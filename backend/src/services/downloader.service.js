/**
 * services/downloader.service.js
 * Central dispatcher that picks the right platform service,
 * runs metadata extraction (with caching), and saves DB history.
 */
import { detectPlatformFromUrl, expandShortUrl } from '../utils/detectPlatform.js';
import { cacheGet, cacheSet } from '../utils/cache.js';
import { ytdlpExtract, normaliseFormats } from '../utils/ytdlp.js';
import supabase from '../config/supabase.js';
// Local service imports
import { getYouTubeInfo } from './youtube.service.js';
import { getInstagramInfo } from './instagram.service.js';
import { getTikTokInfo } from './tiktok.service.js';
import { extractLinkedInMetadata } from './linkedin.service.js';
import { getFacebookInfo } from './facebook.service.js';
import { getTwitterInfo } from './twitter.service.js';
import { getRedditInfo } from './reddit.service.js';
import { getPinterestInfo } from './pinterest.service.js';
import { getSnapchatInfo } from './snapchat.service.js';
import { getTelegramInfo } from './telegram.service.js';
import { 
  getVimeoInfo, getTwitchInfo, getSoundCloudInfo, 
  getSpotifyInfo, getDailymotionInfo, getFlickrInfo,
  getBehanceInfo, getDribbbleInfo
} from './multimedia.service.js';

import { 
  getThreadsInfo, getTumblrInfo, getDiscordInfo, getQuoraInfo, getSteamInfo
} from './extra.service.js';

// Cache TTL: 10 minutes
const CACHE_TTL = 600;

export async function analyseUrl(rawUrl) {
  let url = rawUrl.trim();
  if (!url.startsWith('http')) url = `https://${url}`;

  // 1. Expand & Detect
  url = await expandShortUrl(url);
  const platform = detectPlatformFromUrl(url);

  // 2. Cache check
  const cacheKey = `extract:${url}`;
  const cached = await cacheGet(cacheKey);
  if (cached) return cached;

  console.log(`[Dispatcher] platform=${platform} url=${url}`);

  let result;
  try {
    switch (platform) {
      case 'youtube':       result = await getYouTubeInfo(url); break;
      case 'instagram':     result = await getInstagramInfo(url); break;
      case 'tiktok':        result = await getTikTokInfo(url); break;
      case 'linkedin': {
        const raw = await extractLinkedInMetadata(url);
        const formats = normaliseFormats(raw.formats || [], raw);
        result = { platform, title: raw.title, thumbnail: raw.thumbnail, originalUrl: url, categories: formats, quality: 'Full HD', downloadUrl: raw.url };
        break;
      }
      case 'facebook':      result = await getFacebookInfo(url); break;
      case 'twitter':       result = await getTwitterInfo(url); break;
      case 'reddit':        result = await getRedditInfo(url); break;
      case 'pinterest':     result = await getPinterestInfo(url); break;
      case 'snapchat':      result = await getSnapchatInfo(url); break;
      case 'telegram':      result = await getTelegramInfo(url); break;
      case 'vimeo':         result = await getVimeoInfo(url); break;
      case 'twitch':        result = await getTwitchInfo(url); break;
      case 'soundcloud':    result = await getSoundCloudInfo(url); break;
      case 'spotify':       result = await getSpotifyInfo(url); break;
      case 'dailymotion':   result = await getDailymotionInfo(url); break;
      case 'flickr':        result = await getFlickrInfo(url); break;
      case 'behance':       result = await getBehanceInfo(url); break;
      case 'dribbble':      result = await getDribbbleInfo(url); break;
      case 'threads':       result = await getThreadsInfo(url); break;
      case 'tumblr':        result = await getTumblrInfo(url); break;
      case 'discord':       result = await getDiscordInfo(url); break;
      case 'quora':         result = await getQuoraInfo(url); break;
      case 'steam':         result = await getSteamInfo(url); break;
      default: result = null;
    }

    // fallback if dedicated service failed or platform not matched
    if (!result) {
      console.log(`[Dispatcher] Falling back to universal extraction for: ${url}`);
      const info = await ytdlpExtract(url);
      const formats = normaliseFormats(info.formats || [], info);
      result = {
        platform: (info.extractor_key && info.extractor_key !== 'generic') ? info.extractor_key : platform,
        title:       info.title || 'Video Content',
        thumbnail:   info.thumbnail || '',
        duration:    info.duration || 0,
        author:      info.uploader || info.channel || 'Media Source',
        originalUrl: url,
        categories:  formats,
        quality:     formats.bestVideo?.quality || 'High Quality',
        downloadUrl: formats.bestVideo?.url || info.url || '',
      };
    }

    // 4. Global normalization post-service
    if (result.thumbnail && (result.thumbnail.includes('fbcdn') || result.thumbnail.includes('instagram'))) {
      const backendUrl = process.env.BACKEND_URL || 'https://videograb-downloader.onrender.com';
      result.thumbnail = `${backendUrl}/api/thumbnail-proxy?url=${encodeURIComponent(result.thumbnail)}`;
    }

    await cacheSet(cacheKey, result, CACHE_TTL);
    return result;

  } catch (err) {
    console.error(`[Analysis Failed] ${platform}:`, err.message);
    throw err;
  }
}

/**
 * Persist a download record to Supabase `downloads` table.
 * Fire-and-forget – never throws.
 *
 * @param {{ userId?, url, platform, title, thumbnail, format }} opts
 */
export async function recordDownload({ userId, url, platform, title, thumbnail, format }) {
  if (!supabase) return;
  try {
    await supabase.from('downloads').insert({
      user_id:   userId || null,
      url,
      platform,
      title,
      thumbnail,
      format:    format || 'mp4',
      created_at: new Date().toISOString(),
    });
  } catch (err) {
    console.warn('[DB] recordDownload failed:', err.message);
  }
}
