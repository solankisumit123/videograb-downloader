import { AlertCircle, RefreshCw, Clipboard, Wand2, Search } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { detectPlatform } from '../services/videoExtractor';

interface URLInputProps {
  onSubmit: (url: string) => void;
  loading?: boolean;
  error?: string;
}

export function URLInput({ onSubmit, loading = false, error }: URLInputProps) {
  const [url, setUrl] = useState('');
  const [platform, setPlatform] = useState<string | null>(null);
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    setPlatform(detectPlatform(url));
  }, [url]);

  const handlePaste = async () => {
    try {
      const text = await navigator.clipboard.readText();
      setUrl(text);
    } catch (err) {
      console.error('Failed to paste:', err);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (url.trim()) {
      onSubmit(url);
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto">
      <form onSubmit={handleSubmit} className="relative group">
        <motion.div 
          animate={{ 
            scale: isFocused ? 1.02 : 1,
            boxShadow: isFocused ? '0 20px 50px rgba(79, 70, 229, 0.15)' : '0 10px 30px rgba(0, 0, 0, 0.05)'
          }}
          className={`relative p-2 rounded-[32px] bg-white border-2 transition-all duration-500 flex items-center gap-2 ${isFocused ? 'border-emerald-500' : 'border-slate-100 group-hover:border-slate-200'}`}
        >
          <div className="pl-6 text-slate-400 group-hover:text-emerald-500 transition-colors">
            <Search className="w-6 h-6" />
          </div>
          
          <input
            type="text"
            placeholder="Paste any link to download..."
            value={url}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            onChange={(e) => setUrl(e.target.value)}
            disabled={loading}
            className="flex-1 bg-transparent border-none focus:ring-0 text-lg font-bold text-slate-800 placeholder:text-slate-300 placeholder:font-medium py-4 px-2 disabled:opacity-50"
          />

          <div className="flex items-center gap-2 pr-2">
            {!url && (
              <button
                type="button"
                onClick={handlePaste}
                disabled={loading}
                className="hidden md:flex items-center gap-2 px-6 py-4 bg-slate-50 hover:bg-slate-100 text-slate-500 font-black rounded-2xl transition-all active:scale-95 disabled:opacity-50 border border-slate-100"
              >
                <Clipboard className="w-4 h-4" />
                <span>PASTE</span>
              </button>
            )}

            <button
              type="submit"
              disabled={loading || !url.trim()}
              className={`min-w-[140px] px-8 py-4 premium-gradient text-white font-black rounded-2xl shadow-xl shadow-emerald-600/20 active:scale-95 transition-all disabled:opacity-50 disabled:grayscale disabled:active:scale-100 flex items-center justify-center gap-2 group/btn`}
            >
              <AnimatePresence mode="wait">
                {loading ? (
                  <motion.div
                    key="loading"
                    initial={{ opacity: 0, rotate: -180 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: 180 }}
                  >
                    <RefreshCw className="w-5 h-5 animate-spin" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="idle"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="flex items-center gap-2"
                  >
                    <Wand2 className="w-5 h-5 group-hover/btn:rotate-12 transition-transform" />
                    <span className="tracking-tight uppercase">ANALYZE</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </motion.div>

        {/* Floating Indicator Dots */}
        <AnimatePresence>
          {url && (
             <motion.div 
               initial={{ opacity: 0, y: 10 }}
               animate={{ opacity: 1, y: 0 }}
               exit={{ opacity: 0, y: 10 }}
               className="absolute -bottom-10 left-8 flex items-center gap-4"
             >
                <div className={`flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-black tracking-widest uppercase border ${platform ? 'bg-emerald-50 text-emerald-600 border-emerald-100' : 'bg-amber-50 text-amber-600 border-amber-100'}`}>
                   <div className={`w-1.5 h-1.5 rounded-full animate-pulse ${platform ? 'bg-emerald-400' : 'bg-amber-400'}`} />
                   {platform ? `${platform} Link` : 'Scanning...'}
                </div>
                <button 
                  onClick={() => setUrl('')}
                  className="text-[10px] font-black text-slate-400 hover:text-slate-600 uppercase tracking-widest"
                >
                  Clear
                </button>
             </motion.div>
          )}
        </AnimatePresence>
      </form>

      {/* Error Toast */}
      <AnimatePresence>
        {error && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="mt-16 flex items-start gap-4 p-6 bg-rose-50 border border-rose-100 rounded-[24px] shadow-xl shadow-rose-200/20"
          >
            <div className="p-2 bg-rose-500 text-white rounded-xl">
               <AlertCircle className="w-6 h-6" />
            </div>
            <div className="space-y-1">
               <h4 className="text-sm font-black text-rose-900 uppercase tracking-tight">System Error</h4>
               <p className="text-sm text-rose-700 font-medium leading-relaxed">{error}</p>
            </div>
            <button 
              onClick={() => window.location.reload()}
              className="ml-auto px-4 py-2 bg-white text-rose-600 font-black text-[10px] rounded-lg border border-rose-100 uppercase tracking-widest hover:bg-rose-50 transition-colors"
            >
              Retry
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
