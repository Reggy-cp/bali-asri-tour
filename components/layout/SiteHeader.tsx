import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Mail, MessageCircle, Heart } from 'lucide-react';
import { MAIN_NAVIGATION, CONTACT_INFO } from '@/data/navigation';
import MobileNavigation from './MobileNavigation';

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full shadow-md">
      {/* 1. Top Bar (Solid Rich Green #308C17) */}
      <div className="bg-[#308C17] text-white text-xs py-2 px-4 border-b border-black/10">
        <div className="max-w-boxed mx-auto flex items-center justify-between gap-4">
          {/* Left: Contact Info */}
          <div className="flex items-center gap-5 text-xs font-medium">
            <a
              href={`https://wa.me/${CONTACT_INFO.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-[#FFB200] transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5 text-[#FFB200] fill-[#FFB200]" />
              <span>+{CONTACT_INFO.whatsappNumber}</span>
            </a>
            <a
              href={`mailto:${CONTACT_INFO.email}`}
              className="hidden sm:flex items-center gap-1.5 hover:text-[#FFB200] transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-[#FFB200]" />
              <span>{CONTACT_INFO.email}</span>
            </a>
          </div>

          {/* Right: Promotional Tagline */}
          <div className="flex items-center gap-1.5 text-xs text-white/95 font-medium ml-auto">
            <Heart className="w-3.5 h-3.5 text-[#FFB200] shrink-0" />
            <span className="hidden md:inline">Special Offer &amp; Budget Friendly, Book the Experience Now!!</span>
            <span className="md:hidden">Special Offer &amp; Budget Friendly!</span>
          </div>
        </div>
      </div>

      {/* 2. Main Navbar (Solid Green #59A246 with matching typography) */}
      <div className="bg-[#59A246] text-white">
        <div className="max-w-wide mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4 flex-nowrap">
          {/* Brand Logo */}
          <Link
            href="/"
            className="flex items-center gap-2.5 sm:gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-lg py-1 shrink-0"
          >
            <Image
              src="/images/logo-emblem.png"
              alt="Bali Asri Tour - Bali Tour Packages with Local Experts"
              width={48}
              height={48}
              className="h-10 w-10 sm:h-11 sm:w-11 object-contain rounded-full shadow-sm group-hover:scale-105 transition-transform"
              priority
            />
            <span className="font-heading font-extrabold text-xl sm:text-2xl tracking-wider text-white uppercase whitespace-nowrap drop-shadow-sm">
              Bali Asri Tour
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-5 xl:gap-7 font-heading font-bold text-sm tracking-wider uppercase text-white flex-nowrap shrink-0" aria-label="Main Navigation">
            {MAIN_NAVIGATION.map((item) => (
              <div key={item.label} className="relative group">
                {item.children ? (
                  <>
                    <div className="flex items-center gap-1 py-2 cursor-pointer group-hover:text-[#FFB200] transition-colors">
                      <Link
                        href={item.href}
                        className="hover:text-[#FFB200] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white whitespace-nowrap"
                      >
                        {item.label}
                      </Link>
                      <span className="text-[10px] transition-transform duration-200 group-hover:rotate-180 inline-block text-white/90 group-hover:text-[#FFB200]">
                        ▾
                      </span>
                    </div>

                    {/* Dropdown Sub Menu */}
                    <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 pointer-events-none group-hover:pointer-events-auto">
                      {/* Invisible hover bridge to prevent menu from closing when moving cursor */}
                      <div className="absolute -top-2 left-0 right-0 h-4" />

                      <div className="min-w-[270px] w-auto bg-white rounded-xl shadow-2xl border border-gray-100/90 text-gray-800 normal-case font-body text-sm overflow-hidden">
                        <div className="py-1.5">
                          {item.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className="flex items-center px-4 py-2.5 text-gray-700 hover:text-[#308C17] hover:bg-[#F4F8F3] transition-colors text-sm font-medium tracking-normal whitespace-nowrap"
                            >
                              <span>{child.label}</span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className="py-2 hover:text-[#FFB200] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white whitespace-nowrap"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile Hamburger Drawer Trigger */}
          <div className="lg:hidden flex items-center">
            <MobileNavigation />
          </div>
        </div>
      </div>
    </header>
  );
}
