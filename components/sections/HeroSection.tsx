import React from 'react';
import Link from 'next/link';
import { Star, MessageCircle, ArrowRight, CheckCircle2 } from 'lucide-react';
import { CONTACT_INFO } from '@/data/navigation';

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  backgroundImage?: string;
  showBadges?: boolean;
}

export default function HeroSection({
  title = 'Explore Bali with Trusted Local Guides & Private Chauffeurs',
  subtitle = 'Discover breathtaking temples, lush volcanic rice terraces, and hidden waterfalls. Fully customizable day tours and reliable private car hire from $40/day including English-speaking driver, fuel, and parking.',
  backgroundImage = 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1920&q=80',
  showBadges = true,
}: HeroSectionProps) {
  const whatsappUrl = `https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encodeURIComponent(
    'Hello Bali Asri Tour, I would like to inquire about booking a tour package / car rental in Bali.'
  )}`;

  return (
    <section className="relative bg-brand-secondary text-white py-20 lg:py-28 overflow-hidden">
      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-secondary via-brand-secondary/90 to-brand-primary/40 z-10" />

      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-35 mix-blend-overlay"
        style={{ backgroundImage: `url('${backgroundImage}')` }}
      />

      <div className="relative z-20 max-w-boxed mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl space-y-6">
          {showBadges && (
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs sm:text-sm">
              <div className="flex items-center text-brand-accent">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>
              <span className="font-semibold text-white">5.0 Star Rated on TripAdvisor</span>
              <span className="text-gray-300">({CONTACT_INFO.tripadvisorReviewsCount} reviews)</span>
            </div>
          )}

          <h1 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white leading-tight">
            {title}
          </h1>

          <p className="font-body text-base sm:text-lg text-gray-200 leading-relaxed">
            {subtitle}
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link
              href="/bali-tour-package/"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-brand-primary hover:bg-brand-primary-dark font-body font-semibold text-white shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
            >
              <span>Browse Tour Packages</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-brand-whatsapp hover:bg-brand-whatsapp-dark font-body font-semibold text-white shadow-floating hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
              <span>Instant WhatsApp Inquiry</span>
            </a>
          </div>

          {showBadges && (
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-6 border-t border-white/10 text-xs text-gray-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-accent shrink-0" />
                <span>Certified Local Drivers</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-accent shrink-0" />
                <span>All-Inclusive Pricing</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-accent shrink-0" />
                <span>Free 24h Cancellation</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
