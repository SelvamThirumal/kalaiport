import React from 'react';
import { User, MapPin, Mail, Phone, BookOpen, Award, CheckCircle2 } from 'lucide-react';

export default function AboutSection() {
  const coreCompetencies = [
    'Search Engine Optimization (SEO)',
    'Google Ads & Meta Advertising',
    'Social Media Marketing & Creative Design',
    'Web Analytics (GA4 & Google Tag Manager)',
    'WordPress Website Development',
    'Content Creation & Copywriting',
    'Email Marketing & Campaign Flows',
    'Hands-on Practical Training & Mentorship',
  ];

  return (
    <section id="about" className="py-20 lg:py-28 relative bg-slate-900/40 border-y border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <User className="w-3.5 h-3.5" />
            <span>Profile Overview</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-white tracking-tight">
            About Me
          </h2>
          <p className="mt-3 text-base text-slate-400">
            Dedicated digital marketing educator and practitioner committed to transforming complex advertising and analytics concepts into structured, real-world execution.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Narrative & Scope */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-8 rounded-2xl bg-slate-900/80 border border-slate-800 backdrop-blur-sm space-y-4">
              <h3 className="text-xl font-heading font-bold text-white">
                Digital Marketing Trainer & Technical Skill Mentor
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                As a Digital Marketing Trainer and Skill Mentor, I bridge the gap between theoretical marketing concepts and real-world execution. My background spans comprehensive practical training across Search Engine Optimization (SEO), Paid Search with Google Ads, targeted Meta Advertising campaigns, and strategic Social Media Marketing.
              </p>
              <p className="text-slate-300 text-sm leading-relaxed">
                From live WordPress website development and technical SEO audits to end-to-end measurement through Google Analytics 4 and Google Tag Manager, my methodology centers on active campaign management, Canva-driven visual assets, and content creation that converts.
              </p>
              <p className="text-slate-300 text-sm leading-relaxed">
                In my mentorship programs, learners gain direct exposure to live campaigns, resume building, portfolio curation, and mock technical interviews designed to build verified industry capability.
              </p>
            </div>

            {/* Core Competencies Grid */}
            <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800/80">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-4">
                Core Domains of Practice
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {coreCompetencies.map((item, index) => (
                  <div key={index} className="flex items-center gap-2.5 text-xs text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Contact & Quick Info Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-2xl bg-gradient-to-b from-slate-900 to-slate-950 border border-indigo-500/20 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-2xl pointer-events-none" />

              <h3 className="text-lg font-heading font-bold text-white mb-6 flex items-center gap-2">
                <span>Direct Contact Details</span>
              </h3>

              <div className="space-y-5">
                <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-800/40 border border-slate-800">
                  <div className="p-2.5 rounded-lg bg-indigo-500/10 text-indigo-400 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 uppercase font-semibold">Location</div>
                    <div className="text-sm font-medium text-white mt-0.5">Coimbatore, Tamil Nadu</div>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-800/40 border border-slate-800">
                  <div className="p-2.5 rounded-lg bg-purple-500/10 text-purple-400 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs text-slate-400 uppercase font-semibold">Email Address</div>
                    <a
                      href="mailto:2202kalaivaniramesh@gmail.com"
                      className="text-sm font-medium text-indigo-300 hover:text-indigo-200 transition-colors block truncate mt-0.5"
                    >
                      2202kalaivaniramesh@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-800/40 border border-slate-800">
                  <div className="p-2.5 rounded-lg bg-pink-500/10 text-pink-400 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 uppercase font-semibold">Phone Number</div>
                    <a
                      href="tel:9087244866"
                      className="text-sm font-medium text-indigo-300 hover:text-indigo-200 transition-colors block mt-0.5"
                    >
                      +91 9087244866
                    </a>
                  </div>
                </div>
              </div>

              {/* Status pill */}
              <div className="mt-8 pt-6 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  Available for Training & Mentorship
                </span>
                <span className="font-mono text-slate-500">Tamil Nadu, IN</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
