export interface TourPriceTier {
  label: string;
  priceUSD: number;
}

export interface TourPackage {
  id: string;
  slug: string;
  title: string;
  duration: string;
  durationDays: number;
  category: 'package' | 'day-tour' | 'experience' | 'honeymoon';
  priceUSD: number;
  priceNote?: string;
  priceTiers?: TourPriceTier[];
  rating: number;
  reviewCount: number;
  image: string;
  highlights: string[];
  description: string;
  isPopular?: boolean;
  isFeatured?: boolean;
  itinerarySummary: string[];
  included: string[];
  excluded: string[];
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  date: string;
  author: string;
  readTime: string;
  category: string;
  excerpt: string;
  image: string;
  tags: string[];
  content: {
    heading: string;
    level?: 'h2' | 'h3';
    body: string[];
  }[];
  tables?: {
    heading: string;
    headers: string[];
    rows: string[][];
  }[];
  checklist?: {
    heading: string;
    items: string[];
  };
  faqs?: {
    question: string;
    answer: string;
  }[];
  conclusion?: string;
}

export const POPULAR_TOURS: TourPackage[] = [
  {
    id: 'sunrise-jeep-hot-spring',
    slug: 'sunrise-jeep-tour-and-hot-spring-tour-plus-hotel-pick-up',
    title: 'Sunrise Jeep Tour and Hot Spring Tour Plus Hotel Pick up.',
    duration: 'Full Day (10 Hours)',
    durationDays: 1,
    category: 'experience',
    priceUSD: 54,
    priceNote: 'USD 54 / Pax (2-3 Traveler)',
    priceTiers: [
      { label: 'Solo Traveler', priceUSD: 116 },
      { label: '2-3 Traveler', priceUSD: 54 },
      { label: '4-6 Traveler', priceUSD: 36 },
      { label: '7-10 Traveler', priceUSD: 27 },
      { label: '11-14 Traveler', priceUSD: 22 },
    ],
    rating: 5.0,
    reviewCount: 420,
    image: '/images/tours/sunrise-jeep-tour.webp',
    highlights: [
      'Stunning Sunrise: Witness the awe-inspiring sunrise over Mount Batur from a prime viewpoint.',
      'Jeep Adventure: Traverse the rugged landscapes of Kintamani, exploring the fascinating black lava fields.',
      'Hot Spring Relaxation: Rejuvenate your body in the soothing waters of a natural hot spring.',
      'Local Breakfast: Savor a light breakfast with traditional Balinese flavors amidst serene natural surroundings.',
      'Coffee Plantation Visit: Discover the traditional process of coffee-making and enjoy tasting the renowned Luwak coffee.',
    ],
    description:
      'Embark on a thrilling journey with our Sunrise Jeep Tour and Hot Spring Tour Plus Hotel Pick Up. This full-day adventure takes you to the majestic Mount Batur for an unforgettable sunrise experience, followed by a relaxing dip in natural hot springs and a cultural visit to a local coffee plantation. This tour offers a perfect combination of excitement, relaxation, and cultural exploration, all conveniently starting with a hotel pick-up.',
    isPopular: true,
    isFeatured: true,
    itinerarySummary: [
      '2:30 AM – Hotel Pickup: Begin your adventure with an early morning pickup from your hotel. The exact time may vary depending on your location. Our team will ensure a smooth and timely start to your day.',
      '4:00 AM – Arrival in Kintamani: Arrive at Kintamani and meet your experienced jeep tour guide. Prepare for a thrilling ride to the sunrise viewing point.',
      '4:30 AM – Sunrise Jeep Adventure: Embark on a jeep adventure, driving through the rugged terrain to reach the best sunrise viewpoint. As the sun rises, watch the landscape transform, casting a golden glow over Mount Batur and the surrounding area.',
      '5:30 AM – Explore Black Lava Fields: After enjoying the sunrise, continue your jeep journey to explore the unique black lava fields, remnants of past volcanic eruptions that have shaped this fascinating landscape.',
      '7:00 AM – Light Breakfast: Relax and enjoy a light breakfast, featuring local Balinese flavors and freshly brewed coffee or tea. This meal is served amidst the tranquil beauty of nature.',
      '8:00 AM – Hot Spring Experience: Descend the mountain and head to a natural hot spring. Soak in the warm, mineral-rich waters that are perfect for soothing any aches and pains after your adventure.',
      '10:30 AM – Coffee Plantation Visit: Visit a local coffee plantation to learn about traditional coffee-making processes. Sample the famous Luwak coffee, known as one of the most expensive coffees in the world, and enjoy the lush views of the surrounding rice terraces.',
      '12:00 PM – Return to Hotel: After a day filled with adventure and relaxation, you’ll be transported back to your hotel, concluding your unforgettable experience.',
    ],
    included: [
      'Hotel pickup and drop-off in an air-conditioned vehicle.',
      'Jeep tour with a professional driver/guide.',
      'Light breakfast with coffee or tea.',
      'Entry to the natural hot spring.',
      'Visit to a local coffee plantation.',
      'Mineral water during the tour.',
      'All entrance fees and parking tickets.',
      'Local General Liability Insurance',
    ],
    excluded: [
      'Personal expenses.',
      'Tips and gratuities.',
      'Additional drinks or meals not included in the itinerary.',
      'Documentation services (photos, video, drone footage).',
    ],
  },
  {
    id: 'nusa-penida-snorkeling',
    slug: 'west-nusa-penida-island-with-3-point-snorkling',
    title: 'West Nusa Penida Island With 3 Point Snorkling',
    duration: 'Full Day (10 Hours)',
    durationDays: 1,
    category: 'day-tour',
    priceUSD: 65,
    priceNote: 'per person (min. 2 pax)',
    rating: 5.0,
    reviewCount: 318,
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
    highlights: ['Kelingking T-Rex Cliff', 'Broken Beach', 'Angel’s Billabong', '3 Spots Coral Snorkeling'],
    description: 'Dive into an unforgettable adventure with our West Nusa Penida Island and 3 Spots Snorkeling. Encounter manta rays, explore dramatic cliff formations, and swim in turquoise lagoons.',
    isPopular: true,
    isFeatured: true,
    itinerarySummary: [
      '06:30 AM: Hotel pickup in Bali & transfer to Sanur Port',
      '07:30 AM: Fast boat cruise to Nusa Penida Island',
      '09:00 AM: Snorkeling boat to Manta Bay, Gamat Bay & Crystal Bay',
      '12:30 PM: Indonesian lunch at local restaurant',
      '01:30 PM: Visit iconic Kelingking Secret Point & T-Rex Cliff',
      '03:00 PM: Explore Broken Beach & Angel’s Billabong natural infinity pool',
      '04:30 PM: Return fast boat to Sanur and hotel drop-off',
    ],
    included: [
      'Return fast boat ticket (Sanur - Nusa Penida - Sanur)',
      'Private air-conditioned car in Nusa Penida with driver',
      'Snorkeling boat, certified instructor, mask & fins',
      'Lunch and mineral water',
      'All island entrance and parking fees',
    ],
    excluded: ['Personal souvenir shopping', 'Tips for boat crew and driver'],
  },
  {
    id: 'ubud-swing-tour',
    slug: 'ubud-tour-with-jungle-swing',
    title: 'Ubud Tour With Jungle Swing',
    duration: 'Full Day (10 Hours)',
    durationDays: 1,
    category: 'day-tour',
    priceUSD: 45,
    priceNote: 'per car (up to 5 pax)',
    rating: 5.0,
    reviewCount: 420,
    image: 'https://images.unsplash.com/photo-1577717903315-1691ae25ab3f?auto=format&fit=crop&w=800&q=80',
    highlights: ['Alas Harum Jungle Swing', 'Tegalalang Rice Terraces', 'Sacred Monkey Forest', 'Tegenungan Waterfall'],
    description: 'Immerse yourself in Ubud’s scenic wonders. Soar over lush valleys on the famous Bali swing, walk through terraced paddies, and meet friendly monkeys.',
    isPopular: true,
    isFeatured: true,
    itinerarySummary: [
      '08:30 AM: Hotel pickup by your private driver',
      '09:30 AM: Sacred Monkey Forest Sanctuary',
      '11:00 AM: Ubud Royal Palace & Traditional Art Market',
      '12:30 PM: Valley-view lunch stop in Ubud',
      '02:00 PM: Tegalalang Rice Terraces & Jungle Swing thrill',
      '04:00 PM: Tegenungan Waterfall swimming & photo stop',
      '06:00 PM: Return transfer to hotel',
    ],
    included: [
      'Private AC vehicle (Toyota Avanza/Innova)',
      'English-speaking Balinese driver-guide',
      'Fuel/Petrol and all parking costs',
      'Cold bottled mineral water',
    ],
    excluded: ['Swing admission pass (optional)', 'Lunch meals', 'Personal shopping'],
  },
  {
    id: 'batur-sunrise-trekking',
    slug: 'mount-batur-sunrise-trekking',
    title: 'Mount Batur Sunrise Trekking',
    duration: 'Early Morning (8 Hours)',
    durationDays: 1,
    category: 'experience',
    priceUSD: 55,
    priceNote: 'per person',
    rating: 5.0,
    reviewCount: 289,
    image: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=800&q=80',
    highlights: ['Active Volcano Crater', 'Summit Sunrise Above the Clouds', 'Volcanic Steam Breakfast', 'Natural Hot Springs'],
    description: 'Hike to the summit of active Mount Batur (1,717m). Witness the sun rising over volcanic crater lakes and Mount Rinjani in the distance while enjoying eggs cooked in natural volcanic steam.',
    isPopular: true,
    isFeatured: true,
    itinerarySummary: [
      '02:00 AM: Hotel pickup across South Bali / Ubud',
      '03:30 AM: Arrival at starting point & safety briefing',
      '04:00 AM: Begin guided ascent with flashlights and certified trekking guide',
      '06:00 AM: Reach summit caldera; enjoy sunrise breakfast with hot tea',
      '07:00 AM: Walk around the crater rim and volcanic steam vents',
      '09:00 AM: Descend to base & relax in Batur Natural Hot Springs',
      '11:30 AM: Coffee plantation visit and return hotel transfer',
    ],
    included: [
      'Private return hotel transfers with AC car',
      'Local certified English-speaking trekking guide',
      'Flashlights & trekking poles',
      'Volcanic steam breakfast & hot coffee/tea',
      'Mount Batur entrance pass',
    ],
    excluded: ['Hot spring towel rental', 'Personal expenses', 'Guide tips'],
  },
  {
    id: 'traditional-village-waterfall',
    slug: 'bali-traditional-village-and-waterfall',
    title: 'Bali Traditional Village and Waterfall Tour',
    duration: 'Full Day (10 Hours)',
    durationDays: 1,
    category: 'day-tour',
    priceUSD: 45,
    priceNote: 'per car (up to 5 pax)',
    rating: 5.0,
    reviewCount: 195,
    image: 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=800&q=80',
    highlights: ['Penglipuran Bamboo Village', 'Tibumana Waterfall', 'Tirta Empul Holy Water', 'Kintamani View'],
    description: 'Step into the cleanest village in the world, Penglipuran, known for its pristine traditional architecture, surrounded by bamboo forests and serene jungle waterfalls.',
    isPopular: true,
    isFeatured: true,
    itinerarySummary: [
      '08:30 AM: Hotel pickup',
      '10:00 AM: Explore historic Penglipuran Village & sacred bamboo grove',
      '11:30 AM: Refreshing swim at Tibumana hidden waterfall',
      '01:00 PM: Scenic lunch in Kintamani overlooking Lake Batur',
      '02:30 PM: Tirta Empul ancient temple for water blessing ritual',
      '04:30 PM: Luwak coffee testing plantation',
      '06:30 PM: Drop-off at hotel',
    ],
    included: [
      'Private AC vehicle for 10 hours',
      'Friendly English-speaking chauffeur',
      'Petrol and parking permits',
      'Fresh mineral water',
    ],
    excluded: ['Attraction tickets', 'Lunch', 'Gratuities'],
  },
  {
    id: 'lempuyang-tirta-gangga',
    slug: 'lempuyang-temple-and-tirta-gangga-water-palace',
    title: 'Lempuyang Temple and Tirta Gangga Water Palace',
    duration: 'Full Day (10 Hours)',
    durationDays: 1,
    category: 'day-tour',
    priceUSD: 50,
    priceNote: 'per car (up to 5 pax)',
    rating: 5.0,
    reviewCount: 380,
    image: 'https://images.unsplash.com/photo-1555400038-63f5ba517a47?auto=format&fit=crop&w=800&q=80',
    highlights: ['Gate of Heaven', 'Tirta Gangga Royal Water Palace', 'Tukad Cepung Cave Waterfall', 'Virgin Beach'],
    description: 'Capture the world-famous reflection photo at Lempuyang Gate of Heaven framed by majestic Mount Agung, then walk among giant koi in the royal water gardens of Karangasem.',
    isPopular: true,
    isFeatured: true,
    itinerarySummary: [
      '06:00 AM: Early morning pickup to avoid queue',
      '08:30 AM: Lempuyang Temple Gate of Heaven photography',
      '11:00 AM: Tirta Gangga Royal Water Palace & koi fish ponds',
      '12:30 PM: Lunch at seaside Candidasa restaurant',
      '02:30 PM: Tukad Cepung magical cave waterfall with sunbeams',
      '05:30 PM: Return transfer to hotel',
    ],
    included: [
      'Private vehicle for 10 hours',
      'English-speaking driver-guide',
      'Fuel, toll road and parking',
      'Mineral water',
    ],
    excluded: ['Lempuyang shuttle bus pass', 'Entrance tickets', 'Lunch'],
  },
  {
    id: 'nusa-dua-uluwatu-sunset',
    slug: 'nusa-dua-watersports-and-sunset-uluwatu',
    title: 'Nusa Dua Watersports and Sunset Uluwatu',
    duration: 'Full Day (10 Hours)',
    durationDays: 1,
    category: 'day-tour',
    priceUSD: 45,
    priceNote: 'per car (up to 5 pax)',
    rating: 5.0,
    reviewCount: 265,
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80',
    highlights: ['Tanjung Benoa Parasailing & Jet Ski', 'Padang Padang Beach', 'Uluwatu Sunset Temple', 'Kecak Fire Dance'],
    description: 'Combine high-energy water sports in Tanjung Benoa with relaxed beach time at Padang Padang, culminating in the dramatic Uluwatu clifftop sunset and Kecak dance.',
    isPopular: true,
    isFeatured: true,
    itinerarySummary: [
      '09:00 AM: Hotel pickup and drive to Tanjung Benoa peninsula',
      '09:45 AM: Parasailing, jet ski, and banana boat fun',
      '01:00 PM: Lunch at Nusa Dua beachside bistro',
      '02:30 PM: Relax at Padang Padang Beach (Eat Pray Love filming site)',
      '04:30 PM: Uluwatu clifftop temple & cliff walk',
      '06:00 PM: Kecak Fire & Trance Dance against the sunset ocean',
      '07:30 PM: Optional Jimbaran seafood dinner on the beach',
      '09:00 PM: Hotel drop-off',
    ],
    included: [
      'Private AC car for 10 hours',
      'English-speaking driver',
      'Petrol and parking fees',
      'Cold mineral water',
    ],
    excluded: ['Watersports tickets (custom package available)', 'Dance admission', 'Dinner'],
  },
  {
    id: 'volcano-kintamani-waterfall',
    slug: 'volcano-kintamani-and-scenic-waterfall-tour',
    title: 'Volcano Kintamani and Scenic Waterfall Tour',
    duration: 'Full Day (10 Hours)',
    durationDays: 1,
    category: 'day-tour',
    priceUSD: 45,
    priceNote: 'per car (up to 5 pax)',
    rating: 5.0,
    reviewCount: 310,
    image: '/images/tour-kintamani.jpg',
    highlights: ['Mount Batur Volcano Viewpoint', 'Lake Batur Panorama', 'Tegenungan Waterfall', 'Coffee & Spice Plantation'],
    description: 'Discover the heart of Bali with our Volcano Kintamani and Scenic Waterfall Tour. Take in sweeping panoramas of active Mount Batur and crater lake, visit cascading jungle waterfalls, and taste world-famous Luwak coffee.',
    isPopular: true,
    isFeatured: true,
    itinerarySummary: [
      '08:30 AM: Hotel pickup by your private chauffeur',
      '09:30 AM: Traditional Batubulan / Celuk silvercraft village',
      '11:00 AM: Tegenungan Waterfall scenic photo stop',
      '01:00 PM: Kintamani viewpoint lunch overlooking Mount & Lake Batur',
      '02:30 PM: Authentic organic coffee & spice plantation',
      '04:00 PM: Tirta Empul holy spring water temple',
      '06:00 PM: Return transfer to hotel',
    ],
    included: [
      'Private air-conditioned vehicle for 10 hours',
      'English-speaking Balinese driver guide',
      'Petrol/Fuel and all parking charges',
      'Cold bottled mineral water',
    ],
    excluded: ['Attraction entrance tickets', 'Buffet lunch', 'Personal shopping'],
  },
  {
    id: 'bali-atv-ubud-swing',
    slug: 'bali-atv-and-ubud-swing-tour',
    title: 'Bali ATV and Ubud Swing Tour',
    duration: 'Full Day (10 Hours)',
    durationDays: 1,
    category: 'experience',
    priceUSD: 65,
    priceNote: 'per person (min. 2 pax)',
    rating: 5.0,
    reviewCount: 450,
    image: '/images/tour-ubud-swing.jpg',
    highlights: ['Single / Tandem All-Terrain ATV Ride', 'Underground Tunnel & Waterfall Trail', 'Alas Harum Jungle Swing', 'Ubud Rice Terraces'],
    description: 'Experience the ultimate adventure and cultural immersion in Ubud. Ride powerful quad bikes through gorilla-face caves, mud puddles, and bamboo forests, then fly high above the jungle canopy on Bali’s famous extreme swings.',
    isPopular: true,
    isFeatured: true,
    itinerarySummary: [
      '08:00 AM: Private hotel pickup',
      '09:30 AM: Arrival at ATV camp & safety briefing with equipment fitting',
      '10:00 AM: 2-Hour exhilarating ATV ride through tunnels, rivers & mud tracks',
      '12:30 PM: Hot shower, towel change & hot Indonesian buffet lunch',
      '02:00 PM: Alas Harum Ubud extreme swing & coffee terrace',
      '04:00 PM: Tegalalang rice terrace walk & photo spots',
      '06:00 PM: Return to hotel',
    ],
    included: [
      'Private AC hotel transfers',
      '2-Hour ATV Quad Bike adventure with guide',
      'Full safety equipment (helmet, boots) and locker/shower',
      'Indonesian buffet lunch',
      'Comprehensive adventure insurance coverage',
    ],
    excluded: ['Extreme swing package pass (optional)', 'Alcoholic drinks', 'Driver tip'],
  },
  {
    id: '10-days-package',
    slug: '10-days-9-night-bali-tour-packages-2',
    title: '10 Days 9 Nights Complete Bali Grand Circuit',
    duration: '10 Days / 9 Nights',
    durationDays: 10,
    category: 'package',
    priceUSD: 480,
    priceNote: 'per person (min. 2 pax)',
    rating: 5.0,
    reviewCount: 142,
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80',
    highlights: ['South Beaches & Uluwatu Sunset', 'Ubud Royal Culture & Monkey Forest', 'Nusa Penida Island Snorkeling', 'Kintamani Volcano & North Waterfalls'],
    description: 'The definitive all-in-one Bali holiday package covering the whole island from south cliffs to north lakes, east palaces, and offshore islands.',
    isPopular: true,
    isFeatured: true,
    itinerarySummary: [
      'Day 1: Airport meet & greet + hotel check-in',
      'Day 2: South Bali beaches, GWK cultural park & Uluwatu Kecak dance',
      'Day 3: Ubud cultural highlights, arts villages & Sacred Monkey Forest',
      'Day 4: Kintamani volcano, Lake Batur & holy water temple',
      'Day 5: Full-day Nusa Penida Island fast boat & snorkeling adventure',
      'Day 6: Bedugul floating lake temple & Handara iconic gate',
      'Day 7: Lempuyang Gate of Heaven & Tirta Gangga royal water palace',
      'Day 8: Ayung river white water rafting or Ubud jungle swing leisure',
      'Day 9: Free & easy day for shopping, beach clubs, or Balinese spa massage',
      'Day 10: Souvenir market visit & airport departure transfer',
    ],
    included: [
      '9 Nights hand-picked hotel / villa accommodation',
      'Private dedicated air-conditioned vehicle & personal chauffeur throughout',
      'All attraction entry tickets & cultural show admissions',
      'Daily breakfast & select scenic lunch stops',
      'Fast boat tickets to Nusa Penida with island tour',
      '24/7 Concierge WhatsApp support',
    ],
    excluded: ['International flights', 'Personal shopping', 'Travel insurance'],
  },
  {
    id: '7-days-package',
    slug: '7-days-6-night-bali-tour-packages',
    title: '7 Days 6 Nights Best of Bali Island Holiday',
    duration: '7 Days / 6 Nights',
    durationDays: 7,
    category: 'package',
    priceUSD: 360,
    priceNote: 'per person (min. 2 pax)',
    rating: 5.0,
    reviewCount: 220,
    image: 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=800&q=80',
    highlights: ['Ubud Culture & Rice Terraces', 'Kintamani Volcano & Holy Water', 'Nusa Penida Day Trip', 'Uluwatu Sunset Clifftop'],
    description: 'Our most popular 1-week holiday package perfectly balancing island sightseeing, thrilling outdoor activities, and tranquil relaxation.',
    isPopular: true,
    isFeatured: true,
    itinerarySummary: [
      'Day 1: Airport pickup & private hotel transfer',
      'Day 2: Kintamani volcano, coffee plantation & Tegenungan waterfall',
      'Day 3: Ubud monkey forest, royal palace & Tegalalang rice terraces',
      'Day 4: Fast boat to Nusa Penida Island (Kelingking Cliff & snorkeling)',
      'Day 5: Bedugul lake temple, Wanagiri hidden hills & Tanah Lot sunset',
      'Day 6: Tanjung Benoa watersports, Pandawa beach & Uluwatu Kecak dance',
      'Day 7: Souvenir market shopping & airport transfer',
    ],
    included: [
      '6 Nights accommodation with daily breakfast',
      'Dedicated private vehicle with English chauffeur',
      'Nusa Penida return boat tickets & island tour',
      'All temple and park entrance fees',
      'Airport pickup and drop-off',
    ],
    excluded: ['Flights', 'Personal expenses', 'Optional activities'],
  },
  {
    id: '5-days-package',
    slug: '5-days-4-night-bali-tour-packages',
    title: '5 Days 4 Nights Classic Bali Highlights',
    duration: '5 Days / 4 Nights',
    durationDays: 5,
    category: 'package',
    priceUSD: 270,
    priceNote: 'per person (min. 2 pax)',
    rating: 5.0,
    reviewCount: 198,
    image: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=800&q=80',
    highlights: ['Tanah Lot Sea Temple', 'Kintamani Volcano', 'Ubud Rice Terraces', 'Jimbaran Candlelight Seafood Dinner'],
    description: 'The ideal compact itinerary covering Bali’s postcard sights. Perfect for first-time visitors seeking rich cultural depth and scenic beauty.',
    isPopular: true,
    isFeatured: true,
    itinerarySummary: [
      'Day 1: Airport meet & greet + hotel check-in',
      'Day 2: Kintamani volcano panorama, Tirta Empul & Tegenungan waterfall',
      'Day 3: Ubud monkey forest, swing park & Tegalalang terraces',
      'Day 4: Mengwi Royal Temple, Bedugul lake & Tanah Lot sea temple sunset',
      'Day 5: Check out, Balinese market shopping & airport transfer',
    ],
    included: [
      '4 Nights hotel stay with breakfast',
      'Private car, driver and petrol for all tours',
      'All entrance fees as per itinerary',
      'Airport meet & greet transfers',
    ],
    excluded: ['Airfares', 'Lunches and dinners (unless specified)'],
  },
  {
    id: 'honeymoon-package',
    slug: 'bali-honeymoon-packages',
    title: 'Romantic Bali Honeymoon 5D4N With Private Pool Villa',
    duration: '5 Days / 4 Nights',
    durationDays: 5,
    category: 'honeymoon',
    priceUSD: 450,
    priceNote: 'per couple / person basis',
    rating: 5.0,
    reviewCount: 340,
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80',
    highlights: ['Private Pool Villa & Flower Bath', 'Jimbaran Beach Candlelight Seafood Dinner', 'Couples Spa Massage (2 Hours)', 'Uluwatu Sunset Dance'],
    description: 'Celebrate your love in paradise. Includes private luxury villa with private pool, floral bed setup, couples aromatherapy massage, and a romantic sunset candlelight dinner on the beach.',
    isPopular: true,
    isFeatured: true,
    itinerarySummary: [
      'Day 1: VIP Airport welcome, flower garland & transfer to Private Pool Villa',
      'Day 2: Ubud scenic highlights, swing for couples & 2-Hour Spa Treatment',
      'Day 3: Kintamani volcano, Lake Batur view & romantic cafe stop',
      'Day 4: Padang Padang beach, Uluwatu sunset & Jimbaran candlelight seafood dinner',
      'Day 5: Floating breakfast in villa & airport departure transfer',
    ],
    included: [
      'Private pool villa with honeymoon floral decor',
      '2-Hour Couples Balinese massage & spa package',
      'Romantic 4-course Jimbaran beach candlelight dinner',
      'Private vehicle and English chauffeur throughout',
      'Floating breakfast experience',
    ],
    excluded: ['Flights', 'Gratuities', 'Personal shopping'],
  },
  {
    id: 'yoga-healing-package',
    slug: 'bali-yoga-tours',
    title: 'Bali Spiritual Healing, Yoga & Holy Water Blessing',
    duration: 'Full Day (8 Hours)',
    durationDays: 1,
    category: 'experience',
    priceUSD: 60,
    priceNote: 'per person',
    rating: 5.0,
    reviewCount: 165,
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
    highlights: ['Melukat Holy Spring Purification', 'Jungle Shala Yoga Session', 'Traditional Balinese Healer Consultation', 'Pyramids of Chi Sound Bath'],
    description: 'Renew your mind, body, and spirit. Experience an ancient Balinese Melukat cleansing ritual with holy water at Tirta Empul, practice yoga overlooking river valleys, and experience resonant sound healing.',
    isPopular: false,
    isFeatured: true,
    itinerarySummary: [
      '07:30 AM: Hotel pickup by your private guide',
      '08:30 AM: Morning 90-minute vinyasa/hatha yoga session in open jungle shala',
      '11:00 AM: Melukat water purification ritual with Balinese offerings & sarong',
      '01:00 PM: Organic farm-to-table vegetarian/vegan lunch',
      '02:30 PM: Authentic palm-reading consultation with Balinese traditional healer',
      '04:30 PM: Ancient Sound Healing session at Pyramids of Chi',
      '06:30 PM: Return transfer to hotel',
    ],
    included: [
      'Private transport with driver',
      'Yoga session fee & mat rental',
      'Temple offering (Canang Sari) & ceremonial sarong',
      'Melukat priest blessing fee',
      'Organic healthy lunch',
    ],
    excluded: ['Healer voluntary donation', 'Personal souvenirs'],
  },
];

