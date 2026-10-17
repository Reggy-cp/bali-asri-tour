import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight, Star, Clock, CheckCircle, MessageCircle } from 'lucide-react';
import { getToursByCategory } from '@/data/tours';
import { CONTACT_INFO } from '@/data/navigation';

export const metadata = {
  title: 'Bali Tour Package – Honeymoon, Family & Adventure Holiday Packages',
  description:
    'Complete Bali holiday packages from 3 Days to 10 Days. Inclusive private car with chauffeur, hand-picked hotels/villas, temple entries, Nusa Penida fast boats, and 24/7 concierge.',
};

export default function BaliTourPackagesPage() {
  const packages = getToursByCategory('package');

  return (
    <div className="bg-surface-light min-h-screen">
      {/* 1. Header Hero */}
      {/* 1. Exact Live Header: Clean White Top with Bold Green Heading */}
      <section className="bg-white py-12 px-4 sm:px-6 lg:px-8 border-b border-gray-100">
        <div className="max-w-boxed mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <h1 className="font-heading font-bold text-3xl sm:text-4xl text-[#308C17] leading-tight">
              Bali Tour Packages - Custom Itinerary !
            </h1>
            <p className="font-body text-sm sm:text-base text-gray-700 leading-relaxed max-w-2xl">
              Bali Asri Tour offer customizable Bali tour packages. Whether you’re looking for a private Bali tour with driver, a romantic honeymoon, or a family vacation in Bali, we craft personalized itineraries to suit your interests, time, and style.
            </p>
            <p className="font-body text-sm sm:text-base text-gray-700 leading-relaxed max-w-2xl">
              As a top-rated Bali DMC with 900+ 5-star reviews and winner of <strong className="text-[#FFB200]">TripAdvisor Travelers’ Choice 2026</strong>, we’re known for reliable service, flexible tours, and warm Balinese hospitality.{' '}
              <a
                href={`https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encodeURIComponent(
                  'Hello Bali Asri Tour, I would like to get a free quote for custom Bali tour packages.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-[#FFB200] hover:underline"
              >
                Get Free Qoute!
              </a>
            </p>
          </div>
          <div className="lg:col-span-5 relative aspect-[16/10] rounded-2xl overflow-hidden shadow-sm">
            <Image
              src="/images/tour-nusa-penida.jpg"
              alt="Bali Tour Packages - Custom Itinerary"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* 2. Package Grid */}
      <section className="py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-boxed mx-auto space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packages.map((pkg) => (
              <div
                key={pkg.id}
                className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden">
                  <Image
                    src={pkg.image}
                    alt={pkg.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 380px"
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-[#FFB200] text-black text-[11px] font-heading font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-md">
                    {pkg.duration}
                  </div>
                  <div className="absolute bottom-3 right-3 bg-black/80 backdrop-blur-sm text-white px-3 py-1.5 rounded-lg text-xs font-semibold">
                    From ${pkg.priceUSD} USD
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-1.5 text-xs text-yellow-500 font-semibold">
                      <Star className="w-4 h-4 fill-current" />
                      <span>{pkg.rating.toFixed(1)}</span>
                      <span className="text-gray-400">({pkg.reviewCount} reviews)</span>
                    </div>

                    <h3 className="font-heading font-bold text-lg text-gray-900 hover:text-brand-primary transition-colors">
                      <Link href={`/${pkg.slug}`}>{pkg.title}</Link>
                    </h3>

                    <p className="font-body text-xs text-gray-600 line-clamp-3 leading-relaxed">
                      {pkg.description}
                    </p>

                    <div className="space-y-1 pt-1">
                      <div className="text-[11px] font-semibold text-gray-500 uppercase tracking-wider">
                        Key Highlights:
                      </div>
                      <ul className="space-y-1 text-xs text-gray-700">
                        {pkg.highlights.slice(0, 3).map((h, i) => (
                          <li key={i} className="flex items-center gap-1.5">
                            <span className="text-[#59A246] font-bold">✓</span>
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-2 flex items-center gap-2">
                    <Link
                      href={`/${pkg.slug}`}
                      className="flex-1 text-center py-2.5 px-4 rounded-xl border border-brand-primary text-brand-primary font-heading font-bold text-xs uppercase tracking-wider hover:bg-brand-primary hover:text-white transition-all"
                    >
                      View Details
                    </Link>
                    <a
                      href={`https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encodeURIComponent(
                        `Hello Bali Asri Tour, I am interested in: ${pkg.title}`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-2.5 px-4 rounded-xl bg-[#FFB200] hover:bg-[#E09D00] text-black font-heading font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-sm transition-all"
                    >
                      <MessageCircle className="w-4 h-4 fill-black text-black" />
                      <span>Inquire</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
