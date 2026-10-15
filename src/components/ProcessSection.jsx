import React from 'react';
import { processSteps } from '../data/contentData';
import { Check, ArrowRight } from 'lucide-react';

export default function ProcessSection() {
  return (
    <section id="process" className="py-20 sm:py-28 bg-[#EBE7E1] border-b border-[#D0C3BA]/60 relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 sm:mb-18">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#10214B]/5 border border-[#10214B]/15 text-xs font-semibold tracking-wider uppercase text-[#10214B] mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#10214B]"></span>
              Agile Methodology
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-medium text-[#10214B] tracking-tight leading-[1.15]">
              How we take your event from brief to a packed room.
            </h2>
          </div>

          <p className="max-w-md text-sm text-[#5E6C84] leading-relaxed">
            A transparent three-step agency delivery framework eliminating uncertainty, budget creep, and last-minute scrambles.
          </p>
        </div>

        {/* 3 Step Editorial Process Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {processSteps.map((step, idx) => (
            <div
              key={idx}
              className="editorial-card p-7 sm:p-8 flex flex-col justify-between group hover:border-[#10214B]"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-2xl sm:text-3xl font-light text-[#D7BD88]">
                    {step.number}
                  </span>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#5E6C84] bg-[#EBE7E1] px-2.5 py-1 rounded-full">
                    Phase {idx + 1}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-display font-medium text-[#10214B] group-hover:text-[#356267] transition-colors leading-snug">
                  {step.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#5E6C84] leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Tangible Deliverables */}
              <div className="mt-8 pt-6 border-t border-[#D0C3BA]/40 space-y-2">
                <div className="text-[11px] uppercase font-bold tracking-wider text-[#10214B]">
                  Key Deliverables
                </div>
                <div className="space-y-1.5">
                  {(step.deliverables || []).map((item, dIdx) => (
                    <div key={dIdx} className="flex items-center gap-2 text-xs text-[#5E6C84]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#D7BD88]"></span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
