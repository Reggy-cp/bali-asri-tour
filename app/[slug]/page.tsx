import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { notFound, redirect } from 'next/navigation';
import {
  ChevronRight,
  MessageCircle,
  Calendar,
  FileText,
  Send,
} from 'lucide-react';
import { getAllTours, getTourBySlug, getAllBlogPosts, getBlogPostBySlug, TourPackage } from '@/data/tours';
import { CONTACT_INFO } from '@/data/navigation';
import ContactForm from '@/components/forms/ContactForm';
import BlogPostDetail from '@/components/blog/BlogPostDetail';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const tours = getAllTours();
  const blogs = getAllBlogPosts();
  return [
    ...tours.map((tour) => ({ slug: tour.slug })),
    ...blogs.map((b) => ({ slug: b.slug })),
  ];
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const tour = getTourBySlug(slug);

  if (!tour) {
    const blog = getBlogPostBySlug(slug);
    if (blog) {
      return {
        title: `${blog.title} | Bali Asri Tour`,
        description: blog.excerpt,
      };
    }
    return {
      title: 'Tour Not Found | Bali Asri Tour',
    };
  }

  return {
    title: `${tour.title} | Bali Asri Tour`,
    description: tour.description,
  };
}

function getPriceTiers(tour: TourPackage) {
  if (tour.priceTiers && tour.priceTiers.length > 0) {
    return tour.priceTiers;
  }
  const base = tour.priceUSD;
  return [
    { label: 'Solo Traveler', priceUSD: Math.round(base * 1.8) },
    { label: '2-3 Traveler', priceUSD: base },
    { label: '4-6 Traveler', priceUSD: Math.round(base * 0.75) },
    { label: '7-10 Traveler', priceUSD: Math.round(base * 0.6) },
    { label: '11-14 Traveler', priceUSD: Math.round(base * 0.5) },
  ];
}

