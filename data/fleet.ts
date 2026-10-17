export interface FleetVehicle {
  id: string;
  name: string;
  model: string;
  category: 'Economy' | 'Comfort' | 'VIP' | 'Minibus';
  passengers: number;
  luggage: number;
  rateUSD: number;
  durationHours: number;
  image: string;
  features: string[];
  tag?: string;
  description: string;
}

export const FLEET_VEHICLES: FleetVehicle[] = [
  {
    id: 'fleet-avanza',
    name: 'Toyota Avanza',
    model: 'New Facelift MPV',
    category: 'Economy',
    passengers: 5,
    luggage: 3,
    rateUSD: 40,
    durationHours: 10,
    image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=600&q=80',
    tag: 'Best Value',
    features: ['Double-Blower AC', 'Clean Cloth Seats', 'USB Phone Charging', 'Mineral Water Included', 'English Chauffeur'],
    description: 'Our most economical private car. Nimble and perfect for navigating narrow village roads in Ubud and Seminyak.',
  },
  {
    id: 'fleet-innova-grand',
    name: 'Toyota Innova Grand',
    model: 'Full-Size Family MPV',
    category: 'Comfort',
    passengers: 6,
    luggage: 4,
    rateUSD: 50,
    durationHours: 10,
    image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=600&q=80',
    tag: 'Family Favorite',
    features: ['Independent Climate AC', 'Smooth Rear Suspension', 'Spacious Legroom', 'Bottled Mineral Water', 'English Chauffeur'],
    description: 'A proven, comfortable family vehicle offering greater shoulder room and plush seating for up to 6 guests.',
  },
  {
    id: 'fleet-innova-reborn',
    name: 'Toyota Innova Reborn',
    model: 'Premium Touring MPV',
    category: 'Comfort',
    passengers: 6,
    luggage: 4,
    rateUSD: 65,
    durationHours: 10,
    image: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&w=600&q=80',
    tag: 'Most Recommended',
    features: ['Whisper-Quiet Cabin', 'Premium Captain-Style Seating', 'Dual AC Climate', 'Fast Highway Stability', 'English Chauffeur'],
    description: 'The traveler favorite for long distance journeys to North Bali (Singaraja/Lovina) and East Bali with maximum comfort.',
  },
  {
    id: 'fleet-alphard',
    name: 'Toyota Alphard VIP',
    model: 'Luxury Executive MPV',
    category: 'VIP',
    passengers: 6,
    luggage: 4,
    rateUSD: 170,
    durationHours: 10,
    image: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=600&q=80',
    tag: 'VIP Luxury',
    features: ['Power Leather Ottoman Seats', 'Dual Sunroofs', 'Surround Sound Audio', 'Private Curtains', 'VIP Uniformed Chauffeur'],
    description: 'Ultimate VIP luxury for honeymoons, executive business travel, and weddings. First-class comfort on Bali roads.',
  },
  {
    id: 'fleet-hiace',
    name: 'Toyota HiAce Commuter',
    model: 'High-Roof Minibus',
    category: 'Minibus',
    passengers: 15,
    luggage: 10,
    rateUSD: 100,
    durationHours: 10,
    image: 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=600&q=80',
    tag: 'Group Travel',
    features: ['High-Roof Spacious Interior', 'Individual AC Vents Per Seat', 'Reclining Comfort Seats', 'Large Luggage Compartment', 'Senior Driver'],
    description: 'The preferred choice for family reunions, wedding parties, and group tours. Extremely spacious and airy.',
  },
  {
    id: 'fleet-elf',
    name: 'Isuzu Elf Long',
    model: 'Heavy Duty Tour Minibus',
    category: 'Minibus',
    passengers: 18,
    luggage: 12,
    rateUSD: 105,
    durationHours: 10,
    image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=600&q=80',
    tag: 'Large Group',
    features: ['18 Reclining Seats', 'Powerful Overhead AC', 'Microphone PA System', 'Massive Rear Cargo Space', 'Senior Group Chauffeur'],
    description: 'Maximum capacity minibus designed for corporate retreats, large group transfers, and full-island sightseeing.',
  },
];
