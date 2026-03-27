import { HelpCircle, ChevronRight, Zap, Shield, Globe, Clock, Download, HardDrive } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FAQS = [
  {
    icon: <Globe className="w-5 h-5 text-indigo-600" />,
    question: "Which platforms are supported?",
    answer: "VideoGrab supports most major social media platforms including YouTube, Instagram (Reels, Stories, Posts), TikTok (No Watermark), Facebook, X (Twitter), Reddit, and many more. If a link has a video, we can likely extract it."
  },
  {
    icon: <Zap className="w-5 h-5 text-emerald-600" />,
    question: "Is VideoGrab free to use?",
    answer: "Yes! VideoGrab is 100% free and has no hidden subscriptions or 'premium' tiers. We believe in keeping the web open and accessible for everyone."
  },
  {
    icon: <Shield className="w-5 h-5 text-amber-600" />,
    question: "Is it safe to download videos here?",
    answer: "Absolutely. We do not host any files on our servers. All downloads are piped through a secure SSL connection directly from the source platform to your device. We don't require any personal information or software installations."
  },
  {
    icon: <Clock className="w-5 h-5 text-purple-600" />,
    question: "Why does the download sometimes fail?",
    answer: "Occasionally, platforms update their security or the source video is private. If a download fails, please ensure the video is public and try refreshing the page. Our engine is updated daily to maintain compatibility."
  },
  {
    icon: <HardDrive className="w-5 h-5 text-rose-600" />,
    question: "Where are my videos saved?",
    answer: "Videos are saved to your device's default 'Downloads' folder. For mobile users, you may need to save the video to your 'Photos' or 'Files' app after the download initiates."
  },
  {
    icon: <Download className="w-5 h-5 text-blue-600" />,
    question: "Can I download 4K or 1080p videos?",
    answer: "Yes, we attempt to fetch the highest available quality for every video. If the source platform provides 4K or 1080p, VideoGrab will present those options in the download manager."
  }
];

export function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <main className="min-h-screen bg-[#fcfdff] py-20 px-6">
      <div className="max-w-4xl mx-auto space-y-16">
        {/* Header */}
        <div className="text-center space-y-4">
           <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-50 text-indigo-600 rounded-full text-xs font-black tracking-widest uppercase">
              <HelpCircle className="w-4 h-4" /> KNOWLEDGE BASE
           </div>
           <h1 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tight leading-tight">Frequently Asked <span className="text-indigo-600 underline decoration-indigo-200">Questions</span></h1>
           <p className="text-slate-500 text-xl font-medium max-w-2xl mx-auto">
             Everything you need to know about using VideoGrab to save your favorite media.
           </p>
        </div>

        {/* FAQ Grid */}
        <div className="space-y-4">
           {FAQS.map((faq, index) => (
             <div 
               key={index}
               className={`group bg-white rounded-[32px] border transition-all duration-300 ${activeIndex === index ? 'border-indigo-200 shadow-2xl shadow-indigo-500/5' : 'border-slate-100 hover:border-slate-200'}`}
             >
                <button 
                  onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                  className="w-full p-8 flex items-center justify-between text-left"
                >
                   <div className="flex items-center gap-6">
                      <div className={`p-3 rounded-2xl transition-colors ${activeIndex === index ? 'bg-indigo-50' : 'bg-slate-50'}`}>
                         {faq.icon}
                      </div>
                      <span className="text-xl font-black text-slate-900 tracking-tight leading-none group-hover:text-indigo-600 transition-colors">
                         {faq.question}
                      </span>
                   </div>
                   <div className={`transition-transform duration-300 ${activeIndex === index ? 'rotate-90' : ''}`}>
                      <ChevronRight className="w-6 h-6 text-slate-300" />
                   </div>
                </button>
                
                <AnimatePresence>
                   {activeIndex === index && (
                     <motion.div 
                       initial={{ height: 0, opacity: 0 }}
                       animate={{ height: 'auto', opacity: 1 }}
                       exit={{ height: 0, opacity: 0 }}
                       className="overflow-hidden"
                     >
                        <div className="px-8 pb-8 pt-0 ml-[76px] text-slate-500 text-lg font-medium leading-relaxed max-w-2xl">
                           {faq.answer}
                        </div>
                     </motion.div>
                   )}
                </AnimatePresence>
             </div>
           ))}
        </div>

        {/* CTA */}
        <div className="bg-slate-900 rounded-[48px] p-12 md:p-16 text-center space-y-8 relative overflow-hidden">
           <div className="absolute top-0 left-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-[80px]" />
           <h2 className="text-3xl md:text-4xl font-black text-white">Still have questions?</h2>
           <p className="text-slate-400 text-lg font-medium max-w-xl mx-auto">
             If you couldn't find the answer you were looking for, feel free to contact our support team.
           </p>
           <div className="pt-4">
              <a 
                href="mailto:vidssaveteam@gmail.com" 
                className="inline-block px-12 py-5 bg-indigo-600 text-white rounded-3xl font-black text-lg transition-all hover:bg-indigo-700 hover:scale-105 shadow-xl shadow-indigo-600/20"
              >
                CONTACT SUPPORT
              </a>
           </div>
        </div>
      </div>
    </main>
  );
}
