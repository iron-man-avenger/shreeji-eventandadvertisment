import React from 'react';
import { Phone, Users, ShieldCheck, TrendingUp, ArrowRight } from 'lucide-react';
import { companyData } from '../data/contentData';

export default function TelemarketingSection() {
  const pillars = [
    {
      number: "01",
      title: "Decision-Maker Profiling",
      desc: "We research and curate targeted enterprise databases of Managing Directors, CXOs, and VP-level executives tailored to your sector."
    },
    {
      number: "02",
      title: "Consultative Phone Engagement",
      desc: "Our articulate, trained inside-sales callers deliver executive briefings, secure confirmed RSVPs, and lock calendar invitations."
    },
    {
      number: "03",
      title: "Drop-Off Minimization",
      desc: "Pre-event verification calls, logistics briefings, and digital pass dispatch guarantee peak in-person attendance on the event day."
    },
    {
      number: "04",
      title: "Post-Event Lead Qualification",
      desc: "Systematic 48-hour follow-up calls to attendees to score commercial purchasing intent and hand over qualified leads to your sales reps."
    }
  ];

  return (
    <section id="telemarketing" className="py-16 sm:py-24 border-b border-white/10 bg-[#07090E]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 mb-12 sm:mb-16">
          <div className="space-y-2 sm:space-y-3 max-w-2xl">
            <div className="text-xs uppercase tracking-widest text-[#E5C07B] font-semibold">
              [ <span>Audience Generation &amp; Inside Sales</span> ]
            </div>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight uppercase">
              Targeted Telemarketing for High-Value Events
            </h2>
          </div>

          <div className="max-w-md text-xs sm:text-sm text-slate-300 leading-relaxed">
            The secret behind 96%+ turnout at our summits: we deploy dedicated inside-sales squads who specialize in C-suite engagement and high-ticket B2B appointment setting.
          </div>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 rounded-2xl border border-white/10 bg-white/[0.01] flex flex-col justify-between space-y-6"
            >
              <div className="space-y-3">
                <span className="font-mono text-sm text-[#E5C07B] font-bold">
                  [ {pillar.number} ]
                </span>
                <h3 className="text-lg sm:text-xl font-display font-bold text-white">
                  {pillar.title}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-white/5 text-xs text-slate-400">
                Managed from Ahmedabad Calling Hub
              </div>
            </div>
          ))}
        </div>

        {/* Telemarketing Direct Consultation Banner */}
        <div className="mt-10 sm:mt-12 p-6 sm:p-8 rounded-2xl border border-white/10 bg-white/[0.02] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 sm:gap-6">
          <div>
            <h4 className="text-base sm:text-lg font-display font-bold text-white">
              Need a dedicated calling squad for an upcoming corporate event or B2B sales push?
            </h4>
            <p className="text-xs text-slate-400 mt-1">
              Speak directly with our Ahmedabad operations director to review database scale and caller allocation.
            </p>
          </div>

          <a
            href={`tel:${companyData.phone.replace(/[^0-9+]/g, '')}`}
            className="w-full sm:w-auto shrink-0 px-6 py-3.5 rounded-full bg-white text-black hover:bg-[#E5C07B] transition-all font-bold text-xs uppercase tracking-wider text-center"
          >
            Call Desk: {companyData.phone}
          </a>
        </div>

      </div>
    </section>
  );
}
