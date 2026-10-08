import React from 'react';
import { portfolioProjects } from '../data/contentData';
import { ArrowUpRight } from 'lucide-react';

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="py-16 sm:py-24 border-b border-white/10 bg-[#06080D]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        
        {/* Section Heading like JK Events */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 mb-12 sm:mb-16">
          <div className="space-y-2 sm:space-y-3 max-w-xl">
            <div className="text-xs uppercase tracking-widest text-[#E5C07B] font-semibold">
              [ <span>Our work in action</span> ]
            </div>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight uppercase">
              Discover Corporate Impact &amp; Execution
            </h2>
          </div>

          <div className="text-xs sm:text-sm text-slate-400 max-w-sm">
            Selected corporate summits, annual general meetings, retail activations, and nationwide tele-campaigns.
          </div>
        </div>

        {/* Portfolio Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {portfolioProjects.map((project, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 rounded-2xl border border-white/10 bg-white/[0.01] hover:border-white/30 transition-all flex flex-col justify-between space-y-6 group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs text-slate-400 font-mono">
                  <span>{project.category}</span>
                  <span className="text-white font-bold">[ {project.year} ]</span>
                </div>

                <div>
                  <h3 className="text-xl sm:text-2xl font-display font-bold text-white group-hover:text-[#E5C07B] transition-colors leading-tight">
                    {project.title}
                  </h3>
                  <div className="text-xs text-[#E5C07B] font-semibold mt-1">
                    Client: {project.client}
                  </div>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs">
                <span className="text-slate-300 font-semibold">
                  {project.metrics}
                </span>
                <span className="text-slate-400">
                  {project.location}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
