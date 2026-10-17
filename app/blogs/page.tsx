import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight, Calendar, User, Clock, ArrowRight, Tag, BookOpen } from 'lucide-react';
import { getAllBlogPosts } from '@/data/tours';

export const metadata = {
  title: 'Blogs & Bali Travel Tips 2026',
  description:
    'Read insider Bali travel guides, Visa on Arrival (e-VoA) requirements, itinerary planning tips, and cultural etiquette from licensed Balinese tour experts.',
};

export default function BlogsPage() {
  const blogs = getAllBlogPosts();
  const featuredBlog = blogs[0];
  const otherBlogs = blogs.slice(1);

  return (
    <div className="bg-[#F9FAF6] min-h-screen">
      {/* 1. White Header matching Live Site */}
      <section className="bg-white py-12 md:py-16 px-4 sm:px-6 lg:px-8 border-b border-gray-100">
        <div className="max-w-boxed mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-7 space-y-4 font-body">
            <h1 className="font-heading font-bold text-3xl sm:text-4xl text-[#308C17]">
              Blogs &amp; Travel Tips
            </h1>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              <strong>Bali Asri Tour</strong> site, we are trusted and reliable Bali Personal Drivers and Guides. We have been on this field since 2005, we have served guests from all over the world here !, we are proud Balinese and we’d like to share our expertise about this island.{' '}
              <Link href="/bali-tour-package" className="text-[#ffb703] font-bold hover:underline">
                Bali Tour Package
              </Link>{' '}
              info
            </p>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              Our tagline “Balinese Hospitality”, We will assure you to have great time and Enjoying Bali Island to the fullest.
            </p>
          </div>

          <div className="md:col-span-5 flex justify-center md:justify-end">
            <div className="relative w-80 h-44">
              <Image
                src="/images/tripadvisor-awards.jpg"
                alt="TripAdvisor Awards Bali Asri Tour"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-boxed mx-auto space-y-12">
          
          {/* Featured Article Banner */}
          {featuredBlog && (
            <div className="bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 grid grid-cols-1 lg:grid-cols-12 group hover:shadow-xl transition-all">
              <div className="lg:col-span-7 relative h-72 lg:h-auto min-h-[300px]">
                <Image
                  src={featuredBlog.image}
                  alt={featuredBlog.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  priority
                />
                <div className="absolute top-4 left-4 bg-[#FFB200] text-gray-900 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow">
                  Featured Guide
                </div>
              </div>

              <div className="lg:col-span-5 p-6 sm:p-10 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="flex flex-wrap items-center gap-4 text-xs text-gray-500">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-[#59A246]" />
                      {featuredBlog.date}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-[#59A246]" />
                      {featuredBlog.readTime}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-[#59A246]/10 text-[#308C17] font-semibold text-[11px]">
                      {featuredBlog.category}
                    </span>
                  </div>

                  <h2 className="font-heading font-bold text-2xl sm:text-3xl text-gray-900 group-hover:text-[#308C17] transition-colors leading-tight">
                    <Link href={`/blogs/${featuredBlog.slug}/`}>
                      {featuredBlog.title}
                    </Link>
                  </h2>

                  <p className="font-body text-sm text-gray-600 line-clamp-4 leading-relaxed">
                    {featuredBlog.excerpt}
                  </p>
                </div>

                <div className="pt-2">
                  <Link
                    href={`/blogs/${featuredBlog.slug}/`}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-heading font-bold text-xs uppercase tracking-wider text-gray-900 bg-[#FFB200] hover:bg-[#E09D00] shadow-md transition-all active:scale-95"
                  >
                    <span>Read Full Guide</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          )}

          {/* Other Blog Articles Grid */}
          <div className="space-y-6">
            <div className="flex items-center justify-between border-b border-gray-200 pb-4">
              <h3 className="font-heading font-bold text-xl sm:text-2xl text-gray-900">
                Latest Travel Articles
              </h3>
              <span className="text-xs font-semibold text-gray-500">
                Showing {blogs.length} articles
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogs.map((blog) => (
                <article
                  key={blog.id}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md border border-gray-100 flex flex-col group transition-all"
                >
                  <div className="relative h-52 w-full overflow-hidden bg-gray-100">
                    <Image
                      src={blog.image}
                      alt={blog.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm text-[#308C17] text-[11px] font-bold px-2.5 py-1 rounded-full shadow-sm">
                      {blog.category}
                    </div>
                  </div>

                  <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                    <div className="space-y-3">
                      <div className="flex items-center gap-3 text-xs text-gray-500 font-body">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5 text-[#59A246]" />
                          {blog.date}
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5 text-[#59A246]" />
                          {blog.readTime}
                        </span>
                      </div>

                      <h4 className="font-heading font-bold text-lg text-gray-900 group-hover:text-[#308C17] transition-colors leading-snug">
                        <Link href={`/blogs/${blog.slug}/`}>
                          {blog.title}
                        </Link>
                      </h4>

                      <p className="font-body text-xs sm:text-sm text-gray-600 line-clamp-3 leading-relaxed">
                        {blog.excerpt}
                      </p>
                    </div>

                    <div className="pt-2 border-t border-gray-50 flex items-center justify-between">
                      <div className="flex items-center gap-1.5 text-xs text-gray-500">
                        <User className="w-3.5 h-3.5 text-[#59A246]" />
                        <span>{blog.author}</span>
                      </div>

                      <Link
                        href={`/blogs/${blog.slug}/`}
                        className="inline-flex items-center gap-1 text-xs font-bold text-[#308C17] group-hover:text-[#FFB200] transition-colors"
                      >
                        <span>Read</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Need Help Planning Your Trip? CTA Banner */}
          <div className="bg-gradient-to-r from-[#308C17] to-[#59A246] rounded-3xl p-8 sm:p-10 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left">
              <h3 className="font-heading font-bold text-2xl sm:text-3xl">
                Have Questions About Your Bali Trip?
              </h3>
              <p className="font-body text-sm sm:text-base text-white/90 max-w-xl">
                Chat with our local travel coordinators on WhatsApp. We offer free customized itinerary advice with no upfront deposit.
              </p>
            </div>
            <a
              href="https://wa.me/6281703734836?text=Hello%20Bali%20Asri%20Tour%2C%20I%20have%20questions%20about%20planning%20my%20trip%20to%20Bali."
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 rounded-full font-heading font-bold text-sm uppercase tracking-wider text-gray-900 bg-[#FFB200] hover:bg-[#E09D00] shadow-lg transition-all active:scale-95 shrink-0"
            >
              Ask on WhatsApp
            </a>
          </div>

        </div>
      </section>
    </div>
  );
}
