/**
 * src/app.js – Express application factory
 * Registers middleware, routes, and error handler.
 */
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import { corsOptions } from './config/cors.js';
import { generalLimiter } from './middlewares/rateLimiter.js';
import { errorHandler } from './middlewares/errorHandler.js';
import { requestLogger } from './middlewares/requestLogger.js';
import analyzeRouter  from './routes/analyze.js';
import downloadRouter from './routes/download.js';
import historyRouter  from './routes/history.js';
import statusRouter   from './routes/status.js';
import proxyRouter    from './routes/proxy.js';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// ── Core Middleware ──────────────────────────────────────────────────────────
app.use(cors(corsOptions));
app.use(express.json({ limit: '10kb' }));
app.use(express.urlencoded({ extended: false }));
app.use(morgan(process.env.NODE_ENV === 'production' ? 'combined' : 'dev'));

// ── Static Files (SEO & Verification) ───────────────────────────────────────
app.use(express.static(path.join(__dirname, '../public')));

// ── Rate Limiting ────────────────────────────────────────────────────────────
app.use('/api', generalLimiter);

// ── Request Logging to DB ────────────────────────────────────────────────────
app.use('/api', requestLogger);

// ── Routes ───────────────────────────────────────────────────────────────────
app.use('/api/analyze',   analyzeRouter);
app.use('/api/download',  downloadRouter);
app.use('/api/history',   historyRouter);
app.use('/api/status',    statusRouter);
app.use('/api',           proxyRouter);   // /api/preview-proxy, /api/download-proxy

// ── 404 handler ───────────────────────────────────────────────────────────────
app.use((req, res) => {
  res.status(404).json({ success: false, error: 'Route not found' });
});

// ── Global Error Handler ─────────────────────────────────────────────────────
app.use(errorHandler);

export default app;
