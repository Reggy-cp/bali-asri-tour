'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Plus, Minus, MessageCircle } from 'lucide-react';
import { CONTACT_INFO } from '@/data/navigation';

export default function FAQPage() {
  const [openIndices, setOpenIndices] = useState<number[]>([]);

  const toggleIndex = (idx: number) => {
    setOpenIndices((prev) =>
      prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]
    );
  };

  const faqLeft = [
    {
      q: 'What kind of tours do you offer?',
      a: 'We offer private and customizable tours across Bali including Ubud, Nusa Penida, Uluwatu, Bedugul, Kintamani, and more – tailored for families, couples, and adventure seekers.',
    },
    {
      q: 'Is hotel pickup and drop-off included?',
      a: 'Yes, our private tours include pickup/drop-off in Ubud, Seminyak, Kuta, Sanur, Nusa Dua, and Canggu.',
    },
    {
      q: 'Are entrance fees or meals included?',
      a: 'Some tours include entrance fees and meals. Please check each tour description for exact inclusions.',
    },
    {
      q: 'How do I make a booking?',
      a: 'Bookings can be made via website, WhatsApp, or email. Confirmation is sent within 24 hours.',
    },
    {
      q: 'Can I book a tour last-minute?',
      a: "Yes, if available. It's best to book 1–2 days in advance.",
    },
    {
      q: 'Are your tours child or senior-friendly?',
      a: 'Yes! We design trips for all ages and fitness levels, tailored for comfort and safety.',
    },
    {
      q: 'What happens if it rains?',
      a: 'Tours operate rain or shine. We have indoor backup activities and communicate adjustments as needed.',
    },
    {
      q: 'How can I contact my driver before the tour?',
      a: 'Via WhatsApp (+62 817-0373-4836), email (agung@bali-agung-tours.com), or contact form on our website.',
    },
    {
      q: 'Do you offer honeymoon or couple packages?',
      a: 'Yes, with experiences like floating breakfasts, couple spas, romantic dinners, and surprise setups.',
    },
    {
      q: 'Can we stop for shopping or coffee during the tour?',
      a: 'Yes, let us know in advance and we’ll adjust the route accordingly.',
    },
    {
      q: 'Do you offer travel insurance?',
      a: 'No, please arrange your own travel insurance for coverage during your trip.',
    },
    {
      q: 'Can you arrange private group or corporate tours?',
      a: 'Yes! We handle reunions, incentive trips, birthdays, and special occasions end-to-end.',
    },
  ];

  const faqRight = [
    {
      q: 'Can I customize my itinerary?',
      a: 'Absolutely. We tailor every trip to your preferences including destinations, timing, and experiences.',
    },
    {
      q: 'What types of vehicles do you use?',
      a: 'We use clean, air-conditioned vehicles – from compact cars to Toyota HiAce and minibuses, driven by English-speaking drivers.',
    },
    {
      q: 'Do you offer airport transfers?',
      a: 'Yes, we provide private transfers to and from Ngurah Rai Airport to any area in Bali.',
    },
    {
      q: 'What payment methods do you accept?',
      a: 'Cash, secure card payments, PayPal, and bank transfers are accepted.',
    },
    {
      q: 'Do you have guides in other languages?',
      a: 'Yes! We can arrange guides in Italian, German, French, Spanish, Japanese, Mandarin (upon request).',
    },
    {
      q: 'Do you offer B2B or agent rates?',
      a: 'Yes, contact us for partnerships, group packages, or MICE offers.',
    },
    {
      q: 'Can I cancel or reschedule my booking?',
      a: 'Yes. We offer flexible cancellation. Please contact us early for changes.',
    },
    {
      q: 'Do you organize Nusa Penida day trips?',
      a: 'Yes, private and shared options are available, including snorkeling, car and driver, lunch, and transfers.',
    },
    {
      q: 'Are your drivers also tour guides?',
      a: 'Drivers provide basic info, and licensed guides can be added for deeper experiences.',
    },
    {
      q: 'Is tipping expected in Bali?',
      a: 'Not required, but appreciated. Most guests tip IDR 50,000–100,000/day for drivers or guides.',
    },
    {
      q: 'Why choose Bali Asri Tour?',
      a: 'Local expertise, over 10 years’ experience, flexible planning, and top-rated personalized service.',
    },
    {
      q: 'Can you provide a drone pilot or photographer?',
      a: 'Yes, available on request – ideal for preweds, reels, or special moments. Book in advance.',
    },
  ];

  return (
    <div className="bg-[#308C17] text-white min-h-screen py-16 px-4 sm:px-6 lg:px-8 font-body">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Exact Live Centered Title */}
        <h1 className="font-heading font-bold text-3xl sm:text-5xl text-white text-center">
          Frequently Asked Questions
        </h1>

        {/* 2-Column Exact Layout Matching Live Screenshot */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-4 items-start">
          
          {/* Left Column */}
          <div className="space-y-4">
            {faqLeft.map((item, idx) => {
              const isOpen = openIndices.includes(idx);
              return (
                <div key={idx} className="border-b border-white/20 pb-4">
                  <button
                    type="button"
                    onClick={() => toggleIndex(idx)}
                    className="w-full flex items-center justify-between text-left gap-4 py-2 text-white hover:text-[#FFB200] transition-colors focus:outline-none"
                  >
                    <span className="font-heading font-medium text-base sm:text-lg">
                      {item.q}
                    </span>
                    <span className="shrink-0 text-xl font-light">
                      {isOpen ? '−' : '+'}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="pt-2 text-sm text-white/90 leading-relaxed font-body">
                      {item.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Column */}
          <div className="space-y-4">
            {faqRight.map((item, idx) => {
              const rIdx = idx + 100;
              const isOpen = openIndices.includes(rIdx);
              return (
                <div key={rIdx} className="border-b border-white/20 pb-4">
                  <button
                    type="button"
                    onClick={() => toggleIndex(rIdx)}
                    className="w-full flex items-center justify-between text-left gap-4 py-2 text-white hover:text-[#FFB200] transition-colors focus:outline-none"
                  >
                    <span className="font-heading font-medium text-base sm:text-lg">
                      {item.q}
                    </span>
                    <span className="shrink-0 text-xl font-light">
                      {isOpen ? '−' : '+'}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="pt-2 text-sm text-white/90 leading-relaxed font-body">
                      {item.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>

        {/* WhatsApp Helper CTA */}
        <div className="text-center pt-8">
          <p className="text-white/90 text-sm mb-4">
            Still have questions? Chat with our local Bali team directly.
          </p>
          <a
            href={`https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encodeURIComponent(
              'Hello Bali Asri Tour, I have a question about your tours.'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-heading font-bold text-xs uppercase tracking-wider text-gray-900 bg-[#FFB200] hover:bg-[#E09D00] shadow-lg transition-all active:scale-95"
          >
            <MessageCircle className="w-4 h-4 fill-gray-900" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>

      </div>
    </div>
  );
}