export const FEATURED_TOURS: TourPackage[] = POPULAR_TOURS;

export function getAllTours(): TourPackage[] {
  return POPULAR_TOURS;
}

export function getTourBySlug(slug: string): TourPackage | undefined {
  return POPULAR_TOURS.find((tour) => tour.slug === slug);
}

export function getToursByCategory(category: string): TourPackage[] {
  if (category === 'all' || !category) return POPULAR_TOURS;
  if (category === 'package') return POPULAR_TOURS.filter((t) => t.durationDays > 1);
  if (category === 'day-tour') return POPULAR_TOURS.filter((t) => t.category === 'day-tour');
  if (category === 'experience') return POPULAR_TOURS.filter((t) => t.category === 'experience');
  if (category === 'honeymoon') return POPULAR_TOURS.filter((t) => t.category === 'honeymoon');
  return POPULAR_TOURS;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'blog-1',
    slug: 'bali-visa-on-arrival-2026',
    title: 'Bali Visa on Arrival 2026: Fee Hike & E-VoA Guide',
    date: 'August 20, 2026',
    author: 'I Made Agung',
    readTime: '6 min read',
    category: 'Blogs',
    excerpt: 'Planning your Bali trip and just stumbled on headlines about visa fees doubling? You’re not imagining things — Indonesia’s immigration department really did propose a major Bali visa on arrival cost hike, and if you’re researching this right now, you deserve straight facts, not vague speculation. This guide breaks down exactly what’s been proposed, what’s still uncertain, and why the smartest move might be locking in your E-VoA before you even board your flight to Bali.',
    image: '/images/blogs/bali-visa-on-arrival-2026.webp',
    tags: [
      'Bali Visa on Arrival 2026',
      'Indonesia E-VoA Price',
      'Bali Airport Transfer',
      'Bali Travel Requirements',
      'Indonesia Immigration Fee',
      'VoA Cost 2026',
      'Bali Airport Logistics',
      'Bali Asri Tour',
      'Indonesia Visa Update',
      'Bali Travel News',
    ],
    content: [
      {
        heading: 'The Proposed Fee Adjustments',
        level: 'h2',
        body: [
          'Indonesia’s Directorate General of Immigration has proposed raising the Visa on Arrival fee from its current Rp500,000 to a tiered structure: Rp750,000 for the electronic Visa on Arrival (E-VoA) processed online before departure, and Rp1,000,000 for the conventional VoA obtained at the airport counter upon arrival.',
          'According to Indonesia Expat, Director General of Immigration Hendarsam Marantoko announced the proposal during a Jakarta press briefing on August 12, 2026, citing rupiah exchange rate fluctuations as one reason the current Rp500,000 fee needs adjustment. The pricing gap between the two channels isn’t accidental — it’s a deliberate structural signal, and understanding why matters just as much as knowing the numbers themselves.',
        ],
      },
      {
        heading: 'Current Status & Implementation',
        level: 'h2',
        body: [
          'Important disclaimer: As of this writing, these fees remain a proposal, not an active policy. Immigration officials have not announced an official implementation date, and the currently applicable Visa on Arrival fee remains Rp500,000 for both online and on-arrival applications.',
          'Don’t let the headlines rush you into panic-booking based on prices that aren’t yet in effect. This is a real, credible government proposal actively being finalized, but until an official regulation and effective date are published, the existing Rp500,000 fee still applies. Bookmark this page and check back for updates, or verify current rates directly through Indonesia’s official immigration channels before you travel.',
        ],
      },
      {
        heading: 'The Strategic Move: Why You Must Choose E-VoA',
        level: 'h2',
        body: [
          'The Rp250,000 gap between the online and on-arrival fees isn’t just about revenue — it’s a deliberate mechanism to manage airport congestion. Marantoko stated plainly that applying online from home means paying the lower rate, while arriving without one means paying more, with the explicit goal of preventing bottlenecks at arrival immigration counters.',
        ],
      },
      {
        heading: 'Why the Government Is Pushing Travelers Online',
        level: 'h3',
        body: [
          'Bali’s airport, along with Jakarta’s Soekarno-Hatta, handles enormous visitor volumes, and on-arrival visa counters are consistently a major bottleneck. By pricing the online channel lower, immigration is nudging travelers toward pre-departure processing, which spreads out application volume and shortens the physical queue tourists actually stand in.',
        ],
      },
      {
        heading: 'The Practical Case for Applying Before You Fly',
        level: 'h3',
        body: [
          'Beyond the money saved, completing your E-VoA before departure means walking past the visa counter entirely and heading straight to baggage claim. If the proposed pricing takes effect, that time savings compounds with the cost savings, making pre-departure application the clear rational choice regardless of which way the final numbers land.',
        ],
      },
      {
        heading: 'What to Do If You’re Booking Right Now',
        level: 'h3',
        body: [
          'If your trip is coming up soon, apply for your E-VoA well before your flight date through Indonesia’s official immigration portal, and keep your confirmation accessible on your phone and printed as backup. Even under current Rp500,000 pricing, this habit sets you up well for whatever the finalized fee structure ends up being.',
        ],
      },
      {
        heading: 'Seamless Airport Logistics: Why Your Ground Arrangements Matter Just as Much',
        level: 'h2',
        body: [
          'Visa processing is only half the arrival equation. Even with an E-VoA in hand, immigration queues in Bali can be genuinely unpredictable — a delayed flight ahead of yours, a temporary system slowdown, or simply high-volume hours can add unexpected time to your arrival, regardless of how prepared you were.',
        ],
      },
      {
        heading: 'Why a Waiting Driver Changes Everything',
        level: 'h3',
        body: [
          'This is exactly where ground logistics become critical. A patient, professional driver tracking your flight status and waiting calmly at the arrival gate means that whatever happens inside immigration, your transport to your hotel or villa isn’t a second source of stress layered on top of visa uncertainty.',
        ],
      },
      {
        heading: 'Real-Time Flight Tracking Removes the Guesswork',
        level: 'h3',
        body: [
          'Quality ground operators track your flight in real time, adjusting pickup timing automatically if your flight is delayed or immigration processing runs long, rather than leaving you searching a crowded arrivals hall for someone holding a sign.',
        ],
      },
    ],
    tables: [
      {
        heading: 'Quick Comparison: E-VoA vs On-Arrival VoA',
        headers: ['Factor', 'E-VoA (Online, Pre-Departure)', 'VoA (On Arrival)'],
        rows: [
          ['Proposed fee', 'Rp750,000', 'Rp1,000,000'],
          ['Current fee (unchanged)', 'Rp500,000', 'Rp500,000'],
          ['Airport queue time', 'Minimal — skip visa counter', 'Can be lengthy at peak hours'],
          ['Processing certainty', 'Confirmed before you fly', 'Subject to on-site delays'],
          ['Recommended for', 'All travelers, especially families', 'Not recommended once new fees apply'],
        ],
      },
      {
        heading: 'Common Mistakes to Avoid',
        headers: ['Mistake', 'Impact', 'How to Avoid'],
        rows: [
          ['Assuming the new fees are already active', 'Overpaying or booking based on wrong info', 'Verify current status before travel'],
          ['Waiting until arrival to apply for VoA', 'Longer queues, potentially higher future cost', 'Apply online well before departure'],
          ['Not confirming your E-VoA confirmation is accessible', 'Delays or confusion at immigration', 'Save both digital and printed copies'],
          ['Assuming visa processing is your only arrival risk', 'Unplanned wait times with no transport backup', 'Pre-book a driver tracking your flight'],
        ],
      },
    ],
    checklist: {
      heading: 'Quick Checklist Before You Fly to Bali',
      items: [
        'Confirm the current official VoA/E-VoA fee before applying',
        'Apply for your E-VoA online at least a few days before departure',
        'Save your E-VoA confirmation both digitally and as a printed copy',
        'Check Indonesia’s official immigration site for any effective-date updates',
        'Pre-arrange airport pickup with a driver who tracks your flight status',
        'Keep your ground transport contact number saved offline',
      ],
    },
    faqs: [
      {
        question: 'Has Indonesia officially raised the Visa on Arrival fee yet?',
        answer: 'No. As of this writing, the fee remains Rp500,000. The Rp750,000 and Rp1,000,000 figures are a proposed structure without a confirmed effective date.',
      },
      {
        question: 'Should I still apply for E-VoA if the new fees haven’t taken effect?',
        answer: 'Yes. Applying online is faster and reduces your airport queue time regardless of the current fee, and it positions you well if the new pricing takes effect before your travel date.',
      },
      {
        question: 'Where can I check if the new Bali visa fees have officially started?',
        answer: 'Check Indonesia’s official Directorate General of Immigration website directly before your trip, since third-party sites may display outdated or speculative figures.',
      },
      {
        question: 'Does a higher on-arrival fee guarantee shorter airport queues?',
        answer: 'Not necessarily, though the government’s stated goal is to shift volume toward pre-departure applications, which should reduce on-arrival congestion over time as more travelers adopt the E-VoA channel.',
      },
    ],
    conclusion:
      'The proposed Bali visa on arrival cost increase is real, credibly sourced, and worth planning around — but it isn’t active yet, so don’t let headline panic push you into unnecessary decisions. Apply for your E-VoA early regardless of which fee structure is in effect when you travel, since the time savings alone justify it. Visa regulations and airport lines can be unpredictable, but your arrival doesn’t have to be. Always apply for your E-VoA online to save time, and pre-book your VIP Airport Transfer with Bali Asri Tour. Our professional drivers track your flight status in real-time and will wait for you patiently at the arrival gate, ensuring a smooth start to your Bali vacation. Have questions about your upcoming Bali arrival — drop them below and we’ll help you plan it right.',
  },
  {
    id: 'blog-2',
    slug: 'bali-trip-package-from-hyderabad',
    title: 'Bali Trip Package from Hyderabad: Ditch the Bus Tour',
    date: 'January 28, 2026',
    author: 'Ketut Suarta',
    readTime: '7 min read',
    category: 'Tour Guides',
    excerpt: 'Why private driver hire and customized itineraries offer Indian families and couples a far superior experience compared to crowded commercial tour buses.',
    image: 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=600&q=80',
    tags: ['Hyderabad to Bali', 'Private Tour', 'Indian Travelers', 'Family Holiday'],
    content: [
      {
        heading: 'The Boom in Travel from Hyderabad to Bali',
        body: [
          'With multiple convenient one-stop flight options from Rajiv Gandhi International Airport (HYD) connecting through Kuala Lumpur, Singapore, or Bangkok, Bali has become the top international leisure destination for travelers from Hyderabad, Telangana, and Andhra Pradesh.',
          'However, many travelers initially book standard package tours that pack 40 to 50 passengers into large commercial buses. Here is why hiring a private car with driver from Bali Asri Tour transforms your holiday into a relaxing, luxurious experience.',
        ],
      },
      {
        heading: 'Why Private Driver Beats the Commercial Bus Every Time',
        body: [
          '1. Freedom & Flexibility: Commercial group tours operate on strict timetables where you are rushed through temples in 20 minutes and forced into tourist souvenir emporiums for an hour. With our private chauffeur, you set your own pace and can stay as long as you want.',
          '2. Pure Vegetarian & Indian Cuisine Access: Finding authentic Indian food, pure vegetarian options, or Jain meals in Bali is effortless when your driver knows the best restaurants in Kuta, Seminyak, and Ubud like Queen’s Tandoor, Ganesha Ek Sanskriti, and spice restaurants.',
          '3. Comfort for Multi-Generational Families: Traveling with elderly parents or young kids requires frequent restroom stops, gentle pacing, and spacious air-conditioned comfort. Our Toyota Innova Reborn and Toyota HiAce fleets cater specifically to family comfort.',
        ],
      },
      {
        heading: 'Recommended 6-Day Itinerary for Hyderabad Visitors',
        body: [
          'Day 1: Arrival at DPS Airport, VIP meet & greet, transfer to South Bali beachfront resort.',
          'Day 2: Water sports at Tanjung Benoa (jet ski, parasailing, sea walker) followed by sunset Kecak fire dance at Uluwatu Cliff Temple.',
          'Day 3: Scenic Ubud cultural day — Tegalalang rice terraces, Alas Harum Bali swing, Tirta Empul holy spring water blessing.',
          'Day 4: Mount Batur volcano viewpoint at Kintamani, coffee plantations, and Tegenungan waterfall.',
          'Day 5: West Nusa Penida Island day excursion — Kelingking T-Rex cliff, Angel’s Billabong, and Broken Beach.',
          'Day 6: Leisure shopping in Seminyak or Krishna Oleh-Oleh, airport departure transfer.',
        ],
      },
    ],
  },
  {
    id: 'blog-3',
    slug: 'bali-agung-tours-asita-member',
    title: 'Bali Asri Tour Officially Recognized as an ASITA Member',
    date: 'January 10, 2026',
    author: 'I Made Agung',
    readTime: '4 min read',
    category: 'Company News',
    excerpt: 'We are proud to announce our official membership accreditation with ASITA (Association of The Indonesian Tours and Travel Agencies), reaffirming our commitment to ethical tourism.',
    image: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=600&q=80',
    tags: ['ASITA', 'Accreditation', 'Safe Travel', 'Company Milestone'],
    content: [
      {
        heading: 'A Milestone in Ethical Balinese Tourism',
        body: [
          'Bali Asri Tour (operated under PT. TRIP KUY INDONESIA, Business License NIB: 2712210002034) is honored to receive formal membership accreditation from ASITA (Association of The Indonesian Tours and Travel Agencies).',
          'ASITA is the premier national trade association overseeing legitimate, professional, and ethical travel agencies across the Indonesian archipelago since 1971.',
        ],
      },
      {
        heading: 'What This Means for Our Guests',
        body: [
          'Consumer Protection: Official ASITA accreditation guarantees that our agency complies with all Indonesian safety protocols, passenger liability insurances, and government operational standards.',
          'Transparent Pricing: We uphold the highest ethical standards with zero hidden fees, zero forced shopping stops, and a 100% pay-on-arrival policy.',
          'Fair Wages for Chauffeurs & Guides: We ensure all our Balinese drivers and certified guides receive respectful, above-industry remuneration, healthcare support, and continuing professional hospitality training.',
        ],
      },
      {
        heading: 'Looking Forward to 2026 and Beyond',
        body: [
          'As Bali welcomes back global travelers in record numbers, our ASITA membership reinforces our promise: delivering five-star private chauffeur experiences that respect local culture, support Balinese communities, and give travelers memories that last a lifetime.',
        ],
      },
    ],
  },
];

