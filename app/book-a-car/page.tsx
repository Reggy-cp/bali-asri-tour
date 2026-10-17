import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Users,
  Briefcase,
  CheckCircle,
  Clock,
  ChevronRight,
  MessageCircle,
  Info,
} from 'lucide-react';
import { FLEET_VEHICLES } from '@/data/fleet';
import { CONTACT_INFO } from '@/data/navigation';

export const metadata = {
  title: 'Book a Car in Bali - Private Fleet Rental | Bali Asri Tour',
  description:
    'Rent a private car with English-speaking local driver in Bali from $40/day. Toyota Avanza, Innova Reborn, HiAce Minibus & Alphard. All-inclusive fuel, AC & flexible 10-hour itineraries.',
};

export default function BookACarPage() {
  const whatsappUrl = (vehicleName: string) =>
    `https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encodeURIComponent(
      `Hello Bali Asri Tour, I would like to book a private car: ${vehicleName} with driver.`
    )}`;

  return (
    <div className="bg-surface-light min-h-screen">
      {/* 1. Exact Live Header: Clean White Top with Bold Green Heading */}
      <section className="bg-white py-12 px-4 sm:px-6 lg:px-8 border-b border-gray-100">
        <div className="max-w-boxed mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <h1 className="font-heading font-bold text-3xl sm:text-4xl text-[#308C17] leading-tight">
              Bali Asri Tour - Book a Car in Bali
            </h1>
            <p className="font-body text-sm sm:text-base text-gray-700 leading-relaxed max-w-2xl">
              Bali Asri Tour provides professional car rental with English-speaking driver, perfect for full-day trips, airport transfers, business visits, or custom island tours. Explore Bali in Comfort and Freedom!
            </p>
          </div>
          <div className="lg:col-span-5 relative aspect-[16/10] rounded-2xl overflow-hidden shadow-sm">
            <Image
              src="/images/driver-hiace.jpg"
              alt="Bali Asri Tour - Book a Car in Bali"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* 2. Fleet Vehicle Catalog Grid */}
      <section className="py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-boxed mx-auto space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="font-heading font-bold text-2xl sm:text-3xl text-brand-primary">
              Choose Your Vehicle
            </h2>
            <p className="font-body text-sm text-body-muted">
              From nimble family MPVs for Ubud's charming village roads to high-roof minibuses for large family groups and VIP luxury limousines.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {FLEET_VEHICLES.map((vehicle) => (
              <div
                key={vehicle.id}
                className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col"
              >
                {/* Vehicle Image with Tag & Price Badge */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-gray-100">
                  <Image
                    src={vehicle.image}
                    alt={`${vehicle.name} with private driver in Bali`}
                    fill
                    sizes="(max-width: 768px) 100vw, 380px"
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                  {vehicle.tag && (
                    <div className="absolute top-3 left-3 bg-[#FFB200] text-black text-[11px] font-heading font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-md">
                      {vehicle.tag}
                    </div>
                  )}
                  <div className="absolute bottom-3 right-3 bg-black/80 backdrop-blur-sm text-white px-3 py-1.5 rounded-lg text-xs font-semibold">
                    ${vehicle.rateUSD} USD / 10 Hrs
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
                  <div className="space-y-3">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h3 className="font-heading font-bold text-lg text-gray-900">
                          {vehicle.name}
                        </h3>
                        <p className="text-xs text-brand-primary font-medium">
                          {vehicle.model} • {vehicle.category}
                        </p>
                      </div>
                    </div>

                    <p className="font-body text-xs text-gray-600 leading-relaxed">
                      {vehicle.description}
                    </p>

                    {/* Capacity Specs */}
                    <div className="flex items-center gap-4 py-2 border-y border-gray-100 text-xs text-gray-700">
                      <div className="flex items-center gap-1.5">
                        <Users className="w-4 h-4 text-brand-primary" />
                        <span>Up to {vehicle.passengers} Guests</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Briefcase className="w-4 h-4 text-brand-primary" />
                        <span>{vehicle.luggage} Suitcases</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Clock className="w-4 h-4 text-brand-primary" />
                        <span>10 Hours</span>
                      </div>
                    </div>

                    {/* Feature Checkmarks */}
                    <ul className="space-y-1.5 pt-1">
                      {vehicle.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-xs text-gray-600">
                          <CheckCircle className="w-3.5 h-3.5 text-[#59A246] shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Actions */}
                  <div className="pt-2">
                    <a
                      href={whatsappUrl(vehicle.name)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-heading font-bold text-xs uppercase tracking-wider text-black bg-[#FFB200] hover:bg-[#E09D00] shadow-sm hover:shadow-md transition-all active:scale-95"
                    >
                      <MessageCircle className="w-4 h-4 fill-black text-black" />
                      <span>Book on WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Transparent Inclusions & Policies */}
      <section className="py-12 bg-white px-4 sm:px-6 lg:px-8 border-t border-gray-100">
        <div className="max-w-boxed mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="space-y-4">
            <h3 className="font-heading font-bold text-xl text-brand-primary flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-brand-accent" />
              <span>What Is Included</span>
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm text-gray-700 font-body">
              <li className="flex items-start gap-2">
                <span className="text-[#59A246] font-bold">✓</span>
                <span>Private, clean vehicle exclusively for your party (no sharing).</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#59A246] font-bold">✓</span>
                <span>Licensed, experienced English-speaking Balinese chauffeur.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#59A246] font-bold">✓</span>
                <span>Full petrol / fuel for the standard 10-hour duration.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#59A246] font-bold">✓</span>
                <span>Bottled mineral water throughout the day.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#59A246] font-bold">✓</span>
                <span>Custom itinerary: You choose where you want to go, or ask your driver for recommendations.</span>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-heading font-bold text-xl text-brand-primary flex items-center gap-2">
              <Info className="w-5 h-5 text-brand-accent" />
              <span>Remote Area Surcharge Policy</span>
            </h3>
            <p className="text-xs sm:text-sm text-gray-700 leading-relaxed font-body">
              Standard rates cover all major destinations across South and Central Bali (Kuta, Seminyak, Legian, Sanur, Jimbaran, Nusa Dua, Uluwatu, Canggu, Ubud, Bedugul, Kintamani).
            </p>
            <div className="bg-surface-light p-4 rounded-xl border border-gray-200 space-y-2 text-xs text-gray-700">
              <div className="font-semibold text-gray-900">Remote Destinations Surcharge:</div>
              <ul className="space-y-1 list-disc list-inside">
                <li>Singaraja, Lovina, Munduk: +$10 USD / car</li>
                <li>East Bali (Amed, Tulamben, Karangasem): +$10 USD / car</li>
                <li>West Bali (Gilimanuk, Pemuteran, Menjangan): +$15 USD / car</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Quick WhatsApp Booking Banner */}
      <section className="bg-[#59A246] text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-boxed mx-auto text-center space-y-6">
          <h2 className="font-heading font-bold text-2xl sm:text-4xl text-white">
            Need a Custom Itinerary or Airport Transfer?
          </h2>
          <p className="max-w-2xl mx-auto text-sm text-white/90 font-body">
            Chat directly with our operations desk on WhatsApp. We confirm vehicle availability within 5 minutes and assign your driver immediately.
          </p>
          <div>
            <a
              href={`https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encodeURIComponent(
                'Hello Bali Asri Tour, I would like to inquire about car hire with driver.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-heading font-bold text-sm uppercase tracking-wider text-black bg-[#FFB200] hover:bg-[#E09D00] shadow-lg transition-all"
            >
              <MessageCircle className="w-5 h-5 fill-black text-black" />
              <span>Chat With Operations Desk</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
