export interface NavItem {
  label: string;
  href: string;
  description?: string;
  badge?: string;
  children?: NavItem[];
}

export const MAIN_NAVIGATION: NavItem[] = [
  {
    label: 'HOME',
    href: '/',
  },
  {
    label: 'BOOK A CAR',
    href: '/bali-airport-hotel-shuttle/',
    children: [
      {
        label: 'Airport & Hotel Shuttle',
        href: '/bali-airport-hotel-shuttle/',
        description: '24/7 Ngurah Rai (DPS) airport meet & greet transfers',
      },
    ],
  },
  {
    label: 'BOOK A TOURS',
    href: '/bali-tour-package/',
    children: [
      {
        label: 'Bali Day Tours',
        href: '/bali-day-tours/',
        description: '10-hour customizable daily sightseeing itineraries',
      },
      {
        label: 'Bali Experience Tours',
        href: '/bali-experience-tours/',
        description: 'ATV quad biking, white water rafting & jungle swings',
      },
      {
        label: 'Bali Tour Packages',
        href: '/bali-tour-package/',
        description: 'Complete multi-day holiday packages (3D2N to 10D9N)',
      },
      {
        label: 'Bali Yoga Tours',
        href: '/bali-yoga-tours/',
        description: 'Spiritual healing, sound baths & temple water blessings',
      },
      {
        label: 'Bali Honeymoon Packages',
        href: '/bali-honeymoon-packages/',
        description: 'Romantic villa packages, spa retreats & candlelight dinners',
      },
      {
        label: 'BALI PROMO',
        href: '/bali-promo/',
        description: 'Seasonal discounts & family holiday promotions',
      },
    ],
  },
  {
    label: 'GALLERY',
    href: '/review-gallery/',
  },
  {
    label: 'INFO',
    href: '/about/',
    children: [
      {
        label: 'About',
        href: '/about/',
        description: 'Our history, values, and licensed operations in Bali',
      },
      {
        label: 'Bali Tour Supplier',
        href: '/bali-tour-supplier/',
        description: 'B2B travel agent supplier and fleet partner',
      },
      {
        label: 'Our Team',
        href: '/our-team/',
        description: 'Meet our licensed, professional drivers and guides',
      },
      {
        label: 'Terms & Conditions',
        href: '/terms-conditions/',
        description: 'Booking policies, payment on arrival & free cancellation',
      },
      {
        label: 'Blogs & Travel Tips',
        href: '/blogs/',
        description: 'Bali Visa on Arrival, destination guides & tips',
      },
      {
        label: 'Charity',
        href: '/charity/',
        description: 'Community initiatives supporting Balinese orphanages',
      },
      {
        label: 'FAQ',
        href: '/faq/',
        description: 'Frequently asked questions on pickups, tours & cars',
      },
    ],
  },
  {
    label: 'CONTACT',
    href: '/contact/',
  },
];

export const CONTACT_INFO = {
  brandName: 'Bali Asri Tour',
  companyLegal: 'PT. TRIP KUY INDONESIA',
  businessLicense: '2712210002034',
  licenseNumber: '2712210002034',
  tagline: 'Bali Tour package - Bali Guide - Car Hire Bali with Driver',
  address: 'Jl Padang Galak 88, Denpasar, Bali , Indonesia 80237',
  phoneDisplay: '+62 817-0373-4836',
  phoneCall: '+6281703734836',
  whatsappNumber: '6281703734836',
  email: 'info@baliasritour.com',
  workingHours: 'Open Daily 24 Hours / 7 Days',
  tripadvisorRating: '5.0',
  tripadvisorReviewsCount: '1,450+',
  copyright: 'Copyright ©2005-2026 Bali Asri Tour. All Rights Reserved.',
};

export const SOCIAL_LINKS = {
  facebook: 'https://m.facebook.com/balidaytour/',
  instagram: 'https://www.instagram.com/my_balibuddy/',
  twitter: 'https://twitter.com/baliasritour',
  googlePlus: 'https://plus.google.com/u/0/+AgungBalibuddy?rel=author',
  tripadvisor: 'http://www.tripadvisor.co.id/Attraction_Review-g297694-d2307678-Reviews-Bali_Agung_Tours_Day_Tours-Denpasar_Bali.html',
};
