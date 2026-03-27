/**
 * middlewares/errorHandler.js
 * Global Express error handler – must be the last middleware in app.js.
 */
export function errorHandler(err, req, res, _next) {
  // Supabase / network errors
  const statusCode = err.statusCode || err.status || 500;
  const message    = err.message    || 'Internal Server Error';

  // Don't expose stack traces in production
  const body = {
    success: false,
    error:   message,
    ...(process.env.NODE_ENV !== 'production' && { stack: err.stack }),
  };

  console.error(`[ERROR] ${req.method} ${req.originalUrl} → ${statusCode}: ${message}`);
  res.status(statusCode).json(body);
}
