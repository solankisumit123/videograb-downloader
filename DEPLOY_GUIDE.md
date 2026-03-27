# Deployment Guide for VideoGrab Downloader

Follow these steps to make your website live (Production).

## 1. Backend Deployment (Node.js + yt-dlp + FFmpeg)

The backend needs a server where `yt-dlp` and `ffmpeg` can be installed.
We have already created a **Dockerfile** for you in the `backend/` folder.

**Steps for Railway.app (Recommended):**
1. Create a [Railway](https://railway.app/) account.
2. Create a new project and select **"Deploy from GitHub"**.
3. Point it to your `backend/` directory.
4. Railway will automatically detect the **Dockerfile** and install Node.js, `yt-dlp`, and `ffmpeg`.
5. **Environment Variables** (Set these in Railway Settings):
   - `PORT`: 3001
   - `NODE_ENV`: production
   - `CORS_ORIGIN`: Your Frontend URL (e.g., `https://videograb-web.vercel.app`)
   - `SUPABASE_URL`: (Your Supabase project URL)
   - `SUPABASE_KEY`: (Your Supabase anon key)

---

## 2. Frontend Deployment (Vite + React)

The frontend can be hosted for free on **Vercel** or **Netlify**.

**Steps for Vercel:**
1. Create a [Vercel](https://vercel.com/) account.
2. Link your GitHub repository.
3. Set the **Root Directory** as the root of your project.
4. **Environment Variables** (Set these in Vercel):
   - `VITE_API_URL`: Your live Backend URL from Railway (e.g., `https://videograb-backend.up.railway.app`)
5. **Build Command**: `npm run build`
6. **Output Directory**: `dist`

---

## 3. Chunks & Static Assets
The `chunks` folder is already placed in the `public/` directory. When you run `npm run build`, these will automatically be included in your production site.

---

## Summary of URLs to Connect:
- Your **Frontend** calls your **Backend URL** (defined in `VITE_API_URL`).
- Your **Backend** allows requests only from your **Frontend URL** (defined in `CORS_ORIGIN`).

If you have any questions during deployment, feel free to ask!
