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
    "id": "10-days-9-nights-bali-tour-packages",
    "slug": "10-days-9-nights-bali-tour-packages",
    "title": "10 Days 9 Nights Bali Tour Packages",
    "duration": "10 Days 9 Nights",
    "durationDays": 10,
    "category": "package",
    "priceUSD": 690,
    "priceNote": "USD 690 / Pax (2-3 Traveler)",
    "priceTiers": [
      {
        "label": "Solo Traveler",
        "priceUSD": 1250
      },
      {
        "label": "2-3 Traveler",
        "priceUSD": 690
      },
      {
        "label": "4-6 Traveler",
        "priceUSD": 520
      },
      {
        "label": "7-10 Traveler",
        "priceUSD": 440
      },
      {
        "label": "11-14 Traveler",
        "priceUSD": 380
      }
    ],
    "rating": 5.0,
    "reviewCount": 312,
    "image": "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80",
    "highlights": [
      "Complete Grand Circuit: Experience South, Central, East, North, and West Bali in an unhurried 10-day private journey.",
      "Iconic Temples: Visit Ulun Danu Beratan on the lake, cliffside Uluwatu, Tanah Lot at sunset, and Lempuyang Gate of Heaven.",
      "Cultural Wonders: Sacred Ubud Monkey Forest, royal palaces, Tegalalang rice terraces, and Penglipuran traditional village.",
      "Volcano & Hot Springs: Mount Batur caldera panorama, Kintamani coffee plantation, and Toya Devasya mineral hot spring.",
      "Marine & Coastal Life: Wild dolphin watching in Lovina, water sports in Tanjung Benoa, and Jimbaran candlelit seafood dinner."
    ],
    "description": "The ultimate 10 Days 9 Nights Bali Tour Package is our most complete, immersive holiday circuit across the Island of the Gods. Specially designed for families, couples, and travelers who want to explore every corner of Bali without rushing. Enjoy daily private air-conditioned transport with our top-rated English-speaking chauffeur-guide, hand-selected cultural highlights, magnificent mountain vistas, pristine tropical beaches, and world-renowned Balinese hospitality.",
    "isPopular": true,
    "isFeatured": true,
    "itinerarySummary": [
      "Day 1: Warm Airport Welcome & Hotel Transfer (Kuta/Seminyak/Sanur)",
      "Day 2: South Bali Beaches, Pandawa & Sunset Uluwatu Cliff Temple with Kecak Fire Dance",
      "Day 3: Ubud Cultural Discovery \u2013 Celuk Silver Village, Tegenungan Waterfall, Sacred Monkey Forest & Ubud Market",
      "Day 4: Kintamani Mount Batur Volcano View, Tirta Empul Holy Water Temple & Tegalalang Rice Terraces",
      "Day 5: East Bali Heritage \u2013 Lempuyang Gate of Heaven, Tirta Gangga Royal Water Palace & Virgin Beach",
      "Day 6: Bedugul Mountain Highlands \u2013 Ulun Danu Beratan Floating Temple, Handara Gate & Wanagiri Hidden Hills",
      "Day 7: North Bali Scenic Expedition \u2013 Lovina Wild Dolphin Sunrise Cruise, Gitgit Giant Waterfall & Banjar Hot Springs",
      "Day 8: UNESCO Jatiluwih Rice Terraces, Batukaru Ancient Temple & Dramatic Tanah Lot Sea Temple Sunset",
      "Day 9: Free Leisure Day / Traditional 2-Hour Balinese Aromatherapy Spa & Romantic Jimbaran Bay Sunset Seafood Dinner",
      "Day 10: Souvenir Shopping at Krisna Oleh-Oleh Bali & Hassle-free Airport Departure Transfer"
    ],
    "included": [
      "9 nights handpicked hotel/resort accommodations with daily breakfast",
      "Private modern air-conditioned vehicle with dedicated English-speaking chauffeur-guide",
      "Complimentary cold bottled mineral water throughout all daily tours",
      "All entrance fees, parking tickets, toll fees, and highway charges",
      "Traditional boat charter for Lovina wild dolphin cruise & snorkeling gear",
      "Sunset Kecak & Fire Dance amphitheater tickets at Uluwatu Temple",
      "Romantic fresh grilled seafood dinner at Jimbaran Beach",
      "24/7 Bali Asri Tour local guest concierge & travel assistance"
    ],
    "excluded": [
      "International or domestic flight tickets",
      "Personal expenses, laundry, and hotel minibar charges",
      "Optional water sport activities in Tanjung Benoa",
      "Driver and guide tips (strictly voluntary)"
    ]
  },
  {
    "id": "9-days-8-nights-bali-tour-packages",
    "slug": "9-days-8-nights-bali-tour-packages",
    "title": "9 Days 8 Nights Bali Tour Packages",
    "duration": "9 Days 8 Nights",
    "durationDays": 9,
    "category": "package",
    "priceUSD": 620,
    "priceNote": "USD 620 / Pax (2-3 Traveler)",
    "priceTiers": [
      {
        "label": "Solo Traveler",
        "priceUSD": 1140
      },
      {
        "label": "2-3 Traveler",
        "priceUSD": 620
      },
      {
        "label": "4-6 Traveler",
        "priceUSD": 470
      },
      {
        "label": "7-10 Traveler",
        "priceUSD": 395
      },
      {
        "label": "11-14 Traveler",
        "priceUSD": 345
      }
    ],
    "rating": 4.9,
    "reviewCount": 248,
    "image": "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=800&q=80",
    "highlights": [
      "9 Full Days of Discovery: Comprehensive loop covering Bali south coast, spiritual heart of Ubud, volcano highlands, and sacred east.",
      "Gate of Heaven: Epic photo opportunity at Lempuyang Temple with Mount Agung backdrop.",
      "Cultural Mastery: Batuan royal temple, traditional Barong dance, and ancient Penglipuran bamboo village.",
      "Lush Nature: Banyumala twin waterfalls, UNESCO Jatiluwih rice paddies, and Kintamani caldera.",
      "Jimbaran Bay Dining: Candlelit dinner on the beach with ocean breeze and Balinese sambal."
    ],
    "description": "Our 9 Days 8 Nights Bali Tour Package is an exquisitely balanced holiday itinerary combining tropical relaxation, cultural insight, volcanic mountains, and world-class natural beauty. Every day is organized with private vehicle and dedicated chauffeur, giving you total flexibility to explore at your own pace.",
    "isPopular": true,
    "isFeatured": true,
    "itinerarySummary": [
      "Day 1: Arrival at Ngurah Rai Airport & Private Hotel Transfer",
      "Day 2: Tanjung Benoa Watersport, Melasti White Sand Beach & Uluwatu Temple Sunset",
      "Day 3: Ubud Artisan Villages (Celuk, Mas, Batuan) & Tegenungan Cascading Waterfall",
      "Day 4: Kintamani Mount Batur Caldera, Luwak Coffee Plantation & Tirta Empul Sacred Springs",
      "Day 5: Besakih Mother Temple of Bali & Penglipuran Traditional Clean Village",
      "Day 6: Bedugul Mountain Lake Ulun Danu, Handara Iconic Gate & Twin Lakes Viewpoint",
      "Day 7: UNESCO Jatiluwih Green Land Terraces & Tanah Lot Sunset Ocean Temple",
      "Day 8: Authentic Balinese Body Massage Spa & Romantic Jimbaran Seafood Dinner",
      "Day 9: Bali Oleh-Oleh Shopping & Private Airport Transfer Out"
    ],
    "included": [
      "8 nights hotel stay with daily breakfast",
      "Private vehicle with fuel and English-speaking driver",
      "Entrance tickets to all destinations listed in itinerary",
      "Daily chilled mineral water",
      "Jimbaran beach seafood dinner",
      "All parking and government taxes"
    ],
    "excluded": [
      "Airfare and airport taxes",
      "Travel insurance",
      "Personal shopping and souvenirs",
      "Meals not specifically stated in itinerary"
    ]
  },
  {
    "id": "8-days-7-nights-bali-tour-packages",
    "slug": "8-days-7-nights-bali-tour-packages",
    "title": "8 Days 7 Nights Bali Tour Packages",
    "duration": "8 Days 7 Nights",
    "durationDays": 8,
    "category": "package",
    "priceUSD": 550,
    "priceNote": "USD 550 / Pax (2-3 Traveler)",
    "priceTiers": [
      {
        "label": "Solo Traveler",
        "priceUSD": 990
      },
      {
        "label": "2-3 Traveler",
        "priceUSD": 550
      },
      {
        "label": "4-6 Traveler",
        "priceUSD": 420
      },
      {
        "label": "7-10 Traveler",
        "priceUSD": 360
      },
      {
        "label": "11-14 Traveler",
        "priceUSD": 310
      }
    ],
    "rating": 5.0,
    "reviewCount": 380,
    "image": "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=800&q=80",
    "highlights": [
      "Best of Bali in One Week: Ideal duration for first-time visitors and families wanting the classic Bali highlights.",
      "Ubud Rainforest: Sacred Monkey Forest, Campuhan Ridge, and Tegalalang jungle swing.",
      "Volcano & Lakes: Panoramic lunch facing Mount Batur active volcano and Lake Batur.",
      "Water Palaces of East Bali: Step on royal stone pads at Tirta Gangga surrounded by giant golden carp.",
      "Private Luxury: 100% private car with dedicated chauffeur-guide for your party only."
    ],
    "description": "The 8 Days 7 Nights Bali Tour Package is one of our most popular vacation plans. Perfectly crafted to showcase Bali\u2019s greatest landmarks, lush tropical rainforests, ancient sea temples, and rich Hindu-Balinese traditions, this week-long package delivers unforgettable memories from start to finish.",
    "isPopular": true,
    "isFeatured": true,
    "itinerarySummary": [
      "Day 1: Airport Pick Up & Hotel Check-in",
      "Day 2: Water Sports at Tanjung Benoa, Padang Padang Beach & Uluwatu Sunset Kecak Dance",
      "Day 3: Ubud Highlights \u2013 Monkey Forest, Ubud Royal Palace, Tegalalang Rice Terraces & Swing",
      "Day 4: Kintamani Volcano Panorama, Luwak Coffee Tasting & Tirta Empul Holy Springs",
      "Day 5: East Bali Heritage \u2013 Lempuyang Gate of Heaven, Tirta Gangga & Virgin Beach",
      "Day 6: Bedugul Ulun Danu Beratan Temple, Banyumala Twin Waterfall & Tanah Lot Temple",
      "Day 7: Balinese Spa Relaxation & Jimbaran Beach Sunset Seafood Dinner",
      "Day 8: Hotel Check-out, Souvenir Shopping & Departure Airport Transfer"
    ],
    "included": [
      "7 nights accommodation with breakfast",
      "Private air-conditioned car, petrol, and licensed driver",
      "Entrance fees to all attractions in itinerary",
      "Tirta Gangga & Lempuyang Temple shuttle and entry tickets",
      "Bottled mineral water during tours",
      "Jimbaran seafood dinner"
    ],
    "excluded": [
      "Flights and visa fees",
      "Tipping for driver",
      "Personal expenses"
    ]
  },
  {
    "id": "7-days-6-nights-bali-tour-packages",
    "slug": "7-days-6-nights-bali-tour-packages",
    "title": "7 Days 6 Nights Bali Tour Packages",
    "duration": "7 Days 6 Nights",
    "durationDays": 7,
    "category": "package",
    "priceUSD": 480,
    "priceNote": "USD 480 / Pax (2-3 Traveler)",
    "priceTiers": [
      {
        "label": "Solo Traveler",
        "priceUSD": 880
      },
      {
        "label": "2-3 Traveler",
        "priceUSD": 480
      },
      {
        "label": "4-6 Traveler",
        "priceUSD": 370
      },
      {
        "label": "7-10 Traveler",
        "priceUSD": 310
      },
      {
        "label": "11-14 Traveler",
        "priceUSD": 270
      }
    ],
    "rating": 4.9,
    "reviewCount": 415,
    "image": "https://images.unsplash.com/photo-1555400038-63f5ba517a47?auto=format&fit=crop&w=800&q=80",
    "highlights": [
      "All-Inclusive 7-Day Experience: Highlights of South, Central, North and Nusa Penida Island in one week.",
      "Nusa Penida Day Trip: Fast boat transfer to Kelingking T-Rex cliff, Broken Beach, and Angel's Billabong.",
      "Ubud Cultural Immersion: Barong dance performance, artisan silver workshops, and monkey sanctuary.",
      "Breathtaking Sunset Points: Uluwatu cliff edge and Tanah Lot wave-swept pagoda.",
      "Hassle-Free Concierge: Airport meet-and-greet with name signboard and luggage assistance."
    ],
    "description": "Discover the best of Bali with our 7 Days 6 Nights Bali Tour Package. Featuring a full day excursion to spectacular Nusa Penida island, historical Ubud art hubs, scenic Kintamani volcano, and legendary sea temples, this itinerary is the quintessential Bali holiday.",
    "isPopular": true,
    "isFeatured": true,
    "itinerarySummary": [
      "Day 1: Arrival at Ngurah Rai International Airport & Transfer to Hotel",
      "Day 2: South Bali Exploration \u2013 Pandawa Beach, Uluwatu Temple & Jimbaran Seafood Dinner",
      "Day 3: Ubud Cultural Odyssey \u2013 Barong Dance, Celuk Silver, Ubud Palace & Tegalalang Rice Terraces",
      "Day 4: Kintamani Mount Batur View, Tirta Empul Holy Spring & Tegenungan Waterfall",
      "Day 5: Bedugul Lake Temple Ulun Danu, Handara Gate & Iconic Tanah Lot Sunset",
      "Day 6: Nusa Penida Island Day Tour (Kelingking Beach, Broken Beach, Angel's Billabong)",
      "Day 7: Leisure Morning, Bali Souvenir Center & Airport Transfer"
    ],
    "included": [
      "6 nights hotel stay with daily breakfast",
      "Private AC transport and friendly driver-guide",
      "Roundtrip fast boat tickets to Nusa Penida Island with island tour driver",
      "All entry tickets, parking, and toll fees",
      "Mineral water on daily excursions",
      "Seafood dinner on Jimbaran Beach"
    ],
    "excluded": [
      "Flight tickets",
      "Personal spending",
      "Driver tips"
    ]
  },
  {
    "id": "6-days-5-nights-bali-tour-packages",
    "slug": "6-days-5-nights-bali-tour-packages",
    "title": "6 Days 5 Nights Bali Tour Packages",
    "duration": "6 Days 5 Nights",
    "durationDays": 6,
    "category": "package",
    "priceUSD": 410,
    "priceNote": "USD 410 / Pax (2-3 Traveler)",
    "priceTiers": [
      {
        "label": "Solo Traveler",
        "priceUSD": 760
      },
      {
        "label": "2-3 Traveler",
        "priceUSD": 410
      },
      {
        "label": "4-6 Traveler",
        "priceUSD": 320
      },
      {
        "label": "7-10 Traveler",
        "priceUSD": 270
      },
      {
        "label": "11-14 Traveler",
        "priceUSD": 235
      }
    ],
    "rating": 4.9,
    "reviewCount": 290,
    "image": "https://images.unsplash.com/photo-1577717903315-1691ae25ab3f?auto=format&fit=crop&w=800&q=80",
    "highlights": [
      "Compact 6-Day Itinerary: Covers the highest-rated Balinese temples, volcanic views, and pristine beaches.",
      "Ubud Valley & Swings: Fly high above emerald rice terraces on Bali\u2019s famous jungle swings.",
      "Kintamani Caldera: Spectacular views over Mount Batur active volcano and Lake Batur.",
      "Bedugul & Tanah Lot: Photogenic floating temple at Lake Beratan and waves crashing at Tanah Lot.",
      "Private Car Flexibility: Fully private transportation so you can stop whenever you want for photos."
    ],
    "description": "The 6 Days 5 Nights Bali Tour Package is carefully arranged to give you an authentic, memorable tropical escape. From the southern limestone cliffs of Uluwatu to the lush central highlands of Ubud and Bedugul, experience Bali\u2019s vibrant culture and breathtaking vistas.",
    "isPopular": true,
    "isFeatured": true,
    "itinerarySummary": [
      "Day 1: Airport Pick Up & Hotel Transfer",
      "Day 2: Tanjung Benoa Watersport, Melasti Beach & Sunset Uluwatu Kecak Dance",
      "Day 3: Ubud Scenic Highlights \u2013 Sacred Monkey Forest, Rice Terraces & Jungle Swing",
      "Day 4: Kintamani Volcano View, Tirta Empul Temple & Tibumana Waterfall",
      "Day 5: Bedugul Ulun Danu Floating Temple & Tanah Lot Sea Temple Sunset",
      "Day 6: Balinese Souvenirs & Airport Transfer Out"
    ],
    "included": [
      "5 nights hotel accommodation with breakfast",
      "Private vehicle with English-speaking driver",
      "All attraction entrance fees & parking tickets",
      "Mineral water during tours",
      "24/7 guest support"
    ],
    "excluded": [
      "Flight tickets",
      "Personal expenses",
      "Gratuities"
    ]
  },
  {
    "id": "5-days-4-nights-bali-tour-packages",
    "slug": "5-days-4-nights-bali-tour-packages",
    "title": "5 Days 4 Nights Bali Tour Packages",
    "duration": "5 Days 4 Nights",
    "durationDays": 5,
    "category": "package",
    "priceUSD": 340,
    "priceNote": "USD 340 / Pax (2-3 Traveler)",
    "priceTiers": [
      {
        "label": "Solo Traveler",
        "priceUSD": 640
      },
      {
        "label": "2-3 Traveler",
        "priceUSD": 340
      },
      {
        "label": "4-6 Traveler",
        "priceUSD": 265
      },
      {
        "label": "7-10 Traveler",
        "priceUSD": 225
      },
      {
        "label": "11-14 Traveler",
        "priceUSD": 195
      }
    ],
    "rating": 5.0,
    "reviewCount": 360,
    "image": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    "highlights": [
      "The Classic Bali Getaway: Perfect 5-day holiday exploring South beaches, Ubud rainforest, and Kintamani volcano.",
      "Ubud Monkey Forest: Walk among ancient banyan trees and hundreds of friendly grey long-tailed macaques.",
      "Holy Spring Purification: Tirta Empul water temple blessing and healing springs.",
      "Jimbaran Sunset Dinner: Fresh grilled snapper, jumbo prawns, and squid right on the ocean beach.",
      "Private Tour Guarantee: Never shared with strangers; private car and driver just for you."
    ],
    "description": "Our 5 Days 4 Nights Bali Tour Package is the #1 choice for travelers seeking a short, high-value getaway. Packed with iconic sights, cultural encounters, and beach sunsets, this tour lets you experience the very best of Bali in five hassle-free days.",
    "isPopular": true,
    "isFeatured": true,
    "itinerarySummary": [
      "Day 1: Airport Arrival & Hotel Check-in",
      "Day 2: Ubud Culture & Nature \u2013 Monkey Forest, Tegalalang Rice Terrace & Tegenungan Waterfall",
      "Day 3: Kintamani Volcano Panorama, Coffee Plantation & Tirta Empul Blessing",
      "Day 4: South Coast Tour \u2013 Nusa Dua Watersports, Uluwatu Sunset & Jimbaran Seafood",
      "Day 5: Hotel Check-out, Local Handicrafts Shopping & Airport Transfer"
    ],
    "included": [
      "4 nights hotel accommodation with breakfast",
      "Private air-conditioned car, fuel, and English-speaking chauffeur",
      "Entrance fees to all destinations in itinerary",
      "Jimbaran beach seafood dinner",
      "Cold mineral water"
    ],
    "excluded": [
      "Flights and travel insurance",
      "Personal items and drinks",
      "Tips for driver"
    ]
  },
  {
    "id": "3-days-amazing-bali-packages",
    "slug": "3-days-amazing-bali-packages",
    "title": "3 Days Amazing Bali Packages",
    "duration": "3 Days 2 Nights",
    "durationDays": 3,
    "category": "package",
    "priceUSD": 230,
    "priceNote": "USD 230 / Pax (2-3 Traveler)",
    "priceTiers": [
      {
        "label": "Solo Traveler",
        "priceUSD": 430
      },
      {
        "label": "2-3 Traveler",
        "priceUSD": 230
      },
      {
        "label": "4-6 Traveler",
        "priceUSD": 180
      },
      {
        "label": "7-10 Traveler",
        "priceUSD": 155
      },
      {
        "label": "11-14 Traveler",
        "priceUSD": 135
      }
    ],
    "rating": 4.8,
    "reviewCount": 195,
    "image": "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80",
    "highlights": [
      "Short & Sweet: Maximize a 3-day weekend or stopover with the top highlights of Bali.",
      "Ubud & Volcano Combo: Experience both the cultural jungle of Ubud and the majestic Mount Batur caldera in one day.",
      "Southern Sunset: Watch the sunset from Uluwatu cliff temple followed by fresh seafood at Jimbaran.",
      "Effortless Transfers: Pick up upon landing and drop-off back at the airport on your departure."
    ],
    "description": "The 3 Days Amazing Bali Package is designed for travelers with limited time who still want to witness Bali\u2019s top spiritual and scenic landmarks. From majestic volcanoes to dramatic ocean cliffs, you will capture the heart of the island.",
    "isPopular": true,
    "isFeatured": true,
    "itinerarySummary": [
      "Day 1: Airport Pick Up & Southern Bali Sunset (Uluwatu Temple & Jimbaran Beach)",
      "Day 2: Full Day Ubud & Kintamani Volcano Adventure with Tegalalang Rice Terrace",
      "Day 3: Bedugul Lake Temple Ulun Danu / Tanah Lot & Airport Drop Off"
    ],
    "included": [
      "2 nights hotel accommodation with breakfast",
      "Private car and driver for all transfers and tours",
      "All temple and attraction entry tickets",
      "Mineral water"
    ],
    "excluded": [
      "Flight tickets",
      "Personal expenses",
      "Driver tips"
    ]
  },
  {
    "id": "a-perfect-3-day-escape",
    "slug": "a-perfect-3-day-escape",
    "title": "A Perfect 3 Day Escape",
    "duration": "3 Days 2 Nights",
    "durationDays": 3,
    "category": "package",
    "priceUSD": 225,
    "priceNote": "USD 225 / Pax (2-3 Traveler)",
    "priceTiers": [
      {
        "label": "Solo Traveler",
        "priceUSD": 420
      },
      {
        "label": "2-3 Traveler",
        "priceUSD": 225
      },
      {
        "label": "4-6 Traveler",
        "priceUSD": 175
      },
      {
        "label": "7-10 Traveler",
        "priceUSD": 150
      },
      {
        "label": "11-14 Traveler",
        "priceUSD": 130
      }
    ],
    "rating": 4.9,
    "reviewCount": 160,
    "image": "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80",
    "highlights": [
      "Intimate & Relaxing: Handcrafted for couples and friends wanting a tranquil, scenic escape.",
      "Ubud Rice Paddies: Walk among lush terraced fields and enjoy a thrilling jungle swing.",
      "Secret Waterfalls: Cool off with a refreshing dip beneath clear cascade pools.",
      "Tanah Lot Sea Temple: Stand before the iconic temple perched on an offshore rock formation."
    ],
    "description": "Escape the routine with 'A Perfect 3 Day Escape' by Bali Asri Tour. Crafted to offer a relaxing rhythm without overcrowded schedules, this short holiday highlights Bali\u2019s lush interior, verdant rice fields, serene waterfalls, and stunning ocean views.",
    "isPopular": false,
    "isFeatured": true,
    "itinerarySummary": [
      "Day 1: Arrival & Transfer to Hotel/Villa, Evening Sunset at Seminyak Beach",
      "Day 2: Ubud Scenic Escape \u2013 Tegalalang Rice Terraces, Jungle Swing & Waterfall Swim",
      "Day 3: Tanah Lot Morning Temple Visit, Souvenir Shopping & Airport Departure"
    ],
    "included": [
      "2 nights hotel stay with breakfast",
      "Private AC transport and driver throughout",
      "All attraction entrance fees",
      "Bottled water"
    ],
    "excluded": [
      "Flights",
      "Personal meals not listed",
      "Driver gratuity"
    ]
  },
  {
    "id": "4-days-relax-in-bali-tour-package",
    "slug": "4-days-relax-in-bali-tour-package",
    "title": "4 Days Relax in Bali Tour Package",
    "duration": "4 Days 3 Nights",
    "durationDays": 4,
    "category": "package",
    "priceUSD": 280,
    "priceNote": "USD 280 / Pax (2-3 Traveler)",
    "priceTiers": [
      {
        "label": "Solo Traveler",
        "priceUSD": 520
      },
      {
        "label": "2-3 Traveler",
        "priceUSD": 280
      },
      {
        "label": "4-6 Traveler",
        "priceUSD": 220
      },
      {
        "label": "7-10 Traveler",
        "priceUSD": 190
      },
      {
        "label": "11-14 Traveler",
        "priceUSD": 165
      }
    ],
    "rating": 4.9,
    "reviewCount": 185,
    "image": "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80",
    "highlights": [
      "Wellness & Rejuvenation: A restorative holiday featuring soothing Balinese spa therapy.",
      "Campuhan Ridge Walk: Scenic stroll along Ubud's tranquil hilltop trail between lush valleys.",
      "Ulun Danu Beratan: Calm mountain lake temple set against misty volcanic peaks.",
      "Unhurried Schedule: Plenty of downtime to enjoy your resort pool and tropical surroundings."
    ],
    "description": "Unwind completely with the 4 Days Relax in Bali Tour Package. Designed for those seeking tranquility, gentle exploration, and body rejuvenation, this package blends soothing Balinese massages with visits to serene mountain temples, lotus ponds, and coastal sea breezes.",
    "isPopular": false,
    "isFeatured": true,
    "itinerarySummary": [
      "Day 1: Airport Pick Up, Check-in & Relaxing Aromatherapy Massage",
      "Day 2: Ubud Tranquil Tour \u2013 Campuhan Ridge Walk, Saraswati Lotus Temple & Monkey Forest",
      "Day 3: Bedugul Cool Highlands Ulun Danu Beratan Temple & Sunset at Tanah Lot",
      "Day 4: Leisure Morning by the Beach, Local Market & Airport Transfer"
    ],
    "included": [
      "3 nights hotel accommodation with breakfast",
      "2-Hour traditional Balinese aromatherapy spa treatment",
      "Private AC car and driver for all scheduled excursions",
      "Entrance tickets and parking fees",
      "Mineral water"
    ],
    "excluded": [
      "Airfare",
      "Personal items",
      "Tipping"
    ]
  },
  {
    "id": "4-days-fun-in-bali-tour-package",
    "slug": "4-days-fun-in-bali-tour-package",
    "title": "4 Days Fun in Bali Tour Package",
    "duration": "4 Days 3 Nights",
    "durationDays": 4,
    "category": "package",
    "priceUSD": 295,
    "priceNote": "USD 295 / Pax (2-3 Traveler)",
    "priceTiers": [
      {
        "label": "Solo Traveler",
        "priceUSD": 550
      },
      {
        "label": "2-3 Traveler",
        "priceUSD": 295
      },
      {
        "label": "4-6 Traveler",
        "priceUSD": 235
      },
      {
        "label": "7-10 Traveler",
        "priceUSD": 200
      },
      {
        "label": "11-14 Traveler",
        "priceUSD": 175
      }
    ],
    "rating": 5.0,
    "reviewCount": 220,
    "image": "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=800&q=80",
    "highlights": [
      "Action & Adrenaline: 2 hours of Ayung river white water rafting and exhilarating ATV quad biking.",
      "Tanjung Benoa Watersports: Banana boat ride and parasailing over sparkling turquoise seas.",
      "Uluwatu Sunset: Dramatic 70-meter cliff panorama overlooking the Indian Ocean.",
      "Vibrant Beach Clubs: Sunset drinks and music by the sea in Seminyak or Canggu."
    ],
    "description": "If you love adventure and dynamic energy, the 4 Days Fun in Bali Tour Package is made for you! Experience high-octane river rafting through rainforest gorges, off-road ATV biking through jungle mud, thrilling water sports, and world-famous ocean sunsets.",
    "isPopular": true,
    "isFeatured": true,
    "itinerarySummary": [
      "Day 1: Airport Pick Up & Beach Club Sunset Experience",
      "Day 2: Action Packed Day \u2013 Ayung River White Water Rafting & Ubud Jungle ATV Quad Bike",
      "Day 3: Nusa Dua Water Sports (Banana Boat, Jet Ski) & Sunset Uluwatu Cliff Temple",
      "Day 4: Traditional Bali Coffee Tasting, Souvenirs & Airport Transfer"
    ],
    "included": [
      "3 nights hotel accommodation with breakfast",
      "Ayung River white water rafting with safety equipment and buffet lunch",
      "2-hour ATV quad biking adventure",
      "Tanjung Benoa water sport activity (banana boat)",
      "Private AC transport and driver throughout",
      "All entrance and parking fees"
    ],
    "excluded": [
      "Flights",
      "Extra water sports",
      "Driver gratuities"
    ]
  },
  {
    "id": "bali-long-trip-3-days-2-nights",
    "slug": "bali-long-trip-3-days-2-nights",
    "title": "Bali Long Trip | 3 Days 2 Nights",
    "duration": "3 Days 2 Nights",
    "durationDays": 3,
    "category": "package",
    "priceUSD": 240,
    "priceNote": "USD 240 / Pax (2-3 Traveler)",
    "priceTiers": [
      {
        "label": "Solo Traveler",
        "priceUSD": 440
      },
      {
        "label": "2-3 Traveler",
        "priceUSD": 240
      },
      {
        "label": "4-6 Traveler",
        "priceUSD": 190
      },
      {
        "label": "7-10 Traveler",
        "priceUSD": 165
      },
      {
        "label": "11-14 Traveler",
        "priceUSD": 145
      }
    ],
    "rating": 4.8,
    "reviewCount": 140,
    "image": "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=800&q=80",
    "highlights": [
      "Overland Long Road Trip: Venture off the crowded tourist trail into East and North Bali.",
      "Kanto Lampo Waterfall: Climb upon the stepped rock waterfall for an incredible photo session.",
      "Tirta Gangga & Taman Ujung: Explore two majestic royal Balinese water palaces in Karangasem.",
      "Goa Lawah & Kerta Gosa: Ancient bat cave temple and historical royal court pavilion."
    ],
    "description": "Take an unforgettable road adventure with our Bali Long Trip | 3 Days 2 Nights. Crossing scenic mountain passes, coastal palm roads, and royal historical kingdoms in East Bali, this overland trip reveals an authentic, unspoiled side of Bali.",
    "isPopular": false,
    "isFeatured": true,
    "itinerarySummary": [
      "Day 1: Overland Transfer to East Bali \u2013 Kanto Lampo Waterfall & Candidasa Coastal View",
      "Day 2: Lempuyang Gate of Heaven, Tirta Gangga Water Palace & Taman Ujung Sukasada",
      "Day 3: Goa Lawah Bat Cave Temple, Klungkung Kerta Gosa & Return Airport Transfer"
    ],
    "included": [
      "2 nights hotel accommodation with breakfast",
      "Private long-distance vehicle, petrol, and experienced driver",
      "All attraction entrance tickets and shuttle buses",
      "Mineral water"
    ],
    "excluded": [
      "Flight tickets",
      "Personal expenses",
      "Driver tips"
    ]
  },
  {
    "id": "5-days-amazing-bali-tour-package",
    "slug": "5-days-amazing-bali-tour-package",
    "title": "5 Days Amazing Bali Tour Package",
    "duration": "5 Days 4 Nights",
    "durationDays": 5,
    "category": "package",
    "priceUSD": 360,
    "priceNote": "USD 360 / Pax (2-3 Traveler)",
    "priceTiers": [
      {
        "label": "Solo Traveler",
        "priceUSD": 670
      },
      {
        "label": "2-3 Traveler",
        "priceUSD": 360
      },
      {
        "label": "4-6 Traveler",
        "priceUSD": 280
      },
      {
        "label": "7-10 Traveler",
        "priceUSD": 240
      },
      {
        "label": "11-14 Traveler",
        "priceUSD": 210
      }
    ],
    "rating": 5.0,
    "reviewCount": 275,
    "image": "https://images.unsplash.com/photo-1577717903315-1691ae25ab3f?auto=format&fit=crop&w=800&q=80",
    "highlights": [
      "Mount Batur 4WD Jeep Sunrise: Watch the morning sunrise above volcanic black lava fields from a customized 4WD jeep.",
      "Natural Hot Springs: Relax tired muscles in warm geothermal lakeside pools.",
      "Best of Ubud: Ubud Royal Palace, traditional markets, and Tegalalang terraced valley.",
      "Melasti Beach & Uluwatu: High limestone cliffs, white sand beaches, and twilight Kecak dance."
    ],
    "description": "The 5 Days Amazing Bali Tour Package elevates your Bali vacation with extraordinary experiences, including the trending Mount Batur 4WD Sunrise Jeep adventure, thermal mineral hot springs, sacred temples, and stunning southern beaches.",
    "isPopular": true,
    "isFeatured": true,
    "itinerarySummary": [
      "Day 1: Airport Welcome, Hotel Check-in & Sunset Drink at Jimbaran Bay",
      "Day 2: Best of Ubud \u2013 Sacred Monkey Forest, Tegalalang Terrace & Ubud Royal Palace",
      "Day 3: Mount Batur Sunrise Jeep Tour & Natural Hot Springs in Kintamani",
      "Day 4: Spectacular South Bali \u2013 Water Sports, Melasti Beach & Uluwatu Kecak Dance",
      "Day 5: Balinese Spa Treatment, Local Souvenir Market & Airport Departure"
    ],
    "included": [
      "4 nights hotel stay with breakfast",
      "Mount Batur 4WD Sunrise Jeep tour with professional guide",
      "Natural hot spring entrance ticket",
      "Private air-conditioned vehicle and English-speaking chauffeur",
      "All entrance tickets, parking, and toll fees",
      "Mineral water"
    ],
    "excluded": [
      "Flights",
      "Personal expenses",
      "Driver tips"
    ]
  },
  {
    "id": "bali-overnight-2-days-1-night-no-meals-west",
    "slug": "bali-overnight-2-days-1-night-no-meals-west",
    "title": "Bali Overnight | 2 Days 1 Night (No meals) West",
    "duration": "2 Days 1 Night",
    "durationDays": 2,
    "category": "package",
    "priceUSD": 160,
    "priceNote": "USD 160 / Pax (2-3 Traveler)",
    "priceTiers": [
      {
        "label": "Solo Traveler",
        "priceUSD": 290
      },
      {
        "label": "2-3 Traveler",
        "priceUSD": 160
      },
      {
        "label": "4-6 Traveler",
        "priceUSD": 125
      },
      {
        "label": "7-10 Traveler",
        "priceUSD": 110
      },
      {
        "label": "11-14 Traveler",
        "priceUSD": 95
      }
    ],
    "rating": 4.8,
    "reviewCount": 110,
    "image": "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80",
    "highlights": [
      "West Bali Mountain Retreat: Explore the cool misty highlands of Bedugul, Munduk, and Jatiluwih.",
      "UNESCO Jatiluwih Rice Terraces: Walk among centuries-old Subak irrigated emerald rice paddies.",
      "Twin Lakes Viewpoint: Panoramic vistas over Lake Buyan and Lake Tamblingan.",
      "Tanah Lot Sea Temple: Stand on the ocean bluff as waves crash against the ancient shrine."
    ],
    "description": "Our Bali Overnight | 2 Days 1 Night (No meals) West tour gives you the freedom to explore the majestic mountains and rice terraces of West Bali. With private vehicle and dedicated chauffeur provided, you can choose where and when you dine at authentic local warungs or scenic highland restaurants.",
    "isPopular": false,
    "isFeatured": true,
    "itinerarySummary": [
      "Day 1: Pick up from South Bali / Ubud, drive to West Bali \u2013 Royal Temple Taman Ayun, UNESCO Jatiluwih Rice Terraces & Bedugul Ulun Danu Temple. Overnight in Bedugul/Munduk.",
      "Day 2: Morning visit to Munduk Waterfall & Twin Lakes Wanagiri, journey down to Tanah Lot Temple for ocean views, and transfer back to hotel/airport."
    ],
    "included": [
      "1 night hotel accommodation in Bedugul/Munduk area",
      "2 full days private vehicle with petrol and English-speaking chauffeur",
      "Entrance tickets to all destinations listed in itinerary",
      "Mineral water during the trip"
    ],
    "excluded": [
      "Meals (lunch and dinner are self-paid, giving you full culinary freedom)",
      "Personal shopping and souvenirs",
      "Driver tipping"
    ]
  },
  {
    "id": "bali-overnight-2-days-1-night-no-meals-east",
    "slug": "bali-overnight-2-days-1-night-no-meals-east",
    "title": "Bali Overnight | 2 Days 1 Night (No meals) East",
    "duration": "2 Days 1 Night",
    "durationDays": 2,
    "category": "package",
    "priceUSD": 160,
    "priceNote": "USD 160 / Pax (2-3 Traveler)",
    "priceTiers": [
      {
        "label": "Solo Traveler",
        "priceUSD": 290
      },
      {
        "label": "2-3 Traveler",
        "priceUSD": 160
      },
      {
        "label": "4-6 Traveler",
        "priceUSD": 125
      },
      {
        "label": "7-10 Traveler",
        "priceUSD": 110
      },
      {
        "label": "11-14 Traveler",
        "priceUSD": 95
      }
    ],
    "rating": 4.8,
    "reviewCount": 125,
    "image": "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=800&q=80",
    "highlights": [
      "East Bali Royal Heritage: Discover the majestic water gardens and coastal serenity of Karangasem.",
      "Lempuyang Gate of Heaven: Early morning priority access for the famous Mount Agung reflection photo.",
      "Tirta Gangga & Taman Ujung: Marvel at royal fountains, koi ponds, and European-Balinese architecture.",
      "Goa Lawah Temple: Ancient sacred cave home to thousands of fruit bats."
    ],
    "description": "The Bali Overnight | 2 Days 1 Night (No meals) East tour is the ideal way to explore East Bali without the exhausting 3-hour morning drive from Kuta. Sleep near the coast in Candidasa or Amed, reach Lempuyang Temple early, and explore royal water gardens at a relaxed pace.",
    "isPopular": false,
    "isFeatured": true,
    "itinerarySummary": [
      "Day 1: Pick up from hotel, explore East Bali \u2013 Kertha Gosa Pavilion, Goa Lawah Temple, Kusamba Salt Making & Candidasa Lotus Lagoon. Overnight in Candidasa/Amed.",
      "Day 2: Early morning visit to Lempuyang Temple (Gate of Heaven), Tirta Gangga Royal Water Garden, and Taman Ujung Water Palace before return transfer."
    ],
    "included": [
      "1 night hotel accommodation in Candidasa/Amed area",
      "2 full days private transport, petrol, and dedicated chauffeur",
      "All entrance tickets and shuttle buses to Lempuyang & Tirta Gangga",
      "Bottled mineral water"
    ],
    "excluded": [
      "Meals (self-paid at your choice of local seaside cafes or warungs)",
      "Personal items",
      "Driver tip"
    ]
  },
  {
    "id": "atv-quad-bike-adventure-and-holy-bathing-experience",
    "slug": "atv-quad-bike-adventure-and-holy-bathing-experience",
    "title": "ATV Quad Bike Adventure and Holy Bathing Experience",
    "duration": "Full Day (8 - 9 Hours)",
    "durationDays": 1,
    "category": "experience",
    "priceUSD": 58,
    "priceNote": "USD 58 / Pax (2-3 Traveler)",
    "priceTiers": [
      {
        "label": "Solo Traveler",
        "priceUSD": 110
      },
      {
        "label": "2-3 Traveler",
        "priceUSD": 58
      },
      {
        "label": "4-6 Traveler",
        "priceUSD": 45
      },
      {
        "label": "7-10 Traveler",
        "priceUSD": 38
      },
      {
        "label": "11-14 Traveler",
        "priceUSD": 32
      }
    ],
    "rating": 5.0,
    "reviewCount": 340,
    "image": "/images/tour-ubud-swing.jpg",
    "highlights": [
      "2-Hour Extreme ATV Quad Biking: Ride through jungle trails, muddy tracks, riverbeds, and a natural cave tunnel.",
      "Sacred Melukat Ritual: Authentic Balinese holy water purification ceremony at Sebatu or Tirta Empul Temple.",
      "Traditional Sarong Blessing: Don traditional temple attire and receive prayer blessings from a Hindu priest.",
      "Indonesian Hot Buffet Lunch: Enjoy a delicious buffet with fresh tropical fruits overlooking the river valley."
    ],
    "description": "Combine thrill and spiritual renewal in this unique Bali Asri Tour signature experience! Kick off the day riding high-powered ATV quad bikes across rugged rural terrains, through muddy streams, bamboo forests, and dark cave tunnels. Afterward, cleanse your mind and soul with an authentic 'Melukat' holy water purification ritual at an ancient water spring temple.",
    "isPopular": true,
    "isFeatured": true,
    "itinerarySummary": [
      "08:00 AM \u2013 Hotel pickup in an air-conditioned private vehicle.",
      "09:30 AM \u2013 Arrive at the ATV adventure basecamp, receive safety briefing, and gear up with helmet and rubber boots.",
      "10:00 AM \u2013 2-hour exhilarating ATV quad bike trek through jungle, rice paddies, river crossings, and dark cave tunnels.",
      "12:15 PM \u2013 Hot shower and change into dry clothes; savor a tasty Indonesian buffet lunch.",
      "01:30 PM \u2013 Travel to Sebatu / Tirta Empul Holy Spring Temple; wrap in a traditional Balinese ceremonial sarong.",
      "02:00 PM \u2013 Participate in the sacred Melukat water purification ritual guided by a local Balinese host.",
      "03:30 PM \u2013 Visit a local spice and coffee plantation for free tasting of herbal teas and Luwak coffee.",
      "05:00 PM \u2013 Comfortable return transfer back to your hotel."
    ],
    "included": [
      "Hotel pickup and drop-off in a private AC car",
      "2-hour ATV ride (single or tandem) with certified instructor",
      "All ATV safety gear (helmet, boots, shower facilities, locker)",
      "Traditional Indonesian buffet lunch",
      "Temple entrance ticket, ceremonial sarong rental & offering basket (canang sari)",
      "Guided holy water bathing ritual",
      "Mineral water and emergency insurance"
    ],
    "excluded": [
      "Personal photos and video documentation (available on-site)",
      "Gratuities for ATV guide and driver"
    ]
  },
  {
    "id": "silver-making-class",
    "slug": "silver-making-class",
    "title": "Silver Making Class",
    "duration": "Half Day (4 - 5 Hours)",
    "durationDays": 1,
    "category": "experience",
    "priceUSD": 45,
    "priceNote": "USD 45 / Pax (2-3 Traveler)",
    "priceTiers": [
      {
        "label": "Solo Traveler",
        "priceUSD": 85
      },
      {
        "label": "2-3 Traveler",
        "priceUSD": 45
      },
      {
        "label": "4-6 Traveler",
        "priceUSD": 36
      },
      {
        "label": "7-10 Traveler",
        "priceUSD": 30
      },
      {
        "label": "11-14 Traveler",
        "priceUSD": 25
      }
    ],
    "rating": 4.9,
    "reviewCount": 190,
    "image": "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80",
    "highlights": [
      "Hands-On Artisan Workshop: Learn the ancestral silversmith techniques in Celuk Village, Bali\u2019s jewelry capital.",
      "7 Grams of Solid Silver Included: Design and craft your own custom ring, pendant, earrings, or bracelet.",
      "One-on-One Master Guidance: Expert Balinese silversmiths teach you soldering, cutting, stamping, and polishing.",
      "Take Home Your Unique Keepsake: A genuine handcrafted sterling silver memory from Bali."
    ],
    "description": "Unleash your creativity with the Silver Making Class in Celuk Village. Guided by generational master silversmiths, you\u2019ll melt, hammer, solder, carve, and polish raw sterling silver into an exquisite piece of custom jewelry. Take home a one-of-a-kind personal memento from your Bali holiday.",
    "isPopular": false,
    "isFeatured": true,
    "itinerarySummary": [
      "09:00 AM \u2013 Private hotel pickup from your accommodation.",
      "09:45 AM \u2013 Arrive at the Celuk jewelry studio; enjoy a welcome drink and review jewelry design ideas.",
      "10:00 AM \u2013 Receive 7 grams of pure 925 sterling silver; start melting, forging, and shaping under expert guidance.",
      "11:30 AM \u2013 Precision soldering, engraving, stone setting (optional), and high-gloss polishing of your custom creation.",
      "12:30 PM \u2013 Admire and pack your finished jewelry piece in a gift pouch.",
      "01:00 PM \u2013 Optional visit to a traditional handicraft gallery or return transfer to hotel."
    ],
    "included": [
      "Hotel pickup and drop-off in a private AC car",
      "7 grams of pure 925 sterling silver per person",
      "All silversmith tools, safety goggles, and equipment",
      "Instruction from an experienced master silversmith",
      "Finished handmade jewelry in a souvenir pouch",
      "Mineral water"
    ],
    "excluded": [
      "Additional silver beyond 7 grams (available at market rate per gram)",
      "Gemstones and precious stones (optional add-on)",
      "Gratuities for workshop instructor and driver"
    ]
  },
  {
    "id": "ubud-and-balinese-cooking-experience",
    "slug": "ubud-and-balinese-cooking-experience",
    "title": "Ubud and Balinese Cooking Experience",
    "duration": "Half Day (5 Hours)",
    "durationDays": 1,
    "category": "experience",
    "priceUSD": 40,
    "priceNote": "USD 40 / Pax (2-3 Traveler)",
    "priceTiers": [
      {
        "label": "Solo Traveler",
        "priceUSD": 75
      },
      {
        "label": "2-3 Traveler",
        "priceUSD": 40
      },
      {
        "label": "4-6 Traveler",
        "priceUSD": 32
      },
      {
        "label": "7-10 Traveler",
        "priceUSD": 26
      },
      {
        "label": "11-14 Traveler",
        "priceUSD": 22
      }
    ],
    "rating": 5.0,
    "reviewCount": 260,
    "image": "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80",
    "highlights": [
      "Traditional Morning Market Tour: Discover exotic tropical vegetables, herbs, and spices with your chef.",
      "Authentic Family Compound: Cook inside a real Balinese house compound amidst tropical gardens.",
      "5-Course Traditional Feast: Prepare Sate Lilit, Chicken Betutu, Sambal Matah, Lawar, and sweet banana kolak.",
      "Recipe Booklet & Feast: Savor the delicious lunch you made and take home the recipe book to recreate at home."
    ],
    "description": "Immerse yourself in the fragrant aromas and vibrant flavors of traditional Balinese cuisine. Start with an insightful morning tour through a bustling village market to pick up fresh galangal, lemongrass, turmeric, and chili. Then head into an open-air pavilion within an authentic Balinese family compound to cook and feast on a multi-course banquet.",
    "isPopular": true,
    "isFeatured": true,
    "itinerarySummary": [
      "08:00 AM \u2013 Hotel pickup in a private air-conditioned vehicle.",
      "08:30 AM \u2013 Morning market tour to explore local produce, fresh spices, and daily ceremonial offerings.",
      "09:30 AM \u2013 Arrive at the cooking school in an authentic Balinese village compound; welcome drink and herbal tea.",
      "10:00 AM \u2013 Step-by-step cooking session using traditional stone mortars, grinding spices, and grilling chicken sate skewers over coconut husks.",
      "12:30 PM \u2013 Sit down and relish your homemade feast surrounded by lush garden greenery.",
      "01:30 PM \u2013 Receive a certificate of completion and printed recipe booklet; transfer back to your hotel."
    ],
    "included": [
      "Roundtrip hotel transfers in a private AC car",
      "Guided local morning market exploration",
      "All cooking ingredients, chef aprons, and utensils",
      "Multi-course lunch prepared during the class",
      "Printed recipe booklet to take home",
      "Bottled mineral water, tea, and coffee"
    ],
    "excluded": [
      "Alcoholic beverages",
      "Personal souvenirs",
      "Driver and chef gratuity"
    ]
  },
  {
    "id": "sunrise-jeep-hot-spring",
    "slug": "sunrise-jeep-tour-and-hot-spring-tour-plus-hotel-pick-up",
    "title": "Sunrise Jeep Tour and Hot Spring Tour + Hotel Pick-up",
    "duration": "Full Day (10 Hours)",
    "durationDays": 1,
    "category": "day-tour",
    "priceUSD": 54,
    "priceNote": "USD 54 / Pax (2-3 Traveler)",
    "priceTiers": [
      {
        "label": "Solo Traveler",
        "priceUSD": 116
      },
      {
        "label": "2-3 Traveler",
        "priceUSD": 54
      },
      {
        "label": "4-6 Traveler",
        "priceUSD": 36
      },
      {
        "label": "7-10 Traveler",
        "priceUSD": 27
      },
      {
        "label": "11-14 Traveler",
        "priceUSD": 22
      }
    ],
    "rating": 5.0,
    "reviewCount": 420,
    "image": "/images/tours/sunrise-jeep-tour.webp",
    "highlights": [
      "Stunning Sunrise: Witness the awe-inspiring sunrise over Mount Batur from a prime viewpoint.",
      "Jeep Adventure: Traverse the rugged landscapes of Kintamani, exploring the fascinating black lava fields.",
      "Hot Spring Relaxation: Rejuvenate your body in the soothing waters of a natural hot spring.",
      "Local Breakfast: Savor a light breakfast with traditional Balinese flavors amidst serene natural surroundings.",
      "Coffee Plantation Visit: Discover the traditional process of coffee-making and enjoy tasting the renowned Luwak coffee."
    ],
    "description": "Embark on a thrilling journey with our Sunrise Jeep Tour and Hot Spring Tour Plus Hotel Pick Up. This full-day adventure takes you to the majestic Mount Batur for an unforgettable sunrise experience, followed by a relaxing dip in natural hot springs and a cultural visit to a local coffee plantation.",
    "isPopular": true,
    "isFeatured": true,
    "itinerarySummary": [
      "02:30 AM \u2013 Hotel Pickup: Begin your adventure with an early morning pickup from your hotel in an air-conditioned vehicle.",
      "04:00 AM \u2013 Arrival in Kintamani: Meet your experienced jeep tour guide and board the 4WD classic vehicle.",
      "04:30 AM \u2013 Sunrise Jeep Adventure: Drive through rugged volcanic terrain to the sunrise viewpoint above the clouds.",
      "05:30 AM \u2013 Explore Black Lava Fields: Traverse the dramatic black volcanic basalt remnants of Mount Batur.",
      "07:00 AM \u2013 Light Breakfast: Enjoy breakfast with hot coffee or tea amidst the volcanic caldera panorama.",
      "08:00 AM \u2013 Hot Spring Experience: Soak in the warm mineral waters of Batur natural hot springs right beside Lake Batur.",
      "10:30 AM \u2013 Coffee Plantation Visit: Learn how Balinese coffee and Luwak coffee are cultivated and roasted.",
      "12:30 PM \u2013 Smooth return drive back to your hotel."
    ],
    "included": [
      "Hotel pickup and drop-off in an air-conditioned vehicle",
      "4WD Classic Jeep tour with professional driver/guide",
      "Light breakfast with coffee or tea on the caldera",
      "Entry to the natural lakeside hot spring with towel and locker",
      "Visit to a local coffee plantation",
      "Mineral water during the tour",
      "All entrance fees, parking tickets, and local insurance"
    ],
    "excluded": [
      "Personal expenses",
      "Tips and gratuities",
      "Optional photo documentation services"
    ]
  },
  {
    "id": "nusa-lembongan-tour-and-manta-bay-snorkeling-all-inclusive",
    "slug": "nusa-lembongan-tour-and-manta-bay-snorkeling-all-inclusive",
    "title": "Nusa Lembongan Tour and Manta Bay Snorkeling All Inclusive",
    "duration": "Full Day (10 Hours)",
    "durationDays": 1,
    "category": "day-tour",
    "priceUSD": 68,
    "priceNote": "USD 68 / Pax (2-3 Traveler)",
    "priceTiers": [
      {
        "label": "Solo Traveler",
        "priceUSD": 130
      },
      {
        "label": "2-3 Traveler",
        "priceUSD": 68
      },
      {
        "label": "4-6 Traveler",
        "priceUSD": 54
      },
      {
        "label": "7-10 Traveler",
        "priceUSD": 46
      },
      {
        "label": "11-14 Traveler",
        "priceUSD": 40
      }
    ],
    "rating": 5.0,
    "reviewCount": 380,
    "image": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    "highlights": [
      "3-Spot Snorkeling: Swim alongside majestic Manta Rays at Manta Bay, plus Crystal Bay and Mangrove Point.",
      "Fast Boat Roundtrip: High-speed passenger boat transfer from Sanur harbor to Nusa Lembongan.",
      "Mangrove Forest Gondola Tour: Silent traditional wooden boat tour deep through pristine mangrove canals.",
      "Island Sightseeing: Visit Devil\u2019s Tear ocean blowhole, Dream Beach, and Yellow Bridge.",
      "Indonesian Buffet Lunch: Beachside buffet with fresh tropical juices and coconut."
    ],
    "description": "Spend an unforgettable day exploring Nusa Lembongan and neighboring Nusa Ceningan with our all-inclusive private day package. Snorkel with oceanic manta rays at Manta Bay, glide silently through lush mangrove forests, and witness crashing waves at Devil\u2019s Tears blowhole.",
    "isPopular": true,
    "isFeatured": true,
    "itinerarySummary": [
      "07:00 AM \u2013 Hotel pickup from South Bali / Ubud to Sanur Harbor.",
      "08:15 AM \u2013 Fast boat crossing across the Badung Strait to Nusa Lembongan.",
      "09:15 AM \u2013 Board snorkeling boat for 3 premier spots: Manta Bay, Crystal Bay, and Mangrove Point.",
      "11:45 AM \u2013 Authentic Indonesian lunch overlooking the tranquil turquoise bay.",
      "01:00 PM \u2013 Peaceful wooden gondola tour exploring the conserved mangrove river ecosystem.",
      "02:00 PM \u2013 Island truck tour to Devil\u2019s Tears blowhole, Dream Beach, and the Yellow Bridge to Nusa Ceningan.",
      "04:00 PM \u2013 Fast boat return to Sanur and private transfer back to your hotel."
    ],
    "included": [
      "Private hotel pickup and return in Bali",
      "Roundtrip fast boat tickets (Sanur \u2013 Nusa Lembongan \u2013 Sanur)",
      "Snorkeling boat, certified instructor, and complete gear (mask, snorkel, fins, life vest)",
      "Mangrove forest tour with boatman",
      "Island land transport to Devil\u2019s Tears and Dream Beach",
      "Indonesian buffet lunch and mineral water",
      "Full marine passenger insurance"
    ],
    "excluded": [
      "Underwater camera rental (available on-site)",
      "Personal snacks and souvenirs",
      "Driver and boat captain tips"
    ]
  },
  {
    "id": "waterfall-lovers-package",
    "slug": "waterfall-lovers-package",
    "title": "Waterfall Lover's Package",
    "duration": "Full Day (9 - 10 Hours)",
    "durationDays": 1,
    "category": "day-tour",
    "priceUSD": 48,
    "priceNote": "USD 48 / Pax (2-3 Traveler)",
    "priceTiers": [
      {
        "label": "Solo Traveler",
        "priceUSD": 92
      },
      {
        "label": "2-3 Traveler",
        "priceUSD": 48
      },
      {
        "label": "4-6 Traveler",
        "priceUSD": 38
      },
      {
        "label": "7-10 Traveler",
        "priceUSD": 30
      },
      {
        "label": "11-14 Traveler",
        "priceUSD": 25
      }
    ],
    "rating": 4.9,
    "reviewCount": 310,
    "image": "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=800&q=80",
    "highlights": [
      "Bali\u2019s Top 3 Waterfalls: Tukad Cepung hidden cave, Tibumana curtain cascade, and Kanto Lampo stepped rocks.",
      "Magical Cave Sunbeams: Marvel at morning sunlight pouring through the open ceiling of Tukad Cepung canyon.",
      "Refreshing Natural Swims: Swim in clear freshwater pools nestled deep within lush tropical rainforest.",
      "Scenic Coffee Plantation: Taste authentic Balinese spice teas, hot chocolate, and Luwak coffee."
    ],
    "description": "Tailor-made for photographers, nature lovers, and wild swimmers! The Waterfall Lover\u2019s Package takes you to Bali\u2019s most photogenic cascades. Stand in a sunlit rock cavern at Tukad Cepung, swim under the silky veil of Tibumana, and climb the natural stepped stones of Kanto Lampo.",
    "isPopular": true,
    "isFeatured": true,
    "itinerarySummary": [
      "08:00 AM \u2013 Hotel pickup in a private air-conditioned car.",
      "09:30 AM \u2013 Explore Tukad Cepung Waterfall inside a dramatic cliff cavern illuminated by morning light beams.",
      "11:30 AM \u2013 Visit Tibumana Waterfall for a refreshing swim in its tranquil jungle basin.",
      "01:00 PM \u2013 Lunch break at a scenic restaurant overlooking rice paddies.",
      "02:30 PM \u2013 Experience Kanto Lampo Waterfall; climb the natural black rocks as water cascades over you.",
      "04:00 PM \u2013 Stop at an organic coffee plantation for spice garden tour and tastings.",
      "05:30 PM \u2013 Return drive back to your hotel."
    ],
    "included": [
      "Private air-conditioned vehicle with English-speaking chauffeur",
      "All waterfall entrance tickets and local guide fees",
      "Coffee and herbal tea tasting experience",
      "Cold bottled mineral water",
      "All parking and fuel costs"
    ],
    "excluded": [
      "Lunch meal",
      "Locker rentals at waterfalls",
      "Driver gratuity"
    ]
  },
  {
    "id": "north-bali-adventure-dolphin-snorkeling-and-breakfast",
    "slug": "north-bali-adventure-dolphin-snorkeling-and-breakfast",
    "title": "North Bali Adventure (Dolphin Snorkeling and Breakfast)",
    "duration": "Full Day (11 - 12 Hours)",
    "durationDays": 1,
    "category": "day-tour",
    "priceUSD": 58,
    "priceNote": "USD 58 / Pax (2-3 Traveler)",
    "priceTiers": [
      {
        "label": "Solo Traveler",
        "priceUSD": 115
      },
      {
        "label": "2-3 Traveler",
        "priceUSD": 58
      },
      {
        "label": "4-6 Traveler",
        "priceUSD": 44
      },
      {
        "label": "7-10 Traveler",
        "priceUSD": 36
      },
      {
        "label": "11-14 Traveler",
        "priceUSD": 30
      }
    ],
    "rating": 5.0,
    "reviewCount": 350,
    "image": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    "highlights": [
      "Lovina Wild Dolphin Encounter: Sunrise cruise on a traditional outrigger boat to observe spinner dolphins in the wild.",
      "Swim with Dolphins: Put on a snorkel and hold onto the boat's side pontoon to glide alongside dolphins underwater.",
      "Breakfast on the Beach: Enjoy fresh breakfast with tropical fruit and hot coffee by the calm Bali Sea.",
      "Banyumala Twin Waterfalls: Hike down to Bali\u2019s most enchanting double jungle waterfall.",
      "Ulun Danu Beratan Temple: The famous floating pagoda on Lake Beratan in Bedugul."
    ],
    "description": "Embark on an epic adventure to the pristine north coast of Bali. Depart early to catch a breathtaking sunrise over Lovina Beach while pods of wild dolphins leap in the morning surf. Then journey through the highlands to swim in the cool waters of Banyumala Twin Waterfalls and admire the floating lake temple of Ulun Danu Beratan.",
    "isPopular": true,
    "isFeatured": true,
    "itinerarySummary": [
      "03:00 AM \u2013 Early morning hotel pickup in a comfortable private AC vehicle.",
      "05:30 AM \u2013 Arrive at Lovina Beach; board a traditional Balinese outrigger boat with an expert local skipper.",
      "06:00 AM \u2013 Sunrise dolphin watching and underwater snorkeling alongside dolphin pods.",
      "08:00 AM \u2013 Return to shore for breakfast and hot drinks overlooking the calm sea.",
      "09:30 AM \u2013 Scenic mountain drive to Banyumala Twin Waterfall for a swim in crystal-clear waters.",
      "12:00 PM \u2013 Visit Wanagiri Hidden Hills overlooking Twin Lakes Buyan and Tamblingan.",
      "01:30 PM \u2013 Explore Ulun Danu Beratan Temple on the lake in Bedugul highlands.",
      "04:00 PM \u2013 Relaxing return transfer to your hotel."
    ],
    "included": [
      "Private AC transport and dedicated driver",
      "Traditional outrigger boat charter in Lovina Beach",
      "Snorkeling equipment and life jackets",
      "Breakfast with coffee or tea at Lovina Beach",
      "Entrance fees to Banyumala Waterfall, Wanagiri Hills, and Ulun Danu Temple",
      "Mineral water and parking fees"
    ],
    "excluded": [
      "Lunch meal",
      "Photo props fees at Wanagiri Hills (optional)",
      "Driver tip"
    ]
  },
  {
    "id": "best-south-of-bali-watersports-uluwatu-temple-and-seafood-dinner",
    "slug": "best-south-of-bali-watersports-uluwatu-temple-and-seafood-dinner",
    "title": "Best South of Bali (Watersports, Uluwatu Temple & Seafood Dinner)",
    "duration": "Full Day (10 Hours)",
    "durationDays": 1,
    "category": "day-tour",
    "priceUSD": 55,
    "priceNote": "USD 55 / Pax (2-3 Traveler)",
    "priceTiers": [
      {
        "label": "Solo Traveler",
        "priceUSD": 105
      },
      {
        "label": "2-3 Traveler",
        "priceUSD": 55
      },
      {
        "label": "4-6 Traveler",
        "priceUSD": 42
      },
      {
        "label": "7-10 Traveler",
        "priceUSD": 34
      },
      {
        "label": "11-14 Traveler",
        "priceUSD": 28
      }
    ],
    "rating": 4.9,
    "reviewCount": 395,
    "image": "https://images.unsplash.com/photo-1555400038-63f5ba517a47?auto=format&fit=crop&w=800&q=80",
    "highlights": [
      "Tanjung Benoa Watersports: Banana boat ride included, with options for parasailing, jet skiing, and sea walking.",
      "Padang Padang or Melasti Beach: Relax on golden sands surrounded by dramatic limestone cliffs.",
      "Uluwatu Cliff Temple: Magnificent 11th-century temple perched 70 meters above crashing Indian Ocean swells.",
      "Sunset Kecak & Fire Dance: Front-row seats to the world-renowned choral dance drama against the sunset.",
      "Jimbaran Seafood Feast: Candlelit dinner on the beach with freshly caught snapper, prawns, calamari, and clams."
    ],
    "description": "The Best South of Bali tour combines daytime thrills with romantic coastal beauty. Start with fun water sports in Tanjung Benoa, swim at a picturesque southern beach, explore the dramatic cliffs of Uluwatu Temple, watch the sunset Kecak Dance, and finish with a candlelit fresh seafood dinner on Jimbaran Beach.",
    "isPopular": true,
    "isFeatured": true,
    "itinerarySummary": [
      "09:00 AM \u2013 Hotel pickup in a private air-conditioned car.",
      "10:00 AM \u2013 Tanjung Benoa Water Sports (banana boat ride included; optional parasailing & jet ski).",
      "01:00 PM \u2013 Padang Padang Beach or Melasti Beach for sunbathing and swimming.",
      "03:30 PM \u2013 Travel to Uluwatu Temple; walk along the cliffside ramparts with panoramic ocean views.",
      "06:00 PM \u2013 Watch the hypnotic sunset Kecak & Fire Dance in the open-air cliffside amphitheater.",
      "07:30 PM \u2013 Jimbaran Bay candlelit seafood dinner on the beach.",
      "09:30 PM \u2013 Return transfer back to your hotel."
    ],
    "included": [
      "Private AC vehicle, petrol, and licensed driver",
      "Tanjung Benoa banana boat ride ticket",
      "All beach and temple entrance tickets",
      "Sunset Kecak & Fire Dance show ticket",
      "Jimbaran Bay grilled seafood dinner set",
      "Bottled mineral water"
    ],
    "excluded": [
      "Optional additional water sports (jet ski, parasailing, diving)",
      "Alcoholic beverages at dinner",
      "Driver gratuity"
    ]
  },
  {
    "id": "best-of-ubud-tour",
    "slug": "best-of-ubud-tour",
    "title": "Best of Ubud Tour",
    "duration": "Full Day (9 - 10 Hours)",
    "durationDays": 1,
    "category": "day-tour",
    "priceUSD": 45,
    "priceNote": "USD 45 / Pax (2-3 Traveler)",
    "priceTiers": [
      {
        "label": "Solo Traveler",
        "priceUSD": 85
      },
      {
        "label": "2-3 Traveler",
        "priceUSD": 45
      },
      {
        "label": "4-6 Traveler",
        "priceUSD": 35
      },
      {
        "label": "7-10 Traveler",
        "priceUSD": 28
      },
      {
        "label": "11-14 Traveler",
        "priceUSD": 23
      }
    ],
    "rating": 5.0,
    "reviewCount": 460,
    "image": "https://images.unsplash.com/photo-1577717903315-1691ae25ab3f?auto=format&fit=crop&w=800&q=80",
    "highlights": [
      "Sacred Monkey Forest Sanctuary: Stroll through ancient mossy banyan forests home to over 700 friendly monkeys.",
      "Tegalalang Rice Terraces: Marvel at emerald green terraced hills and soaring jungle swings.",
      "Tegenungan Waterfall: Stand near the roaring cascade surrounded by lush tropical vegetation.",
      "Ubud Palace & Art Market: Discover royal Balinese architecture and shop for handmade rattan bags and textiles."
    ],
    "description": "The Best of Ubud Tour is the definitive day trip into Bali\u2019s cultural and spiritual heart. Experience the mischievous monkeys of the Sacred Monkey Forest, panoramic tiered rice paddies of Tegalalang, cascading waterfalls, and the vibrant handicraft markets of Ubud town.",
    "isPopular": true,
    "isFeatured": true,
    "itinerarySummary": [
      "08:30 AM \u2013 Hotel pickup in a private air-conditioned car.",
      "09:30 AM \u2013 Explore the Sacred Monkey Forest Sanctuary in Ubud.",
      "11:00 AM \u2013 Visit Tegalalang Rice Terraces and optional thrilling jungle swing.",
      "01:00 PM \u2013 Lunch break at a restaurant overlooking the verdant river canyon.",
      "02:30 PM \u2013 Visit Ubud Royal Palace (Puri Saren Agung) and browse Ubud Traditional Art Market.",
      "04:00 PM \u2013 Refresh yourself at Tegenungan Waterfall.",
      "05:30 PM \u2013 Smooth drive back to your accommodation."
    ],
    "included": [
      "Private AC car and English-speaking chauffeur",
      "Monkey Forest and Tegalalang entry tickets",
      "Tegenungan Waterfall entrance fee",
      "Mineral water, fuel, and parking fees"
    ],
    "excluded": [
      "Jungle swing ticket (optional on-site)",
      "Lunch meal",
      "Driver tipping"
    ]
  },
  {
    "id": "explore-the-spiritual-and-natural-wonders-of-west-bali",
    "slug": "explore-the-spiritual-and-natural-wonders-of-west-bali",
    "title": "Explore the Spiritual and Natural Wonders of West Bali (Jatiluwih, Tanah Lot, Bedugul)",
    "duration": "Full Day (10 - 11 Hours)",
    "durationDays": 1,
    "category": "day-tour",
    "priceUSD": 50,
    "priceNote": "USD 50 / Pax (2-3 Traveler)",
    "priceTiers": [
      {
        "label": "Solo Traveler",
        "priceUSD": 95
      },
      {
        "label": "2-3 Traveler",
        "priceUSD": 50
      },
      {
        "label": "4-6 Traveler",
        "priceUSD": 38
      },
      {
        "label": "7-10 Traveler",
        "priceUSD": 31
      },
      {
        "label": "11-14 Traveler",
        "priceUSD": 26
      }
    ],
    "rating": 4.9,
    "reviewCount": 310,
    "image": "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80",
    "highlights": [
      "Taman Ayun Royal Water Temple: UNESCO-recognized 17th-century moated royal garden temple of Mengwi Kingdom.",
      "Ulun Danu Beratan Temple: Iconic 11-tier pagoda floating gracefully on the mountain lake in Bedugul.",
      "Jatiluwih UNESCO Rice Terraces: 600 hectares of endless terraced landscapes preserved by traditional Subak irrigation.",
      "Tanah Lot Sunset: Dramatic ocean temple perched atop an offshore rock formation as waves break at dusk."
    ],
    "description": "Discover the majestic nature and sacred heritage of West Bali. This journey takes you through royal garden temples, cool mountain lakes, the UNESCO World Heritage Jatiluwih rice amphitheater, and concludes with the famous sunset at Tanah Lot Sea Temple.",
    "isPopular": true,
    "isFeatured": true,
    "itinerarySummary": [
      "08:30 AM \u2013 Hotel pickup in a private air-conditioned vehicle.",
      "09:45 AM \u2013 Visit Taman Ayun Royal Family Temple surrounded by wide lotus moats.",
      "11:30 AM \u2013 Ulun Danu Beratan Lake Temple in the cool highlands of Bedugul.",
      "01:00 PM \u2013 Scenic buffet lunch overlooking the UNESCO Jatiluwih rice terraces.",
      "02:30 PM \u2013 Walk along the nature trails of Jatiluwih rice paddies.",
      "05:00 PM \u2013 Arrive at Tanah Lot Temple to watch the sun sink into the Indian Ocean.",
      "07:00 PM \u2013 Return transfer back to your hotel."
    ],
    "included": [
      "Private AC transport with professional driver",
      "All temple entrance tickets (Taman Ayun, Ulun Danu, Jatiluwih, Tanah Lot)",
      "Chilled mineral water",
      "All parking and government taxes"
    ],
    "excluded": [
      "Lunch meal",
      "Personal shopping",
      "Driver gratuity"
    ]
  },
  {
    "id": "uluwatu-temple-sunset-kecak-dance-and-seafood-dinner",
    "slug": "uluwatu-temple-sunset-kecak-dance-and-seafood-dinner",
    "title": "Uluwatu Temple Sunset, Kecak Dance & Seafood Dinner",
    "duration": "Afternoon / Evening (6 - 7 Hours)",
    "durationDays": 1,
    "category": "day-tour",
    "priceUSD": 45,
    "priceNote": "USD 45 / Pax (2-3 Traveler)",
    "priceTiers": [
      {
        "label": "Solo Traveler",
        "priceUSD": 85
      },
      {
        "label": "2-3 Traveler",
        "priceUSD": 45
      },
      {
        "label": "4-6 Traveler",
        "priceUSD": 35
      },
      {
        "label": "7-10 Traveler",
        "priceUSD": 28
      },
      {
        "label": "11-14 Traveler",
        "priceUSD": 23
      }
    ],
    "rating": 5.0,
    "reviewCount": 410,
    "image": "https://images.unsplash.com/photo-1555400038-63f5ba517a47?auto=format&fit=crop&w=800&q=80",
    "highlights": [
      "Uluwatu Cliff Temple: Walk the scenic cliff-edge trail overlooking surf breaks and Indian Ocean horizons.",
      "Sunset Kecak & Fire Dance: Experience Bali\u2019s most dramatic traditional dance performance during golden hour.",
      "Jimbaran Seafood BBQ: Enjoy a romantic dinner on the sand with grilled fish, king prawns, squid, and local sambal."
    ],
    "description": "The quintessential Bali evening! Journey to the southernmost tip of the Bukit Peninsula to witness the sun set behind the cliffside shrine of Uluwatu. Watch the mesmerizing choral rhythm of the Kecak & Fire Dance, followed by a delicious seafood barbecue dinner directly on the sands of Jimbaran Bay.",
    "isPopular": true,
    "isFeatured": true,
    "itinerarySummary": [
      "03:00 PM \u2013 Hotel pickup in a private air-conditioned car.",
      "04:30 PM \u2013 Explore Uluwatu Temple, walk the ocean promenade, and take photos.",
      "06:00 PM \u2013 Sunset Kecak & Fire Dance show in the open-air cliffside amphitheater.",
      "07:30 PM \u2013 Candlelit fresh seafood dinner on the beach at Jimbaran Bay.",
      "09:30 PM \u2013 Smooth return drive to your hotel."
    ],
    "included": [
      "Private AC transport with English-speaking chauffeur",
      "Uluwatu Temple entrance fee",
      "Sunset Kecak Dance show admission ticket",
      "Fresh grilled seafood dinner set at Jimbaran Beach",
      "Bottled mineral water"
    ],
    "excluded": [
      "Personal drinks and alcohol at dinner",
      "Tips for driver"
    ]
  },
  {
    "id": "breakfast-with-orang-utan-white-water-rafting-spa",
    "slug": "breakfast-with-orang-utan-white-water-rafting-spa",
    "title": "Breakfast with Orangutan, White Water Rafting & Spa",
    "duration": "Full Day (10 Hours)",
    "durationDays": 1,
    "category": "day-tour",
    "priceUSD": 85,
    "priceNote": "USD 85 / Pax (2-3 Traveler)",
    "priceTiers": [
      {
        "label": "Solo Traveler",
        "priceUSD": 160
      },
      {
        "label": "2-3 Traveler",
        "priceUSD": 85
      },
      {
        "label": "4-6 Traveler",
        "priceUSD": 68
      },
      {
        "label": "7-10 Traveler",
        "priceUSD": 58
      },
      {
        "label": "11-14 Traveler",
        "priceUSD": 50
      }
    ],
    "rating": 5.0,
    "reviewCount": 290,
    "image": "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80",
    "highlights": [
      "Breakfast with Orangutans: Savor a gourmet breakfast buffet in close proximity to gentle, playful orangutans.",
      "Ayung River Rafting: 2 hours of exhilarating white water rafting through rainforest ravines and hidden waterfalls.",
      "1-Hour Traditional Balinese Spa: Melt away fatigue with a full-body aromatherapy massage and herbal flower bath.",
      "Buffet Lunch Included: Hearty Indonesian buffet lunch served at the rafting finish pavilion."
    ],
    "description": "An extraordinary trifecta of wildlife intimacy, river adventure, and total spa relaxation! Start your morning with breakfast alongside playful orangutans at the zoo, paddle down the scenic Ayung River rapids, and cap off the day with a luxurious 1-hour Balinese body massage.",
    "isPopular": true,
    "isFeatured": true,
    "itinerarySummary": [
      "07:30 AM \u2013 Hotel pickup in a private air-conditioned vehicle.",
      "08:30 AM \u2013 Arrive for Breakfast with Orangutans; enjoy a lavish breakfast buffet and wildlife photography.",
      "10:30 AM \u2013 Transfer to Ayung River rafting point; safety briefing, helmets, and life jackets.",
      "11:00 AM \u2013 2 hours of white water rafting across class II & III rapids passing jungle waterfalls.",
      "01:00 PM \u2013 Hot shower and delicious buffet lunch overlooking the valley.",
      "02:30 PM \u2013 Rejuvenating 1-hour traditional Balinese body massage and spa therapy.",
      "04:30 PM \u2013 Relaxed return transfer back to your hotel."
    ],
    "included": [
      "Private AC transport and driver throughout the day",
      "Breakfast with Orangutan admission ticket and breakfast buffet",
      "Ayung River white water rafting with licensed instructor and safety equipment",
      "Hot shower facilities, towel, and locker",
      "Indonesian buffet lunch",
      "1-hour traditional Balinese spa massage",
      "Mineral water and passenger insurance"
    ],
    "excluded": [
      "Personal photos and video documentation",
      "Gratuities for rafting guide and driver"
    ]
  },
  {
    "id": "culture-show-with-afternoon-rafting",
    "slug": "culture-show-with-afternoon-rafting",
    "title": "Culture Show with Afternoon Rafting",
    "duration": "Full Day (9 - 10 Hours)",
    "durationDays": 1,
    "category": "day-tour",
    "priceUSD": 55,
    "priceNote": "USD 55 / Pax (2-3 Traveler)",
    "priceTiers": [
      {
        "label": "Solo Traveler",
        "priceUSD": 105
      },
      {
        "label": "2-3 Traveler",
        "priceUSD": 55
      },
      {
        "label": "4-6 Traveler",
        "priceUSD": 42
      },
      {
        "label": "7-10 Traveler",
        "priceUSD": 35
      },
      {
        "label": "11-14 Traveler",
        "priceUSD": 29
      }
    ],
    "rating": 4.9,
    "reviewCount": 230,
    "image": "/images/tour-ubud-swing.jpg",
    "highlights": [
      "Traditional Barong & Keris Dance: Watch the epic mythological battle between Good (Barong) and Evil (Rangda).",
      "Artisan Villages: Visit Celuk (silver) and Mas (master woodcarvers).",
      "Afternoon Ayung River Rafting: Navigate 12 km of exhilarating rapids through pristine tropical jungle.",
      "Hot Buffet Lunch: Feast on traditional Indonesian dishes after rafting."
    ],
    "description": "Immerse yourself in authentic Balinese mythological arts before cooling off on the rapids! Watch the morning Barong and Keris dance drama, tour traditional artisan workshops, and spend your afternoon white water rafting down the scenic Ayung River.",
    "isPopular": false,
    "isFeatured": true,
    "itinerarySummary": [
      "08:30 AM \u2013 Hotel pickup in a private air-conditioned vehicle.",
      "09:30 AM \u2013 Watch the traditional Barong and Keris dance show in Batubulan.",
      "11:00 AM \u2013 Visit Celuk silver and gold jewelry village and Mas woodcarving village.",
      "12:30 PM \u2013 Transfer to Ayung River; gear up and embark on 2 hours of white water rafting.",
      "03:00 PM \u2013 Hot shower, change of clothes, and post-rafting buffet lunch.",
      "04:30 PM \u2013 Smooth return drive to your hotel."
    ],
    "included": [
      "Private AC transport and dedicated driver",
      "Barong dance performance admission ticket",
      "Ayung River rafting with certified instructor and full safety gear",
      "Indonesian buffet lunch",
      "Mineral water and emergency insurance"
    ],
    "excluded": [
      "Personal expenses",
      "Driver and rafting guide tip"
    ]
  },
  {
    "id": "rice-terrace-and-atv-adventures-tours",
    "slug": "rice-terrace-and-atv-adventures-tours",
    "title": "Rice Terrace and ATV Adventures Tours",
    "duration": "Full Day (9 Hours)",
    "durationDays": 1,
    "category": "day-tour",
    "priceUSD": 58,
    "priceNote": "USD 58 / Pax (2-3 Traveler)",
    "priceTiers": [
      {
        "label": "Solo Traveler",
        "priceUSD": 110
      },
      {
        "label": "2-3 Traveler",
        "priceUSD": 58
      },
      {
        "label": "4-6 Traveler",
        "priceUSD": 45
      },
      {
        "label": "7-10 Traveler",
        "priceUSD": 38
      },
      {
        "label": "11-14 Traveler",
        "priceUSD": 32
      }
    ],
    "rating": 5.0,
    "reviewCount": 380,
    "image": "/images/tour-ubud-swing.jpg",
    "highlights": [
      "2-Hour Jungle ATV Quad Ride: Conquer bamboo forests, riverbeds, muddy puddles, and cave tunnels.",
      "Tegalalang Rice Terraces: Explore Bali\u2019s most famous terraced valley with panoramic viewpoints.",
      "Bali Jungle Swing: Swing hundreds of feet above lush valleys for iconic holiday photos.",
      "Coffee Tasting: Free tasting of 14 varieties of Balinese herbal teas and coffees."
    ],
    "description": "An adrenaline-fueled, photogenic day out in the Ubud highlands! Ride high-powered 250cc all-terrain quad bikes across rugged village trails and mud puddles, followed by a visit to the postcard-perfect Tegalalang rice terraces and a giant jungle swing.",
    "isPopular": true,
    "isFeatured": true,
    "itinerarySummary": [
      "08:00 AM \u2013 Hotel pickup in a private air-conditioned car.",
      "09:30 AM \u2013 Arrive at ATV basecamp; safety briefing, equipment fit (helmet, boots), and practice laps.",
      "10:00 AM \u2013 2 hours of thrilling off-road ATV quad biking through jungle trails and tunnels.",
      "12:15 PM \u2013 Hot shower and delicious buffet lunch overlooking the valley.",
      "01:45 PM \u2013 Visit Tegalalang Rice Terraces and take photos on the giant jungle swing.",
      "03:30 PM \u2013 Explore a local coffee plantation with Luwak coffee tasting.",
      "05:00 PM \u2013 Return transfer back to your hotel."
    ],
    "included": [
      "Private AC vehicle with driver",
      "2-hour ATV quad biking (single or tandem)",
      "All ATV safety gear, boots, and lockers",
      "Indonesian lunch",
      "Tegalalang rice terrace entry ticket",
      "Tea and coffee tasting",
      "Mineral water"
    ],
    "excluded": [
      "Jungle swing ticket (optional add-on)",
      "Photo / video packages",
      "Driver tip"
    ]
  },
  {
    "id": "white-water-rafting-and-ubud-tour",
    "slug": "white-water-rafting-and-ubud-tour",
    "title": "White Water Rafting and Ubud Tour",
    "duration": "Full Day (9 - 10 Hours)",
    "durationDays": 1,
    "category": "day-tour",
    "priceUSD": 52,
    "priceNote": "USD 52 / Pax (2-3 Traveler)",
    "priceTiers": [
      {
        "label": "Solo Traveler",
        "priceUSD": 98
      },
      {
        "label": "2-3 Traveler",
        "priceUSD": 52
      },
      {
        "label": "4-6 Traveler",
        "priceUSD": 40
      },
      {
        "label": "7-10 Traveler",
        "priceUSD": 33
      },
      {
        "label": "11-14 Traveler",
        "priceUSD": 28
      }
    ],
    "rating": 4.9,
    "reviewCount": 340,
    "image": "https://images.unsplash.com/photo-1577717903315-1691ae25ab3f?auto=format&fit=crop&w=800&q=80",
    "highlights": [
      "Ayung River Rafting: 12 km journey across class II & III rapids with river gorge stone carvings.",
      "Sacred Monkey Forest: Wander through ancient temple grounds populated by friendly macaques.",
      "Ubud Royal Palace & Market: Explore classical Balinese royal architecture and shop for handicrafts.",
      "Buffet Lunch: Enjoy a hot Indonesian buffet meal overlooking the river valley."
    ],
    "description": "Combine outdoor adventure with Ubud\u2019s cultural treasures! Start with an invigorating 2-hour white water rafting trip down the Ayung River, followed by a buffet lunch and an afternoon exploring the Sacred Monkey Forest and Ubud Royal Palace.",
    "isPopular": true,
    "isFeatured": true,
    "itinerarySummary": [
      "08:00 AM \u2013 Hotel pickup in a private air-conditioned vehicle.",
      "09:30 AM \u2013 Arrive at Ayung River; gear up with helmets, life jackets, and paddles.",
      "10:00 AM \u2013 2-hour white water rafting through jungle gorges, stone relief carvings, and waterfalls.",
      "12:15 PM \u2013 Hot shower, change of clothes, and Indonesian buffet lunch.",
      "01:45 PM \u2013 Explore the Ubud Sacred Monkey Forest Sanctuary.",
      "03:30 PM \u2013 Visit Ubud Royal Palace (Puri Saren) and Ubud Art Market.",
      "05:00 PM \u2013 Return drive back to your hotel."
    ],
    "included": [
      "Private AC transport and English-speaking chauffeur",
      "Ayung River rafting with certified instructor and equipment",
      "Hot shower facilities, soap, and towels",
      "Buffet lunch",
      "Monkey Forest entrance ticket",
      "Bottled mineral water"
    ],
    "excluded": [
      "Personal souvenirs and drinks",
      "Gratuities for guide and driver"
    ]
  },
  {
    "id": "mount-batur-trekking-and-natural-hot-spring-tour",
    "slug": "mount-batur-trekking-and-natural-hot-spring-tour",
    "title": "Mount Batur Trekking and Natural Hot Spring Tour",
    "duration": "Early Morning (9 Hours)",
    "durationDays": 1,
    "category": "day-tour",
    "priceUSD": 52,
    "priceNote": "USD 52 / Pax (2-3 Traveler)",
    "priceTiers": [
      {
        "label": "Solo Traveler",
        "priceUSD": 100
      },
      {
        "label": "2-3 Traveler",
        "priceUSD": 52
      },
      {
        "label": "4-6 Traveler",
        "priceUSD": 38
      },
      {
        "label": "7-10 Traveler",
        "priceUSD": 30
      },
      {
        "label": "11-14 Traveler",
        "priceUSD": 25
      }
    ],
    "rating": 5.0,
    "reviewCount": 470,
    "image": "/images/tour-kintamani.jpg",
    "highlights": [
      "Mount Batur Summit Sunrise: Hike to the 1,717m peak and watch the sunrise above a sea of clouds.",
      "Volcano-Cooked Breakfast: Eat eggs and bananas freshly cooked by subterranean volcanic steam vents.",
      "Toya Devasya Lakeside Hot Springs: Soothe your legs in mineral-rich thermal pools beside Lake Batur.",
      "Coffee Plantation Visit: Taste aromatic Balinese spices and Luwak coffee."
    ],
    "description": "The classic sunrise hike of Mount Batur (1,717 meters) is one of Bali\u2019s most iconic bucket-list adventures. Hike under starry skies with an experienced local guide, witness the sun emerge over Mount Rinjani in Lombok, and reward your body with a thermal soak in natural lakeside hot springs.",
    "isPopular": true,
    "isFeatured": true,
    "itinerarySummary": [
      "01:45 AM \u2013 Hotel pickup in an air-conditioned private vehicle.",
      "03:15 AM \u2013 Arrive at basecamp; meet your certified trekking guide and receive headlamps and walking sticks.",
      "03:45 AM \u2013 Begin your 2-hour ascent through volcanic rock trails to the summit.",
      "06:00 AM \u2013 Reach the crater summit; watch the sunrise over the clouds and eat a hot breakfast.",
      "07:30 AM \u2013 Descend the volcano passing black lava fields and steam fissures.",
      "09:00 AM \u2013 Soak in the thermal natural hot springs right beside Lake Batur.",
      "10:45 AM \u2013 Visit a local coffee and spice plantation.",
      "12:30 PM \u2013 Return transfer back to your hotel."
    ],
    "included": [
      "Private AC hotel transfers",
      "Certified local Mount Batur trekking guide",
      "Flashlights / headlamps and trekking poles",
      "Summit breakfast with hot coffee or tea",
      "Entry to natural lakeside hot spring (with towel and locker)",
      "Coffee plantation tasting",
      "Mineral water"
    ],
    "excluded": [
      "Personal warm jacket rental (optional)",
      "Tips for mountain guide and driver"
    ]
  },
  {
    "id": "evening-ubud-culture-show",
    "slug": "evening-ubud-culture-show",
    "title": "Evening Ubud Culture Show",
    "duration": "Evening (5 - 6 Hours)",
    "durationDays": 1,
    "category": "day-tour",
    "priceUSD": 40,
    "priceNote": "USD 40 / Pax (2-3 Traveler)",
    "priceTiers": [
      {
        "label": "Solo Traveler",
        "priceUSD": 75
      },
      {
        "label": "2-3 Traveler",
        "priceUSD": 40
      },
      {
        "label": "4-6 Traveler",
        "priceUSD": 30
      },
      {
        "label": "7-10 Traveler",
        "priceUSD": 24
      },
      {
        "label": "11-14 Traveler",
        "priceUSD": 20
      }
    ],
    "rating": 4.8,
    "reviewCount": 165,
    "image": "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80",
    "highlights": [
      "Campuhan Ridge Sunset Walk: Sunset stroll along Ubud\u2019s most photogenic ridge trail between tropical valleys.",
      "Ubud Palace Legong Dance: Front-row seats to an authentic classical Legong or Fire Dance performance.",
      "Authentic Balinese Dinner: Enjoy a delicious dinner at a garden restaurant in the heart of Ubud.",
      "Private Evening Chauffeur: Door-to-door transportation without worrying about evening traffic or parking."
    ],
    "description": "Experience the magic of Ubud at twilight! Walk the scenic Campuhan Ridge during sunset, enjoy a delicious traditional Balinese dinner, and watch a captivating classical Legong or Barong dance performance in the courtyard of Ubud Royal Palace.",
    "isPopular": false,
    "isFeatured": true,
    "itinerarySummary": [
      "04:00 PM \u2013 Hotel pickup in a private air-conditioned vehicle.",
      "05:00 PM \u2013 Sunset stroll along the Campuhan Ridge Walk.",
      "06:30 PM \u2013 Delicious traditional dinner at an Ubud garden restaurant.",
      "07:30 PM \u2013 Watch the classical Balinese Legong or Fire Dance performance at Ubud Royal Palace or ARMA Museum.",
      "09:30 PM \u2013 Safe and comfortable return transfer to your hotel."
    ],
    "included": [
      "Private AC transport and driver",
      "Traditional Balinese dance show ticket",
      "Traditional Balinese dinner set",
      "Mineral water and parking fees"
    ],
    "excluded": [
      "Alcoholic drinks",
      "Driver tip"
    ]
  },
  {
    "id": "bali-bird-park",
    "slug": "bali-bird-park",
    "title": "Bali Bird Park",
    "duration": "Half Day (5 - 6 Hours)",
    "durationDays": 1,
    "category": "day-tour",
    "priceUSD": 48,
    "priceNote": "USD 48 / Pax (2-3 Traveler)",
    "priceTiers": [
      {
        "label": "Solo Traveler",
        "priceUSD": 90
      },
      {
        "label": "2-3 Traveler",
        "priceUSD": 48
      },
      {
        "label": "4-6 Traveler",
        "priceUSD": 38
      },
      {
        "label": "7-10 Traveler",
        "priceUSD": 30
      },
      {
        "label": "11-14 Traveler",
        "priceUSD": 25
      }
    ],
    "rating": 4.8,
    "reviewCount": 220,
    "image": "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80",
    "highlights": [
      "Over 1,000 Exotic Birds: Discover 250 species of birds from Indonesia, Africa, South America, and Papua.",
      "Rare Bali Starling: See the endangered Bali Myna (Jalak Bali), the island\u2019s official emblem bird.",
      "Interactive Feeding & Free-Flight Shows: Watch birds of prey swoop overhead and hand-feed friendly tropical lories.",
      "4D Air-Conditioned Cinema: Watch immersive wildlife documentary shorts in the on-site theater."
    ],
    "description": "A wonderful experience for families, photographers, and wildlife enthusiasts! Walk through 2 hectares of lush botanical gardens housing over 1,000 birds from 250 species. Enjoy interactive bird feeding, live flight shows, the Reptile Park with Komodo dragons, and air-conditioned 4D theater.",
    "isPopular": false,
    "isFeatured": true,
    "itinerarySummary": [
      "09:00 AM \u2013 Hotel pickup in a private air-conditioned vehicle.",
      "10:00 AM \u2013 Arrive at Bali Bird Park in Singapadu; explore botanical walk-in aviaries representing Sumatra, Borneo, and Papua.",
      "11:00 AM \u2013 Watch the Birds of Prey Free-Flight Show and interactive pelican and lory feeding.",
      "12:30 PM \u2013 Visit the adjacent Rimba Reptile Park to see Komodo dragons and giant pythons.",
      "01:30 PM \u2013 Optional lunch at the park restaurant or return transfer back to your hotel."
    ],
    "included": [
      "Private AC vehicle with driver",
      "Bali Bird Park & Reptile Park admission tickets",
      "All live bird shows and 4D cinema access",
      "Mineral water and parking fees"
    ],
    "excluded": [
      "Lunch meal",
      "Special photo souvenir prints",
      "Driver tip"
    ]
  },
  {
    "id": "ubud-art-village-and-monkey-forest-tour",
    "slug": "ubud-art-village-and-monkey-forest-tour",
    "title": "Ubud Art Village and Monkey Forest Tour",
    "duration": "Full Day (8 - 9 Hours)",
    "durationDays": 1,
    "category": "day-tour",
    "priceUSD": 45,
    "priceNote": "USD 45 / Pax (2-3 Traveler)",
    "priceTiers": [
      {
        "label": "Solo Traveler",
        "priceUSD": 85
      },
      {
        "label": "2-3 Traveler",
        "priceUSD": 45
      },
      {
        "label": "4-6 Traveler",
        "priceUSD": 35
      },
      {
        "label": "7-10 Traveler",
        "priceUSD": 28
      },
      {
        "label": "11-14 Traveler",
        "priceUSD": 23
      }
    ],
    "rating": 4.9,
    "reviewCount": 310,
    "image": "https://images.unsplash.com/photo-1577717903315-1691ae25ab3f?auto=format&fit=crop&w=800&q=80",
    "highlights": [
      "Authentic Craft Villages: Tohpati (batik weaving), Celuk (silver/gold), Batuan (fine painting), and Mas (woodcarving).",
      "Goa Gajah Elephant Cave: Ancient 9th-century meditation sanctuary carved into a rock face.",
      "Sacred Monkey Forest: Stroll among towering banyan trees and hundreds of lively monkeys.",
      "Batuan Ancient Temple: Admire classic Balinese split gateways and intricately carved stone shrines."
    ],
    "description": "Immerse yourself in centuries of Balinese craftsmanship and heritage. This full-day cultural tour visits famous artisan settlements where families have perfected batik, silversmithing, painting, and woodcarving for generations, combined with Goa Gajah cave and the Ubud Monkey Forest.",
    "isPopular": true,
    "isFeatured": true,
    "itinerarySummary": [
      "08:30 AM \u2013 Hotel pickup in a private air-conditioned vehicle.",
      "09:15 AM \u2013 Tohpati Village to watch traditional batik hand-weaving and wax painting.",
      "10:15 AM \u2013 Celuk Village for gold and silversmithing.",
      "11:15 AM \u2013 Batuan Village for traditional fine art painting and Batuan Temple.",
      "12:30 PM \u2013 Mas Village master woodcarvers and lunch break overlooking gardens.",
      "02:00 PM \u2013 Explore Goa Gajah (Elephant Cave) sanctuary.",
      "03:30 PM \u2013 Visit the Sacred Monkey Forest Sanctuary in Ubud.",
      "05:00 PM \u2013 Return drive back to your hotel."
    ],
    "included": [
      "Private AC transport and English-speaking chauffeur",
      "Monkey Forest entrance ticket",
      "Goa Gajah and Batuan Temple entrance tickets",
      "Mineral water and parking fees"
    ],
    "excluded": [
      "Lunch meal",
      "Personal shopping and souvenirs",
      "Driver tip"
    ]
  },
  {
    "id": "the-most-bali-instagramable-private-day-trip",
    "slug": "the-most-bali-instagramable-private-day-trip",
    "title": "The Most Bali Instagrammable Private Day Trip (Tirta Gangga, Taman Ujung)",
    "duration": "Full Day (10 - 11 Hours)",
    "durationDays": 1,
    "category": "day-tour",
    "priceUSD": 55,
    "priceNote": "USD 55 / Pax (2-3 Traveler)",
    "priceTiers": [
      {
        "label": "Solo Traveler",
        "priceUSD": 105
      },
      {
        "label": "2-3 Traveler",
        "priceUSD": 55
      },
      {
        "label": "4-6 Traveler",
        "priceUSD": 42
      },
      {
        "label": "7-10 Traveler",
        "priceUSD": 34
      },
      {
        "label": "11-14 Traveler",
        "priceUSD": 28
      }
    ],
    "rating": 5.0,
    "reviewCount": 450,
    "image": "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=800&q=80",
    "highlights": [
      "Lempuyang Gate of Heaven: Take the iconic photo framed between split temple gates with Mount Agung in the backdrop.",
      "Tirta Gangga Water Palace: Step across stone pads floating atop koi ponds filled with giant golden fish.",
      "Taman Ujung Sukasada: Regal water palace featuring European-Balinese bridges, pavilions, and panoramic sea views.",
      "Dedicated Chauffeur-Photographer: Your driver knows the best angles, lighting, and camera settings for unforgettable shots."
    ],
    "description": "Capture Bali\u2019s most viral, breathtaking photo locations in a single picture-perfect day! From the iconic reflection at Lempuyang Temple\u2019s Gate of Heaven to stepping across royal lotus ponds at Tirta Gangga and the grand palace grounds of Taman Ujung, this private trip guarantees awe-inspiring memories.",
    "isPopular": true,
    "isFeatured": true,
    "itinerarySummary": [
      "06:30 AM \u2013 Early hotel pickup in an air-conditioned private vehicle.",
      "09:00 AM \u2013 Arrive at Lempuyang Temple; take your turn at the famous Gate of Heaven facing Mount Agung.",
      "11:30 AM \u2013 Visit Tirta Gangga Water Palace; feed giant koi fish while balancing on stepping stones.",
      "01:00 PM \u2013 Enjoy lunch at a local restaurant overlooking coastal rice terraces.",
      "02:30 PM \u2013 Explore Taman Ujung Water Palace with its grand arches, ponds, and ocean views.",
      "04:30 PM \u2013 Relax on the smooth return drive to your hotel."
    ],
    "included": [
      "Private AC vehicle with English-speaking driver/photographer",
      "Lempuyang Temple entrance ticket and shuttle bus",
      "Tirta Gangga Water Palace entrance ticket and fish food",
      "Taman Ujung Sukasada admission ticket",
      "Sarong rental for temple entry",
      "Chilled bottled mineral water"
    ],
    "excluded": [
      "Lunch meal",
      "Lempuyang local photographer photo fee",
      "Driver gratuity"
    ]
  },
  {
    "id": "nusa-penida-3-point",
    "slug": "west-nusa-penida-island-with-3-point-snorkling",
    "title": "West Nusa Penida Island With 3 Point Snorkling",
    "duration": "Full Day (10 Hours)",
    "durationDays": 1,
    "category": "day-tour",
    "priceUSD": 65,
    "priceNote": "USD 65 / Pax (2-3 Traveler)",
    "priceTiers": [
      {
        "label": "Solo Traveler",
        "priceUSD": 125
      },
      {
        "label": "2-3 Traveler",
        "priceUSD": 65
      },
      {
        "label": "4-6 Traveler",
        "priceUSD": 50
      },
      {
        "label": "7-10 Traveler",
        "priceUSD": 42
      },
      {
        "label": "11-14 Traveler",
        "priceUSD": 36
      }
    ],
    "rating": 5.0,
    "reviewCount": 390,
    "image": "/images/tour-nusa-penida.jpg",
    "highlights": [
      "Manta Ray Snorkeling: 3 spots at Manta Bay, Crystal Bay, and Gamat Bay.",
      "Kelingking T-Rex Cliff: One of the most famous coastal viewpoints on Earth.",
      "Broken Beach & Angel\u2019s Billabong: Natural rock bridge and emerald infinity pool.",
      "Fast Boat Tickets: Fast passenger catamaran tickets included."
    ],
    "description": "Dive into an unforgettable adventure with our West Nusa Penida Island and 3 Spots Snorkeling with Manta Ray. Explore Kelingking Beach, Broken Beach, and Angel\u2019s Billabong with private island transport.",
    "isPopular": true,
    "isFeatured": true,
    "itinerarySummary": [
      "06:30 AM \u2013 Hotel pickup to Sanur port.",
      "07:30 AM \u2013 Fast boat to Nusa Penida.",
      "09:00 AM \u2013 3-spot snorkeling tour.",
      "12:30 PM \u2013 Indonesian lunch.",
      "01:30 PM \u2013 Visit Kelingking Beach, Broken Beach, and Angel\u2019s Billabong.",
      "04:30 PM \u2013 Fast boat return to Bali."
    ],
    "included": [
      "Private transport",
      "Fast boat tickets",
      "Snorkeling gear",
      "Lunch",
      "All entrance tickets"
    ],
    "excluded": [
      "Personal items",
      "Driver tip"
    ]
  },
  {
    "id": "ubud-jungle-swing",
    "slug": "ubud-tour-with-jungle-swing",
    "title": "Ubud Tour With Jungle Swing",
    "duration": "Full Day (9 Hours)",
    "durationDays": 1,
    "category": "day-tour",
    "priceUSD": 45,
    "priceNote": "USD 45 / Pax (2-3 Traveler)",
    "priceTiers": [
      {
        "label": "Solo Traveler",
        "priceUSD": 85
      },
      {
        "label": "2-3 Traveler",
        "priceUSD": 45
      },
      {
        "label": "4-6 Traveler",
        "priceUSD": 35
      },
      {
        "label": "7-10 Traveler",
        "priceUSD": 28
      },
      {
        "label": "11-14 Traveler",
        "priceUSD": 23
      }
    ],
    "rating": 4.9,
    "reviewCount": 310,
    "image": "/images/tour-ubud-swing.jpg",
    "highlights": [
      "Jungle Swing Experience: Fly over green valleys on a giant swing.",
      "Tegalalang Rice Terraces: Iconic stepped paddy hills.",
      "Sacred Monkey Forest: Friendly macaques in ancient forest.",
      "Ubud Palace: Historical royal seat and market."
    ],
    "description": "Experience the ultimate Ubud highlights including the famous jungle swing, emerald terraced fields, and sacred monkeys.",
    "isPopular": true,
    "isFeatured": true,
    "itinerarySummary": [
      "08:30 AM \u2013 Hotel pickup.",
      "09:30 AM \u2013 Ubud Monkey Forest.",
      "11:30 AM \u2013 Tegalalang Rice Terraces and Jungle Swing.",
      "01:30 PM \u2013 Lunch break.",
      "03:00 PM \u2013 Ubud Royal Palace.",
      "05:00 PM \u2013 Return to hotel."
    ],
    "included": [
      "Private car",
      "Driver",
      "Entrance fees",
      "Mineral water"
    ],
    "excluded": [
      "Lunch",
      "Driver tip"
    ]
  },
  {
    "id": "volcano-kintamani",
    "slug": "volcano-kintamani-and-scenic-waterfall-tour",
    "title": "Volcano Kintamani and Scenic Waterfall Tour",
    "duration": "Full Day (10 Hours)",
    "durationDays": 1,
    "category": "day-tour",
    "priceUSD": 48,
    "priceNote": "USD 48 / Pax (2-3 Traveler)",
    "priceTiers": [
      {
        "label": "Solo Traveler",
        "priceUSD": 90
      },
      {
        "label": "2-3 Traveler",
        "priceUSD": 48
      },
      {
        "label": "4-6 Traveler",
        "priceUSD": 38
      },
      {
        "label": "7-10 Traveler",
        "priceUSD": 30
      },
      {
        "label": "11-14 Traveler",
        "priceUSD": 25
      }
    ],
    "rating": 4.9,
    "reviewCount": 340,
    "image": "/images/tour-kintamani.jpg",
    "highlights": [
      "Mount Batur Caldera: Breathtaking panorama of Mount Batur active volcano.",
      "Tibumana Waterfall: Peaceful cascade deep in the jungle.",
      "Tirta Empul Holy Springs: Ancient water temple.",
      "Coffee Tasting: Free Luwak coffee and tea tasting."
    ],
    "description": "Discover the heart of Bali with our Volcano Kintamani and Scenic Waterfall Tour. Highlights include Mount Batur volcano, Tirta Empul, and Tibumana waterfall.",
    "isPopular": true,
    "isFeatured": true,
    "itinerarySummary": [
      "08:30 AM \u2013 Hotel pickup.",
      "10:00 AM \u2013 Tirta Empul Temple.",
      "12:00 PM \u2013 Kintamani Volcano panorama and lunch.",
      "02:30 PM \u2013 Tibumana Waterfall.",
      "04:00 PM \u2013 Coffee plantation.",
      "06:00 PM \u2013 Return to hotel."
    ],
    "included": [
      "Private car",
      "Driver",
      "All entrance fees",
      "Mineral water"
    ],
    "excluded": [
      "Lunch",
      "Driver tip"
    ]
  },
  {
    "id": "ubud-swing-atv",
    "slug": "bali-atv-and-ubud-swing-tour",
    "title": "Bali ATV and Ubud Swing Tour",
    "duration": "Full Day (9 Hours)",
    "durationDays": 1,
    "category": "day-tour",
    "priceUSD": 58,
    "priceNote": "USD 58 / Pax (2-3 Traveler)",
    "priceTiers": [
      {
        "label": "Solo Traveler",
        "priceUSD": 110
      },
      {
        "label": "2-3 Traveler",
        "priceUSD": 58
      },
      {
        "label": "4-6 Traveler",
        "priceUSD": 45
      },
      {
        "label": "7-10 Traveler",
        "priceUSD": 38
      },
      {
        "label": "11-14 Traveler",
        "priceUSD": 32
      }
    ],
    "rating": 5.0,
    "reviewCount": 380,
    "image": "/images/tour-ubud-swing.jpg",
    "highlights": [
      "2-Hour ATV Ride: Off-road adventure through mud, cave, and forest.",
      "Jungle Swing: Soar high above terraced hills.",
      "Buffet Lunch: Delicious hot lunch after ATV ride.",
      "Private Hotel Pickup: Door-to-door comfort."
    ],
    "description": "Experience the ultimate adventure in Ubud with our Bali ATV and Ubud Swing Tour. Ride through cave tunnels and fly high on the swing.",
    "isPopular": true,
    "isFeatured": true,
    "itinerarySummary": [
      "08:00 AM \u2013 Hotel pickup.",
      "09:30 AM \u2013 ATV quad bike adventure.",
      "12:00 PM \u2013 Buffet lunch.",
      "01:30 PM \u2013 Jungle swing and rice terraces.",
      "04:30 PM \u2013 Return to hotel."
    ],
    "included": [
      "Private transport",
      "ATV quad bike",
      "Buffet lunch",
      "Swing ticket",
      "Insurance"
    ],
    "excluded": [
      "Personal photos",
      "Driver tip"
    ]
  },
  {
    "id": "bali-honeymoon-5d4n",
    "slug": "romantic-bali-honeymoon-5d4n-with-private-pool-villa",
    "title": "Romantic Bali Honeymoon 5D4N With Private Pool Villa",
    "duration": "5 Days 4 Nights",
    "durationDays": 5,
    "category": "honeymoon",
    "priceUSD": 520,
    "priceNote": "USD 520 / Pax (Couple)",
    "priceTiers": [
      {
        "label": "Per Couple",
        "priceUSD": 1040
      },
      {
        "label": "Per Person",
        "priceUSD": 520
      }
    ],
    "rating": 5.0,
    "reviewCount": 210,
    "image": "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80",
    "highlights": [
      "Private Pool Villa: Floating breakfast and flower bath petals.",
      "Candlelit Dinner: Romantic seafood dinner on Jimbaran Beach.",
      "Couple Spa: 2-hour relaxing aromatherapy massage for two.",
      "Uluwatu Sunset: Dramatic cliffs and evening Kecak dance."
    ],
    "description": "The dream honeymoon package featuring private pool villa stays, floating breakfasts, couple massage treatments, and romantic sunset dinners.",
    "isPopular": true,
    "isFeatured": true,
    "itinerarySummary": [
      "Day 1: Airport welcome with flower garland, check-in to private pool villa.",
      "Day 2: Floating breakfast, Ubud scenic waterfalls, and jungle swing.",
      "Day 3: Melasti Beach, Uluwatu cliff sunset, and romantic Jimbaran seafood dinner.",
      "Day 4: 2-hour Balinese couple spa treatment and leisure time.",
      "Day 5: Villa check-out, souvenir shopping, and airport transfer."
    ],
    "included": [
      "4 nights private pool villa",
      "Daily breakfast & 1 floating breakfast",
      "Couple spa",
      "Seafood dinner",
      "Private car"
    ],
    "excluded": [
      "Flights",
      "Personal expenses"
    ]
  },
  {
    "id": "bali-spiritual-healing-yoga",
    "slug": "bali-spiritual-healing-yoga-holy-water-blessing",
    "title": "Bali Spiritual Healing, Yoga & Holy Water Blessing",
    "duration": "Full Day (8 Hours)",
    "durationDays": 1,
    "category": "experience",
    "priceUSD": 65,
    "priceNote": "USD 65 / Pax",
    "priceTiers": [
      {
        "label": "Solo Traveler",
        "priceUSD": 120
      },
      {
        "label": "2-3 Traveler",
        "priceUSD": 65
      },
      {
        "label": "4-6 Traveler",
        "priceUSD": 50
      }
    ],
    "rating": 5.0,
    "reviewCount": 175,
    "image": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    "highlights": [
      "Private Yoga & Meditation: 90-minute session overlooking sacred river valley.",
      "Melukat Purification: Sacred holy spring water blessing ritual.",
      "Traditional Healer Consultation: Spiritual aura cleansing.",
      "Healthy Organic Lunch: Wholesome Balinese farm-to-table meal."
    ],
    "description": "A deeply transformative spiritual day in Ubud combining guided yoga, ancient water purification rituals, and traditional Balinese healing.",
    "isPopular": false,
    "isFeatured": true,
    "itinerarySummary": [
      "07:30 AM \u2013 Hotel pickup.",
      "08:30 AM \u2013 Morning yoga and breathwork session in Ubud.",
      "10:30 AM \u2013 Holy water purification (Melukat) ritual at Sebatu temple.",
      "01:00 PM \u2013 Organic healthy lunch.",
      "02:30 PM \u2013 Consultation with a Balinese spiritual healer.",
      "04:30 PM \u2013 Return to hotel."
    ],
    "included": [
      "Private car",
      "Yoga session",
      "Temple sarong & offerings",
      "Organic lunch",
      "Mineral water"
    ],
    "excluded": [
      "Healer voluntary donation",
      "Personal souvenirs"
    ]
  }
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
  if (category === 'package') return POPULAR_TOURS.filter((t) => t.category === 'package' || t.durationDays > 1);
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
