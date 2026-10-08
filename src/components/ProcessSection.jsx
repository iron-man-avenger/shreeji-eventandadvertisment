import React from 'react';
import { processSteps } from '../data/contentData';

export default function ProcessSection() {
  return (
    <section id="process" className="py-16 sm:py-24 border-b border-white/10 bg-[#06080D]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        
        {/* Section Heading like JK Events */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 mb-12 sm:mb-16">
          <div className="space-y-2 sm:space-y-3 max-w-xl">
            <div className="text-xs uppercase tracking-widest text-[#E5C07B] font-semibold">
              [ <span>Simple steps, big results</span> ]
            </div>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight uppercase">
              Our Simple Process.
            </h2>
          </div>

          <div className="text-xs sm:text-sm text-slate-400 max-w-sm">
            A proven three-step methodology ensuring flawless execution from initial strategic discovery to nationwide delivery.
          </div>
        </div>

        {/* 3 Step Editorial Process */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {processSteps.map((step, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 rounded-2xl border border-white/10 bg-white/[0.01] flex flex-col justify-between space-y-6 sm:space-y-8"
            >
              <div className="space-y-3 sm:space-y-4">
                <span className="font-mono text-xl sm:text-2xl text-[#E5C07B] font-bold">
                  {step.number}.
                </span>
                <h3 className="text-xl sm:text-2xl font-display font-bold text-white">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="pt-4 border-t border-white/5 flex flex-wrap gap-2">
                {step.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="text-xs text-slate-400 border border-white/10 px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
