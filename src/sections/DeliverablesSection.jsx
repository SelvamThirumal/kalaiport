import React from 'react';
import { 
  Globe, 
  Search, 
  CalendarDays, 
  Target, 
  Database, 
  BarChart, 
  TrendingUp, 
  LineChart, 
  Bot, 
  Sparkles,
  Layers
} from 'lucide-react';

const deliverables = [
  {
    icon: Globe,
    title: 'Website Development',
    description: 'Fully responsive WordPress websites and conversion-focused landing pages designed for seamless user experience.',
    badge: 'Web Asset'
  },
  {
    icon: Search,
    title: 'SEO Strategy',
    description: 'End-to-end On-Page, Off-Page, and Technical SEO blueprints with focused keyword maps and search console audit roadmaps.',
    badge: 'Search'
  },
  {
    icon: CalendarDays,
    title: 'Social Media Content Plan',
    description: 'Structured editorial calendars, creative asset specifications, and engagement schedules for multi-channel brand presence.',
    badge: 'Social'
  },
  {
    icon: Target,
    title: 'Paid Ads Campaign Mock-up',
    description: 'Complete campaign architecture including keyword grouping, ad copy variations, audience targeting, and budget plans.',
    badge: 'Advertising'
  },
  {
    icon: Database,
    title: 'CRM Management',
    description: 'Lead intake pipelines, status staging, contact segmentation, and systematic nurturing workflows using Zoho CRM.',
    badge: 'Automation'
  },
  {
    icon: BarChart,
    title: 'Performance Analytics Report',
    description: 'Custom GA4 and Looker Studio dashboards tracking traffic sources, engagement metrics, and conversion paths.',
    badge: 'Analytics'
  },
  {
    icon: TrendingUp,
    title: 'ROI Analysis',
    description: 'Evaluation frameworks comparing ad spend against lead velocity, acquisition costs, and marketing channel profitability.',
    badge: 'Finance & Growth'
  },
  {
    icon: LineChart,
    title: 'Growth Projection',
    description: 'Data-driven forecasting outlining realistic traffic, inquiry milestones, and phased scaling scenarios.',
    badge: 'Strategy'
  },
  {
    icon: Bot,
    title: 'AEO Content Optimization',
    description: 'Answer Engine Optimization structuring content for answer cards, voice search, and AI-driven summary snippets.',
    badge: 'Next-Gen Search'
  },
  {
    icon: Sparkles,
    title: 'AI Search Visibility Strategy (GEO)',
    description: 'Generative Engine Optimization techniques to enhance brand presence and citation visibility in modern AI search platforms.',
    badge: 'AI Search (GEO)'
  },
];

export default function DeliverablesSection() {
  return (
    <section id="deliverables" className="py-20 lg:py-28 relative bg-slate-900/40 border-y border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>Tangible Outputs</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-white tracking-tight">
            Digital Marketing Deliverables
          </h2>
          <p className="mt-3 text-base text-slate-400">
            Structured, industry-standard assets, strategies, and performance frameworks developed and taught.
          </p>
        </div>

        {/* 10 Deliverable Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {deliverables.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="group p-5 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-indigo-500/40 hover:bg-slate-900 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-indigo-500/10 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2.5 rounded-xl bg-slate-800 text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-400 border border-slate-700">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-sm font-heading font-bold text-white group-hover:text-indigo-300 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-[11px] text-slate-400 leading-relaxed mt-2">
                    {item.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800/60 text-[10px] text-slate-500 flex items-center justify-between">
                  <span>Structured Artifact</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
