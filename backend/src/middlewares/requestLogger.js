/**
 * middlewares/requestLogger.js
 * Logs every API request to Supabase `api_logs` table.
 * Uses an after-response hook so it captures response time & status.
 */
import supabase from '../config/supabase.js';

export function requestLogger(req, res, next) {
  const start = Date.now();

  res.on('finish', async () => {
    const responseTime = Date.now() - start;
    const endpoint     = req.originalUrl.split('?')[0]; // strip query string

    if (!supabase) return;
    try {
      await supabase.from('api_logs').insert({
        endpoint,
        status:        res.statusCode,
        response_time: responseTime,
        created_at:    new Date().toISOString(),
      });
    } catch {
      // fire-and-forget – never crash the server
    }
  });

  next();
}
