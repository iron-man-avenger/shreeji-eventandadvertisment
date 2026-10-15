import React from 'react';
import { ArrowUpRight, Compass, ShieldCheck, Zap, Users, Sparkles } from 'lucide-react';
import { companyData } from '../data/contentData';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 sm:py-28 bg-[#EBE7E1] border-b border-[#D0C3BA]/60 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#10214B]/5 border border-[#10214B]/15 text-xs font-semibold tracking-wider uppercase text-[#10214B] mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#10214B]"></span>
            About Shreeji Events &amp; Advertising
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-medium text-[#10214B] tracking-tight leading-[1.15]">
            A fresh agency built for high-craft corporate experiences &amp; confirmed audience turnout.
          </h2>
        </div>

        {/* Story Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16 sm:mb-20">
          
          {/* Main Story Narrative */}
          <div className="lg:col-span-7 space-y-6 text-[#323F58] leading-relaxed text-base sm:text-lg">
            <p className="font-normal">
              Based in Satellite, Ahmedabad, <strong className="text-[#10214B] font-semibold">Shreeji Events &amp; Advertising</strong> was founded to solve a major frustration corporate leaders face with legacy event agencies: generic templates, disjointed communication, and empty conference seats.
            </p>
            <p className="text-sm sm:text-base text-[#5E6C84]">
              We operate as a nimble, specialized partner uniting two critical sides of corporate event success under one roof: turnkey architectural stagecraft &amp; AV production, coupled with a dedicated in-house B2B tele-acquisition desk that personally calls and secures qualified C-level delegates.
            </p>
            <p className="text-sm sm:text-base text-[#5E6C84]">
              Because we are fresh in the market, every single project is founder-led. You get direct senior accountability, transparent commercial budgets, fast turnaround, and obsessive attention to detail from the first creative moodboard to the final stage teardown.
            </p>

            <div className="pt-2 flex flex-wrap gap-4">
              <a
                href="#services"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#10214B] hover:text-[#D7BD88] transition-colors group"
              >
                <span>Explore Our 5 Core Practice Areas</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <span className="text-[#D0C3BA]">•</span>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#10214B] hover:text-[#D7BD88] transition-colors group"
              >
                <span>Meet With Our Founders in Ahmedabad</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>

          {/* Right Column: Founder Pledge & Authentic Metrics */}
          <div className="lg:col-span-5 bg-white p-7 sm:p-8 rounded-3xl border border-[#D0C3BA]/70 shadow-sm relative overflow-hidden">
            <div className="text-xs font-bold uppercase tracking-widest text-[#D7BD88] mb-2">
              Our Fresh Agency Commitment
            </div>
            <h3 className="text-xl sm:text-2xl font-display font-medium text-[#10214B] mb-4">
              Why Corporate Teams Choose An Agile Partner
            </h3>
            
            <div className="space-y-4 divide-y divide-[#D0C3BA]/40">
              <div className="pt-3 first:pt-0">
                <div className="text-sm font-semibold text-[#10214B] flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#10214B]"></span>
                  Direct Founder Oversight
                </div>
                <p className="text-xs text-[#5E6C84] mt-1">
                  Zero junior dilution. The strategists who pitch your project are the ones managing cue sheets and audio mixers on site.
                </p>
              </div>

              <div className="pt-3">
                <div className="text-sm font-semibold text-[#10214B] flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#10214B]"></span>
                  Turnkey Event + Telemarketing Synergy
                </div>
                <p className="text-xs text-[#5E6C84] mt-1">
                  No need to hire separate event planners and call-centers. We orchestrate the stage and fill the seats concurrently.
                </p>
              </div>

              <div className="pt-3">
                <div className="text-sm font-semibold text-[#10214B] flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#10214B]"></span>
                  Gujarat HQ with Pan-India Mobilization
                </div>
                <p className="text-xs text-[#5E6C84] mt-1">
                  Centrally based at Shivranjani Cross Road, Satellite, Ahmedabad with verified fabrication networks across key metros.
                </p>
              </div>
            </div>

            <div className="mt-6 pt-5 border-t border-[#D0C3BA]/50 flex items-center justify-between text-xs text-[#5E6C84]">
              <span>Headquarters: Satellite, Ahmedabad</span>
              <span className="font-semibold text-[#10214B]">Est. 2024</span>
            </div>
          </div>

        </div>

        {/* Sectors We Cater To (Real & Specific) */}
        <div className="pt-10 border-t border-[#D0C3BA]/60">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-3">
            <div>
              <div className="text-xs uppercase tracking-widest text-[#5E6C84] font-semibold mb-1">
                Targeted Industry Solutions
              </div>
              <h3 className="text-xl sm:text-2xl font-display font-medium text-[#10214B]">
                Sectors &amp; Industries We Actively Cater To
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-[#5E6C84] max-w-md">
              Specialized workflows crafted around regulatory compliance, executive protocol, and targeted B2B audiences.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {companyData.sectors.map((sec, idx) => (
              <div
                key={idx}
                className="bg-white/80 hover:bg-white p-5 rounded-2xl border border-[#D0C3BA]/60 transition-all duration-300 hover:border-[#10214B]/30 hover:shadow-sm group"
              >
                <div className="text-xs font-mono text-[#D7BD88] font-bold mb-1.5">
                  0{idx + 1}
                </div>
                <h4 className="text-base font-semibold text-[#10214B] group-hover:text-[#10214B] transition-colors">
                  {sec.name}
                </h4>
                <p className="text-xs text-[#5E6C84] mt-1.5 leading-relaxed">
                  {sec.desc}
                </p>
              </div>
            ))}

            {/* In-House Production Capabilities Pill Box */}
            <div className="bg-[#10214B] text-[#EBE7E1] p-5 rounded-2xl border border-[#10214B] flex flex-col justify-between">
              <div>
                <div className="text-xs font-mono text-[#D7BD88] font-bold mb-1.5">
                  IN-HOUSE
                </div>
                <h4 className="text-base font-semibold text-white">
                  Turnkey Execution Assurance
                </h4>
                <p className="text-xs text-[#D0C3BA] mt-1.5 leading-relaxed">
                  Direct vendor relationships for trussing, acoustics, 4K LED processors, and fabrication workshops.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-white/10 text-[11px] text-[#D7BD88] font-medium flex items-center justify-between">
                <span>Transparent Milestone Pricing</span>
                <span>→</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
