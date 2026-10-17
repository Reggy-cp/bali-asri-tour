import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight, Star, Tag, MessageCircle } from 'lucide-react';
import { getAllTours } from '@/data/tours';
import { CONTACT_INFO } from '@/data/navigation';

export const metadata = {
  title: 'Bali Tour Promo Packages - Special Holiday Offers',
  description:
    'Exclusive limited-time promotional tour packages and discount car rental deals in Bali. Save up to 25% on combined family adventures, private driver hire, and multi-day circuits.',
};

export default function BaliPromoPage() {
  const tours = getAllTours().slice(0, 6);

  return (
    <div className="bg-surface-light min-h-screen">
      {/* 1. White Category Header matching Live Site */}
      <section className="bg-white py-12 md:py-16 px-4 sm:px-6 lg:px-8 border-b border-gray-100">
        <div className="max-w-boxed mx-auto">
          <h1 className="font-heading font-bold text-3xl sm:text-4xl text-[#308C17] mb-4">
            Bali Promo-Get Disc. Vouchers!
          </h1>
          <p className="max-w-3xl text-sm sm:text-base text-gray-700 leading-relaxed font-body">
            Planning a trip to Bali or need{' '}
            <Link href="/bali-tour-package" className="text-[#ffb703] font-bold hover:underline">
              Customized Bali Tour Package
            </Link>
            ? Don’t miss out on exciting discounts for motorbike rentals, spa treatments, popular restaurants, and island tours. Just click, copy the code, and enjoy the promo!
          </p>
        </div>
      </section>

      <section className="py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-boxed mx-auto space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tours.map((tour) => (
              <div
                key={tour.id}
                className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden">
                  <Image
                    src={tour.image}
                    alt={tour.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 380px"
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-[#FFB200] text-black text-[11px] font-heading font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-md">
                    Promo Deal
                  </div>
                  <div className="absolute bottom-3 right-3 bg-black/80 backdrop-blur-sm text-white px-3 py-1.5 rounded-lg text-xs font-semibold">
                    ${tour.priceUSD} USD
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-1.5 text-xs text-yellow-500 font-semibold">
                      <Star className="w-4 h-4 fill-current" />
                      <span>{tour.rating.toFixed(1)}</span>
                      <span className="text-gray-400">({tour.reviewCount} reviews)</span>
                    </div>

                    <h3 className="font-heading font-bold text-lg text-gray-900 hover:text-brand-primary transition-colors">
                      <Link href={`/${tour.slug}`}>{tour.title}</Link>
                    </h3>

                    <p className="font-body text-xs text-gray-600 line-clamp-3 leading-relaxed">
                      {tour.description}
                    </p>
                  </div>

                  <div className="pt-2 flex items-center gap-2">
                    <Link
                      href={`/${tour.slug}`}
                      className="flex-1 text-center py-2.5 px-4 rounded-xl border border-brand-primary text-brand-primary font-heading font-bold text-xs uppercase tracking-wider hover:bg-brand-primary hover:text-white transition-all"
                    >
                      View Details
                    </Link>
                    <a
                      href={`https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encodeURIComponent(
                        `Hello Bali Asri Tour, I am interested in promo deal for: ${tour.title}`
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
