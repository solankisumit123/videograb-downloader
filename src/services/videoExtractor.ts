/**
 * services/videoExtractor.ts
 * Frontend API client – calls the VideoGrab backend.
 *
 * The backend URL is read from the Vite env variable
 * VITE_API_URL (defaults to http://localhost:3001 for local dev).
 */

const API_BASE = (import.meta.env.VITE_API_URL as string | undefined) || 'https://videograb-downloader.onrender.com';

export interface VideoFormat {
  formatId: string;
  quality: string;
  resolution?: string;
  height?: number;
  ext: string;
  fps?: number;
  filesize: number;
  url: string;
  hasAudio: boolean;
  isProgressive?: boolean;
  label?: string;
  isAudio?: boolean;
  needsMerge?: boolean;
  acodec?: string;
}

export interface VideoInfo {
  platform: string;
  title: string;
  thumbnail: string;
  duration: number;
  quality: string;
  downloadUrl: string;
  author: string;
  formats: VideoFormat[];
  bestWithAudioId?: string;
  originalUrl?: string;
  categories?: {
    videoFormats: VideoFormat[];
    audioFormats: VideoFormat[];
    bestVideo: VideoFormat | null;
    bestAudio: VideoFormat | null;
    bestQuality?: VideoFormat | null;
  };
}

/**
 * Calls POST /api/analyze to extract video metadata and available formats.
 */
export async function extractVideoInfo(url: string): Promise<VideoInfo> {
  const response = await fetch(`${API_BASE}/api/analyze`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ url }),
  });

  if (!response.ok) {
    let errMsg = 'Failed to extract video info';
    try {
      const payload = await response.json();
      errMsg = payload.error || errMsg;
    } catch { /* ignore */ }
    throw new Error(errMsg);
  }

  const payload = await response.json();
  // Backend wraps response in { success: true, ...data }
  // Strip the success flag before returning so callers get VideoInfo shape
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { success: _success, ...data } = payload;
  return data as VideoInfo;
}

/**
 * Detects platform from a URL client-side (instant, no network).
 */
export function detectPlatform(url: string): string | null {
  const lower = url.toLowerCase();
  if (lower.includes('youtube.com') || lower.includes('youtu.be')) return 'youtube';
  if (lower.includes('instagram.com'))  return 'instagram';
  if (lower.includes('tiktok.com'))     return 'tiktok';
  if (lower.includes('facebook.com') || lower.includes('fb.watch')) return 'facebook';
  if (lower.includes('twitter.com') || lower.includes('x.com'))     return 'twitter';
  try { new URL(url); return 'generic'; } catch { return null; }
}

/**
 * Builds a preview-proxy URL for the video player.
 */
export function buildPreviewUrl(
  video: VideoInfo,
  format?: VideoFormat | null,
): string {
  const target = format ?? video.categories?.bestVideo ?? video.categories?.videoFormats?.[0];
  const rawUrl = target?.url || video.downloadUrl;
  if (!rawUrl && !video.originalUrl) return '';
  return (
    `${API_BASE}/api/preview-proxy` +
    `?url=${encodeURIComponent(rawUrl || '')}` +
    `&formatId=${target?.formatId || ''}` +
    `&originalUrl=${encodeURIComponent(video.originalUrl || '')}` +
    `&isProgressive=${target?.isProgressive ?? false}`
  );
}

/**
 * Builds a download-proxy URL.
 */
export function buildDownloadUrl(
  video: VideoInfo,
  format: VideoFormat,
  mode: 'video' | 'audio' | 'merged',
): string {
  const cleanTitle = (video.title || 'video').replace(/[^a-z0-9]/gi, '_').substring(0, 50);
  return (
    `${API_BASE}/api/download-proxy` +
    `?url=${encodeURIComponent(format.url || '')}` +
    `&filename=${encodeURIComponent(`${cleanTitle}_${mode}`)}` +
    `&formatId=${format.formatId || ''}` +
    `&originalUrl=${encodeURIComponent(video.originalUrl || '')}` +
    `&mode=${mode}` +
    `&needsMerge=${mode === 'merged'}`
  );
}
