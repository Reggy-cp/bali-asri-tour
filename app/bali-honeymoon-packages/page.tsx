import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight, Star, Heart, CheckCircle2, MessageCircle, Sparkles, HeartHandshake } from 'lucide-react';
import { getToursByCategory } from '@/data/tours';
import { CONTACT_INFO } from '@/data/navigation';

export const metadata = {
  title: 'Bali Honeymoon Packages - Romantic Villa & Couples Holidays | Bali Asri Tour',
  description:
    'Enjoy a dreamy Bali honeymoon with private villa stays, candlelight dinner, flower baths, spa sessions, and guided tours. Custom itinerary, flexible timing, and unforgettable moments with the one you love. Let love bloom in Bali!',
  openGraph: {
    title: 'Bali Honeymoon Packages | Bali Asri Tour',
    description:
      'Celebrate love in Bali with our romantic honeymoon packages. Includes private pool villas, floating breakfasts, candlelit beach dinners in Jimbaran, and relaxing couples spa massages.',
    images: [
      {
        url: '/images/tours/honeymoon-6d5n-kelingking.jpg',
        width: 612,
        height: 408,
        alt: 'Couple enjoying scenic view at Kelingking Beach during Bali Honeymoon Tour',
      },
    ],
  },
};

export default function BaliHoneymoonPackagesPage() {
  const honeymoons = getToursByCategory('honeymoon');

  return (
    <div className="bg-[#F8FAF9] min-h-screen">
      {/* Breadcrumb Bar */}
      <div className="bg-white border-b border-gray-100 py-3 px-4 sm:px-6 lg:px-8 text-xs text-gray-500 font-body">
        <div className="max-w-boxed mx-auto flex items-center gap-2">
          <Link href="/" className="hover:text-brand-primary transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
          <span className="text-gray-900 font-medium">Bali Honeymoon Packages</span>
        </div>
      </div>

      {/* 2-Column Category Header matching Reference Site */}
      <section className="bg-white py-10 md:py-14 px-4 sm:px-6 lg:px-8 border-b border-gray-100">
        <div className="max-w-boxed mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          {/* Left Column (62% width on desktop) */}
          <div className="md:col-span-7 lg:col-span-8 space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#308C17]/10 text-[#308C17] text-xs font-semibold tracking-wide uppercase">
              <Heart className="w-3.5 h-3.5 fill-[#308C17]" />
              <span>Romantic Getaways &amp; Couples Retreats</span>
            </div>
            <h1 className="font-heading font-bold text-3xl sm:text-4xl text-[#308C17] leading-tight">
              Bali Honeymoon Packages
            </h1>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-body max-w-2xl">
              Enjoy a dreamy Bali honeymoon with private villa stays, candlelight dinner, flower baths, spa sessions, and guided tours. Custom itinerary, flexible timing, and unforgettable moments with the one you love. Let love bloom in Bali!
            </p>
            <div className="pt-2 flex flex-wrap gap-4 text-xs font-medium text-gray-600">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#308C17]" />
                <span>Jimbaran Candlelight Dinner</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#308C17]" />
                <span>Bali Hai Sunset Cruise</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#308C17]" />
                <span>Flower Garland Airport Greeting</span>
              </div>
            </div>
          </div>

          {/* Right Column (TripAdvisor Award Badge matching Reference Site) */}
          <div className="md:col-span-5 lg:col-span-4 flex justify-center md:justify-end">
            <div className="bg-white p-3 rounded-2xl border border-gray-100 shadow-sm max-w-[340px] hover:shadow-md transition-shadow">
              <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden">
                <Image
                  src="/images/tripadvisor-badge.jpg"
                  alt="TripAdvisor Top Recommended Honeymoon Tour Operator Bali"
                  fill
                  sizes="(max-width: 768px) 100vw, 340px"
                  className="object-contain"
                  priority
                />
              </div>
              <div className="mt-2 text-center text-xs text-gray-600 font-body">
                <span className="font-semibold text-gray-900">Rated 5.0 / 5.0</span> on TripAdvisor with 1,000+ happy couples
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tour Grid Section */}
      <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-boxed mx-auto space-y-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {honeymoons.map((tour) => (
              <div
                key={tour.id}
                className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col group"
              >
                {/* Image Container */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-gray-100">
                  <Image
                    src={tour.image}
                    alt={tour.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 380px"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Duration Badge */}
                  <div className="absolute top-3 left-3 bg-[#FFB200] text-black text-[11px] font-heading font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-md">
                    {tour.duration}
                  </div>
                  {/* Price Tag */}
                  <div className="absolute bottom-3 right-3 bg-black/80 backdrop-blur-sm text-white px-3 py-1.5 rounded-lg text-xs font-semibold shadow-sm">
                    ${tour.priceUSD} USD / Person
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-3">
                    {/* Rating */}
                    <div className="flex items-center gap-1.5 text-xs text-yellow-500 font-semibold">
                      <Star className="w-4 h-4 fill-current" />
                      <span>{tour.rating.toFixed(1)}</span>
                      <span className="text-gray-400">({tour.reviewCount} reviews)</span>
                    </div>

                    {/* Title */}
                    <h2 className="font-heading font-bold text-lg text-[#308C17] hover:text-[#256f12] transition-colors leading-snug">
                      <Link href={`/${tour.slug}`}>{tour.title}</Link>
                    </h2>

                    {/* Excerpt */}
                    <p className="font-body text-xs text-gray-600 line-clamp-3 leading-relaxed">
                      {tour.description}
                    </p>

                    {/* Highlights */}
                    <ul className="space-y-1 text-xs text-gray-700 pt-1">
                      {tour.highlights.slice(0, 3).map((h, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <span className="text-[#308C17] font-bold">✓</span>
                          <span className="line-clamp-1">{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-2 flex items-center gap-2">
                    <Link
                      href={`/${tour.slug}`}
                      className="flex-1 text-center py-2.5 px-4 rounded-xl border border-[#308C17] text-[#308C17] font-heading font-bold text-xs uppercase tracking-wider hover:bg-[#308C17] hover:text-white transition-all shadow-sm"
                    >
                      More Details
                    </Link>
                    <a
                      href={`https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encodeURIComponent(
                        `Hello Bali Asri Tour, I am interested in booking Honeymoon package: ${tour.title}`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-2.5 px-4 rounded-xl bg-[#FFB200] hover:bg-[#E09D00] text-black font-heading font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-sm transition-all"
                      title="Chat on WhatsApp"
                    >
                      <MessageCircle className="w-4 h-4 fill-black text-black" />
                      <span>Inquire</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Custom Honeymoon Consultation Callout */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-100 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left">
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#308C17] uppercase tracking-wider">
                <HeartHandshake className="w-4 h-4" />
                <span>Tailor-Made Honeymoons &amp; Private Villa Upgrades</span>
              </div>
              <h3 className="font-heading font-bold text-xl text-gray-900">
                Want to Customize Your Dream Bali Honeymoon?
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 max-w-2xl font-body">
                We can tailor your itinerary with private pool villas in Ubud or Seminyak, floating flower breakfasts, couples aromatherapy spa rituals, romantic helicopter flights, and secluded beach picnics.
              </p>
            </div>
            <a
              href={`https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encodeURIComponent(
                'Hello Bali Asri Tour, I would like to consult about customizing a tailor-made Bali Honeymoon Package.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="whitespace-nowrap px-6 py-3 rounded-full bg-[#308C17] hover:bg-[#256f12] text-white font-heading font-bold text-sm uppercase tracking-wider shadow-md hover:shadow-lg transition-all flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Consult Honeymoon Planner</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
