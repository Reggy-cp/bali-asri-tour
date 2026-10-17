import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight, Star, CheckCircle, MessageCircle } from 'lucide-react';
import { getToursByCategory } from '@/data/tours';
import { CONTACT_INFO } from '@/data/navigation';

export const metadata = {
  title: 'Bali Experience Tours - ATV Quad Biking, Rafting & Jungle Swings',
  description:
    'Experience the best adventures in Bali: Mount Batur sunrise hiking, 2-hour ATV quad biking through cave tunnels, Ayung river rafting, and extreme jungle swings in Ubud.',
};

export default function BaliExperienceToursPage() {
  const tours = getToursByCategory('experience');

  return (
    <div className="bg-surface-light min-h-screen">
      {/* 1. White Category Header matching Live Site */}
      <section className="bg-white py-12 md:py-16 px-4 sm:px-6 lg:px-8 border-b border-gray-100">
        <div className="max-w-boxed mx-auto">
          <h1 className="font-heading font-bold text-3xl sm:text-4xl text-[#308C17] mb-4">
            Bali Experience Tours
          </h1>
          <p className="max-w-3xl text-sm sm:text-base text-gray-700 leading-relaxed font-body">
            Bali Experience Tour by Bali Asri Tour is more than just sightseeing — it&apos;s about connecting with the heart of Bali. Customize your experience based on your interests — from spiritual journeys to soft adventure or cultural immersion.{' '}
            <a
              href={`https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encodeURIComponent('Hello Bali Asri Tour, I would like to get a free quote for Bali Experience Tours!')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#ffb703] font-bold hover:underline"
            >
              Get Free Qoute!
            </a>
          </p>
        </div>
      </section>

      {/* 2. Tour Grid */}
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
                    {tour.duration}
                  </div>
                  <div className="absolute bottom-3 right-3 bg-black/80 backdrop-blur-sm text-white px-3 py-1.5 rounded-lg text-xs font-semibold">
                    ${tour.priceUSD} USD / Person
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

                    <div className="space-y-1 pt-1">
                      <div className="text-[11px] font-semibold text-gray-500 uppercase tracking-wider">
                        Highlights:
                      </div>
                      <ul className="space-y-1 text-xs text-gray-700">
                        {tour.highlights.slice(0, 3).map((h, i) => (
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
                      href={`/${tour.slug}`}
                      className="flex-1 text-center py-2.5 px-4 rounded-xl border border-brand-primary text-brand-primary font-heading font-bold text-xs uppercase tracking-wider hover:bg-brand-primary hover:text-white transition-all"
                    >
                      View Details
                    </Link>
                    <a
                      href={`https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encodeURIComponent(
                        `Hello Bali Asri Tour, I am interested in: ${tour.title}`
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
