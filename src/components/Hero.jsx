import React from 'react';
import { ArrowRight, Phone, Sparkles, MapPin, CheckCircle2 } from 'lucide-react';
import { companyData } from '../data/contentData';

export default function Hero() {
  return (
    <section className="relative pt-20 sm:pt-24 lg:pt-24 pb-14 sm:pb-20 overflow-hidden bg-[#EBE7E1]">
      
      {/* Prominent Architectural Ambient Watermark - Clearly Visible */}
      <div 
        className="absolute right-0 top-6 sm:top-2 w-[320px] sm:w-[500px] lg:w-[680px] pointer-events-none select-none z-0 opacity-20 sm:opacity-25 transition-opacity"
        aria-hidden="true"
      >
        <img
          src="/Shreeji%20dark%20mode%20logo.svg"
          alt="Shreeji Brand Watermark"
          className="w-full h-auto object-contain translate-x-8 sm:translate-x-16 drop-shadow-sm"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        
        {/* Main Editorial Headline - Shifted to Above */}
        <div className="max-w-5xl space-y-6">
          <h1 className="text-3xl xs:text-4xl sm:text-6xl lg:text-[70px] font-display font-extrabold uppercase tracking-tight text-[#10214B] leading-[1.06] sm:leading-[1.02]">
            Crafting Memorable Corporate Events &amp; High-Impact{' '}
            <span className="underline decoration-[#D7BD88] decoration-4 underline-offset-8">Advertising.</span>
          </h1>

          <p className="max-w-3xl text-sm sm:text-base lg:text-lg text-[#323F58] font-normal leading-relaxed">
            An emerging corporate event management and experiential advertising agency in Ahmedabad. We bridge the gap between contemporary 4K stagecraft, bespoke exhibition architecture, and a dedicated in-house B2B tele-acquisition squad that fills your hall with verified decision-makers.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-2 w-full sm:w-auto">
            <a
              href={`tel:${companyData.phone.replace(/[^0-9+]/g, '')}`}
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#10214B] text-[#EBE7E1] hover:bg-[#1C326E] transition-all font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2.5 cursor-pointer shadow-md hover:shadow-lg text-center"
            >
              <Phone className="w-4 h-4 text-[#D7BD88] shrink-0" />
              <span>Book a Consultation</span>
            </a>

            <a
              href="#capabilities"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-[#10214B] border border-[#D0C3BA] hover:border-[#10214B] transition-all font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer shadow-sm hover:shadow text-center"
            >
              <span>Explore Capabilities</span>
              <ArrowRight className="w-4 h-4 text-[#10214B] shrink-0" />
            </a>
          </div>

          {/* Tag & Status - Shifted to Below Content */}
          <div className="flex flex-wrap items-center gap-3 pt-3">
            <div className="pill-badge pill-badge-gold">
              <span className="w-2 h-2 rounded-full bg-[#B39352] animate-pulse"></span>
              <span>Turnkey Corporate Experiences • Gujarat &amp; Western India</span>
            </div>

            <div className="inline-flex items-center gap-1.5 text-xs text-[#5E6C84] font-medium">
              <MapPin className="w-3.5 h-3.5 text-[#10214B]" />
              <span>Satellite, Ahmedabad</span>
            </div>
          </div>
        </div>

        {/* Editorial Visual Showcase Trio (Authentic Indian Corporate & Event Photos) */}
        <div className="mt-14 sm:mt-20 grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-6 items-center">
          
          {/* Visual 1: Corporate Stagecraft (Real Indian Conclave & Stage) */}
          <div className="md:col-span-6 group relative rounded-2xl overflow-hidden border border-[#D0C3BA]/70 bg-white shadow-sm hover:shadow-xl transition-all duration-500">
            <div className="aspect-[16/10] overflow-hidden">
              <img
                src="/images/panel-discussion-hyderabad.jpg"
                alt="Corporate Summit & Panel Conclave in India"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="p-5 bg-white flex items-center justify-between border-t border-[#D0C3BA]/40">
              <div>
                <div className="text-xs uppercase tracking-widest text-[#B39352] font-bold">
                  Stage &amp; Production
                </div>
                <div className="text-sm font-display font-bold text-[#10214B] mt-0.5">
                  Conclaves, AGMs &amp; 4K LED Mapping
                </div>
              </div>
              <span className="text-[11px] font-semibold text-[#5E6C84] bg-[#EBE7E1] px-2.5 py-1 rounded-full">
                Turnkey AV
              </span>
            </div>
          </div>

          {/* Visual 2: Exhibition Architecture (Real Indian Trade Expo Stall) */}
          <div className="md:col-span-3 group relative rounded-2xl overflow-hidden border border-[#D0C3BA]/70 bg-white shadow-sm hover:shadow-xl transition-all duration-500">
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src="/images/indian-expo-stall.jpg"
                alt="Exhibition Stalls & Spatial Fabrication in India"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="p-4 bg-white border-t border-[#D0C3BA]/40">
              <div className="text-[10px] uppercase tracking-wider text-[#B39352] font-bold">
                Exhibition Stalls
              </div>
              <div className="text-xs font-display font-bold text-[#10214B] mt-0.5">
                Custom 3D Booth Design
              </div>
            </div>
          </div>

          {/* Visual 3: B2B Tele-Outreach Desk (Real Indian Corporate Team) */}
          <div className="md:col-span-3 group relative rounded-2xl overflow-hidden border border-[#D0C3BA]/70 bg-white shadow-sm hover:shadow-xl transition-all duration-500">
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src="/images/indian-corporate-team.jpg"
                alt="Corporate Inside Sales Calling Desk in India"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="p-4 bg-white border-t border-[#D0C3BA]/40">
              <div className="text-[10px] uppercase tracking-wider text-[#B39352] font-bold">
                B2B Tele-Outreach
              </div>
              <div className="text-xs font-display font-bold text-[#10214B] mt-0.5">
                Dedicated Delegate Calling
              </div>
            </div>
          </div>

        </div>

        {/* Real Differentiators Strip */}
        <div className="mt-12 sm:mt-16 pt-8 sm:pt-10 border-t border-[#D0C3BA]/60 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {companyData.pillars.map((pillar, idx) => (
            <div key={idx} className="p-5 rounded-2xl bg-white/70 border border-[#D0C3BA]/60 space-y-2 hover:bg-white transition-colors">
              <div className="flex items-center justify-between">
                <span className="text-[10px] uppercase tracking-widest font-bold text-[#B39352]">
                  [ {pillar.badge} ]
                </span>
                <CheckCircle2 className="w-3.5 h-3.5 text-[#10214B]" />
              </div>
              <h4 className="text-sm font-display font-bold text-[#10214B]">
                {pillar.title}
              </h4>
              <p className="text-xs text-[#5E6C84] leading-relaxed">
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
