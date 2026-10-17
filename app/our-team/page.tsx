import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { CONTACT_INFO } from '@/data/navigation';

export const metadata = {
  title: 'Our Team',
  description:
    'Bali Asri Tour is Team of local Balinese with Global mindset, dedicated to giving true Balinese Hospitality to travelers visiting Bali Island.',
};

const PARTNERS = [
  { name: 'Airbnb', src: '/images/partners/airbnb.png', width: 130, height: 40 },
  { name: 'Klook', src: '/images/partners/klook.png', width: 130, height: 40 },
  { name: 'Google', src: '/images/partners/google.png', width: 55, height: 55 },
  { name: 'ToursByLocals', src: '/images/partners/toursbylocals.png', width: 80, height: 80 },
  { name: 'Occius', src: '/images/partners/occius.png', width: 150, height: 40 },
  { name: 'Civitatis', src: '/images/partners/civitatis.png', width: 150, height: 40 },
];

export default function OurTeamPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* 1. White Header Section matching Live Site */}
      <section className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center">
        <h1 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-[#308C17] mb-8">
          Our Team
        </h1>

        <div className="space-y-6 text-gray-700 text-sm sm:text-base leading-relaxed font-body text-left sm:text-center">
          <p>
            Bali Asri Tour is Team of local Balinese with Global mindset, we dedicated ourselve to give true Balinese Hospitality to the traveler who visting Bali Island, experience the real Bali with local, explore the magic of Bali with ” My_Balibuddy”.
          </p>
          <p>
            Experience the excitement of our guests’ adventures in Bali with Bali Asri Tour! From exploring stunning rice terraces and pristine beaches to discovering hidden waterfalls and vibrant local markets, our tours offer unforgettable moments. Follow us on Instagram to join the fun, see highlights from our trips, and get inspired for your next Bali getaway. Don’t miss out on the magic – follow{' '}
            <a
              href="https://www.instagram.com/my_balibuddy/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#ffb703] font-bold hover:underline"
            >
              @my_balibuddy
            </a>{' '}
            and be part of our journey! 🌴✨
          </p>
        </div>
      </section>

    </div>
  );
}
