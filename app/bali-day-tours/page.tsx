import React from "react";
import Link from "next/link";
import Image from "next/image";
import { MessageCircle } from "lucide-react";
import { getToursByCategory } from "@/data/tours";
import { CONTACT_INFO } from "@/data/navigation";

export const metadata = {
  title: "Bali Day Tours - Private Sightseeing Itineraries",
  description:
    "Discover Bali’s iconic landmarks with private customizable day tours. Volcano Kintamani, Ubud rice terraces & swings, Lempuyang Gate of Heaven, and Uluwatu sunsets.",
};

export default function BaliDayToursPage() {
  const dayTours = getToursByCategory("day-tour");

  return (
    <div className="bg-[#fbfbfb] min-h-screen">
      {/* 1. Header Section - Matching https://bali-agung-tours.com/bali-day-tours/ */}
      <section className="bg-white py-12 px-4 sm:px-6 lg:px-8 border-b border-gray-100 shadow-sm">
        <div className="max-w-boxed mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-4">
            <h1 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-[#308C17] leading-tight hover:opacity-90 transition-opacity">
              <a
                href={`https://wa.me/${CONTACT_INFO.whatsappNumber}?text=Bali%20Day%20Tours`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Bali Sight Seeing Tour - Highlights of Bali
              </a>
            </h1>
            <p className="font-body text-sm sm:text-base text-gray-700 leading-relaxed max-w-2xl">
              Discover Bali’s iconic landmarks in comfort and style with our <strong>Bali Sightseeing Tour</strong>. From majestic temples and lush rice terraces to scenic coastlines and vibrant local life — this tour is perfect for first-time visitors and returning travelers alike.
            </p>
          </div>
          <div className="lg:col-span-4 flex justify-center lg:justify-end">
            <a
              href="http://www.tripadvisor.co.id/Attraction_Review-g297694-d2307678-Reviews-Bali_Agung_Tours_Day_Tours-Denpasar_Bali.html"
              target="_blank"
              rel="noopener noreferrer"
              className="block max-w-[280px] hover:opacity-95 transition-opacity"
            >
              <Image
                src="/images/trip-2026-awards.png"
                alt="TripAdvisor Travelers Choice 2026 Bali Asri Tour"
                width={280}
                height={150}
                className="w-full h-auto drop-shadow-md rounded-xl"
                priority
              />
            </a>
          </div>
        </div>
      </section>

      {/* 2. Tour Grid - 1:1 Layout matching .xpro-post-grid on https://bali-agung-tours.com/bali-day-tours/ */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-boxed mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
            {dayTours.map((tour) => (
              <article
                key={tour.id}
                className="bg-white rounded-[15px] overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col group"
              >
                {/* Image Container with zoom on hover */}
                <div className="relative h-[220px] sm:h-[240px] w-full overflow-hidden bg-gray-100">
                  <Link href={`/${tour.slug}`} className="block w-full h-full relative">
                    <Image
                      src={tour.image}
                      alt={tour.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 380px"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </Link>

                  {/* Duration Badge */}
                  <div className="absolute top-3 left-3 bg-[#FFB200] text-black text-[11px] font-heading font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-sm pointer-events-none">
                    {tour.duration}
                  </div>

                  {/* Price Badge */}
                  <div className="absolute bottom-3 right-3 bg-black/80 backdrop-blur-sm text-white px-3 py-1 rounded-lg text-xs font-semibold pointer-events-none">
                    ${tour.priceUSD} USD {tour.priceNote?.includes("car") ? "/ Car" : "/ Pax"}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2.5">
                    {/* Post Title */}
                    <h2 className="font-heading font-bold text-[18px] text-gray-900 leading-[1.3] group-hover:text-[#308C17] transition-colors line-clamp-2">
                      <Link href={`/${tour.slug}`}>
                        {tour.title}
                      </Link>
                    </h2>

                    {/* Excerpt */}
                    <p className="font-body text-[13px] text-gray-600 line-clamp-3 leading-relaxed">
                      {tour.description}
                    </p>
                  </div>

                  {/* Card Action Buttons: More Details + WhatsApp Inquiry */}
                  <div className="pt-2 flex items-center gap-2.5">
                    <Link
                      href={`/${tour.slug}`}
                      className="flex-1 text-center py-2.5 px-4 rounded-full bg-[#308C17] hover:bg-[#257012] text-white font-heading font-semibold text-[13px] tracking-wide transition-all shadow-sm"
                    >
                      More Details
                    </Link>
                    <a
                      href={`https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encodeURIComponent(
                        `Hello Bali Asri Tour, I am interested in: ${tour.title}`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-2.5 px-4 rounded-full bg-[#FFB200] hover:bg-[#E09D00] text-black font-heading font-bold text-[13px] tracking-wide flex items-center justify-center gap-1.5 shadow-sm transition-all"
                      aria-label={`Inquire about ${tour.title} on WhatsApp`}
                    >
                      <MessageCircle className="w-4 h-4 fill-black text-black" />
                      <span>Inquire</span>
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
