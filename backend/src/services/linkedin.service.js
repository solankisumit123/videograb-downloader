/**
 * services/linkedin.service.js
 * Fallback extractor for LinkedIn using Playwright since yt-dlp often fails.
 */
import { chromium } from 'playwright';

export async function extractLinkedInMetadata(url) {
  let browser = null;
  try {
    browser = await chromium.launch({ headless: true });
    const context = await browser.newContext({
      userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
    });
    const page = await context.newPage();
    
    // Set a timeout
    await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 30000 });

    // Look for video tags or data-sources
    // LinkedIn often stores videos in a <video> tag with a src on the public post page
    const videoSrc = await page.evaluate(() => {
      const video = document.querySelector('video');
      if (video && video.src) return video.src;
      // Also check source tags
      const source = document.querySelector('video source');
      if (source && source.src) return source.src;
      
      // Try finding data-sources in elements
      const el = document.querySelector('[data-sources]');
      if (el) {
        try {
          const sources = JSON.parse(el.getAttribute('data-sources'));
          if (sources && sources.length > 0) return sources[0].src;
        } catch(e) {}
      }
      return null;
    });

    const title = await page.title() || 'LinkedIn Video';
    const thumbnail = await page.evaluate(() => {
      const img = document.querySelector('video')?.getAttribute('poster');
      if (img) return img;
      return document.querySelector('meta[property="og:image"]')?.getAttribute('content') || '';
    });

    if (!videoSrc) throw new Error('No video found on this LinkedIn post.');

    return {
      platform: 'LinkedIn',
      title: title.replace(' | LinkedIn', ''),
      thumbnail,
      url: videoSrc,
      formats: [{
        format_id: 'original',
        url: videoSrc,
        ext: 'mp4',
        quality: 'Original',
        vcodec: 'h264',
        acodec: 'aac'
      }]
    };
  } finally {
    if (browser) await browser.close();
  }
}
