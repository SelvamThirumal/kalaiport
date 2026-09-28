import React from 'react';
import { 
  Search, 
  Target, 
  Share2, 
  Layout, 
  Users, 
  FileText, 
  Compass, 
  Sparkles,
  ArrowRight
} from 'lucide-react';

const services = [
  {
    icon: Search,
    title: 'SEO Training',
    description: 'Practical training on On-Page, Off-Page, and Technical SEO, covering Google Search Console audits and systematic keyword planning.',
    tag: 'Organic Search'
  },
  {
    icon: Target,
    title: 'Google Ads Training',
    description: 'Hands-on curriculum in setting up search campaigns, managing lead generation ads, keyword bidding, and conversion optimization.',
    tag: 'PPC & Search'
  },
  {
    icon: Target,
    title: 'Meta Ads Training',
    description: 'Step-by-step guidance on Meta Ads Manager, Meta Business Suite, custom audience targeting, and creative testing strategies.',
    tag: 'Paid Social'
  },
  {
    icon: Share2,
    title: 'Social Media Marketing',
    description: 'Crafting content schedules, brand visual design on Canva, and engagement strategies across leading social media platforms.',
    tag: 'Brand Building'
  },
  {
    icon: Layout,
    title: 'WordPress Website Development',
    description: 'Building responsive websites and landing pages with WordPress, structured for conversion, SEO compliance, and user navigation.',
    tag: 'CMS & Web'
  },
  {
    icon: Users,
    title: 'Digital Marketing Mentoring',
    description: 'Personalized 1-on-1 and group mentorship, troubleshooting campaign bottlenecks, and building technical proficiency in live tools.',
    tag: 'Skill Mentoring'
  },
  {
    icon: FileText,
    title: 'Content & Copywriting',
    description: 'Creating high-intent ad copy, website text, email newsletters, and rigorous proofreading for clear, conversion-ready messaging.',
    tag: 'Content Quality'
  },
  {
    icon: Compass,
    title: 'Career & Interview Guidance',
    description: 'Specialized coaching in digital marketing resume building, portfolio structuring, LinkedIn optimization, and mock technical interviews.',
    tag: 'Professional Growth'
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Core Offerings</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-white tracking-tight">
            What I Do
          </h2>
          <p className="mt-3 text-base text-slate-400">
            Comprehensive digital marketing instruction and technical mentoring focused on hands-on practical mastery.
          </p>
        </div>

        {/* 8 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                className="group relative p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-indigo-500/40 hover:bg-slate-900/90 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-indigo-500/10 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="p-3 rounded-xl bg-slate-800 text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-400 border border-slate-700">
                      {service.tag}
                    </span>
                  </div>

                  <h3 className="text-base font-heading font-bold text-white group-hover:text-indigo-300 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-xs text-slate-400 leading-relaxed mt-2.5">
                    {service.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-indigo-400 opacity-90 group-hover:opacity-100 font-semibold">
                  <span>Hands-on Modules</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
