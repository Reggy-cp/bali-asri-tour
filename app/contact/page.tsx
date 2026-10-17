import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, MessageCircle, Mail, MapPin } from 'lucide-react';
import { CONTACT_INFO } from '@/data/navigation';
import ContactForm from '@/components/forms/ContactForm';

export const metadata = {
  title: 'Contact - Bali Asri Tour',
  description:
    'Get in Touch with Bali Asri Tour! Let’s plan your Bali journey with us. Truly Balinese Hospitality.',
};

export default function ContactPage() {
  return (
    <div className="bg-white min-h-screen py-12 px-4 sm:px-6 lg:px-8 font-body">
      <div className="max-w-5xl mx-auto space-y-12">
        
        {/* Top 2-Column Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          
          {/* Left Column: Get in Touch */}
          <div className="space-y-4 text-gray-800">
            <h1 className="font-heading font-bold text-3xl sm:text-4xl text-[#308C17]">
              Get in Touch !
            </h1>

            <p className="font-bold text-base text-gray-900">
              Let’s Plan Your Bali Journey with us!
            </p>

            <p className="text-sm sm:text-base leading-relaxed text-gray-700">
              Have questions or need a personalized Bali itinerary? Our local <strong>Balibuddy Team</strong> is ready to help you create a journey that matches your interests, schedule, and travel style.
            </p>

            <p className="text-sm sm:text-base leading-relaxed text-gray-700">
              From your first message until the end of your Bali holiday, <strong>we’re here for you.</strong>
            </p>

            <p className="font-bold text-sm sm:text-base text-gray-900 pt-2">
              Come as our guest, leave as our family.
            </p>

            <div className="pt-2">
              <p className="font-bold text-gray-900">Bali Asri Tour</p>
              <p className="italic text-sm text-[#308C17]">Truly Balinese Hospitality</p>
            </div>
          </div>

          {/* Right Column: Contact Details */}
          <div className="space-y-4">
            <h2 className="font-heading font-bold text-2xl sm:text-3xl text-[#308C17]">
              Bali Asri Tour
            </h2>

            <div className="space-y-3 text-sm sm:text-base text-gray-800 font-medium">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#FFB200] shrink-0 fill-[#FFB200]" />
                <a href={`tel:${CONTACT_INFO.phoneCall}`} className="hover:text-[#308C17] transition-colors">
                  +{CONTACT_INFO.whatsappNumber}
                </a>
              </div>

              <div className="flex items-center gap-3">
                <MessageCircle className="w-5 h-5 text-[#FFB200] shrink-0 fill-[#FFB200]" />
                <a
                  href={`https://wa.me/${CONTACT_INFO.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#308C17] transition-colors"
                >
                  +{CONTACT_INFO.whatsappNumber}
                </a>
              </div>

              <div className="flex items-center gap-3">
                <MessageCircle className="w-5 h-5 text-[#FFB200] shrink-0 fill-[#FFB200]" />
                <a
                  href={`https://wa.me/${CONTACT_INFO.phoneSecondary.replace(/[^0-9]/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#308C17] transition-colors"
                >
                  {CONTACT_INFO.phoneSecondary}
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#FFB200] shrink-0" />
                <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-[#308C17] transition-colors">
                  {CONTACT_INFO.email}
                </a>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#FFB200] shrink-0 mt-0.5" />
                <span>{CONTACT_INFO.address}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Founder Letter Section */}
        <div className="pt-8 border-t border-gray-100 space-y-4 max-w-4xl">
          <h2 className="font-heading font-bold text-2xl sm:text-3xl text-[#308C17]">
            A word from the founder
          </h2>

          <div className="space-y-3 text-sm sm:text-base text-gray-700 leading-relaxed font-body">
            <p className="font-bold text-gray-900">Om Swastiastu,</p>
            <p>
              For us, Bali Asri Tour is more than a tour company. It is our way of sharing the <strong>heart and soul of Bali</strong> with the world.
            </p>
            <p>
              We believe the best way to experience Bali is not simply by visiting beautiful places, but by connecting with its <strong>people, its culture, and its quiet moments of joy.</strong>
            </p>
            <p>
              Through our <strong>Balibuddy Team</strong>, your trusted local companion, we want every journey to feel personal, warm, and meaningful. We don't just take you places – we take care of you along the way.
            </p>
            <p>
              Our greatest hope is that when your journey ends, you leave Bali with more than beautiful photographs. You leave with <strong>unforgettable memories, genuine friendships, and a piece of Bali in your heart.</strong>
            </p>
            <p>
              At Bali Asri Tour, you may <strong>come as our guest, but we hope you leave as part of our family.</strong>
            </p>
            <p className="italic text-[#308C17] font-medium">
              Because the journey may end, but the memories last far beyond the journey.
            </p>
            <p className="font-bold text-gray-900">
              Let’s explore the magic of Bali together.
            </p>
            <p className="font-bold text-gray-900 pt-2">
              Om Shanti, Shanti, Shanti Om
            </p>
            <div className="pt-2 text-sm text-gray-800">
              <p>Warmest regards,</p>
              <p className="font-bold text-gray-900">Agung Ardana – Balibuddy</p>
              <p className="text-gray-600">Founder – Bali Asri Tour</p>
              <p className="italic text-[#308C17]">Truly Balinese Hospitality</p>
            </div>
          </div>
        </div>

        {/* Contact & Inquiry Form */}
        <div className="pt-8 border-t border-gray-100 max-w-2xl">
          <h3 className="font-heading font-bold text-xl text-gray-900 mb-6">
            Send Us an Inquiry
          </h3>
          <ContactForm />
        </div>

      </div>
    </div>
  );
}
