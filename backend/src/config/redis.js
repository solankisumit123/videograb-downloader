/**
 * config/redis.js – Redis client (ioredis)
 * Returns a connected client or null if REDIS_URL is not set.
 */
import Redis from 'ioredis';

let redis = null;

if (process.env.REDIS_URL) {
  try {
    redis = new Redis(process.env.REDIS_URL, {
      maxRetriesPerRequest: 2,
      lazyConnect: true,
      enableOfflineQueue: false,
    });

    redis.on('connect',  () => console.log('✅ Redis connected'));
    redis.on('error',    (err) => {
      console.warn('⚠️  Redis error (caching disabled):', err.message);
      redis = null; // disable caching on error
    });

    await redis.connect().catch(() => { redis = null; });
  } catch {
    console.warn('⚠️  Redis unavailable – caching disabled');
    redis = null;
  }
} else {
  console.log('ℹ️  REDIS_URL not set – in-memory cache only');
}

export default redis;