export function getAllBlogPosts(): BlogPost[] {
  return BLOG_POSTS;
}

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}

export const TOUR_CATEGORIES = [
  {
    id: 'cat-day-tours',
    slug: 'bali-day-tours',
    title: 'Bali Day Tours',
    subtitle: '10-Hour Custom Charters',
    count: '25+ Tours',
    image: 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=600&q=80',
    description: 'Custom 1-day tours to Ubud, Kintamani, Uluwatu, Bedugul, waterfalls, and scenic rice terraces.',
  },
  {
    id: 'cat-experiences',
    slug: 'bali-experience-tours',
    title: 'Bali Experiences',
    subtitle: 'Adventure & Water Sports',
    count: '12+ Activities',
    image: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=600&q=80',
    description: 'ATV quad bikes, Ayung river rafting, Mount Batur sunrise treks, paragliding, and jungle swings.',
  },
  {
    id: 'cat-packages',
    slug: 'bali-tour-package',
    title: 'Bali Tour Packages',
    subtitle: 'Honeymoon, Family & Adventure',
    count: '15+ Packages',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=600&q=80',
    description: 'Complete multi-day holiday packages from 3 Days 2 Nights to 10 Days 9 Nights with private chauffeur.',
  },
  {
    id: 'cat-shuttle',
    slug: 'bali-airport-hotel-shuttle',
    title: 'Airport & Hotel Shuttle',
    subtitle: '24/7 Meet & Greet Transfer',
    count: 'All Areas',
    image: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&w=600&q=80',
    description: 'Reliable transfers between Ngurah Rai International Airport (DPS) and hotels in Kuta, Seminyak, Ubud, and Uluwatu.',
  },
];

