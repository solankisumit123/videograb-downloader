/**
 * controllers/history.controller.js
 * GET /api/history – Returns user download history (auth required).
 */
import { getUserHistory } from '../services/history.service.js';
import { ok, fail } from '../utils/response.js';

export async function historyController(req, res, next) {
  try {
    const limit  = Math.min(parseInt(req.query.limit  || '20'),  100);
    const offset = Math.max(parseInt(req.query.offset || '0'),     0);
    const { rows, total } = await getUserHistory(req.user.id, limit, offset);
    return ok(res, { data: rows, total, limit, offset });
  } catch (err) {
    next(err);
  }
}
