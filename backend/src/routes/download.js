/**
 * routes/download.js
 * POST /api/download – streams video/audio file to client
 */
import { Router } from 'express';
import { validate, downloadSchema } from '../middlewares/validate.js';
import { optionalAuth } from '../middlewares/auth.js';
import { guestLimiter } from '../middlewares/rateLimiter.js';
import { downloadController } from '../controllers/download.controller.js';

const router = Router();

router.post('/',
  guestLimiter,
  optionalAuth,
  validate(downloadSchema),
  downloadController,
);

export default router;
