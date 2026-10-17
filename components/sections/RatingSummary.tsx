import React from 'react';
import { Star, ShieldCheck, Award, Quote } from 'lucide-react';
import { TRAVELER_REVIEWS } from '@/data/tours';
import { CONTACT_INFO } from '@/data/navigation';

export default function RatingSummary() {
  return (
    <section className="py-16 bg-surface-light border-y border-gray-100">
      <div className="max-w-boxed mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header / TripAdvisor Scorecard */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 p-8 rounded-2xl bg-white shadow-card border border-gray-100">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-primary/10 text-brand-primary text-xs font-semibold">
              <Award className="w-4 h-4 text-brand-primary" />
              <span>TripAdvisor Travelers’ Choice Award</span>
            </div>
            <h2 className="font-heading font-bold text-2xl sm:text-3xl text-brand-secondary">
              Loved by Travelers from Around the Globe
            </h2>
            <p className="text-sm text-body-muted max-w-xl">
              Consistent 5-star hospitality, trusted local knowledge, and zero hidden fees. Read genuine feedback from past guests.
            </p>
          </div>

          <div className="flex items-center gap-6 p-4 rounded-xl bg-surface-light border border-gray-200/60 shrink-0">
            <div className="text-center">
              <span className="font-heading font-bold text-4xl text-brand-secondary block leading-none">
                5.0
              </span>
              <span className="text-[11px] text-body-muted uppercase tracking-wider block mt-1">
                Overall Score
              </span>
            </div>

            <div className="h-10 w-px bg-gray-200" />

            <div className="space-y-1">
              <div className="flex items-center text-brand-accent">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <span className="text-xs font-medium text-gray-700 block">
                {CONTACT_INFO.tripadvisorReviewsCount} Verified Reviews
              </span>
              <span className="text-[11px] text-emerald-600 font-semibold block">
                #1 Rated Private Driver Team
              </span>
            </div>
          </div>
        </div>

        {/* Real Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TRAVELER_REVIEWS.map((review) => (
            <div
              key={review.id}
              className="flex flex-col justify-between p-6 rounded-boxed bg-white shadow-card border border-gray-100 hover:border-brand-primary/40 transition-colors"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-brand-accent">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <span className="text-[11px] text-body-muted">{review.date}</span>
                </div>

                <h3 className="font-heading font-bold text-base text-brand-secondary">
                  &ldquo;{review.title}&rdquo;
                </h3>

                <p className="text-xs text-body-muted leading-relaxed italic">
                  &ldquo;{review.text}&rdquo;
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-gray-100 flex items-center justify-between text-xs">
                <div>
                  <span className="font-semibold text-gray-800 block">{review.author}</span>
                  <span className="text-[11px] text-body-muted">{review.origin}</span>
                </div>
                <span className="text-[10px] px-2 py-0.5 rounded bg-brand-primary/10 text-brand-primary font-medium">
                  Verified Booking
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
