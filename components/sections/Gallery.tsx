import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Camera, ArrowRight } from 'lucide-react';
import { GALLERY_IMAGES } from '@/data/tours';

export default function Gallery() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-boxed mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="text-xs uppercase font-semibold text-brand-primary tracking-widest block mb-1">
              Visual Memories
            </span>
            <h2 className="font-heading font-bold text-2xl sm:text-3xl text-brand-secondary">
              Capturing the Magic of Bali
            </h2>
            <p className="text-sm text-body-muted mt-1">
              Moments from our private island tours, temple visits, and scenic excursions.
            </p>
          </div>

          <Link
            href="/review-gallery/"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-primary hover:text-brand-primary-dark transition-colors shrink-0"
          >
            <Camera className="w-4 h-4" />
            <span>View Full Photo Gallery</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Responsive Photo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {GALLERY_IMAGES.map((img) => (
            <div
              key={img.id}
              className="group relative aspect-[4/3] rounded-boxed overflow-hidden bg-gray-100 shadow-sm"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <span className="text-xs font-medium text-white font-body leading-snug">
                  {img.caption}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
