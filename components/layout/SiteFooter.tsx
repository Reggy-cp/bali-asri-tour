import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Phone,
  Mail,
  MessageCircle,
  Facebook,
  Instagram,
  Twitter,
} from 'lucide-react';
import { CONTACT_INFO, SOCIAL_LINKS } from '@/data/navigation';

export default function SiteFooter() {

  return (
    <footer className="w-full">
      {/* 1. Partner Logos Strip on White Background */}
      <div className="bg-white py-10 px-4 sm:px-6 lg:px-8 border-t border-gray-100">
        <div className="max-w-5xl mx-auto flex justify-center items-center">
          <Image
            src="/images/partners-full.jpg"
            alt="Trusted Partners: Airbnb, Klook, Google, ToursByLocals, Occius, Civitatis"
            width={1170}
            height={89}
            className="w-full max-w-4xl h-auto object-contain"
            priority
          />
        </div>
      </div>

      {/* 2. Main Rich Green Footer (#3a8f1d) */}
      <div className="bg-[#3a8f1d] text-white pt-14 pb-12">
        <div className="max-w-boxed mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-8 items-start">
            
            {/* Column 1: Brand Info & Contacts (md:col-span-4) */}
            <div className="md:col-span-4 space-y-4">
              <Link href="/" className="flex items-center gap-2.5 sm:gap-3 mb-1 group">
                <Image
                  src="/images/logo-emblem.png"
                  alt="Bali Asri Tour"
                  width={44}
                  height={44}
                  className="h-10 w-10 sm:h-11 sm:w-11 object-contain rounded-full shadow-sm group-hover:scale-105 transition-transform"
                />
                <span className="font-heading font-extrabold text-xl sm:text-2xl tracking-wider text-white uppercase whitespace-nowrap drop-shadow-sm">
                  Bali Asri Tour
                </span>
              </Link>

              <p className="text-xs sm:text-sm text-white/95 leading-relaxed font-body">
                {CONTACT_INFO.address}
              </p>

              <div className="space-y-2 text-xs sm:text-sm font-medium font-body pt-1">
                {/* Phone */}
                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-[#FFB200] shrink-0" />
                  <a href={`tel:${CONTACT_INFO.phoneCall}`} className="hover:underline">
                    {CONTACT_INFO.phoneDisplay}
                  </a>
                </div>

                {/* WhatsApp */}
                <div className="flex items-center gap-2.5">
                  <MessageCircle className="w-4 h-4 text-[#FFB200] shrink-0 fill-[#FFB200]" />
                  <a
                    href={`https://wa.me/${CONTACT_INFO.whatsappNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    {CONTACT_INFO.phoneDisplay}
                  </a>
                </div>

                {/* Email */}
                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-[#FFB200] shrink-0" />
                  <a href={`mailto:${CONTACT_INFO.email}`} className="hover:underline">
                    {CONTACT_INFO.email}
                  </a>
                </div>
              </div>

              {/* Social Media Icons in Yellow/Gold (#FFB200) */}
              <div className="flex items-center gap-4 pt-3 text-[#FFB200]">
                <a
                  href={SOCIAL_LINKS.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="hover:text-white transition-colors"
                >
                  <Facebook className="w-4 h-4 fill-current" />
                </a>
                <a
                  href={SOCIAL_LINKS.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="hover:text-white transition-colors"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href={SOCIAL_LINKS.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                  className="hover:text-white transition-colors"
                >
                  <Twitter className="w-4 h-4 fill-current" />
                </a>
                <a
                  href={SOCIAL_LINKS.tripadvisor}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="TripAdvisor"
                  className="hover:text-white transition-colors flex items-center justify-center"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <circle cx="6.5" cy="12" r="4.5" fill="none" stroke="currentColor" strokeWidth="1.5" />
                    <circle cx="17.5" cy="12" r="4.5" fill="none" stroke="currentColor" strokeWidth="1.5" />
                    <circle cx="6.5" cy="12" r="1.5" fill="currentColor" />
                    <circle cx="17.5" cy="12" r="1.5" fill="currentColor" />
                    <path d="M12 8c-2 0-3.5 1-4.5 2M12 8c2 0 3.5 1 4.5 2M12 6v2M12 11l-1.5 2h3L12 11z" fill="currentColor" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Column 2: Quick Links (md:col-span-5) */}
            <div className="md:col-span-5 space-y-4">
              <h3 className="font-heading font-bold text-lg sm:text-xl text-white">
                Quick Links
              </h3>

              <div className="grid grid-cols-2 gap-x-4 gap-y-2.5 text-xs sm:text-sm text-white/90 font-medium font-body">
                <Link href="/" className="hover:text-[#FFB200] transition-colors flex items-center gap-1.5">
                  <span className="text-[#FFB200]">›</span> Home
                </Link>
                <Link href="/about/" className="hover:text-[#FFB200] transition-colors flex items-center gap-1.5">
                  <span className="text-[#FFB200]">›</span> About Us
                </Link>
                <Link href="/bali-day-tours/" className="hover:text-[#FFB200] transition-colors flex items-center gap-1.5">
                  <span className="text-[#FFB200]">›</span> Bali Day Tours
                </Link>
                <Link href="/bali-tour-package/" className="hover:text-[#FFB200] transition-colors flex items-center gap-1.5">
                  <span className="text-[#FFB200]">›</span> Tour Packages
                </Link>
                <Link href="/bali-honeymoon-packages/" className="hover:text-[#FFB200] transition-colors flex items-center gap-1.5">
                  <span className="text-[#FFB200]">›</span> Honeymoon Packages
                </Link>
                <Link href="/bali-yoga-tours/" className="hover:text-[#FFB200] transition-colors flex items-center gap-1.5">
                  <span className="text-[#FFB200]">›</span> Bali Yoga Tours
                </Link>
                <Link href="/book-a-car/" className="hover:text-[#FFB200] transition-colors flex items-center gap-1.5">
                  <span className="text-[#FFB200]">›</span> Book A Car
                </Link>
                <Link href="/bali-airport-hotel-shuttle/" className="hover:text-[#FFB200] transition-colors flex items-center gap-1.5">
                  <span className="text-[#FFB200]">›</span> Airport Shuttle
                </Link>
                <Link href="/review-gallery/" className="hover:text-[#FFB200] transition-colors flex items-center gap-1.5">
                  <span className="text-[#FFB200]">›</span> Review &amp; Gallery
                </Link>
                <Link href="/contact/" className="hover:text-[#FFB200] transition-colors flex items-center gap-1.5">
                  <span className="text-[#FFB200]">›</span> Contact Us
                </Link>
                <Link href="/terms-conditions/" className="hover:text-[#FFB200] transition-colors flex items-center gap-1.5">
                  <span className="text-[#FFB200]">›</span> Terms &amp; Conditions
                </Link>
                <Link href="/privacy-policy/" className="hover:text-[#FFB200] transition-colors flex items-center gap-1.5">
                  <span className="text-[#FFB200]">›</span> Privacy Policy
                </Link>
              </div>
            </div>

            {/* Column 3: We Accept with White Payment Card (md:col-span-3) */}
            <div className="md:col-span-3 space-y-4">
              <h3 className="font-heading font-bold text-lg sm:text-xl text-white">
                We Accept
              </h3>

              {/* Exact PayPal & Cards White Box from Reference Image */}
              <div className="bg-white rounded-2xl p-4 shadow-lg border border-gray-100 flex items-center justify-center max-w-[280px]">
                <Image
                  src="/images/paypal.webp"
                  alt="PayPal, Visa, MasterCard, American Express, Discover"
                  width={280}
                  height={190}
                  className="w-full h-auto object-contain max-h-[170px]"
                />
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* 3. Sub-Footer with Center ASITA Badge on White Background */}
      <div className="bg-white py-6 border-t border-gray-100">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-medium text-[#4b7a39] text-center md:text-left">
            {/* Left Copyright */}
            <div className="whitespace-nowrap text-[#4b7a39]">
              Copyright &copy;2005-2026 Bali Asri Tour. All Rights Reserved.
            </div>

            {/* Center ASITA Official Seal */}
            <div className="flex justify-center py-2 md:py-0">
              <Image
                src="/images/asita.png"
                alt="Association of The Indonesian Tours and Travel Agencies"
                width={120}
                height={80}
                className="h-14 w-auto object-contain"
              />
            </div>

            {/* Right Legal Business License */}
            <div className="whitespace-nowrap font-medium text-[#4b7a39] md:text-right md:pr-14 lg:pr-20">
              {CONTACT_INFO.companyLegal} | Bussiness Licence : {CONTACT_INFO.businessLicense}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
