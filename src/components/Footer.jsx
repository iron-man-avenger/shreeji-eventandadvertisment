import React from 'react';
import { ArrowUp, Phone, Mail, MapPin } from 'lucide-react';
import { companyData } from '../data/contentData';

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#10214B] text-[#D0C3BA] py-16 sm:py-20 text-xs border-t border-[#10214B] relative overflow-hidden">
      
      {/* Subtle background glow */}
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-[#D7BD88]/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 sm:gap-12 pb-12 sm:pb-16 border-b border-white/10 items-start">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/20 p-1 flex items-center justify-center shrink-0">
                <img
                  src="/Shreeji%20dark%20mode%20logo.svg"
                  alt="Shreeji Events Emblem"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-medium text-lg sm:text-xl tracking-tight text-white leading-tight">
                  SHREEJI
                </span>
                <span className="text-[10px] uppercase tracking-widest text-[#D7BD88] font-bold">
                  EVENTS &amp; ADVERTISING
                </span>
              </div>
            </div>

            <p className="text-[#D0C3BA] leading-relaxed max-w-sm text-xs sm:text-sm">
              A premier corporate agency delivering turnkey conferences, stagecraft, exhibition stalls, and in-house B2B audience acquisition.
            </p>

            <div className="pt-2 space-y-2 text-xs text-[#D0C3BA]">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#D7BD88] shrink-0 mt-0.5" />
                <span>317 &amp; 816, Krupal Pathshala, Shivranjani Cross Road, Satellite, Ahmedabad - 380015</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#D7BD88] shrink-0" />
                <a href={`tel:${companyData.phone.replace(/[^0-9+]/g, '')}`} className="hover:text-white transition-colors">
                  {companyData.phone}
                </a>
                <span>/</span>
                <a href={`tel:${companyData.altPhone.replace(/[^0-9+]/g, '')}`} className="hover:text-white transition-colors">
                  {companyData.altPhone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#D7BD88] shrink-0" />
                <a href={`mailto:${companyData.email}`} className="hover:text-white transition-colors">
                  {companyData.email}
                </a>
              </div>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="md:col-span-3 space-y-4">
            <div className="text-xs uppercase tracking-widest text-[#D7BD88] font-bold">
              Agency Navigation
            </div>
            <ul className="space-y-2.5 text-xs text-[#D0C3BA]">
              <li><a href="#about" className="hover:text-white transition-colors">About Shreeji</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Core Practice Areas</a></li>
              <li><a href="#portfolio" className="hover:text-white transition-colors">Capabilities Showcase</a></li>
              <li><a href="#telemarketing" className="hover:text-white transition-colors">B2B Tele-Turnout Desk</a></li>
              <li><a href="#process" className="hover:text-white transition-colors">3-Step Process</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact Founders</a></li>
            </ul>
          </div>

          {/* Practice Areas */}
          <div className="md:col-span-4 space-y-4">
            <div className="text-xs uppercase tracking-widest text-[#D7BD88] font-bold">
              Turnkey Capabilities
            </div>
            <ul className="space-y-2 text-xs text-[#D0C3BA]">
              <li>• Corporate Summits &amp; Annual General Meetings</li>
              <li>• C-Level B2B Telemarketing &amp; RSVP Cadence</li>
              <li>• 3D Exhibition Stall Design &amp; Fabrication</li>
              <li>• Experiential Brand Pop-ups &amp; Roadshows</li>
              <li>• Outdoor Billboard Hoardings &amp; Media Planning</li>
              <li>• 4K LED Curved Walls, Stage Audio &amp; Lighting</li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#D0C3BA]/70">
          <div>
            &copy; {new Date().getFullYear()} Shreeji Events &amp; Advertising. All rights reserved. Ahmedabad, Gujarat.
          </div>

          <div className="flex items-center gap-6">
            <a href="#contact" className="hover:text-white transition-colors">Privacy Policy</a>
            <span className="text-white/20">•</span>
            <a href="#contact" className="hover:text-white transition-colors">Terms of Service</a>
            <span className="text-white/20">•</span>
            <button
              onClick={handleScrollToTop}
              className="p-2 rounded-full border border-white/20 hover:border-[#D7BD88] text-white hover:text-[#D7BD88] transition-colors cursor-pointer"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
