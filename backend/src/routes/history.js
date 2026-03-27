/**
 * routes/history.js
 * GET /api/history – auth required
 * Returns paginated download history for the logged-in user.
 */
import { Router } from 'express';
import { requireAuth } from '../middlewares/auth.js';
import { historyController } from '../controllers/history.controller.js';

const router = Router();

router.get('/', requireAuth, historyController);

export default router;
