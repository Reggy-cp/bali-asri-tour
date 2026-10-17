'use client';

import React, { useState } from 'react';
import { Send, CheckCircle2, MessageCircle } from 'lucide-react';
import { CONTACT_INFO } from '@/data/navigation';

interface BlogInquiryFormProps {
  postTitle: string;
}

export default function BlogInquiryForm({ postTitle }: BlogInquiryFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  const whatsappDirectUrl = `https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encodeURIComponent(
    `Hello Bali Asri Tour,\n\nI read your article "${postTitle}" and would like to inquire:\nName: ${formData.name || 'Guest'}\nEmail: ${formData.email || '-'}\nDate: ${formData.date || '-'}\nMessage: ${formData.message || 'I have questions about Visa / Airport Transfer.'}`
  )}`;

  return (
    <div className="bg-[#499539] text-white rounded-2xl p-6 sm:p-8 shadow-md">
      <h3 className="font-heading font-bold text-2xl text-white mb-6">
        Want to know more?
      </h3>

      {submitted ? (
        <div className="bg-white/10 rounded-xl p-6 text-center space-y-4">
          <CheckCircle2 className="w-12 h-12 text-[#FFB200] mx-auto" />
          <h4 className="font-heading font-bold text-xl text-white">
            Thank You, {formData.name || 'Traveler'}!
          </h4>
          <p className="text-white/90 text-sm font-body max-w-md mx-auto leading-relaxed">
            Your inquiry has been received. Our team at <strong>Bali Asri Tour</strong> will get in touch shortly to assist with your arrival and travel plans.
          </p>
          <div className="pt-2">
            <a
              href={whatsappDirectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full font-heading font-bold text-xs uppercase tracking-wider text-gray-900 bg-[#FFB200] hover:bg-[#E09D00] shadow-sm transition-all"
            >
              <MessageCircle className="w-4 h-4 fill-gray-900" />
              <span>Connect on WhatsApp Instantly</span>
            </a>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4 font-body">
          {/* 1. Name */}
          <div>
            <label htmlFor="blog-name" className="block text-xs font-semibold text-white mb-1.5">
              Name
            </label>
            <input
              id="blog-name"
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full bg-white text-gray-900 rounded-md px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#FFB200] transition-all"
            />
          </div>

          {/* 2. Email Address */}
          <div>
            <label htmlFor="blog-email" className="block text-xs font-semibold text-white mb-1.5">
              Email address
            </label>
            <input
              id="blog-email"
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-white text-gray-900 rounded-md px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#FFB200] transition-all"
            />
          </div>

          {/* 3. Phone / WhatsApp */}
          <div>
            <label htmlFor="blog-phone" className="block text-xs font-semibold text-white mb-1.5">
              Phone / WhatsApp
            </label>
            <input
              id="blog-phone"
              type="tel"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              className="w-full bg-white text-gray-900 rounded-md px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#FFB200] transition-all"
            />
          </div>

          {/* 4. Date */}
          <div>
            <label htmlFor="blog-date" className="block text-xs font-semibold text-white mb-1.5">
              Date
            </label>
            <input
              id="blog-date"
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full bg-white text-gray-900 rounded-md px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#FFB200] transition-all"
            />
          </div>

          {/* 5. Message */}
          <div>
            <label htmlFor="blog-message" className="block text-xs font-semibold text-white mb-1.5">
              Message (Full Address Hotel / Villa / Flight Number)
            </label>
            <textarea
              id="blog-message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className="w-full bg-white text-gray-900 rounded-md px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#FFB200] transition-all"
            />
          </div>

          {/* 6. Submit Button */}
          <div className="pt-2">
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 px-8 rounded-full font-heading font-bold text-sm uppercase tracking-wider text-white bg-[#FFA800] hover:bg-[#E09D00] shadow-sm transition-all active:scale-95 text-center flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75"
            >
              {loading ? (
                <span>Submitting...</span>
              ) : (
                <>
                  <span>Submit</span>
                </>
              )}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
