import type { Metadata, Viewport } from 'next';
import { Josefin_Sans, Poppins } from 'next/font/google';
import './globals.css';
import SiteHeader from '@/components/layout/SiteHeader';
import SiteFooter from '@/components/layout/SiteFooter';
import FloatingWhatsApp from '@/components/common/FloatingWhatsApp';

const josefinSans = Josefin_Sans({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-josefin',
  display: 'swap',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-poppins',
  display: 'swap',
});

export const viewport: Viewport = {
  themeColor: '#043732',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://bali-asri-tour.vercel.app'),
  title: {
    default: 'Bali Asri Tour',
    template: '%s | Bali Asri Tour',
  },
  description:
    'Experience authentic Bali with certified local tour guides and private chauffeurs. Transparent rates, flexible itineraries, clean AC vehicles, and 24/7 WhatsApp customer care.',
  keywords: [
    'Bali Tour Package',
    'Bali Private Driver',
    'Car Hire Bali with Driver',
    'Bali Day Tours',
    'Bali Airport Transfer',
    'Ubud Tour',
    'Bali Honeymoon',
    'Bali Asri Tour',
  ],
  authors: [{ name: 'Bali Asri Tour' }],
  creator: 'Bali Asri Tour',
  publisher: 'Bali Asri Tour',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://bali-asri-tour.vercel.app',
    siteName: 'Bali Asri Tour',
    title: 'Bali Asri Tour',
    description:
      'Certified local tour operator in Bali. Offering multi-day packages, private car hire from $40/day, and custom day tours.',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&h=630&q=80',
        width: 1200,
        height: 630,
        alt: 'Scenic Bali Temple and Lush Greenery - Bali Asri Tour',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bali Asri Tour',
    description: 'Explore Bali with certified local guides and private AC vehicles from $40/day.',
    images: [
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&h=630&q=80',
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${josefinSans.variable} ${poppins.variable}`}>
      <body className="font-body antialiased bg-white text-body min-h-screen flex flex-col selection:bg-brand-primary selection:text-white overflow-x-hidden">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
