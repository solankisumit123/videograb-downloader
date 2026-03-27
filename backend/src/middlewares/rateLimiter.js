/**
 * middlewares/rateLimiter.js
 * Configures express-rate-limit instances for general API and guest users.
 */
import rateLimit from 'express-rate-limit';

const windowMs  = parseInt(process.env.RATE_LIMIT_WINDOW_MS  || '900000');  // 15 min
const maxAuth   = parseInt(process.env.RATE_LIMIT_MAX        || '100');
const maxGuest  = parseInt(process.env.GUEST_RATE_LIMIT_MAX  || '20');

const baseConfig = {
  windowMs,
  standardHeaders: true,
  legacyHeaders:   false,
  handler: (_req, res) => res.status(429).json({
    success: false,
    error:   'Too many requests – please slow down.',
    retryAfter: Math.ceil(windowMs / 1000),
  }),
};

/** Applied to all /api/* routes */
export const generalLimiter = rateLimit({ ...baseConfig, max: maxAuth });

/** Extra strict for unauthenticated callers on heavy endpoints */
export const guestLimiter = rateLimit({ ...baseConfig, max: maxGuest });
