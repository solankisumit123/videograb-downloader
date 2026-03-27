import { 
  Instagram, Youtube, Facebook, Linkedin, Video, Hash, 
  MessageCircle, LayoutGrid, Rss, Music, Send
} from 'lucide-react';
import { motion } from 'framer-motion';

const PLATFORMS = [
  { name: 'Instagram', icon: Instagram, color: 'from-pink-500 via-rose-500 to-amber-500' },
  { name: 'TikTok', icon: Music, color: 'from-slate-900 to-black' },
  { name: 'YouTube', icon: Youtube, color: 'from-red-600 to-red-700' },
  { name: 'Facebook', icon: Facebook, color: 'from-blue-600 to-blue-700' },
  { name: 'Twitter / X', icon: MessageCircle, color: 'from-sky-500 to-blue-600' },
  { name: 'LinkedIn', icon: Linkedin, color: 'from-blue-700 to-emerald-800' },
  { name: 'Reddit', icon: Rss, color: 'from-orange-500 to-rose-600' },
  { name: 'Pinterest', icon: LayoutGrid, color: 'from-rose-600 to-red-700' },
  { name: 'Snapchat', icon: Video, color: 'from-yellow-400 to-yellow-500' },
  { name: 'WhatsApp', icon: MessageCircle, color: 'from-emerald-500 to-green-600' },
  { name: 'Telegram', icon: Send, color: 'from-sky-400 to-blue-500' },
  { name: 'Threads', icon: Hash, color: 'from-slate-800 to-black' },
];

export function PlatformGrid() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
      {PLATFORMS.map((platform, i) => {
        const IconComponent = platform.icon;
        return (
          <motion.div
            key={platform.name}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            whileHover={{ y: -5, scale: 1.02 }}
            className="group relative cursor-pointer"
          >
            <div className="absolute inset-x-0 bottom-[-8px] h-[10px] bg-slate-900/5 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="p-8 bg-white border border-slate-100 rounded-3xl transition-all shadow-sm shadow-slate-200/50 group-hover:shadow-2xl group-hover:shadow-emerald-500/10 group-hover:border-emerald-100 flex flex-col items-center gap-4">
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${platform.color} flex items-center justify-center shadow-lg shadow-black/10 transform rotate-[-4deg] group-hover:rotate-0 transition-transform duration-500`}>
                <IconComponent className="w-8 h-8 text-white stroke-[2.5px]" />
              </div>
              <div className="text-center space-y-1">
                <p className="font-black text-slate-800 uppercase tracking-widest text-[11px]">{platform.name}</p>
                 <div className="h-0.5 w-4 bg-slate-100 mx-auto rounded-full group-hover:w-8 group-hover:bg-emerald-400 transition-all duration-500" />
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
