import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, MessageSquare } from 'lucide-react';
import ContactSection from '../sections/ContactSection';

export default function ContactPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <main className="flex-1 pt-28 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-white transition-colors p-2 rounded-lg bg-slate-900 border border-slate-800"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Portfolio Overview</span>
        </Link>
      </div>
      <ContactSection />
    </main>
  );
}
