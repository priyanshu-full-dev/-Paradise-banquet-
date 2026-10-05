import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn, Camera } from 'lucide-react';

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
    <div className="w-full pt-28 pb-20 px-4 sm:px-6 lg:px-12 bg-[#f7f2e7] min-h-screen text-[#2a1e17]">
      <div className="max-w-7xl mx-auto">
        
        {/* Page Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase bg-[#c59127]/15 text-[#7f0000] border border-[#c59127]/30 mb-4">
            <Camera className="w-3.5 h-3.5 text-[#c59127]" />
            MOMENTS & MEMORIES
          </span>
          <h1 className="font-['Outfit',sans-serif] text-3xl sm:text-5xl font-extrabold text-[#7f0000] tracking-tight">
            Paradise Garden Photo Gallery
          </h1>
          <p className="text-sm sm:text-base text-stone-600 mt-3 leading-relaxed">
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
              className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeFilter === cat.id 
                  ? 'bg-[#7f0000] text-white shadow-md' 
                  : 'bg-white/80 text-stone-700 hover:bg-stone-200 border border-stone-300/60'
              }`}
            >
              {cat.label}
            </motion.button>
          ))}
        </div>

        {/* Gallery Grid */}
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
                  <span className="font-['Outfit',sans-serif] text-sm text-white font-medium drop-shadow leading-snug">
                    {img.title}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selectedImg && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
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
                <div className="p-4 bg-stone-900 text-center font-['Outfit',sans-serif] text-sm text-[#f7ecd5]">
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
