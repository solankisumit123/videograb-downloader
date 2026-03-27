# VideoGrab PRO 🚀
   
The ultimate, production-ready Social Media Video Downloader Web Application. Capture high-quality (up to 4K) videos from your favorite platforms with zero watermarks.

## ✨ Features
- **4K Quality Support**: Detects and extracts all available resolutions (144p to 4K).
- **Audio Extraction**: Isolates high-quality MP3 (320kbps) from any video source.
- **No Watermarks**: Powerful extraction engine that bypasses TikTok and Instagram watermarks.
- **Instant Preview**: Live streaming preview without downloading the whole file first.
- **Bypass Restrictions**: Uses server-side proxies and `yt-dlp` with rotating user-agents.
- **Mobile Responsive**: Fully optimized for iOS and Android browsers.

## 🛠️ Technology Stack
- **Frontend**: React (Vite) + Tailwind CSS + Framer Motion
- **Backend**: Node.js (Express)
- **Engine**: `yt-dlp` + FFmpeg
- **Database**: Supabase (PostgreSQL) for history tracking.
- **Rate Limiting**: Integrated `express-rate-limit` to prevent abuse.

## 🚀 Getting Started

### 1. Prerequisites
- [Node.js](https://nodejs.org/) (v20 or higher)
- [yt-dlp](https://github.com/yt-dlp/yt-dlp) (must be in your PATH)
- [FFmpeg](https://ffmpeg.org/) (must be in your PATH)

### 2. Installations
```bash
# Install frontend & root dependencies
npm install

# Install backend dependencies
cd backend && npm install
```

### 3. Environment Setup
Create a `.env` file in the `backend` folder based on `.env.example`:
```env
PORT=3001
SUPABASE_URL=your-url
SUPABASE_ANON_KEY=your-key
# COOKIE_PATH=C:/path/to/cookies.txt (optional for better IG/TikTok support)
```

### 4. Run Locally
```bash
# Start both Backend and Frontend from the root directory
npm start
```

## 🎥 Supported Platforms (and growing!)
- Instagram (Reels, Stories, Posts)
- TikTok (No Watermark)
- YouTube (MP4 & MP3)
- Facebook
- Twitter/X
- LinkedIn
- Reddit
- Pinterest
- ... and 40+ more!

## 🔐 Security & Reliability
This platform is built for heavy production use:
- **Rate Limiting**: Protects your API from bot starvation.
- **Validation**: Strict Joi schema validation for all inputs.
- **Proxy Stream**: Streams data through the server to bypass CDN cross-origin issues and CORS.
- **Error Recovery**: Automatic expansion of short-links and fallback extraction strategies.

---
Built with ❤️ by Antigravity AI
