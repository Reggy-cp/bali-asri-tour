import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

interface CategoryCardProps {
  slug: string;
  title: string;
  subtitle: string;
  count: string;
  image: string;
  description: string;
}

export default function CategoryCard({
  slug,
  title,
  subtitle,
  count,
  image,
  description,
}: CategoryCardProps) {
  return (
    <Link
      href={`/${slug}/`}
      className="group relative flex flex-col justify-end p-6 rounded-boxed overflow-hidden aspect-[4/3] bg-brand-secondary shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary"
    >
      {/* Background Image */}
      <Image
        src={image}
        alt={title}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-60"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-brand-secondary via-brand-secondary/50 to-transparent opacity-90 group-hover:opacity-85 transition-opacity" />

      {/* Top Badge */}
      <div className="absolute top-4 right-4 z-10">
        <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-[11px] font-medium border border-white/20">
          {count}
        </span>
      </div>

      {/* Content */}
      <div className="relative z-10 space-y-1.5 text-white">
        <span className="text-[11px] font-semibold uppercase tracking-wider text-brand-accent block">
          {subtitle}
        </span>
        <div className="flex items-center justify-between gap-2">
          <h3 className="font-heading font-bold text-xl sm:text-2xl text-white group-hover:text-brand-accent transition-colors leading-tight">
            {title}
          </h3>
          <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white group-hover:bg-brand-primary group-hover:scale-110 transition-all shrink-0">
            <ArrowUpRight className="w-4 h-4" />
          </div>
        </div>
        <p className="text-xs text-gray-300 line-clamp-2 pt-1 font-body leading-relaxed">
          {description}
        </p>
      </div>
    </Link>
  );
}
