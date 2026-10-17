'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ChevronDown, Phone, MessageCircle, MapPin, Mail } from 'lucide-react';
import { MAIN_NAVIGATION, CONTACT_INFO } from '@/data/navigation';

export default function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  const toggleSubmenu = (label: string) => {
    setOpenSubmenu(openSubmenu === label ? null : label);
  };

  const closeMenu = () => {
    setIsOpen(false);
    setOpenSubmenu(null);
  };

  const whatsappUrl = `https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encodeURIComponent(
    'Hello Bali Asri Tour, I would like to inquire about booking a tour / car rental.'
  )}`;

  return (
    <div className="lg:hidden">
      {/* Hamburger Toggle Button */}
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        aria-label="Open Navigation Menu"
        aria-expanded={isOpen}
        className="p-2.5 rounded-lg text-white hover:bg-white/15 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
      >
        <Menu className="w-6 h-6" />
      </button>

      {/* Backdrop */}
      {isOpen && (
        <div
          onClick={closeMenu}
          aria-hidden="true"
          className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm transition-opacity"
        />
      )}

      {/* Slide-over Drawer */}
      <div
        className={`fixed top-0 right-0 z-50 w-full max-w-xs h-full bg-white shadow-2xl flex flex-col transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full pointer-events-none invisible'
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Site Navigation"
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-100 bg-[#59A246] text-white">
          <div className="flex items-center gap-2.5">
            <Image
              src="/images/logo-emblem.png"
              alt="Bali Asri Tour"
              width={36}
              height={36}
              className="h-9 w-9 object-contain rounded-full shadow-sm"
            />
            <div>
              <span className="font-heading font-bold text-base text-white block">
                Bali Asri Tour
              </span>
              <span className="text-[10px] text-white/80 block tracking-wider uppercase">
                Licensed Bali Tour Operator
              </span>
            </div>
          </div>
          <button
            type="button"
            onClick={closeMenu}
            aria-label="Close Navigation Menu"
            className="p-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Drawer Menu Links */}
        <div className="flex-1 overflow-y-auto p-4 space-y-1">
          {MAIN_NAVIGATION.map((item) => (
            <div key={item.label} className="border-b border-gray-50 last:border-0 pb-1">
              {item.children ? (
                <div>
                  <button
                    type="button"
                    onClick={() => toggleSubmenu(item.label)}
                    aria-expanded={openSubmenu === item.label}
                    className="w-full flex items-center justify-between py-3 text-left font-body font-medium text-gray-800 hover:text-brand-primary transition-colors"
                  >
                    <span>{item.label}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${
                        openSubmenu === item.label ? 'rotate-180 text-brand-primary' : ''
                      }`}
                    />
                  </button>

                  {openSubmenu === item.label && (
                    <div className="pl-3 pr-1 py-1 space-y-1 bg-brand-surface-light rounded-lg mb-2">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={closeMenu}
                          className="block py-2 text-sm text-gray-700 hover:text-brand-primary hover:translate-x-1 transition-all"
                        >
                          <span>{child.label}</span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  href={item.href}
                  onClick={closeMenu}
                  className="block py-3 font-body font-medium text-gray-800 hover:text-brand-primary transition-colors"
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}

          {/* Quick Contact Info */}
          <div className="pt-6 pb-2 space-y-3 text-xs text-gray-600">
            <div className="flex items-center gap-2 text-gray-700">
              <Phone className="w-4 h-4 text-brand-primary shrink-0" />
              <a href={`tel:${CONTACT_INFO.phoneCall}`} className="hover:underline">
                {CONTACT_INFO.phoneDisplay}
              </a>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <Mail className="w-4 h-4 text-brand-primary shrink-0" />
              <a href={`mailto:${CONTACT_INFO.email}`} className="hover:underline">
                {CONTACT_INFO.email}
              </a>
            </div>
            <div className="flex items-start gap-2 text-gray-700">
              <MapPin className="w-4 h-4 text-brand-primary shrink-0 mt-0.5" />
              <span>{CONTACT_INFO.address}</span>
            </div>
          </div>
        </div>

        {/* Drawer Bottom Actions */}
        <div className="p-4 border-t border-gray-100 bg-gray-50 space-y-2">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-lg bg-brand-whatsapp text-white font-medium text-sm shadow-sm hover:bg-brand-whatsapp-dark transition-colors"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>Chat on WhatsApp</span>
          </a>
          <Link
            href="/contact/"
            onClick={closeMenu}
            className="flex items-center justify-center w-full py-2.5 px-4 rounded-lg border border-gray-300 text-gray-700 font-medium text-sm hover:bg-white transition-colors"
          >
            Send Inquiry Form
          </Link>
        </div>
      </div>
    </div>
  );
}
