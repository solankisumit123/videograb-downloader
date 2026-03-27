/**
 * controllers/analyze.controller.js
 * POST /api/analyze
 */
import { analyseUrl, recordDownload } from '../services/downloader.service.js';
import { ok, fail } from '../utils/response.js';

export async function analyzeController(req, res, next) {
  try {
    const { url } = req.body; // already validated + sanitised by Joi middleware
    const result  = await analyseUrl(url);

    // Persist (fire-and-forget) – don't await to keep response fast
    recordDownload({
      userId:    req.user?.id,
      url,
      platform:  result.platform,
      title:     result.title,
      thumbnail: result.thumbnail,
      format:    'analyze',
    });

    return ok(res, result);
  } catch (err) {
    next(err);
  }
}
