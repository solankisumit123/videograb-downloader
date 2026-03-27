import { Zap, ShieldCheck, Download, Globe2, Music, Video, Star, Sparkles, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { URLInput } from '../components/URLInput';
import { PlatformGrid } from '../components/PlatformGrid';
import { extractVideoInfo, VideoInfo } from '../services/videoExtractor';
import { VideoPreview } from '../components/VideoPreview';

export function Home() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [videoData, setVideoData] = useState<VideoInfo | null>(null);

  const handleDownload = async (url: string) => {
    setLoading(true);
    setError('');
    // Clear old data on new request to show fresh state
    setVideoData(null);

    try {
      const videoInfo = await extractVideoInfo(url);
      setVideoData(videoInfo);
      
      // Scroll to results automatically
      setTimeout(() => {
        const resultsEl = document.getElementById('results-section');
        if (resultsEl) {
          resultsEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
      
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Failed to process download. Please check the URL and try again.';
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  const currentYear = new Date().getFullYear();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <main className="min-h-screen bg-[#fcfdff] selection:bg-emerald-100 selection:text-emerald-800">
      {/* Dynamic Hero Section */}
      <section className="relative pt-16 pb-32 overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full -z-10 pointer-events-none">
          <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[40%] bg-emerald-200/40 rounded-full blur-[120px] animate-pulse-soft" />
          <div className="absolute bottom-[10%] right-[-5%] w-[35%] h-[35%] bg-green-100/40 rounded-full blur-[100px]" />
          <div className="absolute top-[20%] right-[10%] w-[20%] h-[20%] bg-teal-100/30 rounded-full blur-[80px] animate-float" />
        </div>

        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center text-center space-y-12"
          >
            {/* Badge */}
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white border border-emerald-50 shadow-sm shadow-emerald-100/50 hover:shadow-emerald-200/50 transition-all duration-300 group">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[11px] font-black text-emerald-600 uppercase tracking-[0.2em]">Next Generation Downloader</span>
              <Sparkles className="w-3.5 h-3.5 text-emerald-400 group-hover:rotate-12 transition-transform" />
            </motion.div>

            {/* Main Title */}
            <motion.div variants={itemVariants} className="space-y-6 max-w-4xl">
              <h1 className="text-6xl md:text-8xl font-black text-[#0f172a] tracking-tight leading-[0.95]">
                Download Any <br />
                <span className="premium-text-gradient bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 via-green-600 to-teal-500">Social Media</span> <br />
                Video Instantly
              </h1>
              <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto font-medium leading-relaxed">
                Unlock the power of ultra-fast downloads from TikTok, Instagram, YouTube and 45+ other platforms. Just paste your link and let our engine do the magic.
              </p>
            </motion.div>

            {/* URL Input Area */}
            <motion.div variants={itemVariants} className="w-full max-w-3xl pt-4">
              <URLInput onSubmit={handleDownload} loading={loading} error={error} />
              
              <div className="mt-8 flex flex-wrap justify-center gap-x-8 gap-y-4">
                 <div className="flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                    <ShieldCheck className="w-4 h-4 text-emerald-500" /> Secure Proxy
                 </div>
                 <div className="flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                    <Zap className="w-4 h-4 text-emerald-500" /> 4K Ready
                 </div>
                 <div className="flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                    <Star className="w-4 h-4 text-amber-500" /> High Performance
                 </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Marquee Bar */}
      <div className="py-8 bg-slate-900 overflow-hidden border-y border-slate-800 rotate-[-1deg] scale-[1.02] shadow-2xl relative z-10">
         <div className="flex animate-marquee whitespace-nowrap gap-12 items-center">
            {[...Array(10)].map((_, i) => (
              <div key={i} className="flex items-center gap-12 text-white/40 font-black text-sm uppercase tracking-[0.4em]">
                 <span>Fast Download</span>
                 <Zap className="w-4 h-4 text-emerald-500 fill-emerald-500" />
                 <span>High Quality</span>
                 <ShieldCheck className="w-4 h-4 text-emerald-500" />
                 <span>No Watermark</span>
                 <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
              </div>
            ))}
         </div>
      </div>

      <AnimatePresence>
        {videoData ? (
          <section id="results-section" className="py-24 bg-white relative">
            <div className="max-w-7xl mx-auto px-6 sm:px-8">
              <VideoPreview video={videoData} />
            </div>
          </section>
        ) : (
          <>
            {/* Features Staggered Section */}
            <section className="py-32 relative">
              <div className="max-w-7xl mx-auto px-6 sm:px-8">
                 <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    <motion.div 
                       initial={{ opacity: 0, y: 20 }}
                       whileInView={{ opacity: 1, y: 0 }}
                       viewport={{ once: true }}
                       className="glass-card p-10 space-y-6 group hover:translate-y-[-8px] transition-all duration-500 border-white/40"
                    >
                       <div className="w-14 h-14 bg-emerald-50 rounded-[20px] flex items-center justify-center text-emerald-600 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg shadow-emerald-100">
                          <Video className="w-7 h-7" />
                       </div>
                       <h3 className="text-2xl font-black text-slate-900 tracking-tight">4K Video Engine</h3>
                       <p className="text-slate-500 font-medium leading-relaxed">Extract videos in the highest available resolution up to 4K Ultra HD. Our engine automatically detects best quality streams.</p>
                       <div className="pt-4 flex items-center gap-2 text-emerald-600 font-black text-xs uppercase tracking-widest cursor-pointer group-hover:gap-4 transition-all">
                          Explore engine <Globe2 className="w-4 h-4" />
                       </div>
                    </motion.div>

                    <motion.div 
                       initial={{ opacity: 0, y: 20 }}
                       whileInView={{ opacity: 1, y: 0 }}
                       viewport={{ once: true }}
                       transition={{ delay: 0.1 }}
                       className="glass-card p-10 space-y-6 group hover:translate-y-[-8px] transition-all duration-500 border-white/40"
                    >
                       <div className="w-14 h-14 bg-emerald-50 rounded-[20px] flex items-center justify-center text-emerald-600 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg shadow-emerald-100">
                          <Music className="w-7 h-7" />
                       </div>
                       <h3 className="text-2xl font-black text-slate-900 tracking-tight">HQ Audio Isolation</h3>
                       <p className="text-slate-500 font-medium leading-relaxed">Need just the music? Our AI-powered extraction strips video and delivers crystal clear 320kbps MP3 audio files.</p>
                       <div className="pt-4 flex items-center gap-2 text-emerald-600 font-black text-xs uppercase tracking-widest cursor-pointer group-hover:gap-4 transition-all">
                          Audio tools <Star className="w-4 h-4" />
                       </div>
                    </motion.div>

                    <motion.div 
                       initial={{ opacity: 0, y: 20 }}
                       whileInView={{ opacity: 1, y: 0 }}
                       viewport={{ once: true }}
                       transition={{ delay: 0.2 }}
                       className="glass-card p-10 space-y-6 group hover:translate-y-[-8px] transition-all duration-500 border-white/40"
                    >
                       <div className="w-14 h-14 bg-slate-900 rounded-[20px] flex items-center justify-center text-white group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg shadow-slate-200">
                          <ShieldCheck className="w-7 h-7" />
                       </div>
                       <h3 className="text-2xl font-black text-slate-900 tracking-tight">Total Anonymity</h3>
                       <p className="text-slate-500 font-medium leading-relaxed">Privacy is our priority. We nunca log your downloads and all traffic is proxied through our secure, encrypted nodes.</p>
                       <div className="pt-4 flex items-center gap-2 text-slate-900 font-black text-xs uppercase tracking-widest cursor-pointer group-hover:gap-4 transition-all">
                          Privacy policy <ShieldCheck className="w-4 h-4" />
                       </div>
                    </motion.div>
                 </div>
              </div>
            </section>

            {/* Platform Grid Section */}
            <section className="py-24 bg-[#f8faff] border-y border-slate-100">
              <div className="max-w-7xl mx-auto px-6 sm:px-8 text-center space-y-16">
                 <div className="space-y-4">
                    <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">Worldwide Compatibility</h2>
                    <p className="text-lg text-slate-500 font-medium max-w-2xl mx-auto">One tool, infinite possibilities. We support almost every social platform on the internet.</p>
                 </div>
                 <PlatformGrid />
              </div>
            </section>

            {/* SEO Content Section */}
            <section className="py-24 bg-white">
              <div className="max-w-7xl mx-auto px-6 sm:px-8">
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <div className="space-y-8">
                       <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">Fastest Online <span className="premium-text-gradient">Video Downloader</span></h2>
                       <p className="text-slate-500 text-lg font-medium leading-relaxed">
                          VideoGrab is the most advanced tool to download videos from across the web. Whether it's <b>Instagram Reels</b>, <b>TikTok videos without watermark</b>, or <b>YouTube 4K videos</b>, our platform handles it all with zero delay.
                       </p>
                       <ul className="space-y-4">
                          {[
                            "High-quality MP4 & MP3 downloads",
                            "No registration or software installation required",
                            "Safe, secure, and completely anonymous",
                            "Support for 45+ social media platforms"
                          ].map((item, i) => (
                            <li key={i} className="flex items-center gap-3 text-slate-700 font-bold">
                               <div className="w-6 h-6 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600">
                                  <CheckCircle2 className="w-4 h-4" />
                               </div>
                               {item}
                            </li>
                          ))}
                       </ul>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                       {[
                         { title: "Instagram", desc: "Download Reels & Stories", icon: "📸" },
                         { title: "TikTok", desc: "No Watermark MP4", icon: "🎵" },
                         { title: "YouTube", desc: "4K Video & MP3", icon: "📺" },
                         { title: "Facebook", desc: "HD Video Downloader", icon: "👥" }
                       ].map((card, i) => (
                         <div key={i} className="p-8 bg-slate-50 rounded-[32px] border border-slate-100 hover:shadow-xl transition-all duration-500 group">
                            <div className="text-3xl mb-4 group-hover:scale-125 transition-transform">{card.icon}</div>
                            <h4 className="text-lg font-black text-slate-900 mb-1">{card.title}</h4>
                            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">{card.desc}</p>
                         </div>
                       ))}
                    </div>
                 </div>
              </div>
            </section>

            {/* Trust Banner */}
            <section className="py-32">
               <div className="max-w-4xl mx-auto px-6 text-center space-y-12">
                  <div className="p-16 bg-slate-900 rounded-[48px] shadow-3xl shadow-slate-900/40 relative overflow-hidden group">
                     {/* Decorative background for the CTA */}
                     <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-emerald-600/20 rounded-full blur-[100px] group-hover:bg-emerald-600/30 transition-all duration-700" />
                     <div className="absolute bottom-0 left-0 w-[200px] h-[200px] bg-emerald-600/10 rounded-full blur-[80px]" />
                     
                     <div className="relative z-10 space-y-8">
                        <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">Ready to experience <br/> the best downloader?</h2>
                        <p className="text-slate-400 text-lg font-medium max-w-xl mx-auto">Fast, free, and always updated. Join thousands of users who trust us for their daily media needs.</p>
                        <div className="pt-4">
                           <button 
                             onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                             className="px-10 py-5 bg-white text-slate-900 rounded-2xl font-black text-lg transition-all hover:scale-105 active:scale-95 shadow-xl shadow-white/10"
                           >
                             START DOWNLOADING NOW
                           </button>
                        </div>
                     </div>
                  </div>

                  <p className="text-slate-400 font-bold text-[10px] uppercase tracking-[0.5em]">
                    Copyright &copy; {currentYear} VideoGrab. All rights reserved.
                  </p>
               </div>
            </section>
          </>
        )}
      </AnimatePresence>
    </main>
  );
}
