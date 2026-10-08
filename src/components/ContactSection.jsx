import React, { useState } from 'react';
import { Phone, Mail, MapPin, ArrowRight, CheckCircle2 } from 'lucide-react';
import { companyData } from '../data/contentData';

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: 'Corporate Event Management',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-16 sm:py-24 border-b border-white/10 bg-[#07090E]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        
        {/* Header */}
        <div className="space-y-3 sm:space-y-4 max-w-2xl mb-12 sm:mb-16">
          <div className="text-xs uppercase tracking-widest text-[#E5C07B] font-semibold">
            [ <span>Glad you're here</span> ]
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight uppercase">
            Let's Talk.
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            Have an upcoming corporate event, shareholder AGM, or require dedicated C-level tele-acquisition? Get in touch with our team in Ahmedabad.
          </p>
        </div>

        {/* 2-Column Clean Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-start">
          
          {/* Left: Office Addresses like JK Events */}
          <div className="lg:col-span-5 space-y-6 sm:space-y-8">
            <div className="p-6 sm:p-8 rounded-2xl border border-white/10 bg-white/[0.01] space-y-6">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#E5C07B] font-semibold">
                  [ <span>Ahmedabad Head Office</span> ]
                </span>
                <div className="text-xs sm:text-sm text-slate-200 mt-2 leading-relaxed">
                  317 &amp; 816, Krupal Pathshala, Shivranjani Cross Road, Satellite, Ahmedabad, Gujarat – 380015
                </div>
              </div>

              <div className="pt-4 border-t border-white/5">
                <span className="text-xs uppercase tracking-widest text-slate-400 font-semibold">
                  [ <span>Pune Regional Office</span> ]
                </span>
                <div className="text-sm text-slate-300 mt-2 leading-relaxed">
                  111, City Square, Narveer Tanaji Wadi, Shivajinagar, Pune – 411005
                </div>
              </div>

              <div className="pt-4 border-t border-white/5">
                <span className="text-xs uppercase tracking-widest text-slate-400 font-semibold">
                  [ <span>Delhi-NCR Liaison</span> ]
                </span>
                <div className="text-sm text-slate-300 mt-2 leading-relaxed">
                  Hub &amp; Oak, E-47/3, Pocket D, Okhla Phase II, New Delhi – 110020
                </div>
              </div>

              <div className="pt-4 border-t border-white/5 space-y-2">
                <div className="text-xs uppercase tracking-widest text-[#E5C07B] font-semibold">
                  [ <span>Direct Inquiries</span> ]
                </div>
                <div>
                  <a href={`tel:${companyData.phone.replace(/[^0-9+]/g, '')}`} className="text-base font-bold text-white hover:text-[#E5C07B] transition-colors block">
                    {companyData.phone}
                  </a>
                  <a href={`tel:${companyData.altPhone.replace(/[^0-9+]/g, '')}`} className="text-sm text-slate-300 hover:text-white transition-colors block">
                    {companyData.altPhone}
                  </a>
                  <a href={`mailto:${companyData.email}`} className="text-sm text-slate-400 hover:text-white transition-colors block mt-1">
                    {companyData.email}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Clean Inquiry Form */}
          <div className="lg:col-span-7 p-6 sm:p-10 rounded-2xl border border-white/10 bg-white/[0.01]">
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center mx-auto text-[#E5C07B]">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-display font-bold text-white">
                  Message Sent
                </h3>
                <p className="text-sm text-slate-300 max-w-md mx-auto">
                  Thank you, <strong>{formData.name}</strong>. Our corporate team in Ahmedabad will contact you shortly regarding <strong>{formData.company}</strong>.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-6 py-2 rounded-full border border-white/20 text-xs font-semibold text-white hover:bg-white hover:text-black transition-all cursor-pointer"
                >
                  Send another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-slate-400 font-semibold mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Rahul Sharma"
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-white transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-slate-400 font-semibold mb-2">
                      Corporate Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="rahul@company.com"
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-white transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-slate-400 font-semibold mb-2">
                      Company Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="e.g. Poonawalla Fincorp / Reliance"
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-white transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-slate-400 font-semibold mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-white transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-slate-400 font-semibold mb-2">
                    Primary Service Needed
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#0D111A] border border-white/10 text-white text-sm focus:outline-none focus:border-white transition-colors"
                  >
                    <option value="Corporate Events & Summits">Corporate Events &amp; Summits</option>
                    <option value="B2B Telemarketing & Inside Sales">B2B Telemarketing &amp; Inside Sales</option>
                    <option value="Combined Events + Tele-Acquisition">Combined Events + Tele-Acquisition</option>
                    <option value="AGM Statutory AV Production">AGM Statutory AV Production</option>
                    <option value="Exhibition Stall Design & Fabrication">Exhibition Stall Design &amp; Fabrication</option>
                    <option value="Brand Activations & BTL Marketing">Brand Activations &amp; BTL Marketing</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-slate-400 font-semibold mb-2">
                    Event Details or Objectives
                  </label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your event scale, location, dates, or calling objectives."
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-white transition-colors"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-full bg-white text-black hover:bg-[#E5C07B] transition-all font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer shadow-lg"
                >
                  <span>Send Inquiry</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
