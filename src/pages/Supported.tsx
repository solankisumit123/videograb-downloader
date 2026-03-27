import { CheckCircle2, Globe, Shield, Zap, Sparkles, Smartphone, Monitor, Tablet } from 'lucide-react';

const SUPPORTED_PLATFORMS = [
  {
    name: 'Instagram',
    description: 'Download reels, posts, stories, and carousel videos from Instagram.',
    features: ['HD Reels', 'Stories', 'Carousels', 'Fast Proxy'],
    color: 'bg-gradient-to-br from-purple-500 to-pink-500',
    icon: '📸'
  },
  {
    name: 'TikTok',
    description: 'Save TikTok videos without watermarks in crystal clear quality.',
    features: ['No Watermark', 'High Bitrate', 'Audio Only'],
    color: 'bg-gradient-to-br from-slate-900 to-slate-700',
    icon: '🎵'
  },
  {
    name: 'YouTube',
    description: 'Extract content from YouTube in up to 4K resolution.',
    features: ['4K Support', 'MP3 Audio', 'Subtitles'],
    color: 'bg-gradient-to-br from-red-600 to-red-500',
    icon: '🎬'
  },
  {
    name: 'Facebook',
    description: 'Download private and public videos from Facebook Reels.',
    features: ['Reels', 'Live Streams', 'Private Vids'],
    color: 'bg-gradient-to-br from-blue-600 to-indigo-500',
    icon: '👥'
  },
  {
    name: 'X (Twitter)',
    description: 'Save media content and GIFs from X posts instantly.',
    features: ['GIFs', 'HD Video', 'Thread Media'],
    color: 'bg-gradient-to-br from-slate-950 to-slate-800',
    icon: '𝕏'
  },
  {
    name: 'Reddit',
    description: 'Download videos with high-quality audio from Reddit threads.',
    features: ['Audio Sync', 'GIFs', 'Galleries'],
    color: 'bg-gradient-to-br from-orange-600 to-red-500',
    icon: '🤖'
  }
];

export function Supported() {
  return (
    <main className="min-h-screen bg-[#fcfdff]">
      {/* Header */}
      <div className="bg-slate-900 py-24 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[120px]" />
        <div className="max-w-7xl mx-auto relative z-10 text-center space-y-6">
           <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-500/10 rounded-full border border-indigo-500/20 text-indigo-400 text-xs font-black tracking-widest uppercase">
              <Globe className="w-3 h-3" /> UNIVERSAL COMPATIBILITY
           </div>
           <h1 className="text-5xl md:text-7xl font-black text-white tracking-tight leading-tight">Supported <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Platforms</span></h1>
           <p className="text-slate-400 text-xl max-w-2xl mx-auto font-medium">
             VideoGrab uses a unified extraction engine that supports over 40+ social media and video hosting platforms.
           </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
           {SUPPORTED_PLATFORMS.map((platform) => (
             <div key={platform.name} className="group relative bg-white p-8 rounded-[40px] border border-slate-100 hover:border-indigo-100 transition-all hover:shadow-2xl hover:shadow-indigo-500/5 overflow-hidden">
                <div className={`w-16 h-16 rounded-[24px] ${platform.color} flex items-center justify-center text-3xl mb-8 shadow-xl shadow-slate-200 group-hover:scale-110 transition-transform`}>
                   {platform.icon}
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-4">{platform.name}</h3>
                <p className="text-slate-500 font-medium mb-8 leading-relaxed">
                   {platform.description}
                </p>
                <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-50">
                   {platform.features.map(f => (
                     <span key={f} className="flex items-center gap-1.5 px-3 py-1 bg-slate-50 text-slate-600 text-[10px] font-black uppercase tracking-widest rounded-lg">
                        <CheckCircle2 className="w-3 h-3 text-emerald-500" /> {f}
                     </span>
                   ))}
                </div>
             </div>
           ))}
        </div>

        {/* Compatibility Matrix */}
        <div className="mt-32 space-y-16">
           <div className="text-center space-y-4">
              <h2 className="text-4xl font-black text-slate-900 tracking-tight">Devices \u0026 OS</h2>
              <p className="text-slate-500 font-medium">VideoGrab is accessible from any device with a modern web browser.</p>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-10 bg-white rounded-[48px] border border-slate-100 text-center space-y-6">
                 <div className="w-20 h-20 bg-indigo-50 text-indigo-600 rounded-3xl mx-auto flex items-center justify-center">
                    <Smartphone className="w-10 h-10" />
                 </div>
                 <h4 className="text-xl font-black text-slate-900">Mobile Support</h4>
                 <p className="text-slate-500 font-medium italic">iOS (Safari), Android (Chrome, Firefox, Brave)</p>
              </div>
              <div className="p-10 bg-white rounded-[48px] border border-slate-100 text-center space-y-6">
                 <div className="w-20 h-20 bg-emerald-50 text-emerald-600 rounded-3xl mx-auto flex items-center justify-center">
                    <Monitor className="w-10 h-10" />
                 </div>
                 <h4 className="text-xl font-black text-slate-900">Desktop Support</h4>
                 <p className="text-slate-500 font-medium italic">Windows, macOS, Linux (Chrome, Edge, Firefox, Safari)</p>
              </div>
              <div className="p-10 bg-white rounded-[48px] border border-slate-100 text-center space-y-6">
                 <div className="w-20 h-20 bg-amber-50 text-amber-600 rounded-3xl mx-auto flex items-center justify-center">
                    <Tablet className="w-10 h-10" />
                 </div>
                 <h4 className="text-xl font-black text-slate-900">Tablet Support</h4>
                 <p className="text-slate-500 font-medium italic">iPadOS, Android Tablets</p>
              </div>
           </div>
        </div>

        {/* Feature Highlights */}
        <div className="mt-32 bg-indigo-600 rounded-[64px] p-12 md:p-20 relative overflow-hidden">
           <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-[80px]" />
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:items-center relative z-10">
              <div className="space-y-8">
                 <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">Advanced Extraction Engine</h2>
                 <p className="text-indigo-100 text-lg font-medium">
                    We utilize a hybrid extraction technology that combines platform-specific API wrappers with universal scrapers to ensure 99.9% uptime and reliability.
                 </p>
                 <div className="space-y-4">
                    {[
                      { icon: <Shield />, text: 'SSL Encrypted Transfers' },
                      { icon: <Zap />, text: 'Multi-threaded Downloads' },
                      { icon: <Sparkles />, text: 'Automatic Resolution Selection' }
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-4 text-white font-bold">
                         <div className="p-2 bg-white/10 rounded-lg">{item.icon}</div>
                         {item.text}
                      </div>
                    ))}
                 </div>
              </div>
              <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-10 rounded-[48px] space-y-8 text-center">
                 <h3 className="text-2xl font-black text-white">Need a New Platform?</h3>
                 <p className="text-indigo-100 font-medium">
                   We are constantly adding support for new video hosts. If you have a specific request, our developers are ready to help.
                 </p>
                 <a href="mailto:vidssaveteam@gmail.com" className="inline-block px-10 py-5 bg-white text-indigo-600 rounded-3xl font-black text-lg transition-all hover:scale-105 shadow-2xl">
                    REQUEST PLATFORM
                 </a>
              </div>
           </div>
        </div>
      </div>
    </main>
  );
}
