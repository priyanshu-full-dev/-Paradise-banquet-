import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Check, Sparkles, Utensils, MessageCircle, ArrowRight } from 'lucide-react';

export default function CateringPage() {
  const cateringPackages = [
    {
      name: 'Silver Celebration',
      price: 750,
      priceStr: '₹750',
      unit: 'per plate',
      badge: 'Classic Choice',
      items: [
        '2 Welcome Drinks & Fresh Mocktails',
        '4 Veg Starters (Paneer Tikka, Crispy Corn, Spring Rolls, Veg Kebab)',
        '2 Live Chaat Counters (Pani Puri, Dahi Papdi Chaat)',
        '3 Main Course Gravies (Paneer Lababdar, Dal Makhani, Mixed Veg Jalfrezi)',
        'Assorted Indian Breads & Kashmiri Pulao',
        'Boondi Raita, Green Salad & Fresh Mint Chutneys',
        '2 Hot Desserts (Gulab Jamun, Moong Dal Halwa)'
      ]
    },
    {
      name: 'Royal Gold Wedding',
      price: 1050,
      priceStr: '₹1,050',
      unit: 'per plate',
      badge: 'Most Popular',
      popular: true,
      items: [
        '4 Welcome Mocktails & Fresh Fruit Juices Bar',
        '6 Starters (Paneer Malai Tikka, Hara Bhara Kebab, Crispy Dimsums, Tandoori Soya Chaap)',
        '4 Live Food Theatres (Live Dosa, Pasta Bar, Pav Bhaji, Delhi Chaat)',
        '4 Royal Main Courses (Shahi Paneer, Kadhai Paneer, Dal Makhani, Malai Kofta)',
        'Hyderabadi Dum Biryani & Peas Pulao with Burani Raita',
        'Assorted Tandoori Naan, Butter Naan, Laccha Paratha, Missi Roti',
        '4 Premium Desserts (Hot Gulab Jamun, Rasgulla, Jalebi-Rabdi, Ice Cream Parlor)'
      ]
    },
    {
      name: 'Diamond Grand Maharaja',
      price: 1450,
      priceStr: '₹1,450',
      unit: 'per plate',
      badge: 'Ultra Luxury Feast',
      items: [
        'Lavish Exotic Mocktail & Artisan Beverage Bar',
        '8 Gourmet Starters (Continental & Indian Tandoor Delicacies)',
        '6 Live Food Theatres (Tawa Veg, Dimsum, Wood-Fired Pizza, Live Chaat, Italian)',
        '5 Signature Royal Curries & Special Paneer Preparations',
        'Kashmiri Dry Fruit Pulao & Awadhi Dum Biryani',
        'Complete Breads Basket with Stuffed Kulchas & Roomali Roti',
        'Lavish Dessert Island: 6 Indian Sweets, Belgian Waffle Counter, Premium Gelato'
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
            <Utensils className="w-3.5 h-3.5 text-[#c59127]" />
            ROYAL CULINARY FEASTS
          </span>
          <h1 className="font-['Outfit',sans-serif] text-3xl sm:text-5xl font-extrabold text-[#7f0000] tracking-tight">
            Wedding Catering & Menus
          </h1>
          <p className="text-sm sm:text-base text-stone-600 mt-3 leading-relaxed">
            Customizable pure-vegetarian and multi-cuisine wedding packages crafted with fresh organic ingredients and authentic Indian spices.
          </p>
        </motion.div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {cateringPackages.map((pkg, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              className={`bg-white/80 backdrop-blur-md rounded-3xl p-7 border transition-all flex flex-col justify-between relative shadow-xl ${
                pkg.popular 
                  ? 'border-[#7f0000] ring-2 ring-[#7f0000]/20 scale-105 bg-white' 
                  : 'border-[#c59127]/35'
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#7f0000] text-white text-[10px] font-bold uppercase tracking-widest px-4 py-1 rounded-full shadow-md border border-amber-300/30">
                  Most Recommended
                </div>
              )}

              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#c59127]">{pkg.badge}</span>
                <h3 className="font-['Outfit',sans-serif] text-xl font-bold text-[#7f0000] mt-1">{pkg.name}</h3>
                <div className="my-4 flex items-baseline gap-1">
                  <span className="font-['Outfit',sans-serif] text-3xl font-extrabold text-[#7f0000]">{pkg.priceStr}</span>
                  <span className="text-xs text-stone-500 font-medium">{pkg.unit}</span>
                </div>

                <div className="space-y-2.5 text-xs text-stone-700 border-t border-stone-200 pt-4">
                  {pkg.items.map((item, itemIdx) => (
                    <div key={itemIdx} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-[#c59127] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6">
                <Link to="/contact">
                  <motion.button 
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="w-full py-2.5 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-[#7f0000] hover:bg-[#660808] shadow hover:shadow-lg transition-all cursor-pointer flex items-center justify-center gap-1.5"
                  >
                    <span>Select This Menu</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Live Counters Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl bg-[#420505] text-white p-8 lg:p-12 border border-[#c59127]/40 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8"
        >
          <div className="max-w-xl">
            <span className="text-xs font-bold uppercase tracking-widest text-[#c59127]">INTERACTIVE CULINARY THEATRES</span>
            <h3 className="font-['Outfit',sans-serif] text-2xl sm:text-3xl font-bold text-white mt-1">
              Live Cooking Stations & Thematic Dessert Bars
            </h3>
            <p className="text-xs sm:text-sm text-stone-200 mt-2 leading-relaxed font-normal">
              Elevate your wedding with live interactive stations: Live Amritsari Kulcha, Wood-Fired Pizza Bar, Live Chaat Street, Jalebi-Rabdi Counter, Dum Biryani Handi, and Italian Pasta Live Bar.
            </p>
          </div>

          <a 
            href="https://wa.me/916202878538?text=Hello%20Paradise%20Garden,%20please%20send%20me%20your%20complete%20PDF%20catering%20menu%20options."
            target="_blank"
            rel="noreferrer"
            className="shrink-0 px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider text-[#420505] bg-[#c59127] hover:bg-[#d4a342] transition-all shadow-xl flex items-center gap-2"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Download PDF Food Menu</span>
          </a>
        </motion.div>

      </div>
    </div>
  );
}
