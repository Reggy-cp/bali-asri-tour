import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight, Star, Sparkles, CheckCircle2, MessageCircle, HeartHandshake, ShieldCheck } from 'lucide-react';
import { getAllTours } from '@/data/tours';
import { CONTACT_INFO } from '@/data/navigation';

export const metadata = {
  title: 'Bali Yoga Tours & Spiritual Healing Retreats | Bali Asri Tour',
  description:
    'Experience guided yoga in serene settings, visit sacred temples, enjoy nature walks, and relax with optional healing rituals. Customizable, private, and peaceful. Reconnect with Bali’s spiritual soul.',
  openGraph: {
    title: 'Bali Yoga Tours & Spiritual Healing Retreats',
    description:
      'Experience traditional Balinese holy spring water purification (Melukat), yoga in Ubud jungle shalas, sound healing, and consultations with authentic Balinese healers.',
    images: [
      {
        url: '/images/tours/yoga-retreat.webp',
        width: 768,
        height: 512,
        alt: 'Couple practicing yoga in nature during Wellness and Yoga Tours in Bali',
      },
    ],
  },
};

export default function BaliYogaToursPage() {
  const all = getAllTours();
  
  // Specific curated order matching reference page https://bali-agung-tours.com/bali-yoga-tours/
  const yogaTourSlugs = [
    'wellness-and-yoga-tours-in-bali',
    'ubud-wellness-daypass',
    'jungle-bliss-outdoor-yoga-class-and-rice-terrace-trekking',
    'outdoor-yoga-class-and-blissful-spa-experience',
    'sacred-harmony-outdoor-yoga-and-spiritual-cleansing-in-ubud-jungle',
    'outdoor-yoga-and-sound-healing-at-ubud-jungle',
    'sunrise-yoga-and-holy-bathing',
    'sunrise-yoga-and-meditation-with-floating-breakfast',
  ];

  const tours = yogaTourSlugs
    .map((slug) => all.find((t) => t.slug === slug))
    .filter((t): t is NonNullable<typeof t> => Boolean(t));

  return (
    <div className="bg-[#F8FAF9] min-h-screen">
      {/* Breadcrumb Bar */}
      <div className="bg-white border-b border-gray-100 py-3 px-4 sm:px-6 lg:px-8 text-xs text-gray-500 font-body">
        <div className="max-w-boxed mx-auto flex items-center gap-2">
          <Link href="/" className="hover:text-brand-primary transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
          <span className="text-gray-900 font-medium">Bali Yoga Tours</span>
        </div>
      </div>

      {/* 2-Column Category Header matching Reference Site */}
      <section className="bg-white py-10 md:py-14 px-4 sm:px-6 lg:px-8 border-b border-gray-100">
        <div className="max-w-boxed mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          {/* Left Column (62% width on desktop) */}
          <div className="md:col-span-7 lg:col-span-8 space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#308C17]/10 text-[#308C17] text-xs font-semibold tracking-wide uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Spiritual &amp; Wellness Retreats</span>
            </div>
            <h1 className="font-heading font-bold text-3xl sm:text-4xl text-[#308C17] leading-tight">
              Bali Yoga Tour – Rebalance, Refresh, Renew
            </h1>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-body max-w-2xl">
              Experience guided yoga in serene settings, visit sacred temples, enjoy nature walks, and relax with optional healing rituals. Customizable, private, and peaceful. Reconnect with Bali’s spiritual soul.
            </p>
            <div className="pt-2 flex flex-wrap gap-4 text-xs font-medium text-gray-600">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#308C17]" />
                <span>Certified Yoga Masters</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#308C17]" />
                <span>Private AC Chauffeur Transfers</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#308C17]" />
                <span>Sacred Melukat Holy Bathing</span>
              </div>
            </div>
          </div>

          {/* Right Column (TripAdvisor Award Badge matching Reference Site) */}
          <div className="md:col-span-5 lg:col-span-4 flex justify-center md:justify-end">
            <div className="bg-white p-3 rounded-2xl border border-gray-100 shadow-sm max-w-[340px] hover:shadow-md transition-shadow">
              <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden">
                <Image
                  src="/images/tripadvisor-badge.jpg"
                  alt="TripAdvisor Top Recommended Tour Operator Bali"
                  fill
                  sizes="(max-width: 768px) 100vw, 340px"
                  className="object-contain"
                  priority
                />
              </div>
              <div className="mt-2 text-center text-xs text-gray-600 font-body">
                <span className="font-semibold text-gray-900">Rated 5.0 / 5.0</span> on TripAdvisor with 1,000+ happy travelers
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tour Grid Section */}
      <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-boxed mx-auto space-y-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tours.map((tour) => (
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
                        `Hello Bali Asri Tour, I am interested in booking: ${tour.title}`
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

          {/* Bottom Custom Retreat Help Callout */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-100 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left">
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#308C17] uppercase tracking-wider">
                <HeartHandshake className="w-4 h-4" />
                <span>Custom Yoga Retreats &amp; Group Bookings</span>
              </div>
              <h3 className="font-heading font-bold text-xl text-gray-900">
                Planning a Private Yoga Retreat or Custom Healing Journey in Bali?
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 max-w-2xl font-body">
                We can customize private yoga sessions, master sound baths, holy water blessing ceremonies (Melukat), and luxury villa transfers to fit your exact itinerary and group size.
              </p>
            </div>
            <a
              href={`https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encodeURIComponent(
                'Hello Bali Asri Tour, I would like to consult about customizing a private Bali Yoga Retreat.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="whitespace-nowrap px-6 py-3 rounded-full bg-[#308C17] hover:bg-[#256f12] text-white font-heading font-bold text-sm uppercase tracking-wider shadow-md hover:shadow-lg transition-all flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Contact Wellness Concierge</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
