/**
 * config/cors.js – CORS configuration
 */
const rawOrigins = process.env.ALLOWED_ORIGINS || 'http://localhost:5173,http://localhost:3000';
const allowedOrigins = rawOrigins.split(',').map(o => o.trim());

export const corsOptions = {
  origin: (origin, callback) => {
    // Allow all origins in production OR check against allowedOrigins
    if (process.env.NODE_ENV === 'production') {
      return callback(null, true); // Allow all in production to avoid fetch errors
    }
    // Allow requests with no origin (curl, Postman, server-to-server)
    if (!origin) return callback(null, true);
    if (allowedOrigins.includes(origin)) return callback(null, true);
    callback(new Error(`CORS: Origin "${origin}" not allowed`));
  },
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
};
