import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { CONTACT_INFO } from '@/data/navigation';

export const metadata = {
  title: 'Charity - Bali Asri Tour',
  description:
    'Our social responsibility to Bali environment and Keep Bali Clean program. BALI ASRI TOUR and GBC donating garbage bins and supporting children going to school.',
};

const PARTNERS = [
  { name: 'Airbnb', src: '/images/partners/airbnb.png', width: 130, height: 40 },
  { name: 'Klook', src: '/images/partners/klook.png', width: 130, height: 40 },
  { name: 'Google', src: '/images/partners/google.png', width: 55, height: 55 },
  { name: 'ToursByLocals', src: '/images/partners/toursbylocals.png', width: 80, height: 80 },
  { name: 'Occius', src: '/images/partners/occius.png', width: 150, height: 40 },
  { name: 'Civitatis', src: '/images/partners/civitatis.png', width: 150, height: 40 },
];

export default function CharityPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* 1. White Content Section matching Live Site */}
      <section className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-[#308C17] mb-8 text-center sm:text-left">
          Charity
        </h1>

        <div className="space-y-6 text-gray-700 text-sm sm:text-base leading-relaxed font-body">
          <p>
            Our social responsibility to Bali enviroment and “Keep Bali Clean” program.{' '}
            <strong>BALI ASRI TOUR</strong> and <strong>GBC (NGO)</strong> donating Garbage bin at temple and tourist object in around Bali island and we are inviting our guest volunteering on this program. Thanks to them . Our small effort for Bal Clean ! and helping Bali Children Go to School{' '}
            <a
              href={`https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encodeURIComponent('Hello Bali Asri Tour, I would like to support the charity program!')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#ffb703] font-bold hover:underline uppercase"
            >
              GO HERE !
            </a>
          </p>

          <p className="pt-2">
            Support{' '}
            <a
              href={`https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encodeURIComponent('Hello Bali Asri Tour, I want to support the Bali Asri Caring Program!')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#ffb703] font-bold hover:underline uppercase"
            >
              BALI ASRI CARING PROGRAM HERE ~
            </a>
          </p>
        </div>
      </section>

    </div>
  );
}
