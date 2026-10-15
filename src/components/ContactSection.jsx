import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, ArrowRight, CheckCircle2 } from 'lucide-react';
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
    <section id="contact" className="py-20 sm:py-28 bg-[#FFFFFF] border-b border-[#D0C3BA]/60 relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 sm:mb-18">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#10214B]/5 border border-[#10214B]/15 text-xs font-semibold tracking-wider uppercase text-[#10214B] mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D7BD88]"></span>
              Direct Inquiries
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-medium text-[#10214B] tracking-tight leading-[1.15]">
              Let's plan your next corporate event or turnout campaign.
            </h2>
          </div>

          <p className="max-w-md text-sm text-[#5E6C84] leading-relaxed">
            Speak directly with our leadership team in Satellite, Ahmedabad. Receive a preliminary concept deck, spatial recommendations, and transparent pricing.
          </p>
        </div>

        {/* 2-Column Contact & Form Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-start">
          
          {/* Left Column: Ahmedabad Office & Direct Channels */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Primary Office Card */}
            <div className="p-7 sm:p-8 rounded-3xl bg-[#EBE7E1] border border-[#D0C3BA]/70 space-y-6">
              <div>
                <span className="text-[11px] uppercase tracking-widest text-[#10214B] font-bold px-2.5 py-1 rounded-md bg-white/70 border border-[#D0C3BA]/60 inline-block mb-3">
                  Ahmedabad Headquarters
                </span>
                <h3 className="text-xl font-display font-medium text-[#10214B]">
                  Shreeji Events &amp; Advertising
                </h3>
                <div className="flex items-start gap-3 text-sm text-[#323F58] mt-3 leading-relaxed">
                  <MapPin className="w-5 h-5 text-[#10214B] shrink-0 mt-0.5" />
                  <span>
                    317 &amp; 816, Krupal Pathshala, Shivranjani Cross Road, Satellite, Ahmedabad, Gujarat – 380015
                  </span>
                </div>
              </div>

              <div className="pt-4 border-t border-[#D0C3BA]/60 space-y-3">
                <div className="flex items-center gap-3 text-sm text-[#323F58]">
                  <Clock className="w-4 h-4 text-[#10214B] shrink-0" />
                  <span>Mon – Sat: 9:30 AM – 7:30 PM IST</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-[#323F58]">
                  <Phone className="w-4 h-4 text-[#10214B] shrink-0" />
                  <a href={`tel:${companyData.phone.replace(/[^0-9+]/g, '')}`} className="font-semibold text-[#10214B] hover:text-[#356267] transition-colors">
                    {companyData.phone}
                  </a>
                  <span className="text-[#D0C3BA]">/</span>
                  <a href={`tel:${companyData.altPhone.replace(/[^0-9+]/g, '')}`} className="text-[#5E6C84] hover:text-[#10214B] transition-colors">
                    {companyData.altPhone}
                  </a>
                </div>
                <div className="flex items-center gap-3 text-sm text-[#323F58]">
                  <Mail className="w-4 h-4 text-[#10214B] shrink-0" />
                  <a href={`mailto:${companyData.email}`} className="text-[#10214B] hover:underline">
                    {companyData.email}
                  </a>
                </div>
              </div>

              <div className="pt-4 border-t border-[#D0C3BA]/60">
                <a
                  href={`https://wa.me/${companyData.phone.replace(/[^0-9]/g, '')}?text=Hello%20Shreeji%20Events,%20we%20have%20an%20event%20inquiry.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-[#10214B] text-white hover:bg-[#356267] text-xs sm:text-sm font-semibold transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span>Instant WhatsApp / Phone Consultation</span>
                </a>
              </div>
            </div>

            {/* Quick Guarantees Box */}
            <div className="p-6 rounded-2xl bg-white border border-[#D0C3BA]/60 space-y-2">
              <div className="text-xs font-bold uppercase tracking-wider text-[#D7BD88]">
                Fast Agency Response
              </div>
              <p className="text-xs text-[#5E6C84] leading-relaxed">
                Initial concept deck and preliminary cost estimate provided within <strong>24 business hours</strong> of your brief.
              </p>
            </div>

          </div>

          {/* Right Column: Clean White Editorial Form Card */}
          <div className="lg:col-span-7 p-7 sm:p-10 rounded-3xl bg-[#EBE7E1]/50 border border-[#D0C3BA]/70">
            {submitted ? (
              <div className="py-16 text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-[#10214B] text-[#D7BD88] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-display font-medium text-[#10214B]">
                  Inquiry Received
                </h3>
                <p className="text-sm text-[#5E6C84] max-w-md mx-auto">
                  Thank you! Our founding director will review your brief and contact you at <strong>{formData.phone || formData.email}</strong> within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-6 py-2.5 rounded-full bg-[#10214B] text-white text-xs font-semibold hover:bg-[#356267] transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#10214B] mb-1.5">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Rajesh Patel"
                      className="w-full px-4 py-3 rounded-xl bg-white border border-[#D0C3BA] text-[#10214B] placeholder:text-[#5E6C84]/60 text-sm focus:outline-none focus:border-[#10214B] focus:ring-1 focus:ring-[#10214B] transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#10214B] mb-1.5">
                      Company / Organization *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="e.g. Apex Pharma Ltd."
                      className="w-full px-4 py-3 rounded-xl bg-white border border-[#D0C3BA] text-[#10214B] placeholder:text-[#5E6C84]/60 text-sm focus:outline-none focus:border-[#10214B] focus:ring-1 focus:ring-[#10214B] transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#10214B] mb-1.5">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="rajesh@company.com"
                      className="w-full px-4 py-3 rounded-xl bg-white border border-[#D0C3BA] text-[#10214B] placeholder:text-[#5E6C84]/60 text-sm focus:outline-none focus:border-[#10214B] focus:ring-1 focus:ring-[#10214B] transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#10214B] mb-1.5">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full px-4 py-3 rounded-xl bg-white border border-[#D0C3BA] text-[#10214B] placeholder:text-[#5E6C84]/60 text-sm focus:outline-none focus:border-[#10214B] focus:ring-1 focus:ring-[#10214B] transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#10214B] mb-1.5">
                    Primary Service of Interest
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-[#D0C3BA] text-[#10214B] text-sm focus:outline-none focus:border-[#10214B] focus:ring-1 focus:ring-[#10214B] transition-all"
                  >
                    <option value="Corporate Event Management">Corporate Conference, Summit or AGM</option>
                    <option value="B2B Telemarketing & Turnout">B2B Tele-Acquisition &amp; Guaranteed RSVPs</option>
                    <option value="Exhibition Stall & Fabrication">Exhibition Stall 3D Design &amp; Fabrication</option>
                    <option value="Brand Activations & BTL">Brand Activation / Commercial Roadshow</option>
                    <option value="Outdoor Media & Advertising">Outdoor Advertising &amp; OOH Hoardings</option>
                    <option value="Comprehensive Package">Turnkey Package (Staging + Turnout)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#10214B] mb-1.5">
                    Project Details &amp; Expected Dates
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Briefly describe your event date, expected guest count, venue preferences, or audience acquisition targets..."
                    className="w-full px-4 py-3 rounded-xl bg-white border border-[#D0C3BA] text-[#10214B] placeholder:text-[#5E6C84]/60 text-sm focus:outline-none focus:border-[#10214B] focus:ring-1 focus:ring-[#10214B] transition-all resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-[#10214B] hover:bg-[#356267] text-white font-semibold text-sm tracking-wide transition-all duration-300 flex items-center justify-center gap-2 shadow-sm"
                >
                  <span>Submit Event Brief to Founders</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <p className="text-[11px] text-center text-[#5E6C84]">
                  No obligation. We respect privacy and sign corporate NDAs upon request.
                </p>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
