import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

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
    <div className="w-full pt-28 pb-20 px-6 lg:px-16 bg-parchment-pattern">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#88551b]">Royal Culinary Feasts</span>
          <h1 className="font-['Cinzel',serif] text-3xl sm:text-4xl md:text-5xl text-[#33261d] font-bold mt-2">
            Wedding Catering & Menus
          </h1>
          <p className="text-sm text-[#5a483a] mt-3">
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
              className={`bg-[#faf6ee] rounded-3xl p-7 border transition-all flex flex-col justify-between relative ${
                pkg.popular 
                  ? 'border-[#c59127] shadow-2xl scale-105 bg-gradient-to-b from-[#faf6ee] to-[#f5edd8]' 
                  : 'border-[#c59127]/30 shadow-md'
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#c59127] text-white text-[10px] font-bold uppercase tracking-widest px-4 py-1 rounded-full shadow">
                  Most Recommended
                </div>
              )}

              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#88551b]">{pkg.badge}</span>
                <h3 className="font-['Cinzel',serif] text-xl font-bold text-[#33261d] mt-1">{pkg.name}</h3>
                <div className="my-4 flex items-baseline gap-1">
                  <span className="font-['Cinzel',serif] text-3xl font-bold text-[#88551b]">{pkg.priceStr}</span>
                  <span className="text-xs text-[#6b5847]">{pkg.unit}</span>
                </div>

                <div className="space-y-2.5 text-xs text-[#4b3c31] border-t border-[#d9caa9]/50 pt-4">
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
                    className="w-full py-2.5 rounded-full text-xs font-bold uppercase tracking-wider text-[#2d1e0f] bg-gradient-to-r from-[#edd9aa] via-[#d4a342] to-[#b88220] shadow hover:shadow-lg transition-all cursor-pointer"
                  >
                    Select This Menu
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
          className="rounded-3xl bg-[#251d16] text-[#e7dcce] p-8 lg:p-12 border border-[#c59127]/40 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8"
        >
          <div className="max-w-xl">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-400">Interactive Culinary Theatres</span>
            <h3 className="font-['Cinzel',serif] text-2xl font-bold text-white mt-1">
              Live Cooking Stations & Thematic Dessert Bars
            </h3>
            <p className="text-xs text-stone-300 mt-2 leading-relaxed">
              Elevate your wedding with live interactive stations: Live Amritsari Kulcha, Wood-Fired Pizza Bar, Live Chaat Street, Jalebi-Rabdi Counter, Dum Biryani Handi, and Italian Pasta Live Bar.
            </p>
          </div>

          <a 
            href="https://wa.me/916202878538?text=Hello%20Paradise%20Garden,%20please%20send%20me%20your%20complete%20PDF%20catering%20menu%20options."
            target="_blank"
            rel="noreferrer"
            className="shrink-0 px-8 py-3 rounded-full text-xs font-bold uppercase tracking-wider text-[#2d1e0f] bg-gradient-to-r from-[#edd9aa] via-[#d4a342] to-[#b88220] hover:scale-105 transition-all shadow-xl"
          >
            Download PDF Food Menu
          </a>
        </motion.div>
      </div>
    </div>
  );
}
