import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Plane,
  ChevronRight,
  CheckCircle,
  MessageCircle,
  Clock,
  ShieldCheck,
  Luggage,
  Users,
  MapPin,
} from 'lucide-react';
import { CONTACT_INFO } from '@/data/navigation';

export const metadata = {
  title: 'Bali Airport & Hotel Shuttle Transfer - Ngurah Rai (DPS)',
  description:
    'Private Bali airport transfer service 24/7 at Ngurah Rai International Airport (DPS). Meet & greet with name signage, air-conditioned vehicle, luggage assistance, and transparent fixed prices.',
};

export default function AirportShuttlePage() {
  const ZONES = [
    { zone: 'Kuta / Tuban / Legian', priceUSD: 18, duration: '20 - 30 mins' },
    { zone: 'Seminyak / Kerobokan', priceUSD: 22, duration: '30 - 45 mins' },
    { zone: 'Sanur / Denpasar City', priceUSD: 22, duration: '30 - 40 mins' },
    { zone: 'Jimbaran / Nusa Dua', priceUSD: 25, duration: '25 - 40 mins' },
    { zone: 'Uluwatu / Pecatu / Pandawa', priceUSD: 30, duration: '45 - 60 mins' },
    { zone: 'Canggu / Pererenan / Tanah Lot', priceUSD: 30, duration: '45 - 60 mins' },
    { zone: 'Ubud Center & Monkey Forest', priceUSD: 35, duration: '60 - 80 mins' },
    { zone: 'Tegallalang / Payangan', priceUSD: 42, duration: '80 - 100 mins' },
    { zone: 'Padangbai / Candidasa', priceUSD: 48, duration: '90 - 110 mins' },
    { zone: 'Amed / Tulamben (East Bali)', priceUSD: 65, duration: '2.5 - 3 hours' },
    { zone: 'Lovina / Singaraja (North Bali)', priceUSD: 70, duration: '3 - 3.5 hours' },
  ];

  const whatsappUrl = (zone: string) =>
    `https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encodeURIComponent(
      `Hello Bali Asri Tour, I would like to book a Bali airport transfer to/from ${zone}.`
    )}`;

  return (
    <div className="bg-surface-light min-h-screen">
      {/* 1. Exact Live Header: Clean White Top with Bold Green Heading */}
      <section className="bg-white py-12 px-4 sm:px-6 lg:px-8 border-b border-gray-100">
        <div className="max-w-boxed mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <h1 className="font-heading font-bold text-3xl sm:text-4xl text-[#308C17] leading-tight">
              Airport Transfer &amp; Hotel Shuttle - Book Now!
            </h1>
            <p className="font-body text-sm sm:text-base text-gray-700 leading-relaxed max-w-2xl">
              Experience a seamless arrival with our Bali Airport Transfer Service. After your long flight, our friendly Bali driver will greet you at the arrival gate, holding <strong>a sign with your name and Flower Garland</strong> . <span className="underline">No need to queue for a taxi</span>—within minutes, you’ll be on your way to your hotel or villa in a comfortable, air-conditioned car. Enjoy a refreshing cold water . Let us make your first moments in Bali stress-free and enjoyable!
            </p>
            <div className="pt-2">
              <a
                href={`https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encodeURIComponent(
                  'Hello Bali Asri Tour, I would like to get a free quote for big group airport transfer.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="font-heading font-bold text-xs uppercase tracking-wider text-[#FFB200] hover:text-[#E09D00] transition-colors"
              >
                GET FREE QOUTE FOR BIG GROUP !
              </a>
            </div>
          </div>
          <div className="lg:col-span-5 relative aspect-[16/10] rounded-2xl overflow-hidden shadow-sm">
            <Image
              src="/images/driver-hiace.jpg"
              alt="Bali Airport Transfer & Hotel Shuttle"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* 2. Transparent Fixed Rates Table */}
      <section className="py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-boxed mx-auto space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="font-heading font-bold text-2xl sm:text-3xl text-brand-primary">
              Fixed Transfer Rates by Destination Zone
            </h2>
            <p className="font-body text-sm text-body-muted">
              Prices are per private vehicle (Toyota Avanza/Innova, up to 4 guests + luggage). No hidden airport toll or parking surcharges.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-gray-100 shadow-card overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm text-gray-700">
                <thead className="bg-[#59A246] text-white font-heading font-bold text-xs uppercase tracking-wider">
                  <tr>
                    <th className="py-4 px-6">Destination Zone</th>
                    <th className="py-4 px-6">Estimated Drive Time</th>
                    <th className="py-4 px-6">Price (USD)</th>
                    <th className="py-4 px-6 text-right">Quick Booking</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 font-body">
                  {ZONES.map((z, idx) => (
                    <tr key={idx} className="hover:bg-gray-50/80 transition-colors">
                      <td className="py-4 px-6 font-semibold text-gray-900 flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-brand-primary shrink-0" />
                        <span>{z.zone}</span>
                      </td>
                      <td className="py-4 px-6 text-gray-600">
                        <div className="flex items-center gap-1.5">
                          <Clock className="w-3.5 h-3.5 text-gray-400" />
                          <span>{z.duration}</span>
                        </div>
                      </td>
                      <td className="py-4 px-6 font-bold text-brand-primary text-base">
                        ${z.priceUSD} USD
                      </td>
                      <td className="py-4 px-6 text-right">
                        <a
                          href={whatsappUrl(z.zone)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full font-heading font-bold text-xs uppercase tracking-wider text-black bg-[#FFB200] hover:bg-[#E09D00] shadow-sm transition-all"
                        >
                          <MessageCircle className="w-3.5 h-3.5 fill-black text-black" />
                          <span>Book</span>
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Inclusions & How It Works */}
      <section className="py-12 bg-white px-4 sm:px-6 lg:px-8 border-t border-gray-100">
        <div className="max-w-boxed mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 rounded-2xl bg-surface-light border border-gray-100 space-y-3">
            <div className="w-10 h-10 rounded-full bg-[#59A246]/10 text-brand-primary flex items-center justify-center">
              <Plane className="w-5 h-5 text-brand-primary" />
            </div>
            <h3 className="font-heading font-bold text-base text-gray-900">
              1. Live Flight Monitoring
            </h3>
            <p className="font-body text-xs text-gray-600 leading-relaxed">
              We monitor your flight status in real time. Whether your plane lands early or is delayed, your driver will be waiting at the right time at no extra charge.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-surface-light border border-gray-100 space-y-3">
            <div className="w-10 h-10 rounded-full bg-[#59A246]/10 text-brand-primary flex items-center justify-center">
              <Users className="w-5 h-5 text-brand-primary" />
            </div>
            <h3 className="font-heading font-bold text-base text-gray-900">
              2. Name Board at Arrivals
            </h3>
            <p className="font-body text-xs text-gray-600 leading-relaxed">
              Clear customs and baggage claim, walk into the arrivals hall, and look for our driver holding a sign prominently displaying your name.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-surface-light border border-gray-100 space-y-3">
            <div className="w-10 h-10 rounded-full bg-[#59A246]/10 text-brand-primary flex items-center justify-center">
              <Luggage className="w-5 h-5 text-brand-primary" />
            </div>
            <h3 className="font-heading font-bold text-base text-gray-900">
              3. Private Direct Transfer
            </h3>
            <p className="font-body text-xs text-gray-600 leading-relaxed">
              Air-conditioned vehicle reserved exclusively for you and your travel companions. Cold mineral water provided on board as you cruise to your hotel.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
