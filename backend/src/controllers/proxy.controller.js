/**
 * controllers/proxy.controller.js
 * GET /api/preview-proxy   – Proxy a media URL for in-browser preview
 * GET /api/download-proxy  – Proxy / merge and stream for download
 *
 * These maintain 100% backward-compatibility with the existing frontend
 * (VideoPreview.tsx) which calls localhost:3001/api/preview-proxy and
 * localhost:3001/api/download-proxy with the same query params as before.
 */
import axios from 'axios';
import { ytdlpStream } from '../utils/ytdlp.js';

const UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36';

// ── Thumbnail Proxy ───────────────────────────────────────────────────────────
export async function thumbnailProxy(req, res) {
  const { url } = req.query;
  if (!url) return res.status(400).send('URL required');

  try {
    const response = await axios({
      method: 'get',
      url,
      responseType: 'stream',
      headers: {
        'Referer': 'https://www.instagram.com/',
        'User-Agent': UA
      }
    });

    res.setHeader('Content-Type', response.headers['content-type'] || 'image/jpeg');
    res.setHeader('Cache-Control', 'public, max-age=86400'); // 24h cache
    response.data.pipe(res);
  } catch (err) {
    res.status(404).send('Thumbnail not found');
  }
}

// ── Preview Proxy ─────────────────────────────────────────────────────────────
export async function previewProxy(req, res) {
  const { url, formatId, originalUrl, isProgressive } = req.query;
  if (!url && !originalUrl) return res.status(400).send('URL required');

  try {
    res.setHeader('Content-Type', 'video/mp4');
    res.setHeader('Accept-Ranges', 'none');
    res.setHeader('Cache-Control', 'no-cache');

    // Platforms that generally need yt-dlp even for live preview
    const isHardPlatform = ['youtube', 'instagram', 'tiktok', 'facebook', 'twitter', 'x'].some(p => 
      originalUrl?.toLowerCase().includes(p) || url?.toLowerCase().includes(p)
    );

    if (!url || isProgressive !== 'true' || isHardPlatform) {
      // Use yt-dlp to stream (DASH or protected platforms)
      const spec = (isProgressive === 'true' && !originalUrl?.includes('youtube'))
        ? (formatId || 'best') 
        : `${formatId || 'bestvideo'}+bestaudio/best`;
      const proc = ytdlpStream(originalUrl || url, spec, 'mp4');
      proc.stdout.pipe(res);
      req.on('close', () => proc.kill('SIGINT'));
      return;
    }

    // Direct proxy – just pipe the CDN stream
    const upstream = await axios({ method: 'get', url, responseType: 'stream', timeout: 0,
      headers: { 'User-Agent': UA } });
    upstream.data.pipe(res);
    req.on('close', () => upstream.data.destroy());

  } catch (err) {
    console.error('[preview-proxy]', err.message);
    if (!res.headersSent) res.status(500).send('Preview failed');
  }
}

// ── Download Proxy ────────────────────────────────────────────────────────────
export async function downloadProxy(req, res) {
  const { url, filename, formatId, originalUrl, mode, needsMerge } = req.query;
  if (!url && !originalUrl) return res.status(400).send('URL required');

  const ext      = mode === 'audio' ? 'mp3' : 'mp4';
  const fname    = `${filename || 'video'}.${ext}`;

  res.setHeader('Content-Disposition', `attachment; filename="${fname}"`);
  res.setHeader('Content-Type',        mode === 'audio' ? 'audio/mpeg' : 'video/mp4');
  res.setHeader('Cache-Control',       'no-cache');
  res.setHeader('Accept-Ranges',       'none');

  try {
    // Needs ffmpeg merging OR only has originalUrl (no direct CDN link)
    if ((needsMerge === 'true' || !url) && originalUrl) {
      // Improved spec to ensure high-quality audio is included and merged
      const spec = (needsMerge === 'true' || mode === 'merged')
        ? `${formatId}+bestaudio[ext=m4a]/bestaudio/best` 
        : (formatId || 'bestvideo+bestaudio/best');
      
      console.log(`[download-proxy] mode=${mode} spec=${spec}`);
      const proc = ytdlpStream(originalUrl, spec, ext);
      
      proc.on('error', (err) => {
        console.error('[Download Stream Error]', err);
        if (!res.headersSent) res.status(500).send('Stream error');
      });

      proc.stdout.pipe(res);
      req.on('close', () => proc.kill('SIGKILL'));
      return;
    }

    // Direct proxy from CDN URL
    try {
      const head = await axios({ method: 'head', url, timeout: 5000, headers: { 'User-Agent': UA } });
      if (head.headers['content-length']) res.setHeader('Content-Length', head.headers['content-length']);
    } catch { /* size unknown – continue */ }

    const upstream = await axios({ method: 'get', url, responseType: 'stream', timeout: 0,
      headers: { 'User-Agent': UA } });
    upstream.data.pipe(res);
    req.on('close', () => upstream.data.destroy());

  } catch (err) {
    console.error('[download-proxy]', err.message);
    if (!res.headersSent) res.status(500).send('Download failed');
  }
}
