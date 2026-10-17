import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  ChevronRight,
  MessageCircle,
  Send,
  Calendar,
  Clock,
  User,
  ArrowRight,
} from 'lucide-react';
import { BlogPost, getAllBlogPosts, getAllTours } from '@/data/tours';
import BlogInquiryForm from '@/components/forms/BlogInquiryForm';

interface BlogPostDetailProps {
  blog: BlogPost;
}

export default function BlogPostDetail({ blog }: BlogPostDetailProps) {
  const allBlogs = getAllBlogPosts();
  const otherBlogs = allBlogs.filter((b) => b.id !== blog.id).slice(0, 3);
  const featuredTours = getAllTours().slice(0, 3);
  const pageUrl = `https://bali-agung-tours.com/${blog.slug}/`;

  return (
    <div className="bg-white min-h-screen">
      {/* 1. Breadcrumb navigation */}
      <div className="bg-[#f8f9fa] border-b border-gray-100 py-3 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1140px] mx-auto flex items-center gap-2 text-xs text-gray-500 font-body">
          <Link href="/" className="hover:text-brand-primary transition-colors">
            HOME
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-gray-400 shrink-0" />
          <Link href="/blogs/" className="hover:text-brand-primary transition-colors">
            BLOGS &amp; TRAVEL TIPS
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-gray-400 shrink-0" />
          <span className="text-gray-900 font-medium truncate">{blog.title}</span>
        </div>
      </div>

      {/* 2. Main 2-Column Section */}
      <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Left Column (8 cols): Featured Image, Title, Body, Tables, FAQs, Form */}
          <article className="lg:col-span-8 space-y-6">
            {/* 1. Large Rounded Featured Image */}
            <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden shadow-sm border border-gray-100 bg-gray-50">
              <Image
                src={blog.image}
                alt={blog.title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 760px"
                className="object-cover"
              />
            </div>

            {/* 2. Post Title in Green + Horizontal Divider */}
            <div className="space-y-3 pt-1">
              <h1 className="font-heading font-bold text-2xl sm:text-3xl text-[#1f681a] leading-snug">
                {blog.title}
              </h1>
              <div className="border-b border-gray-200 pb-1" />
            </div>

            {/* 3. Introduction Paragraph (Excerpt) */}
            <p className="font-body text-sm sm:text-base text-gray-700 leading-relaxed">
              {blog.excerpt}
            </p>

            {/* 4. Article Content Sections */}
            <div className="space-y-6 font-body text-sm sm:text-base text-gray-700 leading-relaxed">
              {blog.content.map((sec, idx) => (
                <div key={idx} className="space-y-3 pt-1">
                  {sec.level === 'h3' ? (
                    <h3 className="font-heading font-bold text-lg sm:text-xl text-[#2F8B20]">
                      {sec.heading}
                    </h3>
                  ) : (
                    <h2 className="font-heading font-bold text-xl sm:text-2xl text-[#2F8B20]">
                      {sec.heading}
                    </h2>
                  )}

                  <div className="space-y-3">
                    {sec.body.map((p, pIdx) => {
                      // Check for special disclaimer or source highlights
                      const isDisclaimer = p.startsWith('Important disclaimer:');
                      const isIndonesiaExpat = p.includes('Indonesia Expat');

                      return (
                        <p key={pIdx}>
                          {isDisclaimer ? (
                            <>
                              <strong className="font-bold text-gray-900">Important disclaimer:</strong>{' '}
                              {p.replace('Important disclaimer:', '').trim()}
                            </>
                          ) : isIndonesiaExpat ? (
                            <>
                              According to <span className="text-[#2F8B20] font-semibold">Indonesia Expat</span>
                              {p.replace('According to Indonesia Expat', '')}
                            </>
                          ) : (
                            p
                          )}
                        </p>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>

            {/* 5. Comparison Tables */}
            {blog.tables && blog.tables.length > 0 && (
              <div className="space-y-6 pt-2">
                {blog.tables.map((table, tIdx) => (
                  <div key={tIdx} className="space-y-3">
                    <h2 className="font-heading font-bold text-xl sm:text-2xl text-[#2F8B20]">
                      {table.heading}
                    </h2>
                    <div className="overflow-x-auto border border-gray-300 rounded-lg shadow-2xs">
                      <table className="w-full border-collapse text-left text-xs sm:text-sm">
                        <thead>
                          <tr className="bg-gray-100 border-b border-gray-300 text-gray-900">
                            {table.headers.map((h, hIdx) => (
                              <th
                                key={hIdx}
                                className="px-4 py-3 font-bold border-r last:border-r-0 border-gray-300"
                              >
                                {h}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {table.rows.map((row, rIdx) => (
                            <tr
                              key={rIdx}
                              className={`border-b last:border-b-0 border-gray-300 ${
                                rIdx % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'
                              }`}
                            >
                              {row.map((cell, cIdx) => (
                                <td
                                  key={cIdx}
                                  className={`px-4 py-3 border-r last:border-r-0 border-gray-300 ${
                                    cIdx === 0 ? 'font-medium text-gray-900' : 'text-gray-700'
                                  }`}
                                >
                                  {cell}
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* 6. Quick Checklist */}
            {blog.checklist && (
              <div className="space-y-3 pt-2">
                <h2 className="font-heading font-bold text-xl sm:text-2xl text-[#2F8B20]">
                  {blog.checklist.heading}
                </h2>
                <ul className="list-disc list-outside pl-5 space-y-2 text-sm sm:text-base text-gray-700 font-body">
                  {blog.checklist.items.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* 7. FAQs Section */}
            {blog.faqs && blog.faqs.length > 0 && (
              <div className="space-y-4 pt-2">
                <h2 className="font-heading font-bold text-xl sm:text-2xl text-[#2F8B20]">
                  FAQ — Frequently Asked Questions
                </h2>
                <div className="space-y-4">
                  {blog.faqs.map((faq, idx) => (
                    <div key={idx} className="space-y-1.5">
                      <h3 className="font-heading font-bold text-lg sm:text-xl text-[#2F8B20]">
                        {faq.question}
                      </h3>
                      <p className="font-body text-sm sm:text-base text-gray-700 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 8. Conclusion */}
            {blog.conclusion && (
              <div className="space-y-3 pt-2">
                <h2 className="font-heading font-bold text-xl sm:text-2xl text-[#2F8B20]">
                  Conclusion
                </h2>
                <p className="font-body text-sm sm:text-base text-gray-700 leading-relaxed">
                  {blog.conclusion}
                </p>
              </div>
            )}

            {/* 9. Tags Line */}
            {blog.tags && blog.tags.length > 0 && (
              <div className="pt-2">
                <p className="text-xs sm:text-sm text-gray-700 font-body leading-relaxed">
                  <strong className="font-bold text-gray-900">Tags:</strong>{' '}
                  {blog.tags.join(', ')}
                </p>
              </div>
            )}

            {/* Horizontal Divider */}
            <div className="border-b border-gray-300 my-6" />

            {/* 10. "Want to know more?" Inquiry Form Box */}
            <div id="inquiry-form" className="pt-2">
              <BlogInquiryForm postTitle={blog.title} />
            </div>

          </article>

          {/* Right Column (4 cols Sidebar) */}
          <aside className="lg:col-span-4 space-y-6 sticky top-24">
            
            {/* Card 1: Share to others (Exact match to live site) */}
            <div className="bg-[#F1F9EE] rounded-2xl p-6 shadow-sm border border-[#E0EFE0] space-y-4">
              <h3 className="font-heading font-bold text-xl text-[#0B3A1C]">
                Share to others
              </h3>
              <div className="flex items-center gap-3">
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

            {/* Card 2: Other Packages */}
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

            {/* Card 3: More Travel Guides */}
            <div className="bg-[#F1F9EE] rounded-2xl p-6 shadow-sm border border-[#E0EFE0] space-y-4">
              <h3 className="font-heading font-bold text-xl text-[#0B3A1C]">
                More Travel Guides
              </h3>
              <div className="space-y-4">
                {otherBlogs.map((b) => (
                  <Link
                    key={b.id}
                    href={`/blogs/${b.slug}/`}
                    className="block group"
                  >
                    <span className="text-[10px] uppercase font-bold text-[#59A246] block mb-1">
                      {b.category}
                    </span>
                    <h4 className="text-xs font-bold text-gray-900 group-hover:text-[#308C17] transition-colors line-clamp-2">
                      {b.title}
                    </h4>
                  </Link>
                ))}
              </div>
            </div>

          </aside>

        </div>
      </div>
    </div>
  );
}