export const TRAVELER_REVIEWS = [
  {
    id: 'rev-1',
    author: 'David W',
    origin: 'Verified TripAdvisor Guest',
    rating: 5,
    date: 'February 2026',
    title: '🤙 Did the paragliding tour - wonderful experience with a good price',
    text: 'Did the paragliding tour - wonderful experience with a good price. Guste was a friendly and very helpful guide, taking care of all our needs during the excursion. Communication on WhatsApp was lightning fast!',
    tourName: 'Paragliding & South Bali Tour',
  },
  {
    id: 'rev-2',
    author: 'Sarah M',
    origin: 'Melbourne, Australia',
    rating: 5,
    date: 'January 2026',
    title: 'Outstanding 7D6N tour with family',
    text: 'Our driver Ketut made our Bali vacation unforgettable! The Innova Reborn was spotless, air conditioning was ice-cold, and he navigated the traffic seamlessly. We visited all the temples and waterfalls at our own pace.',
    tourName: '7 Days 6 Nights Bali Package',
  },
  {
    id: 'rev-3',
    author: 'Alex & Elena R',
    origin: 'Germany',
    rating: 5,
    date: 'December 2025',
    title: 'Nusa Penida Snorkeling was perfection',
    text: 'Swimming with manta rays at Manta Point and seeing Kelingking Beach was the highlight of our trip. Agung coordinated all our fast boats and island drivers with zero stress. 5 stars all the way!',
    tourName: 'West Nusa Penida Island Tour',
  },
];

