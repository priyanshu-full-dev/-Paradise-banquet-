import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Heart, Menu, X, Phone, ArrowRight, Sparkles } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Venues', path: '/venues' },
    { name: 'Catering', path: '/catering' },
    { name: 'Rooms', path: '/rooms' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-40 w-full transition-all duration-300 px-4 sm:px-8 lg:px-12 ${
          scrolled
            ? 'py-3 bg-white/90 backdrop-blur-xl border-b border-stone-200/60 shadow-sm'
            : 'py-4 bg-gradient-to-b from-stone-950/70 via-stone-950/30 to-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          
          {/* Left: Brand Logo & Slogan */}
          <div className="flex items-center gap-3 shrink-0">
            <Link to="/" className="flex items-center gap-2.5 group focus:outline-none select-none">
              <motion.div 
                whileHover={{ rotate: 8, scale: 1.05 }}
                className="w-10 h-10 rounded-full bg-[#7f0000] flex items-center justify-center text-white shadow-md group-hover:bg-[#c59127] transition-colors"
              >
                <img 
                  src="/logo/paradise-garden-logo.png" 
                  alt="Logo Icon" 
                  className="w-8 h-8 object-contain rounded-full" 
                  onError={(e) => { e.target.style.display = 'none'; }}
                />
              </motion.div>

              <div className="flex flex-col">
                <span className={`font-['Outfit',sans-serif] text-xl font-bold tracking-tight leading-none ${
                  scrolled ? 'text-[#7f0000]' : 'text-white drop-shadow'
                }`}>
                  Paradise<span className="text-[#c59127]">Garden</span>
                </span>
                <span className={`text-[10px] tracking-widest font-medium uppercase mt-0.5 ${
                  scrolled ? 'text-stone-500' : 'text-stone-200 drop-shadow'
                }`}>
                  Explore. Celebrate. Discover.
                </span>
              </div>
            </Link>
          </div>

          {/* Center: Clean Pomaii-Style Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative text-xs xl:text-[13px] font-semibold tracking-wide px-4 py-2 rounded-full transition-all duration-200 focus:outline-none select-none ${
                    isActive
                      ? scrolled 
                        ? 'text-[#7f0000] bg-[#7f0000]/10 font-bold'
                        : 'text-white bg-white/20 font-bold backdrop-blur-md border border-white/30'
                      : scrolled
                        ? 'text-stone-700 hover:text-[#7f0000] hover:bg-stone-100'
                        : 'text-white/90 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeTabUnderline"
                      className="absolute bottom-1 left-4 right-4 h-0.5 bg-[#c59127] rounded-full"
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right: Actions (Search, Heart, Book Button & Mobile Toggle) */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Search Action Icon */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSearchOpen(!searchOpen)}
              className={`p-2.5 rounded-full transition-colors ${
                scrolled 
                  ? 'bg-stone-100 text-stone-700 hover:bg-stone-200' 
                  : 'bg-white/15 text-white hover:bg-white/25 backdrop-blur-md border border-white/20'
              }`}
              title="Search Venues"
            >
              <Search className="w-4 h-4" />
            </motion.button>

            {/* Favorites / Heart Icon */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`p-2.5 rounded-full transition-colors hidden sm:flex ${
                scrolled 
                  ? 'bg-stone-100 text-stone-700 hover:bg-stone-200' 
                  : 'bg-white/15 text-white hover:bg-white/25 backdrop-blur-md border border-white/20'
              }`}
              title="Saved Venues"
            >
              <Heart className="w-4 h-4" />
            </motion.button>

            {/* Quick Call Button */}
            <motion.a 
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              href="tel:+916202878538"
              className={`hidden md:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-semibold tracking-wide transition-all ${
                scrolled 
                  ? 'text-[#7f0000] bg-rose-50 hover:bg-rose-100 border border-rose-200' 
                  : 'text-white bg-white/15 hover:bg-white/25 backdrop-blur-md border border-white/20'
              }`}
            >
              <Phone className="w-3.5 h-3.5 text-[#c59127]" />
              <span>+91 62028 78538</span>
            </motion.a>

            {/* Primary Action Button (Royal Maroon / Gold Pill) */}
            <Link to="/contact" className="focus:outline-none select-none shrink-0">
              <motion.button 
                whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(127, 0, 0, 0.4)" }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold tracking-wide text-white bg-[#7f0000] hover:bg-[#660808] shadow-md transition-all cursor-pointer whitespace-nowrap"
              >
                <span>Book Now</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </motion.button>
            </Link>

            {/* Mobile Hamburger Drawer Trigger */}
            <button 
              onClick={() => setMobileMenuOpen(true)}
              className={`lg:hidden p-2.5 rounded-full transition-colors cursor-pointer focus:outline-none ${
                scrolled 
                  ? 'bg-stone-100 text-stone-800 hover:bg-stone-200' 
                  : 'bg-white/15 text-white hover:bg-white/25 backdrop-blur-md border border-white/20'
              }`}
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>

        </div>
      </motion.header>

      {/* Quick Search Overlay Drawer */}
      <AnimatePresence>
        {searchOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-20 left-0 right-0 z-30 px-4 sm:px-8 max-w-3xl mx-auto"
          >
            <div className="bg-white rounded-3xl p-4 shadow-2xl border border-stone-200/80 flex items-center gap-3">
              <Search className="w-5 h-5 text-stone-400 ml-2" />
              <input
                type="text"
                placeholder="Search Marriage Lawn, AC Banquet, Poolside Deck, Catering..."
                className="w-full text-sm outline-none bg-transparent text-stone-800 placeholder-stone-400 font-medium"
                autoFocus
              />
              <button
                onClick={() => setSearchOpen(false)}
                className="p-1.5 rounded-full hover:bg-stone-100 text-stone-500"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#1b392a]/95 backdrop-blur-xl flex flex-col justify-between p-6 sm:p-10"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-9 h-9 rounded-full bg-[#ea7327] flex items-center justify-center text-white font-bold">
                  P
                </div>
                <span className="text-white text-xl font-bold font-['Outfit',sans-serif]">
                  Paradise<span className="text-[#ea7327]">Garden</span>
                </span>
              </div>
              <button 
                onClick={() => setMobileMenuOpen(false)}
                className="p-2.5 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors cursor-pointer"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <div className="flex flex-col items-center gap-4 text-center my-auto">
              {navLinks.map((link, idx) => {
                const isActive = location.pathname === link.path;
                return (
                  <motion.div
                    key={link.path}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.1 + idx * 0.05 }}
                  >
                    <Link
                      to={link.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`text-xl font-semibold tracking-wide transition-colors px-6 py-2.5 rounded-full inline-block ${
                        isActive 
                          ? 'text-white bg-[#ea7327] font-bold shadow-lg' 
                          : 'text-stone-200 hover:text-white hover:bg-white/10'
                      }`}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                );
              })}
            </div>
            
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col gap-3 w-full max-w-sm mx-auto"
            >
              <a 
                href="tel:+916202878538" 
                className="w-full py-3 rounded-full text-center text-xs font-semibold tracking-wider text-white bg-white/15 border border-white/20 flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-[#ea7327]" />
                <span>Call +91 62028 78538</span>
              </a>
              <Link 
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3 rounded-full text-center text-xs font-bold tracking-wider text-white bg-[#ea7327] hover:bg-[#d86219] uppercase shadow-lg flex items-center justify-center gap-2"
              >
                <span>Book Venue Now</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

