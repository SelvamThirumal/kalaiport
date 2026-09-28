import React from 'react';
import { Mail, Phone, MapPin, ArrowUp, Heart } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="relative bg-slate-950 border-t border-slate-800/80 text-slate-400 pt-16 pb-12 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16 pb-12 border-b border-slate-900">
          {/* Identity & Role */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-indigo-600 to-purple-600 flex items-center justify-center text-white font-black text-sm">
                KR
              </div>
              <span className="text-xl font-heading font-black tracking-wider text-white">
                KALAIVANI RAMESH
              </span>
            </div>
            <p className="text-sm text-indigo-400 font-semibold tracking-wide">
              Digital Marketing Trainer & Skill Mentor
            </p>
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Empowering learners and teams through hands-on campaign execution, SEO, search advertising, and structured skill mentorship.
            </p>
          </div>

          {/* Quick Navigation Links */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-4">
              Quick Links
            </h3>
            <ul className="grid grid-cols-2 gap-2.5 text-sm">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:text-white transition-colors flex items-center gap-1.5 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-700 group-hover:bg-indigo-400 transition-colors" />
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-4">
              Contact Information
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-3 text-slate-300">
                <MapPin className="w-4 h-4 text-indigo-400 shrink-0" />
                <span>Coimbatore, Tamil Nadu</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-indigo-400 shrink-0" />
                <a
                  href="mailto:2202kalaivaniramesh@gmail.com"
                  className="hover:text-indigo-400 transition-colors text-slate-300"
                >
                  2202kalaivaniramesh@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-indigo-400 shrink-0" />
                <a
                  href="tel:9087244866"
                  className="hover:text-indigo-400 transition-colors text-slate-300"
                >
                  +91 9087244866
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 Kalaivani Ramesh. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-slate-400">
              Built for performance & practical mentorship
            </span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 transition-colors flex items-center gap-1.5"
              title="Back to top"
              aria-label="Back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span className="text-[11px] font-medium">Top</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
