import React, { useState, useEffect } from 'react';
import { ArrowRight, Menu, X, Phone } from 'lucide-react';
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
    { label: "Capabilities", href: "#capabilities" },
    { label: "B2B Tele-Outreach", href: "#telemarketing" },
    { label: "Process", href: "#process" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#EBE7E1]/95 backdrop-blur-md border-b border-[#D0C3BA]/80 py-3 shadow-[0_4px_24px_rgba(16,33,75,0.06)]'
          : 'bg-[#EBE7E1]/80 backdrop-blur-sm border-b border-[#D0C3BA]/40 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="flex items-center justify-between">
          
          {/* Agency Brand & Logo */}
          <a href="#" className="flex items-center gap-2.5 sm:gap-3 group">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#10214B] p-1.5 flex items-center justify-center shadow-sm transition-transform duration-300 group-hover:scale-105">
              <img
                src="/Shreeji%20dark%20mode%20logo.svg"
                alt="Shreeji Events & Advertising Logo"
                className="h-full w-auto object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-extrabold text-base xs:text-lg sm:text-xl tracking-tight text-[#10214B] leading-none">
                SHREEJI
              </span>
              <span className="text-[9px] xs:text-[10px] sm:text-xs uppercase tracking-widest text-[#B39352] font-bold mt-0.5 sm:mt-1">
                EVENTS &amp; ADVERTISING
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs sm:text-sm font-semibold text-[#323F58] hover:text-[#10214B] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#10214B] hover:after:w-full after:transition-all after:duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden md:flex items-center gap-5">
            <a
              href={`tel:${companyData.phone.replace(/[^0-9+]/g, '')}`}
              className="text-xs font-bold text-[#10214B] hover:text-[#B39352] transition-colors flex items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5 text-[#B39352]" />
              <span>{companyData.phone}</span>
            </a>

            <a
              href="#contact"
              className="px-5 py-2.5 rounded-full bg-[#10214B] text-[#EBE7E1] hover:bg-[#1C326E] transition-all font-bold text-xs uppercase tracking-wider flex items-center gap-2 cursor-pointer shadow-sm hover:shadow-md"
            >
              <span>Get in Touch</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#D7BD88]" />
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href="#contact"
              className="text-xs bg-[#10214B] text-[#EBE7E1] font-semibold px-3 py-1.5 rounded-full"
            >
              Contact
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#10214B] hover:bg-white/60 rounded-xl transition-colors focus:outline-none"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#EBE7E1] border-b border-[#D0C3BA] px-6 py-6 mt-3 space-y-4 shadow-xl">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-semibold text-[#10214B] hover:bg-white/80 py-2.5 px-3 rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-4 border-t border-[#D0C3BA]/60 flex flex-col gap-3">
            <a
              href={`tel:${companyData.phone.replace(/[^0-9+]/g, '')}`}
              className="text-xs font-semibold text-[#323F58] flex items-center gap-2 px-1"
            >
              <Phone className="w-4 h-4 text-[#B39352]" />
              <span>Call Us: {companyData.phone}</span>
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-3 rounded-full bg-[#10214B] text-[#EBE7E1] font-bold text-xs uppercase tracking-wider"
            >
              Plan Your Event
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
