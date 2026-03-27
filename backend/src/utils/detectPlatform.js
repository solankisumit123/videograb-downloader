/**
 * utils/detectPlatform.js
 * Detects social media platform from a URL string and optionally expands
 * short-links via an HTTP HEAD request.
 */
import axios from 'axios';

/**
 * Map of platform names → regex patterns.
 * Patterns are tested against the lowercase full URL.
 */
const PLATFORM_PATTERNS = [
  { name: 'youtube',     pattern: /youtube\.com|youtu\.be/ },
  { name: 'instagram',   pattern: /instagram\.com/ },
  { name: 'tiktok',      pattern: /tiktok\.com/ },
  { name: 'facebook',    pattern: /facebook\.com|fb\.watch/ },
  { name: 'twitter',     pattern: /twitter\.com|x\.com/ },
  { name: 'reddit',      pattern: /reddit\.com|redd\.it/ },
  { name: 'vimeo',       pattern: /vimeo\.com/ },
  { name: 'dailymotion', pattern: /dailymotion\.com|dai\.ly/ },
  { name: 'pinterest',   pattern: /pinterest\.com|pin\.it/ },
  { name: 'snapchat',    pattern: /snapchat\.com|snap\.com/ },
  { name: 'threads',     pattern: /threads\.net/ },
  { name: 'linkedin',    pattern: /linkedin\.com/ },
  { name: 'telegram',    pattern: /t\.me|telegram\.me/ },
  { name: 'whatsapp',    pattern: /wa\.me|whatsapp\.com/ },
  { name: 'messenger',   pattern: /messenger\.com/ },
  { name: 'twitch',      pattern: /twitch\.tv/ },
  { name: 'soundcloud',  pattern: /soundcloud\.com/ },
  { name: 'spotify',     pattern: /spotify\.com/ },
  { name: 'tumblr',      pattern: /tumblr\.com/ },
  { name: 'vk',          pattern: /vk\.com/ },
  { name: 'weibo',       pattern: /weibo\.com/ },
  { name: 'line',        pattern: /line\.me/ },
  { name: 'signal',      pattern: /signal\.org/ },
  { name: 'quora',       pattern: /quora\.com/ },
  { name: 'medium',      pattern: /medium\.com/ },
  { name: 'substack',    pattern: /substack\.com/ },
  { name: 'discord',     pattern: /discord\.com|discord\.gg/ },
  { name: 'koo',         pattern: /kooapp\.com/ },
  { name: 'sharechat',   pattern: /sharechat\.com/ },
  { name: 'wechat',      pattern: /wechat\.com/ },
  { name: 'behance',     pattern: /behance\.net/ },
  { name: 'dribbble',    pattern: /dribbble\.com/ },
  { name: 'flickr',      pattern: /flickr\.com/ },
  { name: 'steam',       pattern: /steampowered\.com|steamcommunity\.com/ },
  { name: 'roblox',      pattern: /roblox\.com/ },
  { name: 'likee',       pattern: /likee\.video/ },
  { name: 'moj',         pattern: /mojapp\.in/ },
  { name: 'josh',        pattern: /joshapp\.co/ },
  { name: 'roposo',      pattern: /roposo\.com/ },
  { name: 'mxtakatak',   pattern: /mxtakatak\.com/ },
];

/**
 * Detects the platform from a URL string.
 * @param {string} url
 * @returns {string}  platform name or 'generic'
 */
export function detectPlatformFromUrl(url) {
  const lower = url.toLowerCase();
  for (const { name, pattern } of PLATFORM_PATTERNS) {
    if (pattern.test(lower)) return name;
  }
  return 'generic';
}

/**
 * Validates that a string is a proper URL.
 * @param {string} url
 * @returns {boolean}
 */
export function isValidUrl(url) {
  try {
    const u = new URL(url);
    return ['http:', 'https:'].includes(u.protocol);
  } catch {
    return false;
  }
}

/**
 * Expands a short URL by following redirects (up to 5 hops) and returns
 * the final destination URL.  Falls back to the original URL on error.
 * @param {string} url
 * @returns {Promise<string>}
 */
export async function expandShortUrl(url) {
  let current = url;
  const SHORT_HOSTS = ['t.co', 'bit.ly', 'tinyurl.com', 'ow.ly', 'buff.ly', 'fb.watch', 'youtu.be', 'pin.it', 'redd.it', 'dai.ly'];
  const hostname = new URL(url).hostname.replace('www.', '');
  if (!SHORT_HOSTS.includes(hostname)) return url; // nothing to expand

  try {
    // Follow redirects – axios will chase them automatically
    const resp = await axios.get(url, {
      maxRedirects: 5,
      timeout: 5000,
      headers: { 'User-Agent': 'Mozilla/5.0' },
      validateStatus: () => true,
    });
    current = resp.request?.res?.responseUrl || resp.config?.url || url;
  } catch {
    // ignore – return original
  }
  return current;
}
