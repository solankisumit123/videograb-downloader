/**
 * services/history.service.js
 * CRUD operations on the Supabase `downloads` table.
 */
import supabase from '../config/supabase.js';

const TABLE = 'downloads';

/**
 * Fetch download history for a user.
 * @param {string} userId
 * @param {number} limit
 * @param {number} offset
 */
export async function getUserHistory(userId, limit = 20, offset = 0) {
  if (!supabase) throw new Error('Database not configured');
  const { data, error, count } = await supabase
    .from(TABLE)
    .select('*', { count: 'exact' })
    .eq('user_id', userId)
    .order('created_at', { ascending: false })
    .range(offset, offset + limit - 1);

  if (error) throw error;
  return { rows: data, total: count };
}

/**
 * Fetch all recent downloads (admin / public endpoint).
 * @param {number} limit
 */
export async function getRecentDownloads(limit = 50) {
  if (!supabase) throw new Error('Database not configured');
  const { data, error } = await supabase
    .from(TABLE)
    .select('id, platform, title, thumbnail, format, created_at')
    .order('created_at', { ascending: false })
    .limit(limit);

  if (error) throw error;
  return data;
}
