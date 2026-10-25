import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'Privacy Policy',
  description:
    'Your reservation is absolutely secure. Learn how Bali Asri Tour safeguards your personal data and booking information.',
};

const PARTNERS = [
  { name: 'Airbnb', src: '/images/partners/airbnb.png', width: 130, height: 40 },
  { name: 'Klook', src: '/images/partners/klook.png', width: 130, height: 40 },
  { name: 'Google', src: '/images/partners/google.png', width: 55, height: 55 },
  { name: 'ToursByLocals', src: '/images/partners/toursbylocals.png', width: 80, height: 80 },
  { name: 'Occius', src: '/images/partners/occius.png', width: 150, height: 40 },
  { name: 'Civitatis', src: '/images/partners/civitatis.png', width: 150, height: 40 },
];

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* 1. White Content Section matching Live Site */}
      <section className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-[#308C17] mb-8 text-center sm:text-left">
          Privacy Policy
        </h1>

        <div className="space-y-6 text-gray-700 text-sm sm:text-base leading-relaxed font-body">
          <p>
            Your reservation is abolutely secure. All personal data is encrypted and will be processed in a secure way. Bali Asri Tour takes the privacy of your personal data very seriously. Your personal information will only be used to process your bali tour, packages and activities booking.
          </p>

          <p>
            Bali Asri Tour is committed to maintaining your privacy, www.bali-agung-tours.com gathers certain types of information about you as part of our operations. This Privacy Policy (“Privacy Policy”) explains the types of information we gather, what we do with it and how you may correct or change that information.
          </p>

          <p>
            <strong>Information Collected by Bali Asri Tour;</strong> www.bali-agung-tours.com collects, types of information about you – personal information (such as name and e-mail address)
          </p>

          <p>
            <strong>Personal Information;</strong> Personal information is collected when you voluntarily purchase tours, packages and activities. This may include e-mail address, name, telephone numbers, address and other data needed to provide services to you. We will only require the minimum personal information we need and use it only to provide the services you have requested.
          </p>

          <p>
            www.bali-agung-tours.com reserves the right to change this Privacy Policy at any time. Any such changes will be posted online. Please contact us via e-mail at{' '}
            <a href="mailto:info@baliasritour.com" className="text-[#308C17] hover:underline font-medium">
              info@baliasritour.com
            </a>{' '}
            if you have any questions or concerns about our Privacy Policy.
          </p>
        </div>
      </section>

    </div>
  );
}
