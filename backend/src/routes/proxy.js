/**
 * routes/proxy.js
 * GET /api/preview-proxy   – browser preview proxy  
 * GET /api/download-proxy  – direct-download proxy
 *
 * These routes are kept for 100% backward-compatibility with the existing
 * VideoPreview.tsx component that still calls localhost:3001/api/*-proxy.
 */
import { Router } from 'express';
import { previewProxy, downloadProxy, thumbnailProxy } from '../controllers/proxy.controller.js';

const router = Router();

router.get('/preview-proxy',   previewProxy);
router.get('/download-proxy',  downloadProxy);
router.get('/thumbnail-proxy', thumbnailProxy);

export default router;
