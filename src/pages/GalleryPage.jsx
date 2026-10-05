import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedImg, setSelectedImg] = useState(null);

  const galleryImages = [
    { src: '/assets/paradise-hero.jpg', title: 'Grand Resort & Marriage Lawn Night View', category: 'lawn' },
    { src: '/assets/paradise-lawn.jpg', title: 'Royal Wedding Mandap on Open Lawn', category: 'lawn' },
    { src: '/assets/paradise-banquet.jpg', title: 'Crystal AC Banquet Hall & Chandeliers', category: 'banquet' },
    { src: '/assets/paradise-poolside.jpg', title: 'Poolside Haldi & Mehendi Celebration Deck', category: 'poolside' },
    { src: '/assets/paradise-catering.jpg', title: 'Royal Multi-Cuisine Wedding Buffet & Live Counters', category: 'catering' },
    { src: '/assets/paradise-room.jpg', title: 'Royal Bridal & Groom Preparation Suite', category: 'rooms' },
  ];

  const categories = [
    { id: 'all', label: 'All Photos' },
    { id: 'lawn', label: 'Marriage Lawn' },
    { id: 'banquet', label: 'AC Banquet' },
    { id: 'poolside', label: 'Poolside Haldi' },
    { id: 'catering', label: 'Royal Catering' },
    { id: 'rooms', label: 'Rooms & Suites' }
  ];

  const filteredImages = activeFilter === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeFilter);

  return (
    <div className="w-full pt-28 pb-20 px-6 lg:px-16 bg-parchment-pattern">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#88551b]">Moments & Memories</span>
          <h1 className="font-['Cinzel',serif] text-3xl sm:text-4xl md:text-5xl text-[#33261d] font-bold mt-2">
            Paradise Garden Photo Gallery
          </h1>
          <p className="text-sm text-[#5a483a] mt-2">
            Explore authentic photos of grand marriages, mandaps, AC banquets, and poolside Haldi ceremonies in Dhanbad.
          </p>
        </motion.div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <motion.button
              key={cat.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveFilter(cat.id)}
              className={`px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                activeFilter === cat.id 
                  ? 'bg-gradient-to-r from-[#edd9aa] via-[#d4a342] to-[#b88220] text-[#2d1e0f] shadow-md font-bold' 
                  : 'bg-[#f3ebd7] text-[#5a483a] hover:bg-[#edd9aa]/60'
              }`}
            >
              {cat.label}
            </motion.button>
          ))}
        </div>

        {/* Gallery Grid with layout animation */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredImages.map((img) => (
              <motion.div
                key={img.src}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                onClick={() => setSelectedImg(img)}
                className="group relative h-72 sm:h-80 rounded-3xl overflow-hidden shadow-lg border border-[#c59127]/30 cursor-pointer bg-stone-950"
              >
                <img 
                  src={img.src} 
                  alt={img.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out" 
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6">
                  <div className="self-end p-2 rounded-full bg-white/20 backdrop-blur-md text-white">
                    <ZoomIn className="w-4 h-4" />
                  </div>
                  <span className="font-['Cinzel',serif] text-sm text-white font-medium drop-shadow leading-snug">
                    {img.title}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Fullscreen Lightbox Modal */}
        <AnimatePresence>
          {selectedImg && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/92 backdrop-blur-md"
            >
              <motion.div 
                initial={{ scale: 0.85 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.85 }}
                className="relative max-w-4xl w-full bg-stone-950 rounded-3xl overflow-hidden shadow-2xl border border-white/20"
              >
                <button 
                  onClick={() => setSelectedImg(null)}
                  className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/60 text-white hover:bg-black/90 flex items-center justify-center transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
                <img src={selectedImg.src} alt={selectedImg.title} className="w-full max-h-[80vh] object-contain" />
                <div className="p-4 bg-stone-900 text-center font-['Cinzel',serif] text-sm text-[#edd9aa]">
                  {selectedImg.title}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
