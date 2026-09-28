import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100 font-sans selection:bg-indigo-500 selection:text-white">
      {/* Sticky Navbar */}
      <Navbar />

      {/* Main Content Pages */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
        {/* Fallback route */}
        <Route path="*" element={<HomePage />} />
      </Routes>

      {/* Footer */}
      <Footer />
    </div>
  );
}
