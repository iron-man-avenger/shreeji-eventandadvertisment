import React, { useState, useEffect } from 'react';
import { ArrowRight, Menu, X } from 'lucide-react';
import { companyData } from '../data/contentData';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Telemarketing", href: "#telemarketing" },
    { label: "Process", href: "#process" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#090C12]/95 backdrop-blur-md border-b border-white/10 py-3.5 shadow-xl'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="flex items-center justify-between">
          
          {/* Agency Logo */}
          <a href="#" className="flex items-center gap-2 xs:gap-3 group">
            <img
              src="/Shreeji%20dark%20mode%20logo.svg"
              alt="Shreeji Events & Advertising Logo"
              className="h-8 xs:h-9 sm:h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105 shrink-0"
            />
            <div className="flex flex-col">
              <span className="font-display font-black text-base xs:text-lg sm:text-2xl tracking-tight text-white leading-none">
                SHREEJI
              </span>
              <span className="text-[9px] xs:text-[10px] sm:text-xs uppercase tracking-widest text-[#E5C07B] font-bold mt-0.5 sm:mt-1">
                EVENTS &amp; ADVERTISING
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action */}
          <div className="hidden md:flex items-center gap-6">
            <a
              href={`tel:${companyData.phone.replace(/[^0-9+]/g, '')}`}
              className="text-xs font-semibold text-slate-300 hover:text-white transition-colors"
            >
              {companyData.phone}
            </a>

            <a
              href="#contact"
              className="px-5 py-2.5 rounded-full border border-white/20 hover:border-white hover:bg-white hover:text-black transition-all font-semibold text-xs text-white flex items-center gap-1.5 cursor-pointer"
            >
              <span>Get in touch</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href="#contact"
              className="text-xs border border-white/20 text-white font-semibold px-3 py-1.5 rounded-full hover:bg-white/10"
            >
              Contact
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-white rounded-lg focus:outline-none"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#090C12] border-b border-white/10 px-6 py-6 mt-3 space-y-4">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium text-slate-300 hover:text-white py-1"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-white/10 flex flex-col gap-3">
            <a
              href={`tel:${companyData.phone.replace(/[^0-9+]/g, '')}`}
              className="text-xs text-slate-300"
            >
              Call: {companyData.phone}
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2.5 rounded-full bg-white text-black font-bold text-xs"
            >
              Get in touch
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
