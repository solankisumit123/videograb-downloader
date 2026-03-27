/**
 * middlewares/auth.js
 * Verifies a Supabase JWT sent as a Bearer token.
 * - Attaches req.user if valid.
 * - Allows guest (unauthenticated) requests through – downstream can check req.user.
 */
import { supabasePublic } from '../config/supabase.js';

/**
 * Optional auth – never blocks the request.
 * Sets req.user if a valid JWT is present, otherwise req.user = null.
 */
export async function optionalAuth(req, _res, next) {
  req.user = null;
  const authHeader = req.headers.authorization;
  if (!authHeader?.startsWith('Bearer ')) return next();

  const token = authHeader.slice(7);
  if (!supabasePublic) return next();

  try {
    const { data, error } = await supabasePublic.auth.getUser(token);
    if (!error && data?.user) req.user = data.user;
  } catch {
    // silently skip – treat as guest
  }
  next();
}

/**
 * Required auth – returns 401 for unauthenticated requests.
 */
export async function requireAuth(req, res, next) {
  await optionalAuth(req, res, () => {});
  if (!req.user) {
    return res.status(401).json({ success: false, error: 'Authentication required' });
  }
  next();
}
