import React from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { companyData } from '../data/contentData';

export default function AboutSection() {
  return (
    <section id="about" className="py-16 sm:py-24 border-y border-white/10 bg-[#06080D]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        
        {/* Section Heading like JK Events */}
        <div className="space-y-5 sm:space-y-6 max-w-5xl">
          <div className="text-xs uppercase tracking-widest text-[#E5C07B] font-semibold">
            [ <span>About Shreeji Events &amp; Advertising</span> ]
          </div>

          <h2 className="text-xl sm:text-3xl lg:text-4xl font-display font-medium text-white leading-snug sm:leading-tight">
            Innovative minds crafting exceptional corporate experiences—designing impactful campaigns, stage productions, and C-level tele-acquisition that inspire, engage communities, and elevate brands.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 pt-6 border-t border-white/10 items-start">
            <div className="md:col-span-8 text-sm sm:text-base text-slate-300 leading-relaxed space-y-4">
              <p>
                Headquartered in Ahmedabad, Gujarat, Shreeji Events is a full-service corporate event management and B2B telemarketing agency. From large-scale shareholder conventions and CXO summits to high-conversion inside sales campaigns, we bridge the gap between creative stage production and guaranteed audience attendance.
              </p>
              <p className="text-xs sm:text-sm text-slate-400">
                With regional operational hubs in Pune, Delhi-NCR, and Mumbai, our in-house teams manage everything from stagecraft, 4K LED mapping, and statutory AGM AV to bilingual tele-calling squads delivering qualified corporate delegates.
              </p>
            </div>

            <div className="md:col-span-4 p-5 sm:p-6 rounded-2xl border border-white/10 bg-white/[0.02] space-y-2">
              <div className="text-2xl sm:text-3xl font-display font-bold text-white">
                450+
              </div>
              <div className="text-xs uppercase tracking-wider text-slate-400 font-semibold">
                Trusted National &amp; Corporate Clients
              </div>
              <p className="text-xs text-slate-400 pt-2">
                Serving BFSI, Healthcare, Technology, Manufacturing, and Retail leaders across India.
              </p>
            </div>
          </div>
        </div>

        {/* Client Marquee Strip */}
        <div className="mt-12 sm:mt-16 pt-8 sm:pt-10 border-t border-white/10">
          <div className="text-xs uppercase tracking-widest text-slate-400 font-semibold mb-4">
            Brands We've Worked With &amp; Supported
          </div>
          <div className="flex flex-wrap gap-2 sm:gap-x-8 sm:gap-y-3">
            {companyData.clients.map((client, idx) => (
              <span
                key={idx}
                className="text-xs sm:text-sm font-semibold text-slate-300 px-3 py-1.5 rounded-full bg-white/[0.03] sm:bg-transparent border border-white/10 sm:border-none hover:text-white transition-colors"
              >
                {client}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
