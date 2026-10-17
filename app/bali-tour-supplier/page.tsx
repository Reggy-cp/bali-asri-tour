import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { CONTACT_INFO } from '@/data/navigation';

export const metadata = {
  title: 'Bali Tour Supplier - Bali Asri Tour',
  description:
    'Established in 2005, Bali Asri Tour is your trusted premier B2B tour supplier and DMC in Bali, offering customizable tour packages, competitive net rates, and 24/7 customer support.',
};

export default function BaliTourSupplierPage() {
  return (
    <div className="bg-white min-h-screen">
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto font-body text-gray-800">
        <h1 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-[#308C17] mb-6">
          Bali Tour Supplier
        </h1>

        <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden mb-10 shadow-sm border border-gray-100">
          <Image
            src="/images/tour-supplier.webp"
            alt="Bali Tour Supplier - Bali Asri Tour"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="space-y-8 text-sm sm:text-base leading-relaxed">
          <div>
            <h2 className="font-heading font-bold text-xl sm:text-2xl text-[#308C17] mb-3">
              Bali Asri Tour: Your Trusted Bali Tour Supplier
            </h2>
            <h3 className="font-heading font-bold text-lg text-gray-900 mb-2">
              About Bali Asri Tour
            </h3>
            <p className="text-gray-700">
              Established in 2005, Bali Asri Tour has quickly become a premier travel and tour company in Bali, Indonesia. Our mission is to provide unforgettable experiences that showcase the rich cultural heritage, stunning landscapes, and vibrant traditions of Bali. We offer a diverse range of customizable tour packages designed to meet the unique preferences of our clients. With a strong commitment to quality service and customer satisfaction, we have earned the Traveler’s Choice Award from TripAdvisor in 2023, 2024, 2025 and keep counting.
            </p>
          </div>

          <div>
            <h2 className="font-heading font-bold text-xl sm:text-2xl text-[#308C17] mb-4">
              Why Choose Bali Asri Tour as Your Bali Tour Supplier ?
            </h2>

            <div className="space-y-5 text-gray-700">
              <div>
                <h3 className="font-heading font-bold text-base text-gray-900">
                  Diverse and Customizable Tour Packages
                </h3>
                <p>
                  At Bali Asri Tour, we understand that every traveler has unique interests and preferences. That’s why we offer a wide variety of tour packages that can be customized to create personalized experiences. Whether your clients are interested in cultural tours, adventure activities, beach getaways, or exploring the iconic rice terraces, we have something for everyone.
                </p>
              </div>

              <div>
                <h3 className="font-heading font-bold text-base text-gray-900">
                  High-Quality Service and Expertise
                </h3>
                <p>
                  Our team of knowledgeable and friendly guides are experts in Balinese culture and tourism. They provide insightful and engaging narratives that enrich the travel experience. Our commitment to exceptional service has earned us high ratings and positive reviews, reflecting our dedication to quality.
                </p>
              </div>

              <div>
                <h3 className="font-heading font-bold text-base text-gray-900">
                  Competitive Pricing and Flexible Partnerships
                </h3>
                <p>
                  We offer competitive pricing on all our tour packages, ensuring excellent value for money. Our flexible partnership models, including commission-based arrangements, fixed-rate packages, and exclusive deals, allow travel agents to choose the best collaboration options for their business.
                </p>
              </div>

              <div>
                <h3 className="font-heading font-bold text-base text-gray-900">
                  Sustainable and Responsible Tourism
                </h3>
                <p>
                  Bali Asri Tour is committed to promoting sustainable tourism practices that respect and preserve Bali’s natural and cultural heritage. We work closely with local communities to support eco-friendly initiatives and ensure that our tours benefit the local economy. Partnering with us allows you to offer your clients environmentally conscious and culturally respectful travel options.
                </p>
              </div>

              <div>
                <h3 className="font-heading font-bold text-base text-gray-900">
                  24/7 Customer Support
                </h3>
                <p>
                  We understand the importance of reliable support, which is why we offer 24/7 customer service. Our dedicated team is always available to address any questions or concerns, ensuring a seamless and enjoyable experience for both you and your clients.
                </p>
              </div>

              <div>
                <h3 className="font-heading font-bold text-base text-gray-900">
                  Proven Track Record
                </h3>
                <p>
                  Recent Achievment Our excellence in service and commitment to providing unforgettable experiences have been recognized with the Traveler’s Choice Award from TripAdvisor in 2025. This accolade is a testament to our quality and reliability as a tour supplier.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="font-heading font-bold text-xl sm:text-2xl text-[#308C17] mb-3">
              Our Services
            </h2>
            <ul className="list-disc pl-5 space-y-1.5 text-gray-700">
              <li><strong>Cultural Tours:</strong> Explore ancient temples, traditional dances, and artisan villages.</li>
              <li><strong>Adventure Tours:</strong> Hike volcanoes, discover hidden waterfalls, and more.</li>
              <li><strong>Beach Tours:</strong> Relax on pristine beaches, snorkel, and dive.</li>
              <li><strong>Rice Field Visits:</strong> Experience the serene beauty of Bali’s iconic rice terraces.</li>
              <li><strong>Dolphin Tours:</strong> Witness dolphins in their natural habitat with our Lovina tours.</li>
              <li><strong>Custom Tours:</strong> Tailor unique Bali experiences with our expert tour consultants.</li>
            </ul>
          </div>

          <div className="pt-4 border-t border-gray-100">
            <h2 className="font-heading font-bold text-xl sm:text-2xl text-[#308C17] mb-3">
              Contact Us
            </h2>
            <p className="text-gray-700 mb-4">
              Ready to partner with Bali Asri Tour and offer unforgettable Bali experiences to your clients? Visit our website, send us an email, or give us a call. We look forward to working with you and providing exceptional tour services.
            </p>
            <div className="space-y-1 text-sm text-gray-800">
              <p><strong>Website:</strong> <Link href="/" className="text-[#308C17] hover:underline">www.bali-agung-tours.com</Link></p>
              <p><strong>Email:</strong> <a href="mailto:info@bali-agung-tours.com" className="text-[#308C17] hover:underline">info@bali-agung-tours.com</a></p>
              <p><strong>Phone:</strong> <a href="tel:+628174108800" className="text-[#308C17] hover:underline">+628174108800</a></p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
