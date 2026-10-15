import React from 'react';
import { capabilitiesShowcase } from '../data/contentData';
import { Sparkles, ArrowUpRight } from 'lucide-react';
export default function PortfolioSection() {
  return (
    <section id="capabilities" className="py-20 sm:py-28 bg-[#EBE7E1] border-b border-[#D0C3BA]/60 relative">
      <div id="portfolio" className="absolute -top-24 pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#10214B]/5 border border-[#10214B]/15 text-xs font-semibold tracking-wider uppercase text-[#10214B] mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#10214B]"></span>
              Visual Proof &amp; Standards
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-medium text-[#10214B] tracking-tight leading-[1.15]">
              Capabilities Showcase: Crafting modern corporate environments.
            </h2>
          </div>

          <p className="max-w-md text-sm text-[#5E6C84] leading-relaxed">
            Real execution standards across keynote stagecraft, 3D exhibition booth architecture, BTL activations, and our dedicated B2B inside-sales tele-calling floor.
          </p>
        </div>

        {/* 6-Card Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {capabilitiesShowcase.map((item, idx) => (
            <div
              key={idx}
              className="editorial-card overflow-hidden flex flex-col justify-between group"
            >
              {/* Image Container with subtle ratio and smooth hover zoom */}
              <div className="relative aspect-[16/10] overflow-hidden bg-[#D0C3BA]/30">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute top-3 left-3">
                  <span className="px-3 py-1 rounded-full text-[11px] font-bold tracking-wider uppercase bg-[#10214B]/80 backdrop-blur-md text-[#EBE7E1]">
                    {item.category}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="text-xl font-display font-medium text-[#10214B] group-hover:text-[#356267] transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5E6C84] mt-2.5 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Tags and Specs */}
                <div className="mt-6 pt-4 border-t border-[#D0C3BA]/40">
                  <div className="flex flex-wrap gap-1.5">
                    {item.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[11px] font-medium text-[#10214B] bg-[#EBE7E1]/80 px-2.5 py-1 rounded-md border border-[#D0C3BA]/50"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Staging Callout */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-white border border-[#D0C3BA]/70 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-1">
            <span className="text-xs uppercase font-bold tracking-wider text-[#D7BD88]">
              Ahmedabad Workshop &amp; Soundstage
            </span>
            <h4 className="text-lg sm:text-xl font-display font-medium text-[#10214B]">
              Have a custom stage, exhibition stall, or roadshow requirement in Gujarat?
            </h4>
            <p className="text-xs sm:text-sm text-[#5E6C84]">
              We invite prospective clients to our Satellite office to review 3D renders, physical material samples, and AV setups.
            </p>
          </div>

          <a
            href="#contact"
            className="shrink-0 inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#10214B] hover:bg-[#356267] text-white text-xs sm:text-sm font-semibold transition-colors"
          >
            <span>Schedule Office Visit</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}
