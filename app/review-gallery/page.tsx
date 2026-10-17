import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Star, MessageCircle, ExternalLink } from 'lucide-react';
import { TRIPADVISOR_REVIEWS, GALLERY_IMAGES } from '@/data/tours';
import { CONTACT_INFO, SOCIAL_LINKS } from '@/data/navigation';

export const metadata = {
  title: 'Review & Gallery - Bali Asri Tour',
  description:
    'Review & Gallery - Happy Guest : 1000+ guests can\'t be wrong... Rated 5 stars on TripAdvisor for Bali car hire and tours.',
};

export default function ReviewGalleryPage() {
  const whatsappUrl = `https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encodeURIComponent(
    'Hello Bali Asri Tour, I saw your TripAdvisor reviews and gallery, and I would like to book a tour.'
  )}`;

  return (
    <div className="bg-white min-h-screen py-14 px-4 sm:px-6 lg:px-8 font-body">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Exact Live Centered Headers */}
        <div className="text-center space-y-3">
          <h1 className="font-heading font-bold text-3xl sm:text-5xl text-[#308C17]">
            Review &amp; Gallery
          </h1>
          <p className="font-heading font-bold text-xl sm:text-2xl text-[#308C17]">
            Happy Guest : 1000+ guests can&apos;t be wrong...
          </p>
        </div>

        {/* 6 Seamless Partner Badges Matching Live Site */}
        <div className="max-w-4xl mx-auto py-4">
          <div className="relative w-full aspect-[6/1] max-h-16 overflow-hidden">
            <Image
              src="/images/partners-full.jpg"
              alt="Airbnb, Klook, Google, ToursByLocals, Occius, Civitatis"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* TripAdvisor Traveler Reviews Grid */}
        <div className="space-y-6 pt-4">
          <div className="flex items-center justify-between border-b border-gray-100 pb-4">
            <div>
              <h2 className="font-heading font-bold text-xl text-gray-900">
                TripAdvisor Reviews
              </h2>
              <p className="text-xs text-gray-500">Rated 5.0 / 5.0 by 1,450+ verified travelers</p>
            </div>

            <a
              href={SOCIAL_LINKS.tripadvisor}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#308C17] hover:underline"
            >
              <span>View on TripAdvisor</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TRIPADVISOR_REVIEWS.map((rev) => (
              <div
                key={rev.id}
                className="bg-[#F9FAF6] rounded-2xl p-6 border border-gray-100 flex flex-col justify-between space-y-4 hover:shadow-md transition-shadow"
              >
                <div className="space-y-3">
                  <div className="flex items-center gap-1 text-[#FFB200]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#FFB200]" />
                    ))}
                  </div>

                  <h3 className="font-heading font-bold text-sm text-gray-900 leading-snug">
                    {rev.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-gray-700 leading-relaxed italic">
                    &ldquo;{rev.text}&rdquo;
                  </p>
                </div>

                <div className="pt-3 border-t border-gray-200 text-xs text-gray-500">
                  <strong className="text-gray-900 block">{rev.author}</strong>
                  <span>{rev.origin}</span> • <span>{rev.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Photo Gallery Grid */}
        <div className="space-y-6 pt-8 border-t border-gray-100">
          <h2 className="font-heading font-bold text-xl text-gray-900">
            Travel Memories in Bali
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {GALLERY_IMAGES.map((img) => (
              <div
                key={img.id}
                className="relative aspect-square rounded-2xl overflow-hidden bg-gray-100 shadow-sm group"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <p className="text-white text-xs font-semibold">{img.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* WhatsApp CTA */}
        <div className="bg-[#308C17] text-white rounded-3xl p-8 sm:p-10 text-center space-y-4">
          <h3 className="font-heading font-bold text-2xl sm:text-3xl">
            Create Your Own Bali Memories With Us
          </h3>
          <p className="text-sm text-white/90 max-w-xl mx-auto">
            Book your private driver or custom tour package today. No advance payment required for day tours!
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-heading font-bold text-xs uppercase tracking-wider text-gray-900 bg-[#FFB200] hover:bg-[#E09D00] shadow-lg transition-all active:scale-95"
          >
            <MessageCircle className="w-4 h-4 fill-gray-900" />
            <span>Book on WhatsApp Now</span>
          </a>
        </div>

      </div>
    </div>
  );
}
