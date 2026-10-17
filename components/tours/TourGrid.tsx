'use client';

import React, { useState } from 'react';
import { TourPackage } from '@/data/tours';
import TourCard from './TourCard';

interface TourGridProps {
  tours: TourPackage[];
  showFilters?: boolean;
  title?: string;
  subtitle?: string;
}

export default function TourGrid({
  tours,
  showFilters = true,
  title,
  subtitle,
}: TourGridProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredTours =
    selectedCategory === 'all'
      ? tours
      : tours.filter((t) => t.category === selectedCategory);

  const filterTabs = [
    { id: 'all', label: 'All Packages' },
    { id: 'package', label: 'Multi-Day (3–10 Days)' },
    { id: 'day-tour', label: '1-Day Highlights' },
    { id: 'honeymoon', label: 'Romantic Honeymoon' },
  ];

  return (
    <div className="space-y-8">
      {/* Header & Filter Controls */}
      {(title || showFilters) && (
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-gray-100 pb-6">
          {title && (
            <div>
              {subtitle && (
                <span className="text-xs uppercase font-semibold text-brand-primary tracking-widest block mb-1">
                  {subtitle}
                </span>
              )}
              <h2 className="font-heading font-bold text-2xl sm:text-3xl text-brand-secondary">
                {title}
              </h2>
            </div>
          )}

          {showFilters && (
            <div className="flex flex-wrap items-center gap-2">
              {filterTabs.map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setSelectedCategory(tab.id)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary ${
                    selectedCategory === tab.id
                      ? 'bg-brand-secondary text-white shadow-sm'
                      : 'bg-surface-light text-body-muted hover:text-brand-secondary hover:bg-gray-200/70 border border-gray-200'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Grid Matrix */}
      {filteredTours.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTours.map((tour) => (
            <TourCard key={tour.id} tour={tour} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12 px-4 rounded-boxed bg-surface-light border border-gray-100">
          <p className="text-sm text-body-muted">
            No tours currently match this filter. Please view our all packages or contact us for a custom itinerary.
          </p>
        </div>
      )}
    </div>
  );
}
