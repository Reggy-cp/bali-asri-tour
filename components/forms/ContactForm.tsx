'use client';

import React, { useState } from 'react';
import { z } from 'zod';
import { MessageCircle, Send, CheckCircle2, AlertCircle, Calendar, Users, Car } from 'lucide-react';
import { CONTACT_INFO } from '@/data/navigation';

const inquirySchema = z.object({
  fullName: z.string().min(2, 'Please enter your full name (at least 2 characters)'),
  email: z.string().email('Please enter a valid email address'),
  phoneWhatsApp: z.string().min(7, 'Please provide your WhatsApp or phone number'),
  travelDate: z.string().min(1, 'Please select your preferred travel date'),
  guests: z.string().min(1, 'Please select the number of guests'),
  serviceType: z.string().min(1, 'Please select a tour or vehicle service'),
  notes: z.string().optional(),
});

type InquiryFormData = z.infer<typeof inquirySchema>;

interface ContactFormProps {
  initialService?: string;
  className?: string;
}

export default function ContactForm({ initialService = 'Custom Bali Tour Package', className = '' }: ContactFormProps) {
  const [formData, setFormData] = useState<InquiryFormData>({
    fullName: '',
    email: '',
    phoneWhatsApp: '',
    travelDate: '',
    guests: '2 Adults',
    serviceType: initialService,
    notes: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof InquiryFormData, string>>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof InquiryFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const validation = inquirySchema.safeParse(formData);

    if (!validation.success) {
      const fieldErrors: Partial<Record<keyof InquiryFormData, string>> = {};
      validation.error.issues.forEach((issue) => {
        const fieldName = issue.path[0] as keyof InquiryFormData;
        fieldErrors[fieldName] = issue.message;
      });
      setErrors(fieldErrors);
      setIsSubmitting(false);
      return;
    }

    // Simulate API submission / dispatch
    await new Promise((resolve) => setTimeout(resolve, 600));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const whatsappMessage = `*Tour & Car Inquiry — Bali Asri Tour*
• Name: ${formData.fullName || 'Guest'}
• Email: ${formData.email || 'N/A'}
• WhatsApp: ${formData.phoneWhatsApp || 'N/A'}
• Travel Date: ${formData.travelDate || 'Flexible'}
• Party Size: ${formData.guests}
• Selected Service: ${formData.serviceType}
• Notes: ${formData.notes || 'None'}`;

  const directWhatsAppUrl = `https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  if (isSubmitted) {
    return (
      <div className={`p-8 rounded-2xl bg-white shadow-card border border-emerald-100 text-center space-y-5 ${className}`}>
        <div className="w-14 h-14 mx-auto rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <div className="space-y-2">
          <h3 className="font-heading font-bold text-2xl text-brand-secondary">
            Inquiry Received Successfully!
          </h3>
          <p className="text-sm text-body-muted max-w-md mx-auto">
            Thank you, <strong className="text-gray-800">{formData.fullName}</strong>. Agung and our team will review your travel plans and reply via email or WhatsApp within a few hours.
          </p>
        </div>

        <div className="pt-2">
          <a
            href={directWhatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-brand-whatsapp hover:bg-brand-whatsapp-dark text-white font-medium text-sm shadow-md transition-all duration-200"
          >
            <MessageCircle className="w-5 h-5 fill-current" />
            <span>Fast-Track Confirmation on WhatsApp</span>
          </a>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className={`p-6 sm:p-8 rounded-2xl bg-white shadow-card border border-gray-100 space-y-5 ${className}`}
    >
      <div className="space-y-1">
        <h3 className="font-heading font-bold text-xl sm:text-2xl text-brand-secondary">
          Request a Custom Tour or Car Quote
        </h3>
        <p className="text-xs text-body-muted">
          Fill in your details below. We reply promptly with transparent, all-inclusive pricing.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Full Name */}
        <div className="space-y-1">
          <label htmlFor="fullName" className="block text-xs font-medium text-gray-700">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="e.g. John Smith"
            className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-gray-800 bg-surface-light focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-primary ${
              errors.fullName ? 'border-red-400' : 'border-gray-200'
            }`}
          />
          {errors.fullName && <p className="text-[11px] text-red-500">{errors.fullName}</p>}
        </div>

        {/* Email */}
        <div className="space-y-1">
          <label htmlFor="email" className="block text-xs font-medium text-gray-700">
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="e.g. john@example.com"
            className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-gray-800 bg-surface-light focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-primary ${
              errors.email ? 'border-red-400' : 'border-gray-200'
            }`}
          />
          {errors.email && <p className="text-[11px] text-red-500">{errors.email}</p>}
        </div>

        {/* WhatsApp Phone */}
        <div className="space-y-1">
          <label htmlFor="phoneWhatsApp" className="block text-xs font-medium text-gray-700">
            WhatsApp / Mobile Phone <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            id="phoneWhatsApp"
            name="phoneWhatsApp"
            value={formData.phoneWhatsApp}
            onChange={handleChange}
            placeholder="e.g. +61 412 345 678"
            className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-gray-800 bg-surface-light focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-primary ${
              errors.phoneWhatsApp ? 'border-red-400' : 'border-gray-200'
            }`}
          />
          {errors.phoneWhatsApp && <p className="text-[11px] text-red-500">{errors.phoneWhatsApp}</p>}
        </div>

        {/* Travel Date */}
        <div className="space-y-1">
          <label htmlFor="travelDate" className="block text-xs font-medium text-gray-700">
            Travel / Pickup Date <span className="text-red-500">*</span>
          </label>
          <input
            type="date"
            id="travelDate"
            name="travelDate"
            value={formData.travelDate}
            onChange={handleChange}
            className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-gray-800 bg-surface-light focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-primary ${
              errors.travelDate ? 'border-red-400' : 'border-gray-200'
            }`}
          />
          {errors.travelDate && <p className="text-[11px] text-red-500">{errors.travelDate}</p>}
        </div>

        {/* Guests Count */}
        <div className="space-y-1">
          <label htmlFor="guests" className="block text-xs font-medium text-gray-700">
            Number of Guests <span className="text-red-500">*</span>
          </label>
          <select
            id="guests"
            name="guests"
            value={formData.guests}
            onChange={handleChange}
            className="w-full px-3.5 py-2.5 rounded-lg border border-gray-200 text-sm text-gray-800 bg-surface-light focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-primary"
          >
            <option value="1 Solo Traveler">1 Solo Traveler</option>
            <option value="2 Adults (Couple)">2 Adults (Couple)</option>
            <option value="3-4 Guests (Family)">3–4 Guests (Family)</option>
            <option value="5-6 Guests (Group)">5–6 Guests (Group)</option>
            <option value="7-15 Guests (Minibus)">7–15 Guests (Minibus)</option>
            <option value="16+ Guests (Large Group)">16+ Guests (Large Group)</option>
          </select>
        </div>

        {/* Service Type */}
        <div className="space-y-1">
          <label htmlFor="serviceType" className="block text-xs font-medium text-gray-700">
            Interested Service <span className="text-red-500">*</span>
          </label>
          <select
            id="serviceType"
            name="serviceType"
            value={formData.serviceType}
            onChange={handleChange}
            className="w-full px-3.5 py-2.5 rounded-lg border border-gray-200 text-sm text-gray-800 bg-surface-light focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-primary"
          >
            <option value="7 Days 6 Nights Bali Package">7 Days 6 Nights Bali Package</option>
            <option value="5 Days 4 Nights Best of Bali">5 Days 4 Nights Best of Bali</option>
            <option value="3 Days Amazing Bali Tour">3 Days Amazing Bali Tour</option>
            <option value="10 Days Grand Bali Circuit">10 Days Grand Bali Circuit</option>
            <option value="Bali Honeymoon Packages">Bali Honeymoon Packages</option>
            <option value="Ubud & Waterfall Day Tour">Ubud & Waterfall Day Tour</option>
            <option value="Car Rental: Toyota Avanza ($40/day)">Car Rental: Toyota Avanza ($40/day)</option>
            <option value="Car Rental: Toyota Innova Reborn ($65/day)">Car Rental: Toyota Innova Reborn ($65/day)</option>
            <option value="Car Rental: Toyota HiAce Minibus ($100/day)">Car Rental: Toyota HiAce Minibus ($100/day)</option>
            <option value="Airport Shuttle Transfer">Airport Shuttle Transfer</option>
            <option value="Custom Itinerary Inquiry">Custom Itinerary Inquiry</option>
          </select>
        </div>
      </div>

      {/* Special Requests */}
      <div className="space-y-1">
        <label htmlFor="notes" className="block text-xs font-medium text-gray-700">
          Notes or Custom Requests (Optional)
        </label>
        <textarea
          id="notes"
          name="notes"
          rows={3}
          value={formData.notes}
          onChange={handleChange}
          placeholder="Tell us about places you want to see, hotel location, or special dietary/mobility needs..."
          className="w-full px-3.5 py-2.5 rounded-lg border border-gray-200 text-sm text-gray-800 bg-surface-light focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-primary"
        />
      </div>

      {/* Action Buttons */}
      <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-brand-primary hover:bg-brand-primary-dark text-white font-medium text-sm shadow-sm transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-50"
        >
          <Send className="w-4 h-4" />
          <span>{isSubmitting ? 'Sending Request...' : 'Send Inquiry Form'}</span>
        </button>

        <a
          href={directWhatsAppUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-brand-whatsapp hover:bg-brand-whatsapp-dark text-white font-medium text-sm shadow-floating transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
        >
          <MessageCircle className="w-4 h-4 fill-current" />
          <span>Prefer Instant WhatsApp?</span>
        </a>
      </div>
    </form>
  );
}
