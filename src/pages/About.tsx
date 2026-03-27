import { Heart, Shield, Zap, Globe, Users, ShieldCheck } from 'lucide-react';

export function About() {
  return (
    <main className="min-h-screen bg-[#fcfdff]">
      {/* Hero Section */}
      <div className="bg-slate-900 py-24 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-indigo-600/20 rounded-full blur-[120px]" />
        <div className="max-w-7xl mx-auto relative z-10 text-center space-y-6">
           <h1 className="text-5xl md:text-7xl font-black text-white tracking-tight">About VideoGrab</h1>
           <p className="text-slate-400 text-xl max-w-2xl mx-auto font-medium">
             The most reliable, fast, and free online video downloader for everyone.
           </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-32">
           <div className="space-y-6">
              <h2 className="text-4xl font-black text-slate-900 tracking-tight">VidsSave: Your Videos, Your Way.</h2>
              <div className="text-lg text-slate-600 space-y-4 font-medium leading-relaxed">
                 <p>
                   VideoGrab (powered by Bluepulse Limited) is a fast, free, and reliable online video downloader designed to help users save their favorite content from the internet with ease.
                 </p>
                 <p>
                   With just a few clicks, you can easily download content from popular platforms such as YouTube, TikTok, Instagram, Facebook, and X.
                 </p>
                 <p>
                   We’re here to make video and music saving easy, secure, and accessible for everyone. That’s why we’ve built a platform that works across all devices and browsers.
                 </p>
              </div>
           </div>
           <div className="glass-card p-10 bg-indigo-50 border-indigo-100">
              <div className="space-y-8">
                 <div className="flex gap-4">
                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-md text-indigo-600">
                       <Zap className="w-6 h-6" />
                    </div>
                    <div>
                       <h3 className="font-bold text-slate-900 text-lg">Instant Processing</h3>
                       <p className="text-slate-500">Links are analyzed in milliseconds.</p>
                    </div>
                 </div>
                 <div className="flex gap-4">
                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-md text-emerald-600">
                       <ShieldCheck className="w-6 h-6" />
                    </div>
                    <div>
                       <h3 className="font-bold text-slate-900 text-lg">Pure Security</h3>
                       <p className="text-slate-500">No malware, no ads, no tracking.</p>
                    </div>
                 </div>
                 <div className="flex gap-4">
                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-md text-amber-600">
                       <Globe className="w-6 h-6" />
                    </div>
                    <div>
                       <h3 className="font-bold text-slate-900 text-lg">Universal Access</h3>
                       <p className="text-slate-500">Works on mobile, tablet, and PC.</p>
                    </div>
                 </div>
              </div>
           </div>
        </div>

        <div className="space-y-24">
          <section className="space-y-8">
            <h2 className="text-3xl font-black text-slate-900 flex items-center gap-3">
               <Users className="text-indigo-600" /> Our Commitment
            </h2>
            <div className="bg-white p-10 rounded-[32px] border border-slate-100 shadow-xl shadow-slate-100/50 text-slate-600 leading-relaxed space-y-4 font-medium italic">
               "We are committed to maintaining a secure, ad-light platform that respects privacy. VideoGrab is continuously updated to support the latest features from your favorite social media sites and to ensure compatibility across all modern devices and browsers."
            </div>
          </section>

          <section className="space-y-12">
            <h2 className="text-3xl font-black text-slate-900 text-center">Core Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-8 bg-white rounded-[32px] border border-slate-100 hover:border-indigo-200 transition-all group">
                <Zap className="w-10 h-10 text-indigo-600 mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold text-slate-900 mb-4 tracking-tight">Performance First</h3>
                <p className="text-slate-500 font-medium">We optimize our backend engines daily to ensure your downloads start in seconds, not minutes.</p>
              </div>
              <div className="p-8 bg-white rounded-[32px] border border-slate-100 hover:border-emerald-200 transition-all group">
                <Shield className="w-10 h-10 text-emerald-600 mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold text-slate-900 mb-4 tracking-tight">Privacy Always</h3>
                <p className="text-slate-500 font-medium">We never log your download history or store personal data. Your usage remains 100% anonymous.</p>
              </div>
              <div className="p-8 bg-white rounded-[32px] border border-slate-100 hover:border-amber-200 transition-all group">
                <Heart className="w-10 h-10 text-amber-600 mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold text-slate-900 mb-4 tracking-tight">For the Community</h3>
                <p className="text-slate-500 font-medium">We built this tool for creators, librarians, and media enthusiasts who need a clean tool that just works.</p>
              </div>
            </div>
          </section>

          <section className="bg-slate-900 rounded-[48px] p-12 md:p-16 text-center space-y-8 relative overflow-hidden">
             <div className="absolute bottom-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-[80px]" />
             <h2 className="text-3xl md:text-5xl font-black text-white leading-tight">Need Support?</h2>
             <p className="text-slate-400 text-lg max-w-xl mx-auto font-medium">
                Our team is available to help with any technical issues or feature requests. Reach out to us directly.
             </p>
             <div className="pt-4">
                <a 
                  href="mailto:vidssaveteam@gmail.com" 
                  className="inline-flex items-center gap-2 px-10 py-5 bg-white text-slate-900 rounded-2xl font-black text-lg transition-all hover:scale-105 shadow-xl"
                >
                  <Mail className="w-5 h-5" /> CONTACT US
                </a>
             </div>
          </section>
        </div>
      </div>
    </main>
  );
}

function Mail({ className }: { className?: string }) {
  return (
    <svg 
      className={className}
      xmlns="http://www.w3.org/2000/svg" 
      width="24" height="24" 
      viewBox="0 0 24 24" fill="none" 
      stroke="currentColor" strokeWidth="2" 
      strokeLinecap="round" strokeLinejoin="round"
    >
      <rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
    </svg>
  );
}