export const TRIPADVISOR_REVIEWS = TRAVELER_REVIEWS;

export const GALLERY_IMAGES = [
  {
    id: 'g-1',
    src: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=600&q=80',
    alt: 'Ulun Danu Beratan Floating Temple on Lake Beratan Bali',
    caption: 'Ulun Danu Beratan Temple',
  },
  {
    id: 'g-2',
    src: 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=600&q=80',
    alt: 'Tegalalang Emerald Green Rice Terraces in Ubud',
    caption: 'Tegalalang Rice Terraces, Ubud',
  },
  {
    id: 'g-3',
    src: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=600&q=80',
    alt: 'Uluwatu Sunset Ocean Cliff Temple with Kecak Fire Dance',
    caption: 'Uluwatu Sunset Clifftop',
  },
  {
    id: 'g-4',
    src: 'https://images.unsplash.com/photo-1555400038-63f5ba517a47?auto=format&fit=crop&w=600&q=80',
    alt: 'Lempuyang Gate of Heaven looking toward Mount Agung Volcano',
    caption: 'Lempuyang Gate of Heaven',
  },
  {
    id: 'g-5',
    src: 'https://images.unsplash.com/photo-1577717903315-1691ae25ab3f?auto=format&fit=crop&w=600&q=80',
    alt: 'Kanto Lampo Secret Waterfall in Gianyar Bali',
    caption: 'Kanto Lampo Cascades',
  },
  {
    id: 'g-6',
    src: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=600&q=80',
    alt: 'Jimbaran Bay Seafood Candlelight Dinner by the Sunset Beach',
    caption: 'Jimbaran Romantic Sunset Dinner',
  },
];
