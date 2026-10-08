import React, { useState } from 'react';
import { servicesList } from '../data/contentData';
import { ArrowRight, Plus, Minus } from 'lucide-react';

export default function ServicesSection() {
  const [expandedIndex, setExpandedIndex] = useState(0);

  return (
    <section id="services" className="py-16 sm:py-24 border-b border-white/10 bg-[#07090E]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        
        {/* Section Heading like JK Events */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 mb-12 sm:mb-16">
          <div className="space-y-2 sm:space-y-3 max-w-xl">
            <div className="text-xs uppercase tracking-widest text-[#E5C07B] font-semibold">
              [ <span>Focused on real impact</span> ]
            </div>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight uppercase">
              Solutions That Stand Out
            </h2>
          </div>

          <div className="max-w-md text-xs sm:text-sm text-slate-300 leading-relaxed">
            Our corporate services combine strategy, execution capability, and dedicated B2B tele-calling to deliver measurable business growth and high-impact brand visibility.
          </div>
        </div>

        {/* Numbered Clean Service Rows / Accordion */}
        <div className="border-t border-white/10 divide-y divide-white/10">
          {servicesList.map((service, idx) => {
            const isExpanded = expandedIndex === idx;
            return (
              <div
                key={idx}
                className="py-6 sm:py-8 transition-colors group cursor-pointer"
                onClick={() => setExpandedIndex(isExpanded ? -1 : idx)}
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-start sm:items-center gap-4 sm:gap-6">
                    <span className="font-mono text-xs sm:text-sm text-slate-400 font-bold shrink-0 mt-1 sm:mt-0">
                      [ {service.number} ]
                    </span>
                    <div>
                      <h3 className="text-lg xs:text-xl sm:text-3xl font-display font-bold text-white group-hover:text-[#E5C07B] transition-colors">
                        {service.title}
                      </h3>
                      <div className="text-[11px] sm:text-xs text-slate-400 mt-0.5 sm:mt-1 uppercase tracking-wider">
                        {service.category}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 sm:gap-4 shrink-0">
                    <span className="text-xs text-slate-400 hidden sm:inline-block">
                      {isExpanded ? 'Hide details' : 'Explore scope'}
                    </span>
                    <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-slate-300 group-hover:border-white group-hover:text-white transition-colors">
                      {isExpanded ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                    </div>
                  </div>
                </div>

                {/* Expandable Details Area */}
                {isExpanded && (
                  <div className="pt-6 mt-4 border-t border-white/5 grid grid-cols-1 md:grid-cols-12 gap-6 animate-in fade-in duration-200">
                    <div className="md:col-span-6 text-sm text-slate-300 leading-relaxed">
                      {service.description}
                    </div>

                    <div className="md:col-span-6 space-y-2">
                      <div className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-2">
                        Execution Deliverables:
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {service.points.map((point, pIdx) => (
                          <div key={pIdx} className="text-xs text-slate-300 flex items-start gap-2">
                            <span className="text-[#E5C07B]">•</span>
                            <span>{point}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
