import React from 'react';
import Link from 'next/link';
import { MessageCircle, Phone, Mail, Clock, ShieldCheck, ArrowRight } from 'lucide-react';
import { CONTACT_INFO } from '@/data/navigation';

export default function BookingCallToAction() {
  const whatsappUrl = `https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encodeURIComponent(
    'Hello Bali Asri Tour, I am planning a trip to Bali and would like to speak with a driver/guide.'
  )}`;

  return (
    <section className="relative py-16 bg-gradient-to-br from-brand-secondary via-brand-secondary to-brand-primary-dark text-white overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-brand-primary/20 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-brand-accent/15 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-boxed mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          <div className="max-w-2xl space-y-3">
            <span className="text-xs uppercase font-semibold text-brand-accent tracking-widest block">
              Direct Local Booking
            </span>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-white leading-tight">
              Ready to Experience Bali Without the Hassle?
            </h2>
            <p className="font-body text-sm sm:text-base text-gray-200 leading-relaxed">
              Skip the middleman fees. Talk directly with Agung and our licensed local drivers. Free cancellation up to 24 hours before pickup, clean private cars, and friendly guidance.
            </p>

            <div className="flex flex-wrap items-center gap-6 pt-3 text-xs text-gray-300">
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-emerald-400" />
                <span>24/7 Rapid Response</span>
              </span>
              <span className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Pay on Tour Day (Cash or Card)</span>
              </span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row lg:flex-col gap-3 shrink-0">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg bg-brand-whatsapp hover:bg-brand-whatsapp-dark text-white font-medium text-sm shadow-floating transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
              <span>Message on WhatsApp</span>
            </a>

            <Link
              href="/contact/"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg bg-white/10 hover:bg-white/20 border border-white/20 text-white font-medium text-sm transition-all duration-200"
            >
              <span>Submit Inquiry Form</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
