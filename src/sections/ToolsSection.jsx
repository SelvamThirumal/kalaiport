import React, { useState } from 'react';
import { 
  Globe, 
  Palette, 
  Share2, 
  Target, 
  BarChart2, 
  Code, 
  Search, 
  TrendingUp, 
  PieChart, 
  Database, 
  Calendar, 
  Layers, 
  FileSpreadsheet, 
  Compass, 
  Cpu, 
  Wrench 
} from 'lucide-react';

const toolsList = [
  { name: 'WordPress', category: 'CMS & Web', icon: Globe, description: 'Website building, CMS architecture & theme customization' },
  { name: 'Canva', category: 'Design', icon: Palette, description: 'Social creatives, ad banners, presentations & visual layouts' },
  { name: 'Meta Business Suite', category: 'Social Management', icon: Share2, description: 'Unified scheduling, page governance & audience messaging' },
  { name: 'Meta Ads Manager', category: 'Paid Advertising', icon: Target, description: 'Campaign structure, audience targeting & pixel tracking' },
  { name: 'Google Ads', category: 'Search & PPC', icon: Target, description: 'Search, Performance Max, lead generation & ad extensions' },
  { name: 'Google Analytics 4', category: 'Analytics', icon: BarChart2, description: 'Event-driven telemetry, user behavior & attribution tracking' },
  { name: 'Google Tag Manager', category: 'Analytics', icon: Code, description: 'Custom event triggers, tags, pixels & container management' },
  { name: 'Google Search Console', category: 'SEO', icon: Search, description: 'Index coverage, sitemaps, performance queries & crawl health' },
  { name: 'Google Keyword Planner', category: 'SEO & Ads', icon: Compass, description: 'Search volume forecasting, keyword discovery & competition' },
  { name: 'Google Trends', category: 'Market Research', icon: TrendingUp, description: 'Regional search interest patterns & trending keyword signals' },
  { name: 'Google Looker Studio', category: 'Reporting', icon: PieChart, description: 'Custom interactive dashboards & visual client reporting' },
  { name: 'Zoho CRM', category: 'CRM & Automation', icon: Database, description: 'Lead pipeline tracking, customer interactions & follow-up workflows' },
  { name: 'Hootsuite', category: 'Social Media', icon: Calendar, description: 'Multi-platform social scheduling & engagement monitoring' },
  { name: 'Semrush', category: 'SEO & Competitors', icon: Layers, description: 'Domain overview, backlink audits & organic competitor research' },
  { name: 'Screaming Frog', category: 'Technical SEO', icon: Cpu, description: 'Deep site spidering, status code audits & metadata inspection' },
  { name: 'Excel Reporting', category: 'Data Analysis', icon: FileSpreadsheet, description: 'Data pivot models, performance reporting & campaign reconciliation' },
];

export default function ToolsSection() {
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'SEO & Analytics', 'Paid & Social', 'CMS & Design', 'Operations'];

  const filteredTools = toolsList.filter((tool) => {
    if (filter === 'All') return true;
    if (filter === 'SEO & Analytics') {
      return ['SEO', 'Analytics', 'Reporting', 'Technical SEO', 'SEO & Ads', 'Market Research'].includes(tool.category);
    }
    if (filter === 'Paid & Social') {
      return ['Paid Advertising', 'Search & PPC', 'Social Management', 'Social Media'].includes(tool.category);
    }
    if (filter === 'CMS & Design') {
      return ['CMS & Web', 'Design'].includes(tool.category);
    }
    if (filter === 'Operations') {
      return ['CRM & Automation', 'Data Analysis'].includes(tool.category);
    }
    return true;
  });

  return (
    <section id="tools" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Wrench className="w-3.5 h-3.5" />
            <span>Tech Stack & Ecosystem</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-white tracking-tight">
            Tools & Platforms
          </h2>
          <p className="mt-3 text-base text-slate-400">
            Industry standard toolchains mastered and taught across hands-on live training modules.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                  filter === cat
                    ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                    : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* 16 Tool Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredTools.map((tool, index) => {
            const Icon = tool.icon;
            return (
              <div
                key={index}
                className="group p-5 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-indigo-500/40 hover:bg-slate-900/90 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-indigo-500/10 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2.5 rounded-xl bg-slate-800/80 text-indigo-400 group-hover:text-white group-hover:bg-indigo-600 transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800/80 text-slate-400 border border-slate-700/60">
                      {tool.category}
                    </span>
                  </div>

                  <h3 className="text-base font-heading font-bold text-white group-hover:text-indigo-300 transition-colors">
                    {tool.name}
                  </h3>

                  <p className="text-xs text-slate-400 leading-relaxed mt-2">
                    {tool.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800/60 flex items-center justify-between text-[11px] text-slate-500">
                  <span>Hands-on Live Usage</span>
                  <span className="text-emerald-400 font-medium">Proficient</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
