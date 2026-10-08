import React from 'react';
import { ArrowUp } from 'lucide-react';
import { companyData } from '../data/contentData';

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#05070A] py-12 sm:py-16 text-slate-400 text-xs border-t border-white/10">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 sm:gap-10 pb-10 sm:pb-12 border-b border-white/10 items-start">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/Shreeji%20dark%20mode%20logo.svg"
                alt="Shreeji Events & Advertising Logo"
                className="h-9 sm:h-10 w-auto object-contain"
              />
              <div className="flex flex-col">
                <span className="font-display font-black text-lg sm:text-xl tracking-tight text-white leading-none">
                  SHREEJI
                </span>
                <span className="text-[10px] uppercase tracking-widest text-[#E5C07B] font-bold mt-1">
                  EVENTS &amp; ADVERTISING
                </span>
              </div>
            </div>
            <p className="text-slate-400 leading-relaxed max-w-sm text-xs">
              A leading corporate event management and B2B telemarketing agency based in Ahmedabad, Gujarat, serving enterprises across India.
            </p>
            <div className="text-slate-400 text-xs pt-1 space-y-1.5">
              <div><strong>Head Office:</strong> 317 &amp; 816, Krupal Pathshala, Shivranjani Cross Road, Satellite, Ahmedabad – 380015</div>
              <div><strong>Contact:</strong> {companyData.phone} / {companyData.altPhone}</div>
              <div><strong>Email:</strong> {companyData.email}</div>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs uppercase tracking-widest text-white font-bold">
              [ <span>Navigation</span> ]
            </div>
            <ul className="space-y-2 text-xs">
              <li><a href="#about" className="hover:text-white transition-colors">About us</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Our Services</a></li>
              <li><a href="#portfolio" className="hover:text-white transition-colors">Portfolio</a></li>
              <li><a href="#telemarketing" className="hover:text-white transition-colors">B2B Telemarketing</a></li>
              <li><a href="#process" className="hover:text-white transition-colors">Our Process</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Zonal Desks */}
          <div className="md:col-span-4 space-y-3">
            <div className="text-xs uppercase tracking-widest text-white font-bold">
              [ <span>Operational Hubs</span> ]
            </div>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><strong>Ahmedabad (HQ):</strong> Satellite, Ahmedabad - 380015</li>
              <li><strong>Pune:</strong> City Square, Shivajinagar, Pune – 411005</li>
              <li><strong>Delhi-NCR:</strong> Okhla Phase II, New Delhi – 110020</li>
              <li><strong>Mumbai &amp; GIFT City:</strong> Corporate Executive Liaison</li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            &copy; {new Date().getFullYear()} Shreeji Events &amp; Advertising. All rights reserved.
          </div>

          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Instagram</a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Facebook</a>
            <button
              onClick={handleScrollToTop}
              className="p-2 rounded-full border border-white/10 hover:border-white text-slate-300 hover:text-white transition-colors cursor-pointer"
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