export default async function TourDetailPage({ params }: Props) {
  const { slug } = await params;
  const tour = getTourBySlug(slug);

  if (!tour) {
    const blog = getBlogPostBySlug(slug);
    if (blog) {
      return <BlogPostDetail blog={blog} />;
    }
    notFound();
  }

  const priceTiers = getPriceTiers(tour);
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${CONTACT_INFO.whatsappNumber}&text=${encodeURIComponent(
    `Hi Bali Asri Tour, I wanna book tour ${tour.title}`
  )}`;
  const pageUrl = `https://bali-agung-tours.com/${tour.slug}/`;

  return (
    <div className="bg-white min-h-screen">
      {/* 1. Breadcrumb navigation */}
      <div className="bg-[#f8f9fa] border-b border-gray-100 py-3 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1140px] mx-auto flex items-center gap-2 text-xs text-gray-500 font-body">
          <Link href="/" className="hover:text-brand-primary transition-colors">
            HOME
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-gray-400 shrink-0" />
          <Link href="/bali-tour-package/" className="hover:text-brand-primary transition-colors">
            BOOK A TOURS
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-gray-400 shrink-0" />
          <span className="text-gray-900 font-medium truncate">{tour.title}</span>
        </div>
      </div>

      {/* 2. Main Tour Detail 2-Column Section */}
      <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Left Column (8 cols): Hero Image, Title Bar, Overview, Highlights, Itinerary, Inclusions, Exclusions */}
          <div className="lg:col-span-8 space-y-6 sm:space-y-7">
            {/* 1. Hero Feature Image with Rounded Corners */}
            <div className="relative aspect-[16/10] sm:aspect-[16/10] w-full rounded-2xl overflow-hidden shadow-sm border border-gray-100 bg-gray-50">
              <Image
                src={tour.image}
                alt={tour.title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 760px"
                className="object-cover"
              />
            </div>

            {/* 2. Tour Title & TripAdvisor Rating Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-gray-200 pb-4 pt-1">
              <h1 className="font-heading font-bold text-2xl sm:text-3xl text-[#1f681a] leading-snug">
                {tour.title}
              </h1>
              <div className="flex flex-col sm:items-end shrink-0">
                <span className="text-xs font-semibold text-gray-700">Excellent</span>
                <div className="flex items-center gap-1 mt-0.5" aria-label="Rated 5 out of 5 on TripAdvisor">
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className="w-3.5 h-3.5 rounded-full bg-[#00aa6c] inline-block shadow-xs"
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* 3. Overview Paragraph */}
            <p className="font-body text-sm sm:text-base text-gray-700 leading-relaxed">
              {tour.description}
            </p>

            {/* 4. Highlights Section */}
            {tour.highlights && tour.highlights.length > 0 && (
              <div className="space-y-3 pt-2">
                <h2 className="font-heading font-bold text-xl sm:text-2xl text-[#2F8B20]">
                  Highlights:
                </h2>
                <ul className="list-disc list-outside pl-5 space-y-2 text-sm sm:text-base text-gray-700 font-body">
                  {tour.highlights.map((highlight, idx) => {
                    const colonIdx = highlight.indexOf(': ');
                    if (colonIdx > 0) {
                      const heading = highlight.slice(0, colonIdx + 1);
                      const body = highlight.slice(colonIdx + 2);
                      return (
                        <li key={idx}>
                          <strong className="font-bold text-gray-900">{heading}</strong>{' '}
                          {body}
                        </li>
                      );
                    }
                    return <li key={idx}>{highlight}</li>;
                  })}
                </ul>
              </div>
            )}

            {/* 5. Itinerary Section */}
            {tour.itinerarySummary && tour.itinerarySummary.length > 0 && (
              <div className="space-y-4 pt-2">
                <h2 className="font-heading font-bold text-xl sm:text-2xl text-[#2F8B20]">
                  Itinerary:
                </h2>
                <ul className="list-disc list-outside pl-5 space-y-3 text-sm sm:text-base text-gray-800 font-body">
                  {tour.itinerarySummary.map((step, idx) => {
                    const colonIdx = step.indexOf(': ');
                    if (colonIdx > 0) {
                      const timeHeading = step.slice(0, colonIdx + 1);
                      const desc = step.slice(colonIdx + 2);
                      return (
                        <li key={idx}>
                          <span className="font-bold text-gray-900">{timeHeading}</span>
                          <ul className="list-[circle] pl-5 pt-1 text-gray-600 text-xs sm:text-sm leading-relaxed">
                            <li>{desc.trim()}</li>
                          </ul>
                        </li>
                      );
                    }
                    return <li key={idx}>{step}</li>;
                  })}
                </ul>
              </div>
            )}

            {/* 6. Inclusions Section */}
            {tour.included && tour.included.length > 0 && (
              <div className="space-y-3 pt-2">
                <h2 className="font-heading font-bold text-xl sm:text-2xl text-[#2F8B20]">
                  Inclusions:
                </h2>
                <ul className="list-disc list-outside pl-5 space-y-1.5 text-sm sm:text-base text-gray-700 font-body">
                  {tour.included.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* 7. Exclusions Section */}
            {tour.excluded && tour.excluded.length > 0 && (
              <div className="space-y-3 pt-2">
                <h2 className="font-heading font-bold text-xl sm:text-2xl text-[#2F8B20]">
                  Exclusions:
                </h2>
                <ul className="list-disc list-outside pl-5 space-y-1.5 text-sm sm:text-base text-gray-700 font-body">
                  {tour.excluded.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* 8. Concluding Summary Paragraph */}
            <p className="font-body text-sm text-gray-700 leading-relaxed pt-3">
              This tour is designed to offer a comprehensive and enriching experience of Bali’s natural beauty, cultural heritage, and soothing relaxation, making it ideal for those seeking both adventure and tranquility.
            </p>

            {/* 9. Booking Form Anchor Section */}
            <div id="booking-form" className="pt-8 border-t border-gray-200 space-y-4">
              <h2 className="font-heading font-bold text-xl sm:text-2xl text-[#1f681a]">
                Book or Inquire for This Tour
              </h2>
              <p className="text-xs sm:text-sm text-gray-600 font-body">
                Fill out the quick form below or contact us directly on WhatsApp for instant confirmation. No prepayment required!
              </p>
              <div className="bg-white rounded-2xl border border-gray-100 p-6 sm:p-8 shadow-card">
                <ContactForm />
              </div>
            </div>

          </div>

          {/* Right Column (4 cols): Sticky Sidebar with 4 Exact Cards */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Card 1: Tour Price (Orange Card #EAA00A) */}
            <div className="bg-[#EAA00A] text-white rounded-2xl p-6 shadow-md space-y-4">
              <h3 className="font-heading font-bold text-2xl text-white">
                Tour Price
              </h3>
              <div className="space-y-2.5">
                {priceTiers.map((tier) => (
                  <div
                    key={tier.label}
                    className="bg-white rounded-full px-5 py-2.5 flex justify-between items-center text-xs sm:text-sm font-medium text-gray-800 shadow-xs"
                  >
                    <span className="text-gray-700">{tier.label}</span>
                    <span className="font-bold text-gray-900">
                      USD {tier.priceUSD} / Pax
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Card 2: Book Now (Green Card #2F8B20) */}
            <div className="bg-[#2F8B20] text-white rounded-2xl p-6 shadow-md space-y-3.5">
              <h3 className="font-heading font-bold text-2xl text-white">
                Book Now
              </h3>

              {/* Button 1: Book by Whatsapp */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2.5 py-3 px-5 rounded-full font-heading font-bold text-sm text-black bg-[#FFB200] hover:bg-[#E09D00] shadow-sm transition-all active:scale-95"
              >
                <MessageCircle className="w-4 h-4 fill-black text-black" />
                <span>Book by Whatsapp</span>
              </a>

              {/* Button 2: Book by Form */}
              <a
                href="#booking-form"
                className="w-full flex items-center justify-center gap-2.5 py-3 px-5 rounded-full font-heading font-bold text-sm text-black bg-[#FFB200] hover:bg-[#E09D00] shadow-sm transition-all active:scale-95"
              >
                <Calendar className="w-4 h-4 text-black" />
                <span>Book by Form</span>
              </a>

              {/* Button 3: Download Packages */}
              <a
                href={tour.image}
                download
                className="w-full flex items-center justify-center gap-2.5 py-3 px-5 rounded-full font-heading font-bold text-sm text-black bg-[#FFB200] hover:bg-[#E09D00] shadow-sm transition-all active:scale-95"
              >
                <FileText className="w-4 h-4 text-black" />
                <span>Download Packages</span>
              </a>
            </div>

            {/* Card 3: Other Packages (Light Mint Card #F1F9EE) */}
            <div className="bg-[#F1F9EE] rounded-2xl p-6 shadow-sm border border-[#E0EFE0] space-y-4">
              <h3 className="font-heading font-bold text-xl text-[#0B3A1C]">
                Other Packages
              </h3>
              <ul className="space-y-2.5 text-xs sm:text-sm font-semibold font-body text-gray-800">
                {[
                  { label: 'Bali Day Tours', href: '/bali-day-tours/' },
                  { label: 'Bali Experience Tours', href: '/bali-experience-tours/' },
                  { label: 'Bali Promo', href: '/bali-promo/' },
                  { label: 'Bali Yoga Tours', href: '/bali-yoga-tours/' },
                ].map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="flex items-center gap-2.5 text-gray-800 hover:text-[#2F8B20] transition-colors"
                    >
                      <Send className="w-3.5 h-3.5 text-[#FFB200] fill-[#FFB200] shrink-0" />
                      <span>{item.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Card 4: Share to others (Light Mint Card #F1F9EE) */}
            <div className="bg-[#F1F9EE] rounded-2xl p-6 shadow-sm border border-[#E0EFE0] space-y-4">
              <h3 className="font-heading font-bold text-xl text-[#0B3A1C]">
                Share to others
              </h3>
              <div className="flex items-center gap-3">
                {/* WhatsApp */}
                <a
                  href={`https://api.whatsapp.com/send?text=${encodeURIComponent(pageUrl)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Share on WhatsApp"
                  className="w-10 h-10 rounded-full bg-[#25D366] text-white flex items-center justify-center hover:opacity-90 transition-opacity shadow-sm"
                >
                  <MessageCircle className="w-5 h-5 fill-current" />
                </a>

                {/* Telegram */}
                <a
                  href={`https://t.me/share/url?url=${encodeURIComponent(pageUrl)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Share on Telegram"
                  className="w-10 h-10 rounded-full bg-[#2AABEE] text-white flex items-center justify-center hover:opacity-90 transition-opacity shadow-sm"
                >
                  <Send className="w-4 h-4 fill-current ml-0.5" />
                </a>

                {/* Facebook */}
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(pageUrl)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Share on Facebook"
                  className="w-10 h-10 rounded-full bg-[#1877F2] text-white font-bold text-lg flex items-center justify-center hover:opacity-90 transition-opacity shadow-sm"
                >
                  f
                </a>

                {/* Pinterest */}
                <a
                  href={`https://pinterest.com/pin/create/button/?url=${encodeURIComponent(pageUrl)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Share on Pinterest"
                  className="w-10 h-10 rounded-full bg-[#BD081C] text-white font-bold text-lg flex items-center justify-center hover:opacity-90 transition-opacity shadow-sm"
                >
                  P
                </a>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
