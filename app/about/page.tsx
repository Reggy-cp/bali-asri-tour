import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { CONTACT_INFO } from '@/data/navigation';

export const metadata = {
  title: 'About - Bali Asri Tour',
  description:
    'Welcome to Bali Asri Tour site, trusted and reliable Bali Personal Drivers and Guides since 2005. Awarded certificate of excellence for providing Bali tour packages on Tripadvisor.',
};

export default function AboutPage() {
  return (
    <div className="bg-white min-h-screen py-12 px-4 sm:px-6 lg:px-8 font-body">
      <div className="max-w-4xl mx-auto space-y-8">
        
        {/* Exact Live Centered Title */}
        <h1 className="font-heading font-bold text-3xl sm:text-4xl text-[#308C17] text-center">
          About Bali Asri Tour
        </h1>

        {/* Live Copy Paragraphs */}
        <div className="space-y-4 text-gray-800 text-sm sm:text-base leading-relaxed">
          <p>
            Welcome to <strong>Bali Asri Tour</strong> site, we are trusted and reliable Bali Personal Drivers and Guides. We have been on this field since 2005, we have served guests from all over the world{' '}
            <a
              href="http://www.tripadvisor.co.id/Attraction_Review-g297694-d2307678-Reviews-Bali_Agung_Tours_Day_Tours-Denpasar_Bali.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#FFB200] hover:underline font-semibold"
            >
              here !
            </a>
            , we are proud Balinese and we’d like to share our expertise about this island. Our tagline “Balinese Hospitality”, We will assure you to have great time and Enjoying Bali Island to the fullest.
          </p>

          <p>
            We have served over 1000 happy guest and our serviceses highly recommended on Largest travel forum{' '}
            <a
              href="http://www.tripadvisor.co.id/Attraction_Review-g297694-d2307678-Reviews-Bali_Agung_Tours_Day_Tours-Denpasar_Bali.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#FFB200] hover:underline font-semibold"
            >
              Tripadvisor
            </a>{' '}
            and we have rewarded certificate of excellence for providing{' '}
            <Link href="/bali-tour-package/" className="text-[#FFB200] hover:underline font-semibold">
              Bali tour package
            </Link>{' '}
            services in 2014, 2015, 2016, 2017, 2023, 2024, 2025. Other reference, we work with some reputable tour agency and tour marketplace such as ; tours by local, Viator, Airbnb, Gia Linh, and more...
          </p>
        </div>

        {/* Exact Live Heading 2 */}
        <div className="pt-4 space-y-4">
          <h2 className="font-heading font-bold text-2xl text-[#308C17]">
            Legal and Regulatory Compliance for Bali Asri Tour
          </h2>

          <p className="text-gray-800 text-sm sm:text-base leading-relaxed">
            Ensuring that Bali Asri Tour operates within the legal and regulatory framework is essential for maintaining trust and credibility with clients and partners. Our commitment to compliance demonstrates our dedication to operating a legitimate and responsible business. Here are the key components of our legal and regulatory compliance:
          </p>

          {/* 5 Exact Numbered Points */}
          <ol className="list-decimal pl-5 space-y-3 text-sm sm:text-base text-gray-800 leading-relaxed">
            <li>
              <strong>Business Registration:</strong> Bali Asri Tour is fully registered as a legal business entity in Indonesia. We have completed all necessary steps to establish our business, including obtaining a business registration certificate from the appropriate government authorities, Our Legal name <strong>{CONTACT_INFO.companyLegal}</strong>
            </li>
            <li>
              <strong>Operational Permits:</strong> We have obtained all required operational permits for our tours and activities, ensuring that we comply with local regulations. Business License No. <strong>{CONTACT_INFO.businessLicense}</strong>
            </li>
            <li>
              <strong>Liability Insurance:</strong> Bali Asri Tour carries comprehensive liability insurance to protect our clients . This insurance covers potential risks and ensures that we can provide financial compensation in the unlikely event of an accident or incident during our tours.
            </li>
            <li>
              <strong>Health and Safety Standards:</strong> We adhere to stringent health and safety standards to ensure the well-being of our clients and staff. This includes regular maintenance and inspection of our vehicles, adherence to safety protocols during activities and training our staff in emergency.
            </li>
            <li>
              <strong>Ethical and Responsible Practices,</strong> (1) <u>Sustainable Tourism</u>: We are committed to promoting sustainable tourism practices. This includes minimizing our environmental impact, supporting local communities, and preserving Bali’s cultural heritage. (2) <u>Transparent Operations</u>: Our business practices are transparent and ethical. We provide clear and accurate information to our clients, partners, and regulatory bodies, ensuring honesty and integrity in all our dealings.
            </li>
          </ol>

          <p className="text-gray-800 text-sm sm:text-base leading-relaxed pt-2">
            By maintaining strict legal and regulatory compliance, Bali Asri Tour ensures a safe, trustworthy, and professional service for all our clients. Our commitment to operating within the law not only protects our business but also enhances our reputation as a reliable and responsible tour operator in Bali.
          </p>
        </div>

        {/* Live Contact & Credentials Strip */}
        <div className="pt-6 border-t border-gray-200 text-sm text-gray-700 space-y-1.5">
          <div>
            <strong>Website:</strong>{' '}
            <span className="text-[#308C17]">www.bali-agung-tours.com</span>
          </div>
          <div>
            <strong>Email:</strong>{' '}
            <a href="mailto:info@bali-agung-tours.com" className="text-[#308C17] hover:underline">
              info@bali-agung-tours.com
            </a>
          </div>
          <div>
            <strong>Phone:</strong>{' '}
            <a href={`tel:${CONTACT_INFO.phoneSecondary}`} className="text-[#308C17] hover:underline">
              {CONTACT_INFO.phoneSecondary}
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
