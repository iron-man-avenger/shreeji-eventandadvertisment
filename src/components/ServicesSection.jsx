import React, { useState } from 'react';
import { servicesList } from '../data/contentData';
import { Plus, Minus, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function ServicesSection() {
  const [activeService, setActiveService] = useState(0);

  return (
    <section id="services" className="py-20 sm:py-28 bg-[#FFFFFF] border-b border-[#D0C3BA]/60 relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#10214B]/5 border border-[#10214B]/15 text-xs font-semibold tracking-wider uppercase text-[#10214B] mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D7BD88]"></span>
              Core Practice Areas
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-medium text-[#10214B] tracking-tight leading-[1.15]">
              Full-spectrum corporate events, B2B tele-turnout &amp; outdoor brand reach.
            </h2>
          </div>

          <p className="max-w-md text-sm text-[#5E6C84] leading-relaxed">
            From keynote stagecraft and statutory AGMs to high-conversion inside sales calls that ensure corporate seats are full, we manage the entire lifecycle with zero junior dilution.
          </p>
        </div>

        {/* Interactive Service Accordion / Showcase Grid */}
        <div className="border-t border-[#D0C3BA]/70 divide-y divide-[#D0C3BA]/70">
          {servicesList.map((service, idx) => {
            const isOpen = activeService === idx;
            return (
              <div
                key={idx}
                className="py-6 sm:py-8 transition-colors group"
              >
                {/* Header Row */}
                <div
                  onClick={() => setActiveService(isOpen ? -1 : idx)}
                  className="flex items-center justify-between gap-4 cursor-pointer select-none"
                >
                  <div className="flex items-start sm:items-center gap-4 sm:gap-8">
                    <span className="font-mono text-sm sm:text-base font-semibold text-[#D7BD88] shrink-0 mt-1 sm:mt-0">
                      {service.number}
                    </span>
                    <div>
                      <h3 className="text-xl sm:text-3xl font-display font-medium text-[#10214B] group-hover:text-[#356267] transition-colors">
                        {service.title}
                      </h3>
                      <div className="text-xs sm:text-sm text-[#5E6C84] mt-1 tracking-wide">
                        {service.category}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 shrink-0">
                    <span className="text-xs font-medium text-[#5E6C84] hidden md:inline-block">
                      {isOpen ? 'Close details' : 'Explore scope'}
                    </span>
                    <div className={`w-9 h-9 rounded-full border flex items-center justify-center transition-all ${
                      isOpen
                        ? 'bg-[#10214B] text-white border-[#10214B]'
                        : 'border-[#D0C3BA] text-[#10214B] group-hover:border-[#10214B]'
                    }`}>
                      {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </div>
                  </div>
                </div>

                {/* Expanded Details Drawer */}
                {isOpen && (
                  <div className="pt-8 mt-6 border-t border-[#D0C3BA]/40 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center animate-in fade-in duration-300">
                    
                    {/* Left: Description & Deliverables */}
                    <div className="lg:col-span-7 space-y-6">
                      <p className="text-base text-[#323F58] leading-relaxed">
                        {service.description}
                      </p>

                      <div className="space-y-3 pt-2">
                        <div className="text-xs font-bold uppercase tracking-wider text-[#10214B]">
                          Core Scope &amp; Deliverables
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {service.points.map((pt, pIdx) => (
                            <div key={pIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#5E6C84]">
                              <CheckCircle2 className="w-4 h-4 text-[#D7BD88] shrink-0 mt-0.5" />
                              <span>{pt}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="pt-3">
                        <a
                          href="#contact"
                          className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#10214B] hover:text-[#356267] transition-colors"
                        >
                          <span>Request tailored scope for {service.title}</span>
                          <ArrowRight className="w-4 h-4" />
                        </a>
                      </div>
                    </div>

                    {/* Right: Authentic High-Res Visual */}
                    <div className="lg:col-span-5">
                      <div className="relative rounded-2xl overflow-hidden border border-[#D0C3BA]/60 aspect-[16/10] shadow-sm bg-[#EBE7E1]">
                        <img
                          src={service.image}
                          alt={service.title}
                          loading="lazy"
                          className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#10214B]/60 via-transparent to-transparent"></div>
                        <div className="absolute bottom-3 left-4 right-4 text-xs text-white font-medium drop-shadow-sm">
                          {service.title} • Ahmedabad &amp; Pan-Gujarat Operations
                        </div>
                      </div>
                    </div>

                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-16 p-6 sm:p-8 rounded-3xl bg-[#EBE7E1] border border-[#D0C3BA]/70 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-lg sm:text-xl font-display font-medium text-[#10214B]">
              Need a customized multi-city corporate package?
            </h4>
            <p className="text-xs sm:text-sm text-[#5E6C84] mt-1">
              We bundle staging, AV, fabrication, and audience acquisition into one single transparent quote.
            </p>
          </div>
          <a
            href="#contact"
            className="shrink-0 px-6 py-3 rounded-full bg-[#10214B] text-white hover:bg-[#356267] text-xs sm:text-sm font-semibold tracking-wide transition-colors"
          >
            Get a Direct Founder Proposal
          </a>
        </div>

      </div>
    </section>
  );
}
