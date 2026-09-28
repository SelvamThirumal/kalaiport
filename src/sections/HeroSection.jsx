import React from 'react';
import { ArrowRight, Sparkles, Search, Target, Share2, BarChart2, Globe, ShieldCheck } from 'lucide-react';

export default function HeroSection() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
      {/* Background ambient gradient orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-indigo-600/20 via-purple-600/15 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 -right-20 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -left-20 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b12_1px,transparent_1px),linear-gradient(to_bottom,#1e293b12_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Heading, Badge, Description, CTA */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Small Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-semibold tracking-wide backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
              <span>Digital Marketing Trainer & Skill Mentor</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-white tracking-tight leading-[1.12]">
              Turning Digital Marketing Knowledge Into{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-300 to-pink-400">
                Practical Results.
              </span>
            </h1>

            {/* Resume-grounded Professional Description */}
            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Passionate Digital Marketing Trainer skilled in SEO, Google Ads, Meta Ads, and social media marketing with experience in delivering practical training and managing live campaigns.
            </p>

            {/* Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button
                onClick={() => scrollTo('projects')}
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm shadow-lg shadow-indigo-600/30 hover:shadow-indigo-600/50 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 group"
              >
                <span>View My Work</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => scrollTo('contact')}
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 hover:text-white font-semibold text-sm border border-slate-700/80 hover:border-slate-600 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2"
              >
                <span>Let's Connect</span>
              </button>
            </div>

            {/* Trust highlights */}
            <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Hands-on Live Training</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-indigo-400" />
                <span>Industry-Oriented Mentorship</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-purple-400" />
                <span>Google Skillshop Certified</span>
              </div>
            </div>
          </div>

          {/* Right Column: Modern Marketing Visual with Floating Cards */}
          <div className="lg:col-span-5 relative flex items-center justify-center py-6">
            {/* Center Focal Card */}
            <div className="relative w-full max-w-md p-6 rounded-2xl bg-gradient-to-b from-slate-900/90 to-slate-950/90 border border-slate-800 shadow-2xl backdrop-blur-xl">
              {/* Subtle top indicator */}
              <div className="flex items-center justify-between pb-5 border-b border-slate-800/80">
                <div className="flex items-center gap-2.5">
                  <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-xs font-semibold text-slate-300 tracking-wide uppercase">Core Marketing Matrix</span>
                </div>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-400">PRACTICAL FOCUS</span>
              </div>

              {/* Hub Visual Layout */}
              <div className="py-6 space-y-3">
                {/* Visual row: SEO */}
                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-800/40 border border-slate-700/50 hover:border-indigo-500/40 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400">
                      <Search className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-white">Search Engine Optimization</h4>
                      <p className="text-[11px] text-slate-400">On-Page, Off-Page & Technical SEO</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-semibold text-indigo-300 bg-indigo-900/40 px-2 py-0.5 rounded-full">Organic</span>
                </div>

                {/* Visual row: Paid Ads */}
                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-800/40 border border-slate-700/50 hover:border-purple-500/40 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-purple-500/10 text-purple-400">
                      <Target className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-white">Google Ads & Meta Ads</h4>
                      <p className="text-[11px] text-slate-400">Targeting & Campaign Management</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-semibold text-purple-300 bg-purple-900/40 px-2 py-0.5 rounded-full">Paid</span>
                </div>

                {/* Visual row: Analytics */}
                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-800/40 border border-slate-700/50 hover:border-blue-500/40 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400">
                      <BarChart2 className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-white">GA4 & Tag Manager</h4>
                      <p className="text-[11px] text-slate-400">Measurement & Looker Studio</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-semibold text-blue-300 bg-blue-900/40 px-2 py-0.5 rounded-full">Data</span>
                </div>
              </div>

              {/* Floating Element 1: SEO Badge */}
              <div className="absolute -top-5 -left-6 px-4 py-2.5 rounded-xl bg-slate-900/95 border border-indigo-500/30 shadow-xl backdrop-blur-md flex items-center gap-2 animate-float-slow">
                <div className="w-2 h-2 rounded-full bg-indigo-400" />
                <span className="text-xs font-bold text-white">SEO</span>
                <span className="text-[10px] text-slate-400 font-mono">GSC & Audit</span>
              </div>

              {/* Floating Element 2: Google Ads Badge */}
              <div className="absolute -top-4 -right-6 px-4 py-2.5 rounded-xl bg-slate-900/95 border border-purple-500/30 shadow-xl backdrop-blur-md flex items-center gap-2 animate-float-medium">
                <div className="w-2 h-2 rounded-full bg-purple-400" />
                <span className="text-xs font-bold text-white">Google Ads</span>
                <span className="text-[10px] text-slate-400 font-mono">Lead Gen</span>
              </div>

              {/* Floating Element 3: Meta Ads Badge */}
              <div className="absolute -bottom-5 -left-5 px-4 py-2.5 rounded-xl bg-slate-900/95 border border-pink-500/30 shadow-xl backdrop-blur-md flex items-center gap-2 animate-float-reverse">
                <Share2 className="w-3.5 h-3.5 text-pink-400" />
                <span className="text-xs font-bold text-white">Meta Ads</span>
                <span className="text-[10px] text-slate-400 font-mono">Creatives</span>
              </div>

              {/* Floating Element 4: WordPress Badge */}
              <div className="absolute -bottom-5 -right-5 px-4 py-2.5 rounded-xl bg-slate-900/95 border border-blue-500/30 shadow-xl backdrop-blur-md flex items-center gap-2 animate-float-slow">
                <Globe className="w-3.5 h-3.5 text-blue-400" />
                <span className="text-xs font-bold text-white">WordPress</span>
                <span className="text-[10px] text-slate-400 font-mono">Dev</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
