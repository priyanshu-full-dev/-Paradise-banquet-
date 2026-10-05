import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, MapPin, Clock, MessageCircle, CheckCircle2 } from 'lucide-react';

export default function ContactPage() {
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const [inquiryForm, setInquiryForm] = useState({
    name: '',
    phone: '',
    date: '',
    guests: '500-800 Guests (Marriage Lawn)',
    eventType: 'Wedding & Grand Reception',
    venue: 'Grand Marriage Lawn',
    notes: ''
  });

  const handleInquirySubmit = (e) => {
    e.preventDefault();
    setBookingSuccess(true);
    const message = `Hello Paradise Garden Dhanbad, I want to inquire about booking for a ${inquiryForm.eventType} on ${inquiryForm.date || 'upcoming date'} for approx ${inquiryForm.guests}. Selected space: ${inquiryForm.venue}. Name: ${inquiryForm.name} (${inquiryForm.phone}). ${inquiryForm.notes ? `Notes: ${inquiryForm.notes}` : ''}`;
    const whatsappUrl = `https://wa.me/916202878538?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="w-full pt-28 pb-20 px-4 sm:px-6 lg:px-12 bg-[#f6f4ee] min-h-screen text-[#1e2420]">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-[#ea7327]">RESERVATION & SITE VISIT</span>
          <h1 className="font-['Outfit',sans-serif] text-3xl sm:text-5xl font-extrabold text-[#1b392a] mt-2">
            Contact & Book Dates
          </h1>
          <p className="text-sm text-[#5a483a] mt-2">
            Schedule a resort lawn visit in Dhanbad or connect directly with our reservation desk for instant dates & quotations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Contact Details Column */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="bg-[#faf6ee] p-6 rounded-3xl border border-[#c59127]/30 shadow-md">
              <div className="w-11 h-11 rounded-full bg-[#f3ebd7] flex items-center justify-center text-[#c59127] mb-3">
                <Phone className="w-5 h-5" />
              </div>
              <h3 className="font-['Cinzel',serif] text-base font-bold text-[#33261d]">Direct Phone Lines</h3>
              <p className="text-xs text-[#5a483a] mt-1">Speak directly with our booking managers:</p>
              <a href="tel:+916202878538" className="block text-sm font-bold text-[#88551b] mt-2 hover:underline">+91 62028 78538</a>
              <a href="tel:+917004770117" className="block text-sm font-bold text-[#88551b] hover:underline">+91 70047 70117</a>
            </div>

            <div className="bg-[#faf6ee] p-6 rounded-3xl border border-[#c59127]/30 shadow-md">
              <div className="w-11 h-11 rounded-full bg-[#f3ebd7] flex items-center justify-center text-[#c59127] mb-3">
                <MapPin className="w-5 h-5" />
              </div>
              <h3 className="font-['Cinzel',serif] text-base font-bold text-[#33261d]">Location & Address</h3>
              <p className="text-xs text-[#5a483a] leading-relaxed mt-1">
                Opposite Asharfi Hospital, Nawadih, Dhanbad, Jharkhand – 826013
              </p>
              <p className="text-[11px] text-[#88551b] mt-1.5 font-semibold">Near Binod Bihari Chowk & B.Polytechnic</p>
            </div>

            <div className="bg-[#faf6ee] p-6 rounded-3xl border border-[#c59127]/30 shadow-md">
              <div className="w-11 h-11 rounded-full bg-[#f3ebd7] flex items-center justify-center text-[#c59127] mb-3">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="font-['Cinzel',serif] text-base font-bold text-[#33261d]">Visiting Hours</h3>
              <p className="text-xs text-[#5a483a] mt-1">Open 7 Days a Week: 9:00 AM – 9:30 PM</p>
              <p className="text-[11px] text-emerald-700 font-bold mt-1">Site lawn tours available daily</p>
            </div>
          </motion.div>

          {/* Form Column */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2 bg-[#faf6ee] p-8 sm:p-10 rounded-3xl border border-[#c59127]/35 shadow-xl"
          >
            <h3 className="font-['Cinzel',serif] text-xl sm:text-2xl font-bold text-[#33261d] mb-2">
              Send Date Inquiry & Price Quotation
            </h3>
            <p className="text-xs text-[#5a483a] mb-6">
              Submit the form below to receive immediate confirmation and pricing options via WhatsApp.
            </p>

            {bookingSuccess ? (
              <div className="text-center py-10 bg-emerald-50 rounded-2xl border border-emerald-200">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto mb-3" />
                <h4 className="font-['Cinzel',serif] text-xl font-bold text-emerald-900">Inquiry Transmitted!</h4>
                <p className="text-sm text-emerald-800 mt-2 max-w-md mx-auto">
                  Connecting directly with the Paradise Garden management via WhatsApp...
                </p>
                <button 
                  onClick={() => setBookingSuccess(false)} 
                  className="mt-5 px-6 py-2 rounded-full text-xs font-bold uppercase bg-emerald-600 text-white cursor-pointer"
                >
                  Send Another Request
                </button>
              </div>
            ) : (
              <form onSubmit={handleInquirySubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#33261d] uppercase tracking-wider mb-1">Your Full Name</label>
                  <input 
                    type="text" 
                    required
                    placeholder="e.g. Amit Kumar"
                    value={inquiryForm.name}
                    onChange={(e) => setInquiryForm({...inquiryForm, name: e.target.value})}
                    className="w-full bg-[#f3ebd7]/60 border border-[#c59127]/30 rounded-xl px-4 py-2.5 text-sm text-[#2a221b] focus:outline-none focus:border-[#c59127]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#33261d] uppercase tracking-wider mb-1">Phone Number (WhatsApp)</label>
                  <input 
                    type="tel" 
                    required
                    placeholder="e.g. +91 98765 43210"
                    value={inquiryForm.phone}
                    onChange={(e) => setInquiryForm({...inquiryForm, phone: e.target.value})}
                    className="w-full bg-[#f3ebd7]/60 border border-[#c59127]/30 rounded-xl px-4 py-2.5 text-sm text-[#2a221b] focus:outline-none focus:border-[#c59127]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#33261d] uppercase tracking-wider mb-1">Target Event Date</label>
                  <input 
                    type="date" 
                    required
                    value={inquiryForm.date}
                    onChange={(e) => setInquiryForm({...inquiryForm, date: e.target.value})}
                    className="w-full bg-[#f3ebd7]/60 border border-[#c59127]/30 rounded-xl px-4 py-2.5 text-sm text-[#2a221b] focus:outline-none focus:border-[#c59127]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#33261d] uppercase tracking-wider mb-1">Event Type</label>
                  <select 
                    value={inquiryForm.eventType}
                    onChange={(e) => setInquiryForm({...inquiryForm, eventType: e.target.value})}
                    className="w-full bg-[#f3ebd7]/60 border border-[#c59127]/30 rounded-xl px-4 py-2.5 text-sm text-[#2a221b] focus:outline-none focus:border-[#c59127]"
                  >
                    <option value="Wedding & Grand Reception">Wedding & Grand Reception</option>
                    <option value="Haldi / Mehendi Ceremony">Haldi / Mehendi Ceremony</option>
                    <option value="Ring Ceremony / Engagement">Ring Ceremony / Engagement</option>
                    <option value="Birthday / Anniversary Celebration">Birthday / Anniversary Celebration</option>
                    <option value="Corporate Event / Gala">Corporate Event / Gala</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#33261d] uppercase tracking-wider mb-1">Preferred Space</label>
                  <select 
                    value={inquiryForm.venue}
                    onChange={(e) => setInquiryForm({...inquiryForm, venue: e.target.value})}
                    className="w-full bg-[#f3ebd7]/60 border border-[#c59127]/30 rounded-xl px-4 py-2.5 text-sm text-[#2a221b] focus:outline-none focus:border-[#c59127]"
                  >
                    <option value="Grand Marriage Lawn">Grand Open-Air Marriage Lawn</option>
                    <option value="Royal Crystal AC Banquet Hall">Royal Crystal AC Banquet Hall</option>
                    <option value="Poolside Celebration Deck">Poolside Celebration Deck</option>
                    <option value="Full Resort Takeover (Lawn + Hall + Rooms)">Full Resort Takeover (All Spaces + Rooms)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#33261d] uppercase tracking-wider mb-1">Expected Guests</label>
                  <select 
                    value={inquiryForm.guests}
                    onChange={(e) => setInquiryForm({...inquiryForm, guests: e.target.value})}
                    className="w-full bg-[#f3ebd7]/60 border border-[#c59127]/30 rounded-xl px-4 py-2.5 text-sm text-[#2a221b] focus:outline-none focus:border-[#c59127]"
                  >
                    <option value="150 - 300 Guests">150 – 300 Guests</option>
                    <option value="300 - 600 Guests">300 – 600 Guests</option>
                    <option value="600 - 1200+ Guests">600 – 1,200+ Guests</option>
                  </select>
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-xs font-bold text-[#33261d] uppercase tracking-wider mb-1">Additional Requirements / Notes</label>
                  <textarea 
                    rows="2"
                    placeholder="Mention any specific catering or room requirements..."
                    value={inquiryForm.notes}
                    onChange={(e) => setInquiryForm({...inquiryForm, notes: e.target.value})}
                    className="w-full bg-[#f3ebd7]/60 border border-[#c59127]/30 rounded-xl px-4 py-2.5 text-sm text-[#2a221b] focus:outline-none focus:border-[#c59127]"
                  />
                </div>

                <div className="sm:col-span-2 mt-2">
                  <motion.button 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full py-3.5 rounded-full text-xs sm:text-sm font-bold tracking-wider text-[#2d1e0f] uppercase shadow-[0_8px_25px_rgba(197,145,39,0.5)] hover:shadow-[0_12px_30px_rgba(197,145,39,0.7)] transition-all border border-amber-200/80 bg-gradient-to-r from-[#edd9aa] via-[#d4a342] to-[#b88220] cursor-pointer flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Submit & Connect on WhatsApp</span>
                  </motion.button>
                </div>
              </form>
            )}
          </motion.div>

        </div>
      </div>
    </div>
  );
}
