/**
 * utils/cache.js
 * Unified cache helper that wraps Redis (if available) with an in-memory
 * Map fallback.  All methods are async so callers don't need to branch.
 */
import redis from '../config/redis.js';

// In-memory fallback
const memStore = new Map();
const MEM_TTL  = 10 * 60 * 1000; // 10 minutes

/**
 * Get a value from cache.  Returns parsed JSON or null on miss.
 * @param {string} key
 * @returns {Promise<any|null>}
 */
export async function cacheGet(key) {
  try {
    if (redis) {
      const raw = await redis.get(key);
      return raw ? JSON.parse(raw) : null;
    }
    const entry = memStore.get(key);
    if (!entry) return null;
    if (Date.now() > entry.expiresAt) {
      memStore.delete(key);
      return null;
    }
    return entry.value;
  } catch {
    return null;
  }
}

/**
 * Set a value in cache with a TTL (seconds).
 * @param {string} key
 * @param {any}    value  – will be JSON-stringified
 * @param {number} ttlSeconds
 */
export async function cacheSet(key, value, ttlSeconds = 600) {
  try {
    if (redis) {
      await redis.set(key, JSON.stringify(value), 'EX', ttlSeconds);
    } else {
      memStore.set(key, {
        value,
        expiresAt: Date.now() + ttlSeconds * 1000,
      });
      // Prevent unbounded growth
      if (memStore.size > 500) {
        const firstKey = memStore.keys().next().value;
        memStore.delete(firstKey);
      }
    }
  } catch {
    // caching is best-effort – never throw
  }
}

/**
 * Delete a key from cache.
 * @param {string} key
 */
export async function cacheDel(key) {
  try {
    if (redis) await redis.del(key);
    else memStore.delete(key);
  } catch { /* ignore */ }
}
