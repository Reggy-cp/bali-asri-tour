'use client';

import React from 'react';
import { MessageCircle } from 'lucide-react';
import { CONTACT_INFO } from '@/data/navigation';

export default function FloatingWhatsApp() {
  const whatsappUrl = `https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encodeURIComponent(
    'Hello Bali Asri Tour, I would like to inquire about your tour packages and private driver services in Bali.'
  )}`;

  return (
    <aside
      aria-label="Direct WhatsApp Contact"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 group"
    >
      {/* Tooltip on Hover */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none group-hover:pointer-events-auto bg-white text-gray-800 text-xs sm:text-sm font-semibold py-2 px-4 rounded-full shadow-lg border border-gray-100 whitespace-nowrap"
      >
        Chat Now – Instant Reply !
      </a>

      {/* Floating Green WhatsApp Button matching exact reference icon */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat directly with Bali Asri Tour on WhatsApp"
        className="relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#5cb85c] text-white shadow-xl hover:bg-[#4ea74e] hover:scale-105 active:scale-95 transition-all duration-200 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#5cb85c]/30"
      >
        {/* Chat speech bubble with 3 dots matching reference screenshot */}
        <svg className="w-6 h-6 sm:w-7 sm:h-7 fill-white" viewBox="0 0 24 24">
          <path d="M12 2C6.477 2 2 6.477 2 12c0 1.821.487 3.53 1.338 5L2.5 21.5l4.636-.825A9.957 9.957 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2z" />
          <circle cx="8" cy="12" r="1.25" fill="#5cb85c" />
          <circle cx="12" cy="12" r="1.25" fill="#5cb85c" />
          <circle cx="16" cy="12" r="1.25" fill="#5cb85c" />
        </svg>
      </a>
    </aside>
  );
}
