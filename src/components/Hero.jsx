import React from 'react';
import { ArrowRight, Phone } from 'lucide-react';
import { companyData } from '../data/contentData';

export default function Hero() {
  return (
    <section className="relative pt-12 sm:pt-20 pb-12 sm:pb-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 w-full">
        
        {/* Hero Top Content Area with Right Watermark */}
        <div className="relative">
          
          {/* Subtle Shree Logo Watermark shifted further right in Light Shade */}
          <div 
            className="absolute -right-16 sm:-right-8 md:-right-4 lg:-right-2 xl:right-4 -top-8 sm:-top-12 lg:-top-14 w-[240px] xs:w-[300px] sm:w-[420px] md:w-[520px] lg:w-[620px] xl:w-[700px] pointer-events-none select-none z-0 flex items-center justify-end overflow-visible"
            aria-hidden="true"
          >
            <img
              src="/Shreeji%20dark%20mode%20logo.svg"
              alt="Shree Logo Watermark"
              className="w-full h-auto object-contain opacity-15 sm:opacity-20 transition-opacity duration-700 filter drop-shadow-[0_0_60px_rgba(255,255,255,0.06)] translate-x-6 sm:translate-x-12 lg:translate-x-20"
            />
          </div>

          {/* Main Headline & Details */}
          <div className="relative z-10 max-w-5xl space-y-5 sm:space-y-6">
            <h1 className="text-2xl xs:text-[30px] sm:text-5xl md:text-6xl lg:text-[64px] font-display font-extrabold uppercase tracking-tight text-white leading-[1.12] sm:leading-[1.08]">
              Proven Expertise in Corporate Events &amp; B2B{' '}
              <span className="inline-block whitespace-nowrap">Telemarketing.</span>
            </h1>

            <div className="max-w-2xl text-slate-300 text-sm sm:text-base lg:text-lg font-normal leading-relaxed pt-1">
              From concept to execution, we craft impactful events and high-velocity B2B tele-marketing campaigns that inspire trust, elevate engagement, and leave a lasting impression across India.
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-2 w-full sm:w-auto">
              <a
                href={`tel:${companyData.phone.replace(/[^0-9+]/g, '')}`}
                className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-white text-black hover:bg-[#E5C07B] transition-all font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer shadow-lg text-center"
              >
                <Phone className="w-3.5 h-3.5 text-black shrink-0" />
                <span>Book a consultation</span>
              </a>

              <a
                href="#portfolio"
                className="w-full sm:w-auto px-7 py-3.5 rounded-full border border-white/20 hover:border-white text-white transition-all font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer text-center"
              >
                <span>See our work</span>
                <ArrowRight className="w-3.5 h-3.5 shrink-0" />
              </a>
            </div>
          </div>
        </div>

        {/* Feature Numbers */}
        <div className="mt-12 sm:mt-16 pt-8 sm:pt-10 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {companyData.stats.map((stat, idx) => (
            <div key={idx} className="space-y-1">
              <div className="text-2xl sm:text-4xl lg:text-5xl font-display font-bold text-white tracking-tight">
                {stat.number}
              </div>
              <div className="text-[10px] sm:text-xs uppercase tracking-wider text-slate-400 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
