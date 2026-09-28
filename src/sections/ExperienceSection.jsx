import React, { useState } from 'react';
import { Briefcase, Calendar, ChevronDown, ChevronUp, MapPin, CheckCircle2 } from 'lucide-react';

const experiences = [
  {
    company: 'Vinsup Skill Academy',
    role: 'Skill Mentor',
    period: 'June 2026 - Present',
    badge: 'Current Role',
    type: 'Mentorship & Practical Training',
    summary: 'Guiding aspiring digital marketers in real-world marketing techniques, hands-on campaign execution, and skill development.',
    responsibilities: [
      'Delivering practical skill mentorship across core digital marketing disciplines.',
      'Guiding learners through live campaign execution, performance troubleshooting, and optimization tactics.',
      'Conducting structured review sessions to evaluate student projects and skill acquisition.',
      'Mentoring candidates on industry-standard workflows and campaign problem-solving.'
    ]
  },
  {
    company: 'Career Ladder',
    role: 'Digital Marketing Trainer & Executive',
    period: 'December 2025 - March 2026',
    badge: 'Training & Execution',
    type: 'Comprehensive Training',
    summary: 'Delivered intensive end-to-end digital marketing curriculum with live website building, mock interviews, and career portfolio guidance.',
    responsibilities: [
      'Delivered comprehensive Digital Marketing training across search, social, and web marketing.',
      'Conducted hands-on practical sessions focusing on active implementation rather than passive theory.',
      'Guided learners through live website development on WordPress and landing page creation.',
      'Managed real-world projects simulating industry client briefs and campaign setups.',
      'Conducted resume building, portfolio guidance, and LinkedIn profile optimization workshops.',
      'Organized mock interviews and technical mentoring to prepare candidates for hiring standards.',
      'Fostered industry-oriented skill development aligned with contemporary digital marketing expectations.'
    ]
  },
  {
    company: 'Han Digital Solutions',
    role: 'Senior Process Associate - Quality',
    period: 'May 2024 - October 2025',
    badge: 'Quality & Operations',
    type: 'Process Quality Assurance',
    summary: 'Led editorial quality control, proofreading standards, and operational training for incoming process team members.',
    responsibilities: [
      'Executed rigorous proofreading and multi-tier content quality checks across deliverables.',
      'Trained new employees and supported daily operations to maintain consistent output.',
      'Mentored and coached team members on adhering to standardized proofreading guidelines and editorial benchmarks.',
      'Formulated quality review feedback loops to enhance operational accuracy and throughput.'
    ]
  }
];

export default function ExperienceSection() {
  // Allow toggling expanded state for interactive depth
  const [expandedCards, setExpandedCards] = useState({ 0: true, 1: true, 2: true });

  const toggleCard = (index) => {
    setExpandedCards((prev) => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <section id="experience" className="py-20 lg:py-28 relative bg-slate-900/40 border-y border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Career Journey</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-white tracking-tight">
            Work Experience
          </h2>
          <p className="mt-3 text-base text-slate-400">
            A chronological timeline of roles in digital marketing education, campaign execution, and process quality.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Timeline Guide Line */}
          <div className="hidden md:block absolute left-8 top-6 bottom-6 w-0.5 bg-gradient-to-b from-indigo-500 via-purple-500 to-slate-800" />

          <div className="space-y-8">
            {experiences.map((exp, index) => {
              const isExpanded = expandedCards[index];

              return (
                <div key={index} className="relative flex flex-col md:flex-row items-start gap-6 group">
                  {/* Timeline Node Point (Desktop) */}
                  <div className="hidden md:flex shrink-0 w-16 h-16 rounded-2xl bg-slate-900 border-2 border-indigo-500/60 items-center justify-center text-indigo-400 shadow-lg shadow-indigo-500/20 group-hover:scale-105 group-hover:border-indigo-400 transition-all z-10">
                    <Briefcase className="w-6 h-6" />
                  </div>

                  {/* Experience Card */}
                  <div className="w-full p-6 sm:p-8 rounded-2xl bg-slate-900/90 border border-slate-800 group-hover:border-indigo-500/40 transition-all duration-300 shadow-xl backdrop-blur-sm">
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-800/80">
                      <div>
                        <div className="flex items-center gap-2 flex-wrap">
                          <h3 className="text-xl font-heading font-bold text-white group-hover:text-indigo-300 transition-colors">
                            {exp.role}
                          </h3>
                          <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
                            {exp.badge}
                          </span>
                        </div>
                        <p className="text-sm font-semibold text-slate-300 mt-1">
                          {exp.company}
                        </p>
                      </div>

                      <div className="flex items-center gap-2 text-xs font-mono text-slate-400 shrink-0">
                        <Calendar className="w-3.5 h-3.5 text-indigo-400" />
                        <span>{exp.period}</span>
                      </div>
                    </div>

                    {/* Summary */}
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mt-4">
                      {exp.summary}
                    </p>

                    {/* Interactive Responsibilities Drawer */}
                    {isExpanded && (
                      <div className="mt-5 pt-4 border-t border-slate-800/60 animate-in fade-in duration-200">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                          Key Deliverables & Responsibilities:
                        </h4>
                        <ul className="grid grid-cols-1 gap-2.5">
                          {exp.responsibilities.map((resp, rIndex) => (
                            <li key={rIndex} className="flex items-start gap-2.5 text-xs text-slate-300 leading-relaxed">
                              <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                              <span>{resp}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Toggle button */}
                    <button
                      onClick={() => toggleCard(index)}
                      className="mt-4 pt-2 text-xs font-semibold text-indigo-400 hover:text-indigo-300 transition-colors flex items-center gap-1 focus:outline-none"
                    >
                      <span>{isExpanded ? 'Collapse Details' : 'View All Responsibilities'}</span>
                      {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
