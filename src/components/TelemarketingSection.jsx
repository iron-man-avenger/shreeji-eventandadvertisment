import React from 'react';
import { telemarketingProcess, companyData } from '../data/contentData';
import { PhoneCall, Users, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';

export default function TelemarketingSection() {
  return (
    <section id="telemarketing" className="py-20 sm:py-28 bg-[#10214B] text-[#EBE7E1] relative overflow-hidden">
      
      {/* Subtle background glow/ambient elements */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#D7BD88]/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-[#356267]/20 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 sm:mb-18">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-white/15 text-xs font-semibold tracking-wider uppercase text-[#D7BD88] mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D7BD88]"></span>
              Audience Acquisition &amp; Delegate Turnout
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-medium text-white tracking-tight leading-[1.15]">
              Guaranteed C-Level attendance through our in-house calling desk.
            </h2>
          </div>

          <p className="max-w-md text-sm text-[#D0C3BA] leading-relaxed">
            Beautiful stages mean nothing if seats are empty. Our trained Ahmedabad tele-calling squad conducts consultative outreach to qualified Directors and CXOs to lock genuine RSVPs.
          </p>
        </div>

        {/* 4-Stage Cadence Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {telemarketingProcess.map((step, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-[#D7BD88]/50 hover:bg-white/[0.07] transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs font-bold text-[#D7BD88] px-2.5 py-1 rounded-md bg-white/5 border border-white/10">
                    STAGE {step.step}
                  </span>
                  <span className="text-[11px] text-[#D0C3BA]/70">Step {idx + 1} of 4</span>
                </div>

                <h3 className="text-lg sm:text-xl font-display font-medium text-white group-hover:text-[#D7BD88] transition-colors leading-snug">
                  {step.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#D0C3BA] mt-3 leading-relaxed">
                  {step.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-2 text-xs text-[#D7BD88]">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#D7BD88]" />
                <span className="text-[11px] font-medium tracking-wide">Ahmedabad Squad Managed</span>
              </div>
            </div>
          ))}
        </div>

        {/* Live Call Floor Advantage Card */}
        <div className="mt-12 sm:mt-16 p-6 sm:p-10 rounded-3xl bg-white/[0.05] border border-white/15 backdrop-blur-md grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-3">
            <div className="text-xs font-bold tracking-widest uppercase text-[#D7BD88]">
              Direct Engagement • No Spamming
            </div>
            <h3 className="text-2xl sm:text-3xl font-display font-medium text-white">
              Why Personalized Phone Invitations Win Over Mass Emails
            </h3>
            <p className="text-sm text-[#D0C3BA] leading-relaxed max-w-2xl">
              C-suite executives receive hundreds of automated emails every week that go straight to junk filters. Our professional, articulate callers engage executives with high-context conversations, answering scheduling questions and securing real commitment.
            </p>
            <div className="flex flex-wrap gap-4 pt-2 text-xs text-[#EBE7E1]">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D7BD88]"></span> Bilingual: English &amp; Gujarati / Hindi
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D7BD88]"></span> Verified C-Level Direct Extensions
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D7BD88]"></span> 24h Prior Attendance Re-Confirmation
              </span>
            </div>
          </div>

          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
            <a
              href={`tel:${companyData.phone.replace(/[^0-9+]/g, '')}`}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#D7BD88] text-[#10214B] font-semibold text-xs sm:text-sm hover:bg-white transition-colors"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Call Operations: {companyData.phone}</span>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-medium text-xs sm:text-sm border border-white/20 transition-colors"
            >
              <span>Request Turnout Campaign</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
