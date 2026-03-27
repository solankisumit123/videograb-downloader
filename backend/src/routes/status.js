/**
 * routes/status.js
 * GET /api/status – public health-check
 */
import { Router } from 'express';

const router  = Router();
const started = new Date().toISOString();

router.get('/', (_req, res) => {
  res.json({
    success:   true,
    status:    'ok',
    service:   'VideoGrab API',
    version:   '1.0.0',
    uptime:    process.uptime(),
    startedAt: started,
    timestamp: new Date().toISOString(),
  });
});

export default router;
