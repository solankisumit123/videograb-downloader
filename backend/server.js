/**
 * server.js – Entry point
 * Loads env, mounts app, starts HTTP server.
 */
import 'dotenv/config';
import { createServer } from 'http';
import app from './src/app.js';

const PORT = process.env.PORT || 3001;

const server = createServer(app);

const BIND = '0.0.0.0';

server.listen(PORT, BIND, () => {
  console.log(`\n🚀 VideoGrab API running on http://localhost:${PORT}`);
  console.log(`📦 Environment : ${process.env.NODE_ENV || 'development'}`);
  console.log(`📡 Health check: http://localhost:${PORT}/api/status\n`);
});

// Graceful shutdown
const shutdown = (signal) => {
  console.log(`\n${signal} received – shutting down gracefully…`);
  server.close(() => {
    console.log('HTTP server closed.');
    process.exit(0);
  });
};

process.on('SIGTERM', () => shutdown('SIGTERM'));
process.on('SIGINT',  () => shutdown('SIGINT'));
