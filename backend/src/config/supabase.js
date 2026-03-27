/**
 * config/supabase.js – Supabase client (service-role for backend)
 */
import { createClient } from '@supabase/supabase-js';

const supabaseUrl     = process.env.SUPABASE_URL;
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY;
const supabaseSrvKey  = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn('⚠️  Supabase env vars missing – DB features disabled');
}

// Public client – used for verifying user JWTs
export const supabasePublic = (supabaseUrl && supabaseAnonKey)
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;

// Admin / service-role client – bypasses RLS
export const supabaseAdmin = (supabaseUrl && supabaseSrvKey)
  ? createClient(supabaseUrl, supabaseSrvKey, {
      auth: { autoRefreshToken: false, persistSession: false }
    })
  : supabasePublic; // fallback to public if no service-role key

export default supabaseAdmin;
