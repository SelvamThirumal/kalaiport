import React from 'react';
import { Search, BarChart3, Target, PenTool, Layout, Users, Sparkles, Check } from 'lucide-react';

const skillCategories = [
  {
    id: 'seo',
    title: 'SEO (Search Engine Optimization)',
    icon: Search,
    color: 'from-blue-500/20 to-indigo-500/10 text-blue-400 border-blue-500/30',
    badge: 'Organic Visibility',
    skills: [
      'On-Page SEO',
      'Off-Page SEO',
      'Technical SEO',
      'Keyword Research & Planning',
      'Google Search Console',
    ],
  },
  {
    id: 'analytics',
    title: 'Analytics & Measurement',
    icon: BarChart3,
    color: 'from-amber-500/20 to-orange-500/10 text-amber-400 border-amber-500/30',
    badge: 'Data Intelligence',
    skills: [
      'Google Analytics 4',
      'Google Tag Manager',
      'Google Looker Studio',
    ],
  },
  {
    id: 'paid-ads',
    title: 'Paid Advertising',
    icon: Target,
    color: 'from-purple-500/20 to-pink-500/10 text-purple-400 border-purple-500/30',
    badge: 'Performance Marketing',
    skills: [
      'Google Ads',
      'Meta Ads',
      'Meta Business Suite',
    ],
  },
  {
    id: 'content',
    title: 'Content & Design',
    icon: PenTool,
    color: 'from-rose-500/20 to-red-500/10 text-rose-400 border-rose-500/30',
    badge: 'Creative & Copy',
    skills: [
      'Content Creation',
      'Copywriting',
      'Canva Designing',
      'Email Marketing',
      'Mailchimp',
    ],
  },
  {
    id: 'website',
    title: 'Website Development',
    icon: Layout,
    color: 'from-emerald-500/20 to-teal-500/10 text-emerald-400 border-emerald-500/30',
    badge: 'Web Management',
    skills: [
      'WordPress Website Development',
    ],
  },
  {
    id: 'professional',
    title: 'Professional Capabilities',
    icon: Users,
    color: 'from-indigo-500/20 to-cyan-500/10 text-indigo-400 border-indigo-500/30',
    badge: 'Pedagogy & Leadership',
    skills: [
      'Training Delivery',
      'Technical Mentoring',
    ],
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 lg:py-28 relative bg-slate-900/40 border-y border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Technical & Pedagogical Skillset</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-white tracking-tight">
            Core Skills & Specializations
          </h2>
          <p className="mt-3 text-base text-slate-400">
            Categorized competency matrix grounded strictly in hands-on campaign execution and training delivery.
          </p>
        </div>

        {/* 6 Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category) => {
            const Icon = category.icon;

            return (
              <div
                key={category.id}
                className="group relative p-7 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-indigo-500/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-500/10 flex flex-col justify-between"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center justify-between mb-5">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${category.color} border`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                      {category.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-heading font-bold text-white mb-4 group-hover:text-indigo-300 transition-colors">
                    {category.title}
                  </h3>

                  {/* Skills Pill List */}
                  <ul className="space-y-2.5">
                    {category.skills.map((skill, sIndex) => (
                      <li
                        key={sIndex}
                        className="flex items-center gap-2.5 p-2 rounded-lg bg-slate-800/40 border border-slate-800/60 text-xs text-slate-200 group-hover:border-slate-700 transition-colors"
                      >
                        <div className="w-4 h-4 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center shrink-0">
                          <Check className="w-2.5 h-2.5" />
                        </div>
                        <span className="font-medium">{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-5 mt-6 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
                  <span>Verified Resume Capability</span>
                  <span className="text-indigo-400 font-mono">100% Practical</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
