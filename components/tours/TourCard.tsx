import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Star, Clock, MapPin, MessageCircle, ArrowRight } from 'lucide-react';
import { TourPackage } from '@/data/tours';
import PriceDisplay from '@/components/sections/PriceDisplay';
import { CONTACT_INFO } from '@/data/navigation';

interface TourCardProps {
  tour: TourPackage;
}

export default function TourCard({ tour }: TourCardProps) {
  const whatsappUrl = `https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encodeURIComponent(
    `Hello Bali Asri Tour, I am interested in booking: "${tour.title}" (${tour.duration}). Could you please provide availability and custom itinerary details?`
  )}`;

  return (
    <article className="group flex flex-col bg-white rounded-boxed overflow-hidden shadow-card hover:shadow-card-hover border border-gray-100 transition-all duration-300 hover:-translate-y-1">
      {/* 1. Thumbnail Container */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-gray-100">
        <Image
          src={tour.image}
          alt={tour.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-xs font-medium">
            <Clock className="w-3.5 h-3.5 text-brand-accent" />
            <span>{tour.duration}</span>
          </span>

          {tour.isPopular && (
            <span className="px-2.5 py-1 rounded-full bg-brand-primary text-white text-xs font-semibold shadow-sm">
              Popular
            </span>
          )}
        </div>

        {/* Bottom Image Overlay: Category */}
        <div className="absolute bottom-3 left-3">
          <span className="text-[11px] font-medium uppercase tracking-wider text-white/90 bg-brand-secondary/80 px-2 py-0.5 rounded backdrop-blur-sm">
            {tour.category === 'package' ? 'Multi-Day Package' : tour.category === 'day-tour' ? 'Day Tour' : 'Special Tour'}
          </span>
        </div>
      </div>

      {/* 2. Card Content */}
      <div className="flex-1 flex flex-col p-5 space-y-3">
        {/* Rating Score */}
        <div className="flex items-center gap-2 text-xs">
          <div className="flex items-center text-brand-accent">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3.5 h-3.5 fill-current" />
            ))}
          </div>
          <span className="font-semibold text-gray-800">{tour.rating.toFixed(1)}</span>
          <span className="text-body-muted">({tour.reviewCount} reviews)</span>
        </div>

        {/* Title */}
        <h3 className="font-heading font-semibold text-lg text-brand-secondary group-hover:text-brand-primary transition-colors leading-snug">
          <Link href={`/${tour.slug}/`} className="focus-visible:outline-none focus-visible:underline">
            {tour.title}
          </Link>
        </h3>

        {/* Description snippet */}
        <p className="text-xs text-body-muted line-clamp-2 leading-relaxed">
          {tour.description}
        </p>

        {/* Highlights Pills */}
        <div className="pt-1 flex flex-wrap gap-1.5">
          {tour.highlights.slice(0, 3).map((item, idx) => (
            <span
              key={idx}
              className="inline-flex items-center gap-1 text-[11px] px-2 py-0.5 rounded bg-surface-light text-body-muted border border-gray-100"
            >
              <MapPin className="w-3 h-3 text-brand-primary shrink-0" />
              <span>{item}</span>
            </span>
          ))}
        </div>

        {/* Spacer */}
        <div className="flex-1" />

        {/* 3. Pricing & Actions Footer */}
        <div className="pt-4 border-t border-gray-100 flex items-end justify-between gap-3">
          <PriceDisplay
            amount={tour.priceUSD}
            prefix="From"
            note={tour.priceNote}
            size="md"
          />

          <div className="flex items-center gap-2 shrink-0">
            <Link
              href={`/${tour.slug}/`}
              className="inline-flex items-center justify-center p-2 rounded-lg border border-gray-200 text-gray-700 hover:text-brand-primary hover:border-brand-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary"
              aria-label={`View itinerary for ${tour.title}`}
            >
              <ArrowRight className="w-4 h-4" />
            </Link>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 px-3 py-2 rounded-lg bg-brand-primary hover:bg-brand-primary-dark text-white font-medium text-xs shadow-sm transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-current" />
              <span>Book</span>
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
