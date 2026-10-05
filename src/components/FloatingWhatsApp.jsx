import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

export default function FloatingWhatsApp() {
  return (
    <motion.a 
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: 'spring', stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      href="https://wa.me/916202878538?text=Hello%20Paradise%20Garden%20Dhanbad,%20I%20want%20to%20inquire%20about%20booking%20dates%20and%20packages."
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-40 bg-emerald-600 hover:bg-emerald-500 text-white p-3.5 sm:px-4 sm:py-3.5 rounded-full shadow-[0_8px_30px_rgba(16,185,129,0.5)] flex items-center gap-2 transition-colors cursor-pointer group"
    >
      <MessageCircle className="w-6 h-6 animate-bounce" />
      <span className="hidden sm:inline-block text-xs font-bold uppercase tracking-wider pr-1">
        WhatsApp Inquiry
      </span>
    </motion.a>
  );
}
