import React from 'react';
import Link from 'next/link';
import { Compass, ArrowLeft, MessageCircle } from 'lucide-react';
import { CONTACT_INFO } from '@/data/navigation';

export default function NotFound() {
  const whatsappUrl = `https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encodeURIComponent(
    'Hello Bali Asri Tour, I was browsing your website and looking for a specific tour page.'
  )}`;

  return (
    <div className="min-h-[70vh] flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8 bg-surface-light">
      <div className="max-w-md w-full text-center space-y-6">
        <div className="w-16 h-16 mx-auto rounded-2xl bg-brand-primary/10 text-brand-primary flex items-center justify-center">
          <Compass className="w-8 h-8 text-brand-primary" />
        </div>

        <div className="space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-accent">
            404 Error
          </span>
          <h1 className="font-heading font-bold text-3xl sm:text-4xl text-brand-secondary">
            Page Not Found
          </h1>
          <p className="text-sm text-body-muted">
            The page you are looking for may have moved or no longer exists. Let us help you find the right Bali tour or transfer service.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-brand-primary hover:bg-brand-primary-dark font-medium text-sm text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Homepage</span>
          </Link>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg border border-gray-300 hover:bg-white font-medium text-sm text-gray-700 transition-colors"
          >
            <MessageCircle className="w-4 h-4 text-brand-whatsapp fill-current" />
            <span>Ask on WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
}
