import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Loader2, 
  CheckCircle2, 
  AlertCircle,
  MessageSquare,
  Sparkles
} from 'lucide-react';
import { sendContactMessage } from '../services/api';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [formErrors, setFormErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState(null); // { type: 'success' | 'error', message: string }

  const validate = () => {
    const errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.name.trim()) {
      errors.name = 'Full name is required';
    }

    if (!formData.email.trim()) {
      errors.email = 'Email address is required';
    } else if (!emailRegex.test(formData.email.trim())) {
      errors.email = 'Please enter a valid email address';
    }

    if (!formData.subject.trim()) {
      errors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      errors.message = 'Message content is required';
    } else if (formData.message.trim().length < 10) {
      errors.message = 'Message must be at least 10 characters long';
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear specific field error as user types
    if (formErrors[name]) {
      setFormErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFeedback(null);

    if (!validate()) {
      return;
    }

    setLoading(true);

    try {
      const response = await sendContactMessage(formData);

      if (response.success) {
        setFeedback({
          type: 'success',
          message: 'Thank you! Your message has been sent successfully. Kalaivani will get back to you shortly.',
        });

        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
        });
      } else {
        setFeedback({
          type: 'error',
          message: response.message || 'Unable to send message. Please try again.',
        });
      }
    } catch (err) {
      console.error('Contact submit error:', err);
      const errorMessage =
        err.response?.data?.message ||
        'Unable to connect to the email server. Please check your network or try again later.';
      setFeedback({
        type: 'error',
        message: errorMessage,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Get in Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-white tracking-tight">
            Let's Work Together
          </h2>
          <p className="mt-3 text-base text-slate-300">
            For training, mentoring, digital marketing projects, or professional inquiries, feel free to get in touch.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Info & Availability */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-2xl bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 shadow-xl space-y-6">
              <div>
                <h3 className="text-xl font-heading font-bold text-white mb-2">
                  Direct Inquiries
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Have a question about digital marketing syllabus, corporate workshops, or technical mentorship? Send a message directly via the contact form.
                </p>
              </div>

              <div className="space-y-4 pt-2">
                <div className="flex items-center gap-3.5 p-3.5 rounded-xl bg-slate-800/40 border border-slate-800">
                  <div className="p-2.5 rounded-lg bg-indigo-500/10 text-indigo-400">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-semibold uppercase text-slate-400">Location</div>
                    <div className="text-sm font-medium text-white">Coimbatore, Tamil Nadu</div>
                  </div>
                </div>

                <div className="flex items-center gap-3.5 p-3.5 rounded-xl bg-slate-800/40 border border-slate-800">
                  <div className="p-2.5 rounded-lg bg-purple-500/10 text-purple-400">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[11px] font-semibold uppercase text-slate-400">Email</div>
                    <a
                      href="mailto:2202kalaivaniramesh@gmail.com"
                      className="text-sm font-medium text-indigo-300 hover:text-indigo-200 transition-colors block truncate"
                    >
                      2202kalaivaniramesh@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3.5 p-3.5 rounded-xl bg-slate-800/40 border border-slate-800">
                  <div className="p-2.5 rounded-lg bg-pink-500/10 text-pink-400">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-semibold uppercase text-slate-400">Phone</div>
                    <a
                      href="tel:9087244866"
                      className="text-sm font-medium text-indigo-300 hover:text-indigo-200 transition-colors block"
                    >
                      +91 9087244866
                    </a>
                  </div>
                </div>
              </div>

              {/* Status Note */}
              <div className="p-4 rounded-xl bg-indigo-950/30 border border-indigo-500/20 text-xs text-indigo-300 space-y-1">
                <div className="font-semibold flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-indigo-400" />
                  <span>Nodemailer Email System Active</span>
                </div>
                <p className="text-[11px] text-slate-400 leading-normal">
                  Your submission is processed via Express API and directly routed to the verified recipient inbox.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-2xl backdrop-blur-md">
              {/* Feedback Alert */}
              {feedback && (
                <div
                  className={`mb-6 p-4 rounded-xl flex items-start gap-3 text-xs leading-relaxed animate-in fade-in duration-200 ${
                    feedback.type === 'success'
                      ? 'bg-emerald-950/60 border border-emerald-500/40 text-emerald-200'
                      : 'bg-rose-950/60 border border-rose-500/40 text-rose-200'
                  }`}
                >
                  {feedback.type === 'success' ? (
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  ) : (
                    <AlertCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                  )}
                  <div>
                    <strong className="block font-semibold mb-0.5">
                      {feedback.type === 'success' ? 'Message Delivered' : 'Notice'}
                    </strong>
                    <span>{feedback.message}</span>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                {/* Name & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Name Field */}
                  <div>
                    <label htmlFor="name" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                      Full Name <span className="text-rose-400">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Anand Kumar"
                      className={`w-full px-4 py-3 rounded-xl bg-slate-800/70 border text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all ${
                        formErrors.name ? 'border-rose-500/80 focus:ring-rose-500' : 'border-slate-700/80'
                      }`}
                    />
                    {formErrors.name && (
                      <p className="mt-1.5 text-xs text-rose-400">{formErrors.name}</p>
                    )}
                  </div>

                  {/* Email Field */}
                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                      Email Address <span className="text-rose-400">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. anand@company.com"
                      className={`w-full px-4 py-3 rounded-xl bg-slate-800/70 border text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all ${
                        formErrors.email ? 'border-rose-500/80 focus:ring-rose-500' : 'border-slate-700/80'
                      }`}
                    />
                    {formErrors.email && (
                      <p className="mt-1.5 text-xs text-rose-400">{formErrors.email}</p>
                    )}
                  </div>
                </div>

                {/* Phone & Subject Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Phone Field (Optional) */}
                  <div>
                    <label htmlFor="phone" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                      Phone Number <span className="text-slate-500 font-normal">(Optional)</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="e.g. +91 9876543210"
                      className="w-full px-4 py-3 rounded-xl bg-slate-800/70 border border-slate-700/80 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                    />
                  </div>

                  {/* Subject Field */}
                  <div>
                    <label htmlFor="subject" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                      Subject <span className="text-rose-400">*</span>
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="e.g. Digital Marketing Mentorship"
                      className={`w-full px-4 py-3 rounded-xl bg-slate-800/70 border text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all ${
                        formErrors.subject ? 'border-rose-500/80 focus:ring-rose-500' : 'border-slate-700/80'
                      }`}
                    />
                    {formErrors.subject && (
                      <p className="mt-1.5 text-xs text-rose-400">{formErrors.subject}</p>
                    )}
                  </div>
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="message" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                    Message <span className="text-rose-400">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe your inquiry, training requirements, or project details..."
                    className={`w-full px-4 py-3 rounded-xl bg-slate-800/70 border text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all resize-y ${
                      formErrors.message ? 'border-rose-500/80 focus:ring-rose-500' : 'border-slate-700/80'
                    }`}
                  />
                  {formErrors.message && (
                    <p className="mt-1.5 text-xs text-rose-400">{formErrors.message}</p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full py-4 px-6 rounded-xl font-semibold text-sm tracking-wide text-white transition-all flex items-center justify-center gap-2 ${
                    loading
                      ? 'bg-indigo-600/60 cursor-not-allowed opacity-75'
                      : 'bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 shadow-lg shadow-indigo-600/30 hover:shadow-indigo-600/50 hover:scale-[1.01] active:scale-[0.99]'
                  }`}
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
