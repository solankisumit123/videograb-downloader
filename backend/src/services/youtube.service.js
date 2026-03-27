/**
 * services/youtube.service.js
 * YouTube-specific utilities using @distube/ytdl-core as an alternative
 * to yt-dlp for progressive streams (faster for simple cases).
 */
import ytdl from '@distube/ytdl-core';

/**
 * Returns true if this URL is a YouTube link.
 * @param {string} url
 */
export function isYouTubeUrl(url) {
  return /youtube\.com|youtu\.be/.test(url);
}

/**
 * Fetches YouTube metadata via ytdl-core.
 * Used as a faster alternative to yt-dlp for YouTube URLs.
 * @param {string} url
 * @returns {Promise<object>} VideoInfo
 */
export async function getYouTubeInfo(url) {
  try {
    const info = await ytdl.getInfo(url);
    const vd   = info.videoDetails;

  const videoFormats = ytdl.filterFormats(info.formats, 'videoandaudio')
    .map(f => ({
      formatId:     f.itag.toString(),
      quality:      f.qualityLabel || f.quality,
      resolution:   f.width && f.height ? `${f.width}x${f.height}` : 'N/A',
      ext:          f.container || 'mp4',
      fps:          f.fps || 30,
      filesize:     parseInt(f.contentLength || '0'),
      url:          f.url,
      hasAudio:     true,
      isProgressive: true,
      needsMerge:   false,
    }))
    .sort((a, b) => (parseInt(b.quality) || 0) - (parseInt(a.quality) || 0));

  const audioFormats = ytdl.filterFormats(info.formats, 'audioonly')
    .map(f => ({
      formatId: f.itag.toString(),
      quality:  f.audioBitrate ? `${f.audioBitrate}kbps` : 'HQ',
      ext:      f.container || 'm4a',
      filesize: parseInt(f.contentLength || '0'),
      url:      f.url,
      abr:      f.audioBitrate || 0,
    }))
    .sort((a, b) => b.abr - a.abr);

    return {
      platform:    'youtube',
      title:       vd.title,
      thumbnail:   vd.thumbnails?.[vd.thumbnails.length - 1]?.url || '',
      duration:    parseInt(vd.lengthSeconds || '0'),
      author:      vd.author?.name || 'YouTube',
      originalUrl: url,
      categories: {
        videoFormats,
        audioFormats,
        bestVideo: videoFormats[0] || null,
        bestAudio: audioFormats[0] || null,
      },
      quality:     videoFormats[0]?.quality || 'N/A',
      downloadUrl: videoFormats[0]?.url     || '',
      formats:     [],
    };
  } catch (err) {
    console.warn(`[YouTube Service] ytdl-core failed for ${url}:`, err.message);
    return null;
  }
}

/**
 * Returns a readable stream for a YouTube video format.
 * @param {string} url
 * @param {string} itag
 */
export function streamYouTube(url, itag) {
  return ytdl(url, { filter: f => f.itag.toString() === itag });
}
