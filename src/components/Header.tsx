import { Download, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Platforms', path: '/supported' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Policy', path: '/privacy' },
  ];

  return (
    <header className={`fixed top-0 inset-x-0 z-[100] transition-all duration-700 bg-white/80 backdrop-blur-xl border-b border-white/40 ${scrolled ? 'py-3' : 'py-5'}`}>
      <div className={`max-w-7xl mx-auto px-6 sm:px-8 transition-all duration-500 ${scrolled ? 'glass-card rounded-full mx-4 shadow-xl' : ''}`}>
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="p-2.5 premium-gradient rounded-xl shadow-lg shadow-emerald-600/20 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
              <Download className="w-6 h-6 text-white stroke-[2.5px]" />
            </div>
            <div className="flex flex-col">
              <span className="font-black text-xl text-slate-900 tracking-tighter uppercase leading-none">VideoGrab</span>
              <span className="text-[9px] font-black text-emerald-500 uppercase tracking-widest mt-0.5">Social Downloader</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => (
              <Link 
                key={link.path}
                to={link.path} 
                className={`px-5 py-2 rounded-full text-sm font-black transition-all tracking-tight uppercase ${location.pathname === link.path ? 'bg-emerald-50 text-emerald-600 border border-emerald-100' : 'text-slate-500 hover:text-slate-900 hover:bg-slate-50'}`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-3 bg-slate-50 text-slate-600 hover:bg-slate-100 rounded-full transition-colors active:scale-90"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {menuOpen && (
            <motion.nav 
              initial={{ opacity: 0, height: 0, y: -20 }}
              animate={{ opacity: 1, height: 'auto', y: 0 }}
              exit={{ opacity: 0, height: 0, y: -20 }}
              className="md:hidden py-6 space-y-2 border-t border-slate-50 overflow-hidden"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`block px-6 py-4 text-sm font-black rounded-2xl transition-all uppercase tracking-widest ${location.pathname === link.path ? 'bg-emerald-50 text-emerald-600' : 'text-slate-600 hover:bg-slate-50'}`}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
