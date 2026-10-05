import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle2, MessageCircle } from 'lucide-react';

export default function RoomsPage() {
  const roomsList = [
    {
      title: 'Royal Bridal & Groom Preparation Suite',
      desc: 'Expansive luxury air-conditioned suite with dedicated Hollywood vanity mirror, dressing lounge, plush velvet sofa, King bed, attached master bathroom, and 24/7 room service.',
      capacity: 'Bride / Groom & Immediate Family',
      image: '/assets/paradise-room.jpg',
      price: 'Complimentary with Wedding Packages',
      features: [
        'Hollywood Vanity Light Makeup Mirror',
        'Full-Length Dressing Mirror & Velvet Lounge',
        'Central Air Conditioning & Ambient Lighting',
        'Fresh Towels, Bathrobes & Premium Toiletries',
        'Spacious Wardrobe & Digital Locker'
      ]
    },
    {
      title: 'Deluxe AC Guest Rooms (50+ Rooms Block)',
      desc: 'Comfortable, spacious air-conditioned rooms designed to accommodate outstation wedding guests and family members with utmost privacy and modern hospitality.',
      capacity: '2 - 3 Adults per Room',
      image: '/assets/paradise-hero.jpg',
      price: 'Special Wedding Block Tariff',
      features: [
        'King / Twin Bedding Options',
        '24/7 Hot & Cold Water Supply',
        '100% Generator Power Backup',
        'High-Speed Complimentary Wi-Fi',
        'Attached Modern Bathrooms & Housekeeping'
      ]
    }
  ];

  return (
    <div className="w-full pt-28 pb-20 px-6 lg:px-16 bg-parchment-pattern">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#88551b]">Resort Accommodation in Dhanbad</span>
          <h1 className="font-['Cinzel',serif] text-3xl sm:text-4xl md:text-5xl text-[#33261d] font-bold mt-2">
            50+ AC Deluxe Rooms & Bridal Suites
          </h1>
          <p className="text-sm text-[#5a483a] mt-3">
            Ensure complete comfort and ease for your guests with premium on-site accommodations at Paradise Garden.
          </p>
        </motion.div>

        <div className="space-y-12">
          {roomsList.map((room, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-[#faf6ee] rounded-3xl overflow-hidden border border-[#c59127]/35 shadow-xl grid grid-cols-1 lg:grid-cols-2 gap-8 items-center p-6 lg:p-8"
            >
              <div className="h-72 sm:h-80 lg:h-96 rounded-2xl overflow-hidden shadow-md">
                <img src={room.image} alt={room.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              </div>

              <div className="space-y-4">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#2d1e0f] bg-gradient-to-r from-[#edd9aa] to-[#d4a342] px-3 py-1 rounded-full shadow">
                  {room.price}
                </span>
                <h2 className="font-['Cinzel',serif] text-2xl sm:text-3xl font-bold text-[#33261d]">
                  {room.title}
                </h2>
                <p className="text-xs font-semibold text-[#88551b]">
                  👥 Capacity: {room.capacity}
                </p>

                <p className="text-xs sm:text-sm text-[#5a483a] leading-relaxed">
                  {room.desc}
                </p>

                <div>
                  <h4 className="text-xs font-bold text-[#33261d] uppercase tracking-wider mb-2">Room Amenities:</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#4b3c31]">
                    {room.features.map((feat, fidx) => (
                      <div key={fidx} className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#c59127] shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-3 flex gap-3">
                  <Link to="/contact">
                    <motion.button 
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider text-[#2d1e0f] bg-gradient-to-r from-[#edd9aa] via-[#d4a342] to-[#b88220] shadow hover:scale-105 transition-all cursor-pointer"
                    >
                      Book Room Block
                    </motion.button>
                  </Link>
                  <a 
                    href="https://wa.me/916202878538?text=Hello%20Paradise%20Garden,%20I%20want%20to%20inquire%20about%20AC%20Room%20Block%20booking%20for%20a%20wedding."
                    target="_blank"
                    rel="noreferrer"
                    className="px-5 py-2.5 rounded-full text-xs font-semibold uppercase text-emerald-700 bg-emerald-100 hover:bg-emerald-200 transition-all flex items-center gap-1.5"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
