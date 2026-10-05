import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle2, MessageCircle, Users, Layers, Sparkles, ArrowRight } from 'lucide-react';

export default function VenuesPage() {
  const venues = [
    {
      id: 'wedding-lawn',
      title: 'Grand Open-Air Marriage Lawn',
      location: 'Nawadih, Dhanbad (Opp. Asharfi Hospital)',
      image: '/assets/paradise-lawn.jpg',
      capacity: '500 – 1,200+ Guests',
      area: '25,000+ sq. ft.',
      tag: 'Grand Royal Weddings',
      idealFor: 'Royal Weddings, Grand Receptions, Varmala & Sangeet',
      description: 'Dhanbad’s most magnificent open-air landscaped marriage lawn. Features a soaring royal mandap stage, broad carpeted entrance driveway, sparkling festoon canopy lighting, and expansive multi-cuisine dining space.',
      features: [
        'Massive 1,200+ Guest Capacity',
        'Grand Thematic Floral Mandap Stage',
        'Dedicated Royal Dining & Live Counters Pavilion',
        '100% Uninterrupted Heavy DG Power Backup',
        'Valet Parking with Security Attendants',
        'Professional DJ & Moving-Head Truss Lighting'
      ]
    },
    {
      id: 'ac-banquet',
      title: 'Royal Crystal AC Banquet Hall',
      location: 'Dhanbad, Jharkhand',
      image: '/assets/paradise-banquet.jpg',
      capacity: '300 – 600 Guests',
      area: '8,500 sq. ft.',
      tag: 'Luxury AC Comfort',
      idealFor: 'Ring Ceremonies, Engagements, Receptions & Corporate Galas',
      description: 'Pillar-less fully air-conditioned banquet hall adorned with imported crystal chandeliers, acoustic high ceilings, royal gold wall moldings, plush carpeting, and luxury round-table VIP setups.',
      features: [
        '100% Centralized AC Climate Control',
        'Sparkling Crystal Chandeliers & Gold Decor',
        'Spacious Bridal Preparation Suite Attached',
        'Integrated Concert-Grade Audio & Mic System',
        'Round-Table VIP Guest Seating Setup',
        'In-House Pure Multi-Cuisine Gourmet Catering'
      ]
    },
    {
      id: 'poolside-deck',
      title: 'Resort Poolside Celebration Deck',
      location: 'Dhanbad, Jharkhand',
      image: '/assets/paradise-poolside.jpg',
      capacity: '150 – 350 Guests',
      area: '6,000 sq. ft.',
      tag: 'Haldi & Pool Parties',
      idealFor: 'Haldi Ceremonies, Mehendi Brunches, Cocktail Nights & Birthdays',
      description: 'Bring destination resort vibes to your wedding in Dhanbad. The crystal-clear swimming pool surrounded by luxury cabanas, floral arches, floating diyas, and sun loungers is the perfect backdrop for vibrant Haldi & Mehendi festivities.',
      features: [
        'Crystal Swimming Pool & Sun Deck',
        'Floral Arch & Yellow Haldi Cabanas',
        'Evening Pool Floating Lights & Candles',
        'Dedicated Mocktail & Beverage Counter',
        'Lively Music & Dhol Celebration Space',
        'Instagrammable Photo & Reel Backdrops'
      ]
    }
  ];

  return (
    <div className="w-full pt-28 pb-20 px-4 sm:px-6 lg:px-12 bg-[#f7f2e7] min-h-screen text-[#2a1e17]">
      <div className="max-w-7xl mx-auto">
        
        {/* Page Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase bg-[#c59127]/15 text-[#7f0000] border border-[#c59127]/30 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#c59127]" />
            DISCOVER OUR SPACES
          </span>
          <h1 className="font-['Outfit',sans-serif] text-3xl sm:text-5xl font-extrabold text-[#7f0000] tracking-tight">
            Venues & Capacity Guide
          </h1>
          <p className="text-sm sm:text-base text-stone-600 mt-3 leading-relaxed">
            Explore Dhanbad’s premier luxury event spaces designed for unforgettable weddings, receptions, and celebrations.
          </p>
        </motion.div>

        {/* Venues Grid */}
        <div className="space-y-16">
          {venues.map((venue, idx) => (
            <motion.div 
              key={venue.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white/80 backdrop-blur-md rounded-3xl overflow-hidden border border-[#c59127]/35 shadow-xl grid grid-cols-1 lg:grid-cols-2 gap-8 items-center p-6 sm:p-8 lg:p-10"
            >
              <div className={`h-80 sm:h-96 rounded-2xl overflow-hidden shadow-lg relative ${idx % 2 === 1 ? 'lg:order-2' : ''}`}>
                <img src={venue.image} alt={venue.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                <div className="absolute top-4 left-4 bg-[#7f0000] text-white text-[10px] font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full shadow-lg border border-amber-300/30">
                  {venue.tag}
                </div>
              </div>

              <div className="space-y-4">
                <h2 className="font-['Outfit',sans-serif] text-2xl sm:text-3xl font-bold text-[#7f0000]">
                  {venue.title}
                </h2>
                
                <div className="flex flex-wrap gap-3 text-xs font-semibold text-[#660808]">
                  <span className="bg-[#f7ecd5]/80 px-3.5 py-1.5 rounded-xl border border-[#c59127]/40 flex items-center gap-1.5 text-stone-800">
                    <Users className="w-3.5 h-3.5 text-[#c59127]" /> Capacity: {venue.capacity}
                  </span>
                  <span className="bg-[#f7ecd5]/80 px-3.5 py-1.5 rounded-xl border border-[#c59127]/40 flex items-center gap-1.5 text-stone-800">
                    <Layers className="w-3.5 h-3.5 text-[#c59127]" /> Area: {venue.area}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  {venue.description}
                </p>

                <div className="pt-2">
                  <h4 className="text-xs font-bold text-[#7f0000] uppercase tracking-wider mb-2.5">Key Inclusions & Specs:</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-stone-700">
                    {venue.features.map((feat, fidx) => (
                      <div key={fidx} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#c59127] shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 flex flex-wrap gap-3">
                  <Link to="/contact">
                    <motion.button 
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-[#7f0000] hover:bg-[#660808] shadow-md cursor-pointer flex items-center gap-1.5"
                    >
                      <span>Inquire This Venue</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </motion.button>
                  </Link>
                  <a 
                    href={`https://wa.me/916202878538?text=${encodeURIComponent(`Hello Paradise Garden Dhanbad, I am inquiring about booking the ${venue.title}. Please provide package rates.`)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="px-5 py-2.5 rounded-full text-xs font-bold uppercase text-emerald-700 bg-emerald-100 hover:bg-emerald-200 transition-all flex items-center gap-1.5"
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
