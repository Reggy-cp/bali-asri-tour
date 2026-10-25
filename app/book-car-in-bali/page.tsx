'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Phone, Mail, MessageCircle, CheckCircle } from 'lucide-react';
import { CONTACT_INFO } from '@/data/navigation';

export default function BookCarInBaliPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    passengers: '2',
    date: '',
    pickupLocation: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // WhatsApp direct link fallback
    const msg = `Hello Bali Asri Tour, I would like to book a car with driver:%0A- Name: ${formData.name}%0A- Email: ${formData.email}%0A- WhatsApp: ${formData.phone}%0A- Passengers: ${formData.passengers}%0A- Date: ${formData.date}%0A- Pickup: ${formData.pickupLocation}%0A- Notes: ${formData.message}`;
    window.open(`https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${msg}`, '_blank');
  };

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-5xl mx-auto py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        
        {/* Top Header Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center pb-10 border-b border-gray-100">
          <div className="md:col-span-7 space-y-4">
            <h1 className="font-heading font-bold text-3xl sm:text-4xl text-[#308C17]">
              Book Car with Driver in Bali
            </h1>

            <div className="space-y-2 text-sm sm:text-base font-body text-gray-800">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#308C17]" />
                <a href="tel:+6281703734836" className="hover:underline font-medium">+62 817-0373-4836</a>
              </div>
              <div className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-[#308C17]" />
                <a href="https://wa.me/6281703734836" className="hover:underline font-medium">+62 817-0373-4836</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#308C17]" />
                <a href={`mailto:${CONTACT_INFO.email}`} className="hover:underline font-medium">{CONTACT_INFO.email}</a>
              </div>
            </div>
          </div>

          <div className="md:col-span-5 flex justify-center md:justify-end">
            <div className="relative w-72 h-36">
              <Image
                src="/images/tripadvisor-awards.jpg"
                alt="TripAdvisor Awards Bali Asri Tour"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>

        {/* Form Section */}
        <div className="pt-10 max-w-3xl">
          <h2 className="font-heading font-bold text-lg sm:text-xl text-[#308C17] mb-6">
            Fill out the booking form below and our tour consultant will confirm your inquiry shortly.
          </h2>

          {submitted ? (
            <div className="bg-[#f0f9eb] border border-[#b8e1a8] rounded-xl p-6 text-center space-y-3">
              <CheckCircle className="w-10 h-10 text-[#308C17] mx-auto" />
              <h3 className="font-heading font-bold text-lg text-gray-900">Thank you for your reservation!</h3>
              <p className="text-sm text-gray-700 font-body">
                We have received your booking details and our team will contact you promptly on WhatsApp.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5 font-body">
              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-1">Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-[#59A246] text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#308C17] placeholder-white/70"
                  placeholder="Your Full Name"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-1">Email address</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-[#59A246] text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#308C17] placeholder-white/70"
                  placeholder="name@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-1">Phone / WhatsApp</label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-[#59A246] text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#308C17] placeholder-white/70"
                  placeholder="+62 812 3456 7890"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-1">Passenger</label>
                <input
                  type="number"
                  min="1"
                  max="50"
                  required
                  value={formData.passengers}
                  onChange={(e) => setFormData({ ...formData, passengers: e.target.value })}
                  className="w-full bg-[#59A246] text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#308C17]"
                  placeholder="Number of Passengers"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-1">Booking date</label>
                <input
                  type="date"
                  required
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="w-full bg-[#59A246] text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#308C17]"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-1">
                  Pickup Location (Full Address Hotel / Villa / Flight Number)
                </label>
                <input
                  type="text"
                  required
                  value={formData.pickupLocation}
                  onChange={(e) => setFormData({ ...formData, pickupLocation: e.target.value })}
                  className="w-full bg-[#59A246] text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#308C17] placeholder-white/70"
                  placeholder="Hotel / Villa Name, Area, or Flight Number"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-1">Message</label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-[#59A246] text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#308C17] placeholder-white/70"
                  placeholder="Special requests or destinations you would like to visit..."
                />
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto px-8 py-3.5 bg-[#FFB200] hover:bg-[#e09d00] text-gray-900 font-heading font-bold text-sm uppercase tracking-wider rounded-lg transition-colors shadow-sm"
              >
                Submit Booking
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
