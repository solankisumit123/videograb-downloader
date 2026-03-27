import { chromium } from 'playwright';

/**
 * Deep extraction via Playwright for Pinterest links that yt-dlp fails to parse.
 */
async function extractPinterestDeep(url) {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({ userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36' });
  const page = await context.newPage();

  try {
    await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 30000 });
    
    // Wait for the video element to appear
    await page.waitForSelector('video', { timeout: 10000 }).catch(() => null);
    
    const data = await page.evaluate(() => {
      const video = document.querySelector('video');
      const img = document.querySelector('img[src*="pinimg.com"]') || document.querySelector('img');
      const h1 = document.querySelector('h1') || document.querySelector('[data-testid="pin-title"]');
      
      return {
        title: h1?.innerText || document.title,
        videoUrl: video?.src || video?.querySelector('source')?.src || '',
        thumbnail: img?.src || '',
      };
    });

    if (!data.videoUrl) throw new Error('No video found on page source.');

    return {
      title: data.title,
      thumbnail: data.thumbnail,
      formats: [{
        format_id: 'original',
        url: data.videoUrl,
        ext: 'mp4',
        vcodec: 'h264',
        acodec: 'aac',
        quality: 'Original',
      }],
      url: data.videoUrl,
    };
  } finally {
    await browser.close();
  }
}

export async function getPinterestInfo(url) {
  try {
    const info = await ytdlpExtract(url);
    const formats = normaliseFormats(info.formats || [], info);
    
    // Check if yt-dlp extraction was truly successful in finding a URL
    if (formats.videoFormats.length === 0 && !info.url) {
      throw new Error('No formats found in standard scan.');
    }
    
    return {
      platform: 'pinterest',
      title: info.title || 'Pinterest Content',
      thumbnail: info.thumbnail || '',
      duration: info.duration || 0,
      author: info.uploader || 'Pinterest',
      originalUrl: url,
      categories: formats,
      quality: formats.bestVideo?.quality || 'High',
      downloadUrl: formats.bestVideo?.url || info.url || '',
    };
  } catch (err) {
    console.log(`[Pinterest] Falling back to Playwright for: ${url}`);
    try {
      const raw = await extractPinterestDeep(url);
      const formats = normaliseFormats(raw.formats || [], raw);
      return {
        platform: 'pinterest',
        title: raw.title || 'Pinterest Video',
        thumbnail: raw.thumbnail,
        duration: 0,
        author: 'Pinterest',
        originalUrl: url,
        categories: formats,
        quality: 'Full HD',
        downloadUrl: raw.url,
      };
    } catch (deepErr) {
      console.error('[Pinterest Deep Extraction Error]', deepErr.message);
      throw err; // throw original yt-dlp error if both fail
    }
  }
}
