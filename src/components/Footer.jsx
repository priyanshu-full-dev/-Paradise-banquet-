import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, MessageCircle, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full bg-[#420505] text-white pt-16 pb-12 px-4 sm:px-8 lg:px-12 relative z-20">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Rounded Card in Footer */}
        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 sm:p-10 border border-white/15 grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-white/10 mb-10">
          
          {/* Col 1: Logo & Info */}
          <div className="space-y-4 md:col-span-1">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-full bg-[#c59127] flex items-center justify-center text-white font-bold">
                P
              </div>
              <span className="text-white text-xl font-bold font-['Outfit',sans-serif]">
                Paradise<span className="text-[#c59127]">Garden</span>
              </span>
            </Link>
            <p className="text-xs text-stone-200 leading-relaxed font-normal">
              Dhanbad’s most distinguished marriage lawn, banquet hall, and celebration resort for royal weddings and milestone moments.
            </p>
            <div className="pt-2 flex items-center gap-3">
              <a href="tel:+916202878538" className="p-2.5 rounded-full bg-white/15 hover:bg-[#c59127] text-white transition-colors">
                <Phone className="w-4 h-4" />
              </a>
              <a href="https://wa.me/916202878538" target="_blank" rel="noreferrer" className="p-2.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white transition-colors">
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Venues & Facilities */}
          <div>
            <h4 className="font-['Outfit',sans-serif] text-xs font-bold uppercase tracking-wider text-[#c59127] mb-4">
              Venues & Facilities
            </h4>
            <ul className="space-y-2.5 text-xs text-stone-200 font-medium">
              <li><Link to="/venues" className="hover:text-[#c59127] transition-colors">Grand Marriage Lawn (1200+)</Link></li>
              <li><Link to="/venues" className="hover:text-[#c59127] transition-colors">Royal Crystal AC Banquet</Link></li>
              <li><Link to="/venues" className="hover:text-[#c59127] transition-colors">Poolside Haldi Deck</Link></li>
              <li><Link to="/rooms" className="hover:text-[#c59127] transition-colors">50+ AC Deluxe Guest Rooms</Link></li>
              <li><Link to="/catering" className="hover:text-[#c59127] transition-colors">Royal Catering Packages</Link></li>
            </ul>
          </div>

          {/* Col 3: Location */}
          <div>
            <h4 className="font-['Outfit',sans-serif] text-xs font-bold uppercase tracking-wider text-[#c59127] mb-4">
              Location & Directions
            </h4>
            <ul className="space-y-2 text-xs text-stone-200 font-medium">
              <li className="flex items-start gap-1.5">
                <MapPin className="w-4 h-4 text-[#c59127] shrink-0 mt-0.5" />
                <span>Opposite Asharfi Hospital, Nawadih, Dhanbad, Jharkhand – 826013</span>
              </li>
              <li className="text-stone-300">Near Binod Bihari Chowk & B.Polytechnic</li>
              <li className="pt-2">
                <Link to="/contact" className="text-[#c59127] font-bold inline-flex items-center gap-1 hover:underline">
                  <span>View Google Map & Contact</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact */}
          <div>
            <h4 className="font-['Outfit',sans-serif] text-xs font-bold uppercase tracking-wider text-[#c59127] mb-4">
              Direct Booking Desk
            </h4>
            <div className="space-y-2 text-xs text-stone-200 font-medium">
              <p>For marriage dates & quotation inquiries:</p>
              <a href="tel:+916202878538" className="block text-white font-bold text-sm hover:text-[#c59127]">
                +91 62028 78538
              </a>
              <a href="tel:+917004770117" className="block text-white font-bold text-sm hover:text-[#c59127]">
                +91 70047 70117
              </a>
              <p className="text-[11px] text-stone-300 pt-1">Open 7 Days: 9:00 AM – 9:30 PM</p>
            </div>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-stone-300 font-medium gap-4 px-2">
          <p>© {new Date().getFullYear()} Paradise Garden, Dhanbad. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/catering" className="hover:text-[#c59127]">Catering</Link>
            <Link to="/rooms" className="hover:text-[#c59127]">Rooms</Link>
            <Link to="/contact" className="hover:text-[#c59127]">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}


