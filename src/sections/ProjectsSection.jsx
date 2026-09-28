import React from 'react';
import { Target, Palette, Search, FileCheck, Users2, FolderGit2, CheckCircle2 } from 'lucide-react';

const projects = [
  {
    title: 'Google Ads Lead Generation Campaign',
    category: 'Paid Search Advertising',
    icon: Target,
    description: 'Created and managed Google Ads lead generation campaign.',
    deliverables: [
      'Keyword grouping & match type structuring',
      'Search ad copy creation & extension setup',
      'Bid optimization & negative keyword maintenance',
    ],
    tool: 'Google Ads',
    badge: 'Campaign Management'
  },
  {
    title: 'Social Media Creatives',
    category: 'Visual Design & Content',
    icon: Palette,
    description: 'Designed social media creatives using Canva.',
    deliverables: [
      'Visual asset creation tailored for feeds and stories',
      'Brand consistency across typography and color schemes',
      'Promotional banners for campaign engagement',
    ],
    tool: 'Canva',
    badge: 'Creative Production'
  },
  {
    title: 'SEO Audit & Keyword Research',
    category: 'Search Engine Optimization',
    icon: Search,
    description: 'Performed SEO audit and keyword research for a website project.',
    deliverables: [
      'On-page title, meta, and heading tag audit',
      'High-intent keyword discovery & search volume analysis',
      'Google Search Console indexing and technical review',
    ],
    tool: 'GSC & Keyword Planner',
    badge: 'Organic Search'
  },
  {
    title: 'Proofreading & Content Quality',
    category: 'Content QA & Editorial',
    icon: FileCheck,
    description: 'Handled proofreading and content quality checks.',
    deliverables: [
      'Detailed grammar, formatting, and tone consistency checks',
      'Verification against standard quality guidelines',
      'Editorial review to ensure error-free client deliverables',
    ],
    tool: 'Quality Frameworks',
    badge: 'Process Quality'
  },
  {
    title: 'Employee Training',
    category: 'Operational Mentorship',
    icon: Users2,
    description: 'Trained new employees and supported daily operations.',
    deliverables: [
      'Structured onboarding on process standards and guidelines',
      'Hands-on coaching sessions for error reduction',
      'Daily operational workflow support and mentoring',
    ],
    tool: 'SOPs & Mentorship',
    badge: 'Team Enablement'
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 lg:py-28 relative bg-slate-900/40 border-y border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Practical Portfolio</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-white tracking-tight">
            Projects & Practical Work
          </h2>
          <p className="mt-3 text-base text-slate-400">
            Real practical projects and campaign deliverables executed across digital marketing and operational training.
          </p>
        </div>

        {/* 5 Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon;

            return (
              <div
                key={index}
                className="group relative p-7 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-indigo-500/40 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-indigo-500/10 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="p-3 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 group-hover:scale-105 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                      {project.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-heading font-bold text-white group-hover:text-indigo-300 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-xs text-indigo-400 font-medium mt-1">
                    {project.category}
                  </p>

                  <p className="text-xs text-slate-300 leading-relaxed mt-3">
                    {project.description}
                  </p>

                  {/* Key Tasks Covered */}
                  <div className="mt-5 pt-4 border-t border-slate-800/80">
                    <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2.5">
                      Key Practical Focus:
                    </h4>
                    <ul className="space-y-2">
                      {project.deliverables.map((item, dIndex) => (
                        <li key={dIndex} className="flex items-start gap-2 text-xs text-slate-400">
                          <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/60 flex items-center justify-between text-xs text-slate-400">
                  <span className="font-mono text-[11px] text-slate-500">Tool: {project.tool}</span>
                  <span className="text-emerald-400 font-medium text-[11px]">Completed & Verified</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
