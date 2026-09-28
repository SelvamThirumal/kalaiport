import React from 'react';
import { Award, CheckCircle2, ShieldCheck, Calendar, MapPin } from 'lucide-react';

const certifications = [
  {
    title: 'Digital Marketing',
    issuer: 'Vinsup Academy',
    location: 'Coimbatore',
    year: '2025',
    category: 'Full-Stack Digital Marketing',
    description: 'Comprehensive certification covering SEO, Google Ads, Meta Ads, social media marketing, content planning, and analytics.',
    verified: true,
  },
  {
    title: 'AI-Powered Performance Ads Certification',
    issuer: 'Google Skillshop',
    location: 'Coimbatore',
    year: '2025',
    category: 'Google Ads Specialization',
    description: 'Demonstrated proficiency in building, optimizing, and scaling AI-driven Google Performance Max campaigns to maximize conversion value.',
    verified: true,
  },
  {
    title: 'AI-Powered Shopping Ads Certification',
    issuer: 'Google Skillshop',
    location: 'Coimbatore',
    year: '2025',
    category: 'E-commerce & Shopping',
    description: 'Credential validating expertise in configuring Google Merchant Center feeds, Shopping Ads, and AI-optimized retail advertising.',
    verified: true,
  },
];

export default function CertificationsSection() {
  return (
    <section id="certifications" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-white tracking-tight">
            Certifications & Accreditations
          </h2>
          <p className="mt-3 text-base text-slate-400">
            Official credentials earned through rigorous testing in digital marketing methodology and Google AI advertising solutions.
          </p>
        </div>

        {/* 3 Certification Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-2xl bg-gradient-to-b from-slate-900/90 to-slate-950/90 border border-slate-800 hover:border-indigo-500/40 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-indigo-500/15 flex flex-col justify-between"
            >
              {/* Subtle card glow */}
              <div className="absolute top-0 right-0 w-28 h-28 bg-indigo-500/5 rounded-full blur-2xl group-hover:bg-indigo-500/10 transition-colors pointer-events-none" />

              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="p-3 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 group-hover:scale-105 transition-transform">
                    <Award className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-slate-800 text-indigo-300 border border-slate-700">
                    {cert.category}
                  </span>
                </div>

                <h3 className="text-lg font-heading font-bold text-white group-hover:text-indigo-300 transition-colors">
                  {cert.title}
                </h3>

                <p className="text-sm font-semibold text-slate-300 mt-2">
                  {cert.issuer}
                </p>

                <p className="text-xs text-slate-400 leading-relaxed mt-3">
                  {cert.description}
                </p>
              </div>

              {/* Bottom metadata */}
              <div className="mt-8 pt-5 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-slate-500" />
                  <span>{cert.location}</span>
                  <span className="mx-1 text-slate-700">•</span>
                  <Calendar className="w-3.5 h-3.5 text-slate-500" />
                  <span>{cert.year}</span>
                </div>

                <div className="flex items-center gap-1 text-emerald-400 font-medium">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Verified</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
