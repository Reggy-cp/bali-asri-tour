import React from 'react';
import Link from 'next/link';
import { CONTACT_INFO } from '@/data/navigation';

export const metadata = {
  title: 'Terms & Conditions',
  description:
    'Terms and conditions for Bali tour packages, car hire, payment policies, cancellation guidelines, and legal jurisdiction by Bali Asri Tour.',
};

export default function TermsConditionsPage() {
  return (
    <div className="bg-white min-h-screen">
      <section className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto font-body text-gray-800">
        <h1 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-[#308C17] mb-10 text-center">
          Terms &amp; Conditions
        </h1>

        <div className="space-y-8 text-sm sm:text-base leading-relaxed">
          {/* Section 1 */}
          <div className="space-y-4">
            <h2 className="font-heading font-bold text-lg sm:text-xl text-black">
              Tour Package Terms And Conditions
            </h2>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>We provide tours from Bali island and beyond Bali, we are open for special request and customized.</li>
              <li>All Bali tour price which is stated on this site is Clear and No Hidden Charge</li>
              <li>All Bali Tour Price is Inclusive of Comfortable Airconditioned Car, English speaking Driver, Mineral water.</li>
              <li>Goverment Licensed tour guide (English, Spanish, Mandarin, German, etc) available on request and extra charge will apply.</li>
              <li>
                If you are already in Bali, you can direct booking by calling our office at{' '}
                <a href="tel:+6281703734836" className="text-[#308C17] hover:underline font-medium">+62 817-0373-4836</a> (24 hours)
              </li>
              <li>For Tour Payment; We only accept major currencies ; U$ Dollar in (IDR) Rupiah. Rate subject to daily exchange rate.</li>
              <li>For Tour Payment; 50 % Deposit and another 50% upon Arrival.</li>
              <li>
                <span className="underline font-semibold">Tour Package Cancelation Policy</span> ; cancelation 50% will apply for 30 days cancel prior the travel or tour date date, 100% no refund for no show and last minute cancel (i.e 1 x 24 hour) from travel or tour date.
              </li>
              <li>
                We offer special price for group booking and up to 20% off for bali actvites booking. For inquiry drop us email at{' '}
                <a href="mailto:info@baliasritour.com" className="text-[#308C17] hover:underline font-medium">info@baliasritour.com</a> or Text (WA){' '}
                <a href="https://wa.me/6281703734836" className="text-[#308C17] hover:underline font-medium">+62 817-0373-4836</a> (24 hours)
              </li>
            </ul>
          </div>

          {/* Section 2 */}
          <div className="space-y-3 pt-4">
            <h2 className="font-heading font-bold text-lg sm:text-xl text-black uppercase">
              Price
            </h2>
            <p className="text-gray-700">
              All Tours price which is presented for our service and package, can be changed and the price is not final yet, until payment is made and accepted as per agreement.
            </p>
          </div>

          {/* Section 3 */}
          <div className="space-y-3 pt-4">
            <h2 className="font-heading font-bold text-lg sm:text-xl text-black uppercase">
              Payment Method
            </h2>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>Cash, Bank Transfer, Western Union, Major Credit Card and Online Payment Via Paypal.</li>
              <li className="underline font-semibold">We are not responsible for any bank fee/charges may occur during transaction.</li>
              <li>We only accept cash for Payment in Bali ( IDR)</li>
            </ul>
          </div>

          {/* Section 4 */}
          <div className="space-y-3 pt-4">
            <h2 className="font-heading font-bold text-lg sm:text-xl text-black uppercase">
              Travel Insurance
            </h2>
            <p className="text-gray-700">
              It is Advised that all traveler should purchase adequate travel insurance at the time of booking flights.
            </p>
          </div>

          {/* Section 5 */}
          <div className="space-y-3 pt-4">
            <h2 className="font-heading font-bold text-lg sm:text-xl text-black uppercase">
              Rule of Addition
            </h2>
            <p className="text-gray-700">
              Additional rule and condition valid for ordering, purchasing of service and product and other exploiting from the part of this site, and you agree to obey other terms and conditions, including additional terms and condition that is occurred in its bearing with certain service and product.
            </p>
          </div>

          {/* Section 6 */}
          <div className="space-y-3 pt-4">
            <h2 className="font-heading font-bold text-lg sm:text-xl text-black uppercase">
              Law and Jurisdiction
            </h2>
            <p className="text-gray-700">
              Terms and condition, performance and all arising out dispute from or in its relation with conditions and this rule is set by law of Indonesia. You herewith agree and bow to jurisdiction of non-exclusive justice of Republic of Indonesia in all arising out question and controversy from or in its relation with conditions and rule, performance and usage of this site.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
