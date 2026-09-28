import React from 'react';
import { GraduationCap, Calendar, School, Award, CheckCircle } from 'lucide-react';

const educationData = [
  {
    degree: 'BA English Literature',
    institution: 'Rathinam College of Arts and Science',
    location: 'Coimbatore, Tamil Nadu',
    period: '2020 – 2023',
    status: 'Graduated',
    description: 'Foundation in comprehensive communication, language proficiency, literary analysis, and structured editorial skills applied to digital marketing and content quality.',
    highlight: 'Higher Education'
  },
  {
    degree: 'Higher Secondary Certificate (HSC)',
    institution: 'State Board',
    location: 'Tamil Nadu',
    period: '2019 – 2020',
    status: 'Completed',
    description: 'Higher secondary school certificate curriculum under the State Board of Tamil Nadu.',
    highlight: 'Secondary Education'
  },
  {
    degree: 'Secondary School Leaving Certificate (SSLC)',
    institution: 'State Board',
    location: 'Tamil Nadu',
    period: '2017 – 2018',
    status: 'Completed',
    description: 'Secondary school education under the State Board of Tamil Nadu.',
    highlight: 'Foundation'
  },
];

export default function EducationSection() {
  return (
    <section id="education" className="py-20 lg:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-white tracking-tight">
            Education
          </h2>
          <p className="mt-3 text-base text-slate-400">
            Academic milestones providing the linguistic, analytical, and structured foundation for digital content and professional mentoring.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {educationData.map((item, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-indigo-500/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-500/10 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-indigo-500/10 text-indigo-300 font-semibold border border-indigo-500/20">
                    {item.highlight}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs text-slate-400">
                    <Calendar className="w-3.5 h-3.5 text-indigo-400" />
                    <span>{item.period}</span>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-heading font-bold text-white group-hover:text-indigo-300 transition-colors">
                    {item.degree}
                  </h3>
                  <div className="flex items-center gap-2 text-xs text-slate-300 mt-1.5">
                    <School className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>{item.institution}</span>
                  </div>
                </div>

                <p className="text-xs text-slate-400 leading-relaxed pt-2">
                  {item.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-800/80 flex items-center justify-between text-xs">
                <span className="text-slate-500">{item.location}</span>
                <span className="inline-flex items-center gap-1 text-emerald-400 font-medium">
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span>{item.status}</span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
