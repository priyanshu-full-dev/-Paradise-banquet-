import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Sparkles,
  MapPin,
  Calendar,
  Users,
  Search,
  Star,
  Compass,
  Tag,
  ShieldCheck,
  Headphones,
  ArrowRight,
  Clock,
  Building2,
  Trees,
  Waves,
  BedDouble,
  X,
  CheckCircle2,
  ChevronRight,
  Heart
} from 'lucide-react';

export default function HomePage() {
  const [selectedVenue, setSelectedVenue] = useState(null);
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchVenue, setSearchVenue] = useState('');
  const [searchDate, setSearchDate] = useState('');
  const [searchGuests, setSearchGuests] = useState('');

  const venues = [
    {
      id: 'wedding-lawn',
      title: 'Grand Open-Air Marriage Lawn',
      location: 'Nawadih, Dhanbad',
      image: '/assets/paradise-lawn.jpg',
      rating: 4.9,
      capacity: '500 – 1,200+ Guests',
      area: '25,000+ sq. ft.',
      price: 'From ₹45,000',
      category: 'Marriage Lawn',
      tag: 'Grand Weddings',
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
      rating: 4.8,
      capacity: '300 – 600 Guests',
      area: '8,500 sq. ft.',
      price: 'From ₹35,000',
      category: 'AC Banquet',
      tag: 'Luxury Comfort',
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
      rating: 4.9,
      capacity: '150 – 350 Guests',
      area: '6,000 sq. ft.',
      price: 'From ₹25,000',
      category: 'Poolside Deck',
      tag: 'Haldi & Sangeet',
      description: 'Bring destination resort vibes to your wedding in Dhanbad. The crystal-clear swimming pool surrounded by luxury cabanas, floral arches, floating diyas, and sun loungers is the perfect backdrop for vibrant Haldi & Mehendi festivities.',
      features: [
        'Crystal Swimming Pool & Sun Deck',
        'Floral Arch & Yellow Haldi Cabanas',
        'Evening Pool Floating Lights & Candles',
        'Dedicated Mocktail & Beverage Counter',
        'Lively Music & Dhol Celebration Space',
        'Instagrammable Photo & Reel Backdrops'
      ]
    },
    {
      id: 'luxury-rooms',
      title: 'Deluxe AC Guest Suites & Resort Rooms',
      location: 'Dhanbad Premises',
      image: '/assets/paradise-room.jpg',
      rating: 4.7,
      capacity: '50+ AC Deluxe Rooms',
      area: 'Comfort Suites',
      price: 'From ₹2,500/night',
      category: 'Deluxe Rooms',
      tag: 'Guest Stay',
      description: 'Ultra-comfortable air-conditioned deluxe rooms for wedding guests and family. Features king-sized plush bedding, modern attached bathrooms, high-speed Wi-Fi, 24/7 room service, and peaceful resort ambiance.',
      features: [
        '50+ Fully Air-Conditioned Deluxe Rooms',
        'Bridal Suite with Dressing Lights & Mirrors',
        '24/7 Hot Water & Power Backup',
        'Clean Sanitized Linen & Room Service',
        'Ample Guest Parking & Luggage Assistance'
      ]
    }
  ];

  const categories = [
    { name: 'All', icon: Sparkles },
    { name: 'Marriage Lawn', icon: Trees },
    { name: 'AC Banquet', icon: Building2 },
    { name: 'Poolside Deck', icon: Waves },
    { name: 'Deluxe Rooms', icon: BedDouble },
  ];

  const valueProps = [
    {
      icon: Compass,
      title: 'Handpicked Venues',
      desc: 'Curated luxury spaces you’ll love.'
    },
    {
      icon: Tag,
      title: 'Best Price Guarantee',
      desc: 'Transparent deals & custom packages.'
    },
    {
      icon: ShieldCheck,
      title: 'Safe & Trusted Service',
      desc: 'Your safety & perfection is priority.'
    },
    {
      icon: Headphones,
      title: '24/7 Concierge Support',
      desc: 'Dedicated event planner for your big day.'
    }
  ];

  const stories = [
    {
      title: '10 Hidden Ideas for a Royal Wedding Mandap & Lighting Setup',
      readTime: '5-min read',
      image: '/assets/retreat-bali.jpg',
      category: 'Wedding Guide'
    },
    {
      title: 'Customizing Gourmet Multi-Cuisine Menus for 1,000 Guests',
      readTime: '4-min read',
      image: '/assets/paradise-catering.jpg',
      category: 'Catering Tips'
    }
  ];

  const filteredVenues = activeCategory === 'All' 
    ? venues 
    : venues.filter(v => v.category === activeCategory);

  return (
    <div className="w-full bg-[#f6f4ee] text-[#1e2420] min-h-screen">
      
      {/* ========================================================= */}
      {/* POMAII-STYLE HERO SECTION WITH ORGANIC CURVES */}
      {/* ========================================================= */}
      {/* ========================================================= */}
      {/* POMAII-STYLE FULL SCREEN HERO SECTION WITH ORGANIC CURVES */}
      {/* ========================================================= */}
      <section className="relative w-full min-h-screen flex flex-col justify-between overflow-hidden">
        
        {/* Full-Screen Hero Container */}
        <div className="relative w-full flex-grow min-h-screen flex flex-col justify-between p-6 sm:p-12 lg:p-16 pt-28 sm:pt-32 lg:pt-36">
          
          {/* Edge-to-Edge Full Screen High-Res Image */}
          <div className="absolute inset-0 z-0">
            <img
              src="/assets/paradise-hero.jpg"
              alt="Paradise Garden Scenic View"
              className="w-full h-full object-cover object-center scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-stone-950/80 via-stone-950/50 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-transparent to-stone-950/40" />
          </div>



          {/* Top Tagline Badge */}
          <div className="relative z-20 max-w-7xl mx-auto w-full">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold tracking-widest text-white uppercase bg-white/20 backdrop-blur-md border border-white/30 shadow-md"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>EXPLORE THE PARADISE</span>
            </motion.div>
          </div>

          {/* Main Headline & CTA */}
          <div className="relative z-20 max-w-7xl mx-auto w-full my-auto py-8 text-left">
            <div className="max-w-2xl">
              <motion.h1
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="font-['Outfit',sans-serif] text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.1] drop-shadow-lg"
              >
                Discover Nature. <br />
                <span className="text-[#ea7327]">Find Your Escape.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-stone-200 text-base sm:text-lg lg:text-xl font-normal mt-5 max-w-lg leading-relaxed drop-shadow"
              >
                Breathtaking marriage lawns, royal AC banquets & unforgettable experiences, crafted just for you in Dhanbad.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="mt-8 flex items-center gap-4"
              >
                <Link to="/venues">
                  <motion.button
                    whileHover={{ scale: 1.05, boxShadow: "0 15px 30px -5px rgba(234, 115, 39, 0.45)" }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 rounded-full text-base font-bold text-white bg-[#ea7327] hover:bg-[#d86219] shadow-xl transition-all inline-flex items-center gap-2 cursor-pointer"
                  >
                    <span>Explore Venues</span>
                    <ArrowRight className="w-5 h-5" />
                  </motion.button>
                </Link>
              </motion.div>
            </div>
          </div>

          {/* Bottom padding for search bar overlap */}
          <div className="pb-16 sm:pb-20" />
        </div>

        {/* FLOATING BOOKING & SEARCH FILTER BAR */}
        <div className="relative z-30 -mt-20 sm:-mt-24 max-w-5xl mx-auto px-4 w-full pb-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-white/95 backdrop-blur-xl rounded-3xl lg:rounded-full p-4 lg:p-5 shadow-2xl border border-stone-200/90 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 items-center"
            >
              {/* Field 1: Where to? */}
              <div className="flex items-center gap-3 px-4 py-2 border-b sm:border-b-0 sm:border-r border-stone-200/80">
                <div className="p-2 rounded-full bg-emerald-50 text-[#1b392a]">
                  <MapPin className="w-4 h-4" />
                </div>
                <div className="flex flex-col text-left w-full">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-stone-400">Where to?</span>
                  <select 
                    value={searchVenue}
                    onChange={(e) => setSearchVenue(e.target.value)}
                    className="text-xs font-semibold text-stone-800 bg-transparent outline-none cursor-pointer"
                  >
                    <option value="">Any destination / venue</option>
                    <option value="Grand Marriage Lawn">Grand Marriage Lawn</option>
                    <option value="Royal AC Banquet">Royal AC Banquet</option>
                    <option value="Poolside Deck">Poolside Celebration Deck</option>
                    <option value="Deluxe Rooms">Deluxe AC Rooms</option>
                  </select>
                </div>
              </div>

              {/* Field 2: Check in Date */}
              <div className="flex items-center gap-3 px-4 py-2 border-b sm:border-b-0 sm:border-r border-stone-200/80">
                <div className="p-2 rounded-full bg-emerald-50 text-[#1b392a]">
                  <Calendar className="w-4 h-4" />
                </div>
                <div className="flex flex-col text-left w-full">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-stone-400">Check in</span>
                  <input
                    type="text"
                    placeholder="Add date"
                    value={searchDate}
                    onChange={(e) => setSearchDate(e.target.value)}
                    onFocus={(e) => (e.target.type = 'date')}
                    onBlur={(e) => (e.target.type = 'text')}
                    className="text-xs font-semibold text-stone-800 bg-transparent outline-none placeholder-stone-700"
                  />
                </div>
              </div>

              {/* Field 3: Check out / Slot */}
              <div className="flex items-center gap-3 px-4 py-2 border-b sm:border-b-0 sm:border-r border-stone-200/80">
                <div className="p-2 rounded-full bg-emerald-50 text-[#1b392a]">
                  <Clock className="w-4 h-4" />
                </div>
                <div className="flex flex-col text-left w-full">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-stone-400">Check out / Slot</span>
                  <select className="text-xs font-semibold text-stone-800 bg-transparent outline-none cursor-pointer">
                    <option value="">Full Day Event</option>
                    <option value="Morning">Morning Slot</option>
                    <option value="Evening">Evening Reception</option>
                  </select>
                </div>
              </div>

              {/* Field 4: Guests / Capacity */}
              <div className="flex items-center gap-3 px-4 py-2 sm:border-r lg:border-r-0 border-stone-200/80">
                <div className="p-2 rounded-full bg-emerald-50 text-[#1b392a]">
                  <Users className="w-4 h-4" />
                </div>
                <div className="flex flex-col text-left w-full">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-stone-400">Travelers / Guests</span>
                  <select 
                    value={searchGuests}
                    onChange={(e) => setSearchGuests(e.target.value)}
                    className="text-xs font-semibold text-stone-800 bg-transparent outline-none cursor-pointer"
                  >
                    <option value="">2 Guests – 1,200+</option>
                    <option value="100-300">100 - 300 Guests</option>
                    <option value="300-600">300 - 600 Guests</option>
                    <option value="600-1200">600 - 1,200+ Guests</option>
                  </select>
                </div>
              </div>

              {/* Field 5: Search Button */}
              <div className="p-1">
                <Link to="/venues">
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="w-full py-3.5 px-6 rounded-full bg-[#1b392a] hover:bg-[#12291d] text-white text-xs font-bold tracking-wide flex items-center justify-center gap-2 shadow-lg cursor-pointer"
                  >
                    <span>Search</span>
                    <Search className="w-4 h-4" />
                  </motion.button>
                </Link>
              </div>

            </motion.div>
          </div>

      </section>

      {/* ========================================================= */}
      {/* POMAII VALUE PROPOSITION HIGHLIGHT STRIP */}
      {/* ========================================================= */}
      <section className="w-full max-w-6xl mx-auto px-4 sm:px-6 mb-16">
        <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-stone-200/70 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {valueProps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="flex items-center gap-4 text-left">
                <div className="w-12 h-12 rounded-full bg-stone-100 flex items-center justify-center text-[#1b392a] shrink-0 border border-stone-200/60">
                  <Icon className="w-5 h-5 text-[#1b392a]" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-stone-800 leading-tight">
                    {item.title}
                  </h4>
                  <p className="text-[11px] text-stone-500 font-medium mt-0.5 leading-snug">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ========================================================= */}
      {/* POPULAR VENUES / DESTINATIONS GRID */}
      {/* ========================================================= */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-10">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-[#ea7327] tracking-widest uppercase">DISCOVER SPACES</span>
              <span className="text-base">🌿</span>
            </div>
            <h2 className="font-['Outfit',sans-serif] text-2xl sm:text-4xl font-extrabold text-[#1b392a] tracking-tight mt-1">
              Popular Destinations & Venues
            </h2>
          </div>

          <Link to="/venues">
            <motion.button
              whileHover={{ x: 4 }}
              className="inline-flex items-center gap-2 text-xs font-bold text-stone-700 hover:text-[#ea7327] transition-colors cursor-pointer"
            >
              <span>View All Destinations</span>
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </Link>
        </div>

        {/* Category Pill Filters */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-4 mb-8">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isSelected = activeCategory === cat.name;
            return (
              <button
                key={cat.name}
                onClick={() => setActiveCategory(cat.name)}
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-[#1b392a] text-white shadow-md'
                    : 'bg-white text-stone-700 hover:bg-stone-200/70 border border-stone-200/80'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{cat.name}</span>
              </button>
            );
          })}
        </div>

        {/* 4 Cards Grid (Pomaii style) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredVenues.map((venue, idx) => (
            <motion.div
              key={venue.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              whileHover={{ y: -6 }}
              className="group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between h-[380px] sm:h-[420px] relative border border-stone-200/60"
            >
              {/* Image with overlay */}
              <div className="absolute inset-0 z-0 overflow-hidden">
                <img
                  src={venue.image}
                  alt={venue.title}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-950/30 to-transparent" />
              </div>

              {/* Top Rating Badge */}
              <div className="relative z-10 p-4 flex items-center justify-between">
                <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-amber-300 text-xs font-bold border border-white/20">
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  <span>{venue.rating}</span>
                </div>

                <button 
                  onClick={() => setSelectedVenue(venue)}
                  className="p-2 rounded-full bg-white/20 backdrop-blur-md text-white hover:bg-white hover:text-[#ea7327] transition-colors"
                >
                  <Heart className="w-4 h-4" />
                </button>
              </div>

              {/* Bottom Details & Pricing */}
              <div className="relative z-10 p-5 text-left mt-auto">
                <h3 className="font-['Outfit',sans-serif] text-lg font-bold text-white leading-tight">
                  {venue.title}
                </h3>
                <p className="text-stone-300 text-xs font-medium mt-1">
                  {venue.capacity}
                </p>

                <div className="mt-4 pt-3 border-t border-white/20 flex items-center justify-between">
                  <span className="text-sm font-extrabold text-[#ea7327] bg-white/95 backdrop-blur-md px-3 py-1 rounded-full">
                    {venue.price}
                  </span>
                  
                  <button
                    onClick={() => setSelectedVenue(venue)}
                    className="p-2 rounded-full bg-[#1b392a] text-white hover:bg-[#ea7327] transition-colors"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </section>

      {/* ========================================================= */}
      {/* POMAII TRAVEL STORIES & GUIDES SECTION */}
      {/* ========================================================= */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-16">
        <div className="bg-[#ede8dc]/60 rounded-3xl p-6 sm:p-10 border border-stone-200/80 grid grid-cols-1 lg:grid-cols-3 gap-8 items-center relative overflow-hidden">
          
          {/* Left Text */}
          <div className="text-left">
            <span className="text-xs font-bold text-stone-500 uppercase tracking-widest">NEED INSPIRATION?</span>
            <h3 className="font-['Outfit',sans-serif] text-2xl sm:text-3xl font-extrabold text-[#1b392a] mt-1 leading-tight">
              Event Stories & Guides
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 font-medium mt-3 leading-relaxed">
              Get event tips, venue guides, and inspiring stories from Paradise Garden Dhanbad.
            </p>

            <Link to="/gallery" className="mt-6 inline-block">
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="px-6 py-3 rounded-full text-xs font-bold text-white bg-[#1b392a] hover:bg-[#12281e] shadow-md inline-flex items-center gap-2"
              >
                <span>Read Event Stories</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </motion.button>
            </Link>
          </div>

          {/* Right Cards */}
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {stories.map((story, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-4 shadow-sm border border-stone-200/80 flex flex-col justify-between text-left hover:shadow-md transition-shadow"
              >
                <div className="h-36 rounded-xl overflow-hidden mb-3 relative">
                  <img src={story.image} alt={story.title} className="w-full h-full object-cover" />
                  <span className="absolute top-2 left-2 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-[10px] font-bold">
                    {story.category}
                  </span>
                </div>

                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-stone-800 leading-snug line-clamp-2">
                    {story.title}
                  </h4>
                  <span className="text-[10px] font-semibold text-stone-400 mt-2 block">
                    {story.readTime}
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* POMAII SPECIAL OFFER HERO BANNER */}
      {/* ========================================================= */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 pb-20">
        <div className="bg-[#1b392a] text-white rounded-[36px] overflow-hidden shadow-2xl relative p-8 sm:p-12 border border-emerald-900/40 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          
          {/* Left Image Frame */}
          <div className="h-64 sm:h-80 rounded-2xl overflow-hidden relative shadow-lg">
            <img
              src="/assets/paradise-lawn.jpg"
              alt="Special Offer Venue"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950/60 to-transparent" />
          </div>

          {/* Right Banner Content */}
          <div className="text-left relative z-10">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-900/80 text-amber-300 text-xs font-bold border border-emerald-700/50 mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>SPECIAL OFFER 🌿</span>
            </div>

            <h2 className="font-['Outfit',sans-serif] text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Your Next Adventure Starts Here
            </h2>

            <p className="text-emerald-100 text-xs sm:text-sm font-normal mt-4 leading-relaxed max-w-md">
              Exclusive wedding packages. Flexible bookings. Memories that last a lifetime in Dhanbad.
            </p>

            <div className="mt-8">
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-7 py-3.5 rounded-full text-xs font-bold text-white bg-[#ea7327] hover:bg-[#d86219] shadow-xl inline-flex items-center gap-2"
                >
                  <span>Discover Packages</span>
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* Modal for Venue Details */}
      <AnimatePresence>
        {selectedVenue && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-stone-950/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
            onClick={() => setSelectedVenue(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 overflow-hidden shadow-2xl relative text-left border border-stone-200"
            >
              <button
                onClick={() => setSelectedVenue(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-600 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="h-56 rounded-2xl overflow-hidden mb-6 relative">
                <img src={selectedVenue.image} alt={selectedVenue.title} className="w-full h-full object-cover" />
                <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#ea7327] text-white text-xs font-bold">
                  {selectedVenue.tag}
                </span>
              </div>

              <h3 className="font-['Outfit',sans-serif] text-2xl font-bold text-[#1b392a]">
                {selectedVenue.title}
              </h3>
              <p className="text-xs text-stone-500 font-medium mt-1 flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-[#ea7327]" />
                <span>{selectedVenue.location} • {selectedVenue.capacity}</span>
              </p>

              <p className="text-xs text-stone-600 mt-4 leading-relaxed font-normal">
                {selectedVenue.description}
              </p>

              <div className="mt-6 pt-4 border-t border-stone-200">
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-400 mb-3">Key Highlights</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedVenue.features.map((feat, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-stone-700 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 flex items-center justify-between">
                <span className="text-lg font-extrabold text-[#ea7327]">
                  {selectedVenue.price}
                </span>

                <Link to="/contact" onClick={() => setSelectedVenue(null)}>
                  <button className="px-6 py-3 rounded-full text-xs font-bold text-white bg-[#1b392a] hover:bg-[#ea7327] transition-colors">
                    Inquire Booking Now
                  </button>
                </Link>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
