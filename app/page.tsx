import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Star,
  Search,
} from 'lucide-react';
import { CONTACT_INFO } from '@/data/navigation';
import { TOUR_CATEGORIES } from '@/data/tours';

export default function HomePage() {
  const whatsappUrl = `https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encodeURIComponent(
    'Hello Bali Asri Tour, I am interested in booking a tour / car rental in Bali.'
  )}`;

  // Official 3 Popular Tours from the notebook catalog
  const POPULAR_TOURS_EXACT = [
    {
      id: 'sunrise-jeep-tour',
      title: 'Sunrise Jeep Tour and Hot Spring Tour + Hotel Pick-up',
      slug: 'sunrise-jeep-tour-and-hot-spring-tour-plus-hotel-pick-up',
      image: '/images/tours/sunrise-jeep-tour.webp',
      description:
        'Embark on a thrilling journey with our Sunrise Jeep Tour and Hot Spring Tour Plus Hotel Pick Up. Explore Mount Batur volcanic caldera and relax in natural hot springs.',
    },
    {
      id: 'best-of-ubud',
      title: 'Best of Ubud Tour',
      slug: 'best-of-ubud-tour',
      image: '/images/tours/ubud-monkey-forest.jpg',
      description:
        'Experience Ubud’s iconic Sacred Monkey Forest Sanctuary, lush Tegallalang Rice Terraces, scenic jungle swing, and sacred Tirta Empul water temple.',
    },
    {
      id: 'instagrammable-bali',
      title: 'The Most Bali Instagrammable Private Day Trip',
      slug: 'the-most-bali-instagramable-private-day-trip',
      image: '/images/tours/the-most-bali-instagramable-day-trip.webp',
      description:
        'Capture Bali’s most iconic photos at Lempuyang Gate of Heaven, Tirta Gangga Water Palace, and historic Taman Ujung with an English-speaking driver and photographer.',
    },
  ];



  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Main Hero Banner: "Custom Bali Tour Packages Just for You" */}
      <section
        className="relative min-h-[500px] lg:min-h-[560px] bg-cover bg-center flex items-center overflow-hidden"
        style={{
          backgroundImage: `url('/images/hero-banner.webp')`,
        }}
      >
        <div className="absolute inset-0 bg-black/15" />

        <div className="relative z-10 max-w-boxed mx-auto px-4 sm:px-6 lg:px-8 w-full py-16">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-10">
            {/* Left Hero Headline & Button */}
            <div className="max-w-xl space-y-6">
              <h1 className="font-heading font-bold text-4xl sm:text-5xl md:text-6xl text-white leading-[1.15] drop-shadow-md">
                Custom Bali Tour Packages<br />
                <span className="text-white">Just for You</span>
              </h1>

              {/* Exact Golden Button: "Get Free Itinerary Now ➤" */}
              <div>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full font-heading font-bold text-sm text-black bg-[#FFB200] hover:bg-[#E09D00] shadow-md hover:shadow-lg transition-all duration-200 active:scale-95"
                >
                  <span>Get Free Itinerary Now</span>
                  <span className="text-black text-sm">➤</span>
                </a>
              </div>
            </div>

            {/* Right: Authentic TripAdvisor Travelers' Choice 2026 Badge */}
            <div className="flex justify-start md:justify-end">
              <div className="w-44 sm:w-52 md:w-60">
                <Image
                  src="/images/trip-2026-awards.png"
                  alt="TripAdvisor Travelers' Choice 2026"
                  width={331}
                  height={405}
                  priority
                  className="w-full h-auto drop-shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Section: "Bali Tour Packages" Category Cards Grid */}
      <section className="py-14 bg-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-boxed mx-auto">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-[#59A246] text-center mb-10">
            Bali Tour Packages
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TOUR_CATEGORIES.map((cat) => (
              <Link
                key={cat.id}
                href={`/${cat.slug}/`}
                className="group relative aspect-[4/3] rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 transform hover:-translate-y-1 block"
              >
                <Image
                  src={cat.image}
                  alt={cat.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 380px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                <div className="absolute bottom-5 inset-x-0 flex justify-center px-4">
                  <span className="px-5 py-2.5 rounded-full bg-[#FFB200] group-hover:bg-[#E09D00] text-black font-heading font-bold text-xs uppercase tracking-wider shadow-md transition-colors text-center">
                    {cat.title}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Section: "Hire Bali Car with Driver - Rated 5★ TripAdvisor" */}
      <section className="py-12 bg-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-boxed mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-7 space-y-4 text-left">
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-[#4C9A2A] leading-tight">
              Hire Bali Car with Driver - Rated 5★ TripAdvisor
            </h2>
            <p className="font-body text-sm sm:text-base text-gray-700 leading-relaxed">
              Explore Bali’s hidden gems — Let our{' '}
              <strong className="text-[#FFB200] font-bold">
                TripAdvisor Travelers’ Choice 2026
              </strong>
              , award-winning Bali Driver Guides lead the way! Trusted by global travelers, we take you to breathtaking locations only locals know. Sit back, relax, and enjoy Bali — Hire your Bali Local Driver today!
            </p>
          </div>
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <Image
              src="/images/tripadvisor-awards.jpg"
              alt="TripAdvisor Awards - Travelers' Choice 2026, 2025, 2024, 2023, 2020, Certificate of Excellence"
              width={1024}
              height={665}
              className="w-full max-w-md h-auto object-contain"
            />
          </div>
        </div>
      </section>

      {/* 4. Full-Width Green Feature Bar: 3 Value Pillars */}
      <section className="bg-[#59A246] text-white py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-boxed mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-[#FFB200] text-black flex items-center justify-center shrink-0 shadow-md">
              <Star className="w-6 h-6 fill-current" />
            </div>
            <div>
              <h3 className="font-heading font-bold text-lg text-white">Excellent Reviews</h3>
              <p className="text-xs text-white/90 leading-relaxed font-body mt-0.5">
                Rated excellent on Tripadvisor by our happy customer. Read their stories and plan your perfect Bali tour today!
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-[#FFB200] text-black flex items-center justify-center shrink-0 shadow-md">
              <span className="text-xl font-bold">↺</span>
            </div>
            <div>
              <h3 className="font-heading font-bold text-lg text-white">Free Cancellation</h3>
              <p className="text-xs text-white/90 leading-relaxed font-body mt-0.5">
                Cancel up to 24 hours before your tour starts — no cancellation fee. Flexible booking for your peace of mind.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-[#FFB200] text-black flex items-center justify-center shrink-0 shadow-md">
              <span className="text-xl font-bold">👥</span>
            </div>
            <div>
              <h3 className="font-heading font-bold text-lg text-white">Bali Guide Tours By Local Expert</h3>
              <p className="text-xs text-white/90 leading-relaxed font-body mt-0.5">
                Discover the real Bali with trusted local experts. Private tour drivers and guides are ready to create your unforgettable journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Section: "Popular Tours in Bali" (Exact 3 Cards from User Screenshot) */}
      <section className="py-16 bg-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-boxed mx-auto space-y-10">
          <div className="text-left">
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-[#59A246]">
              Popular Tours in Bali
            </h2>
          </div>

          {/* 3 Tour Cards matching Image 1 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {POPULAR_TOURS_EXACT.map((tour) => (
              <div
                key={tour.id}
                className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <Image
                    src={tour.image}
                    alt={tour.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 380px"
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="p-6 flex-1 flex flex-col items-center text-center space-y-4">
                  <h3 className="font-heading font-bold text-lg text-[#59A246] leading-snug">
                    {tour.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-gray-600 font-body leading-relaxed flex-1">
                    {tour.description}
                  </p>

                  <div className="pt-2">
                    <Link
                      href={`/${tour.slug}/`}
                      className="inline-flex items-center justify-center px-6 py-2 rounded-full font-heading font-bold text-xs uppercase tracking-wider text-black bg-[#FFB200] hover:bg-[#E09D00] shadow-sm transition-all"
                    >
                      More Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Centered Golden Button with Search Icon matching Screenshot */}
          <div className="text-center pt-2">
            <Link
              href="/bali-tour-package/"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full font-heading font-bold text-sm uppercase tracking-wider text-black bg-[#FFB200] hover:bg-[#E09D00] shadow-md hover:shadow-lg transition-all"
            >
              <Search className="w-4 h-4 stroke-[2.5]" />
              <span>More Popular Tours</span>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
