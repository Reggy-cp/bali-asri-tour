import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Star,
  Search,
  Mail,
  MapPin,
  ChevronLeft,
  ChevronRight,
  MessageCircle,
  Send,
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
      image: '/images/tour-ubud-swing.jpg',
      description:
        'Experience Ubud’s iconic Sacred Monkey Forest Sanctuary, lush Tegallalang Rice Terraces, scenic jungle swing, and sacred Tirta Empul water temple.',
    },
    {
      id: 'instagrammable-bali',
      title: 'The Most Bali Instagrammable Private Day Trip',
      slug: 'the-most-bali-instagramable-private-day-trip',
      image: '/images/tour-nusa-penida.jpg',
      description:
        'Capture Bali’s most iconic photos at Lempuyang Gate of Heaven, Tirta Gangga Water Palace, and historic Taman Ujung with an English-speaking driver and photographer.',
    },
  ];

  // Exact TripAdvisor Reviews shown on live reference homepage
  const TRIPADVISOR_REVIEWS_EXACT = [
    {
      id: 'rev-1',
      author: 'Go05900613662',
      date: '1 month ago',
      title: 'Yoga class',
      text: 'Driver(guide) very kindly let us bring to the yoga class and he is good at taking photos and he took a lot of nice pictures...',
    },
    {
      id: 'rev-2',
      author: 'Santhanam R',
      date: '1 month ago',
      title: 'Awesome Experience',
      text: 'The Overall experience was awesome, the tour guide Wayan was too too good, always smiling and in time every time....',
    },
    {
      id: 'rev-3',
      author: 'Santhanam R',
      date: '1 month ago',
      title: 'Awesome Experience',
      text: 'It was an awesome experience, the tour guide Wayan Widarsana was too too good, lot of patience, ever smiling ,...',
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

      {/* 6. Section: "Car Hire Bali with Driver" (Exact Match with Image 2) */}
      <section className="bg-[#59A246] text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-boxed mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Authentic Balinese Chauffeur & White HiAce Photo */}
          <div className="lg:col-span-5 relative rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/images/driver-hiace.jpg"
              alt="Bali Asri Tour Private Chauffeur with Toyota HiAce Minibus"
              width={600}
              height={400}
              className="w-full h-auto object-cover rounded-2xl"
              priority
            />
          </div>

          {/* Text & Contact Details matching Screenshot */}
          <div className="lg:col-span-7 space-y-4">
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-white">
              Car Hire Bali with Driver
            </h2>
            <h3 className="font-heading font-semibold text-xl text-white">
              Need more customized tour?
            </h3>
            <p className="text-sm text-white/95 leading-relaxed font-body">
              Trusted by 1000+ Happy Travelers Worldwide • Personalized Itinerary • No Rush, No Stress
            </p>

            <div className="space-y-2.5 pt-2 text-sm font-medium">
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 flex items-center justify-center text-[#FFB200]">
                  <MessageCircle className="w-4 h-4 fill-current" />
                </div>
                <a href={`https://wa.me/${CONTACT_INFO.whatsappNumber}`} className="hover:underline">
                  +{CONTACT_INFO.whatsappNumber}
                </a>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-5 h-5 flex items-center justify-center text-[#FFB200]">
                  <MessageCircle className="w-4 h-4 fill-current" />
                </div>
                <a href={`https://wa.me/${CONTACT_INFO.phoneSecondary.replace(/[^0-9]/g, '')}`} className="hover:underline">
                  {CONTACT_INFO.phoneSecondary}
                </a>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-5 h-5 flex items-center justify-center text-[#FFB200]">
                  <Mail className="w-4 h-4" />
                </div>
                <a href={`mailto:${CONTACT_INFO.email}`} className="hover:underline">
                  {CONTACT_INFO.email}
                </a>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-5 h-5 flex items-center justify-center text-[#FFB200]">
                  <MapPin className="w-4 h-4" />
                </div>
                <span>{CONTACT_INFO.address}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Section: "Review & Gallery" (Exact Match with Image 3) */}
      <section className="py-16 bg-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-boxed mx-auto space-y-10">
          <div className="text-left">
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-[#59A246]">
              Review &amp; Gallery
            </h2>
          </div>

          {/* 4 Photo Gallery Strip with Navigation Arrows */}
          <div className="relative group">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-md">
                <Image
                  src="/images/gallery-1.jpg"
                  alt="Bali Tour Sightseeing at Temple Gate"
                  fill
                  sizes="(max-width: 768px) 50vw, 280px"
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-md">
                <Image
                  src="/images/gallery-2.jpg"
                  alt="Bali Tour Guide with Tourists"
                  fill
                  sizes="(max-width: 768px) 50vw, 280px"
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-md">
                <Image
                  src="/images/gallery-3.jpg"
                  alt="Happy Tourists with Bali Guide"
                  fill
                  sizes="(max-width: 768px) 50vw, 280px"
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-md">
                <Image
                  src="/images/gallery-4.jpg"
                  alt="I Love Bali Rice Terrace View"
                  fill
                  sizes="(max-width: 768px) 50vw, 280px"
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>

            {/* Left/Right Arrow Overlays */}
            <div className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/40 text-white flex items-center justify-center cursor-pointer hover:bg-black/70 transition-colors pointer-events-none">
              <ChevronLeft className="w-5 h-5" />
            </div>
            <div className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/40 text-white flex items-center justify-center cursor-pointer hover:bg-black/70 transition-colors pointer-events-none">
              <ChevronRight className="w-5 h-5" />
            </div>
          </div>

          {/* 3 Verified TripAdvisor Review Cards matching Image 3 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TRIPADVISOR_REVIEWS_EXACT.map((rev, idx) => (
              <div
                key={rev.id}
                className="p-6 rounded-2xl bg-gray-50/80 border border-gray-100 shadow-sm flex flex-col justify-between space-y-4"
              >
                <div>
                  {/* Top user bar with authentic TripAdvisor avatar & owl logo */}
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="relative w-10 h-10 rounded-full overflow-hidden shrink-0 border border-gray-200">
                        <Image
                          src={idx === 0 ? '/images/avatar-go.jpg' : '/images/avatar-santhanam.jpg'}
                          alt={rev.author}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <strong className="text-xs sm:text-sm font-semibold text-gray-900 block leading-tight">
                          {rev.author}
                        </strong>
                        <span className="text-[11px] text-gray-500 block">{rev.date}</span>
                      </div>
                    </div>

                    <div className="w-6 h-6 rounded-full bg-[#00AA6C] flex items-center justify-center text-white shrink-0 shadow-sm" title="TripAdvisor">
                      <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-4.5 13c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5zm9 0c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5zM12 9.5c-.83 0-1.5-.67-1.5-1.5S11.17 6.5 12 6.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" />
                      </svg>
                    </div>
                  </div>

                  {/* 5 Green TripAdvisor Circles + Verified Checkmark */}
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex items-center gap-1 text-[#00AA6C]">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="w-2.5 h-2.5 rounded-full bg-[#00AA6C] inline-block" />
                      ))}
                    </div>
                    <span className="inline-flex items-center justify-center w-3.5 h-3.5 rounded-full bg-blue-500 text-white text-[9px] font-bold">
                      ✓
                    </span>
                  </div>

                  {/* Review Title */}
                  <h4 className="font-heading font-bold text-sm text-gray-900 mb-1">
                    {rev.title}
                  </h4>

                  {/* Review Text */}
                  <p className="text-xs text-gray-600 font-body leading-relaxed">
                    {rev.text}
                  </p>
                </div>

                <div>
                  <button type="button" className="text-xs text-gray-400 hover:text-gray-700 transition-colors">
                    Read more
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Centered Rating Line matching Screenshot 3 */}
          <div className="text-center pt-2">
            <p className="text-xs sm:text-sm text-gray-800 font-medium">
              <strong className="font-bold">Tripadvisor</strong> rating score: <strong className="font-bold">4.9</strong> of 5, based on <strong className="font-bold">1,192 reviews</strong>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
