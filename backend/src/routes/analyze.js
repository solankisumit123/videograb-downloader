/**
 * routes/analyze.js
 * POST /api/analyze
 */
import { Router } from 'express';
import { validate, analyzeSchema } from '../middlewares/validate.js';
import { optionalAuth } from '../middlewares/auth.js';
import { guestLimiter } from '../middlewares/rateLimiter.js';
import { analyzeController } from '../controllers/analyze.controller.js';

const router = Router();

router.post('/',
  guestLimiter,       // tighter limit for heavy extraction
  optionalAuth,       // attach user if logged in
  validate(analyzeSchema),
  analyzeController,
);

export default router;
