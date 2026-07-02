import {
  BadgeCheck,
  Building2,
  Camera,
  Car,
  ChartNoAxesCombined,
  CheckCircle2,
  Clock3,
  Dumbbell,
  Flame,
  HeartHandshake,
  Home,
  Landmark,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Trees,
  Wifi,
  Zap
} from 'lucide-react';

export const navItems = ['Home', 'About', 'Apartments', 'Amenities', 'Gallery', 'Contact'];

export const heroStats = [
  { label: 'Luxury apartments', value: '96+' },
  { label: 'Project status', value: 'Booking open' },
  { label: 'Starting price', value: 'PKR 8.5M' }
];

export const trustBadges = ['RERA-ready documentation', 'Family-focused residence', 'Flexible payment plans'];

export const values = [
  { title: 'Mission', text: 'Create a secure, elegant residential address where Peshawar families can live with privacy, convenience, and long-term value.' },
  { title: 'Vision', text: 'To become Danish Abad’s most trusted apartment destination for families, overseas Pakistanis, and professional investors.' },
  { title: 'Core Values', text: 'Transparent dealing, durable construction, thoughtful planning, and a resident experience that feels genuinely premium.' }
];

export const timeline = [
  { year: '2024', title: 'Location secured', text: 'Prime road-facing site selected opposite Islamia College.' },
  { year: '2025', title: 'Structure phase', text: 'Core residential tower and services planning moved into active execution.' },
  { year: '2026', title: 'Bookings open', text: 'Limited 1, 2, and 3 bedroom apartments released with visit appointments.' }
];

export const features = [
  ['Prime Location', 'Amjid Shaheed Road address with fast access to universities, markets, hospitals, and BRT routes.', MapPin],
  ['Luxury Interior', 'Elegant layouts, premium finishes, modern kitchens, and natural-light focused residences.', Sparkles],
  ['24/7 Security', 'Controlled entry, CCTV coverage, reception supervision, and family-safe access planning.', ShieldCheck],
  ['Shopping Arcade', 'Ground-level convenience retail designed for everyday essentials and smart investor yield.', ShoppingBag],
  ['Fitness Center', 'Dedicated wellness area for residents who want healthy routines close to home.', Dumbbell],
  ['Covered Parking', 'Organized parking access to protect vehicles and simplify daily arrivals.', Car],
  ['Power Backup', 'Backup generator support for essential residential and common-area services.', Zap],
  ['High-Speed Elevators', 'Modern lift access planned for smooth movement across residential floors.', Building2],
  ['Family Environment', 'A calm, private, community-minded address built around families and professionals.', HeartHandshake],
  ['Investment Opportunity', 'Strong rental appeal near education, healthcare, and commercial demand corridors.', ChartNoAxesCombined]
];

export const apartments = [
  {
    name: 'Signature 1 Bedroom',
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80',
    beds: 1,
    baths: 1,
    area: '610 sq ft',
    plan: 'Open lounge, private balcony, fitted kitchen',
    price: 'PKR 8.5M'
  },
  {
    name: 'Executive 2 Bedroom',
    image: 'https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1200&q=80',
    beds: 2,
    baths: 2,
    area: '980 sq ft',
    plan: 'Family lounge, attached baths, utility corner',
    price: 'PKR 13.8M'
  },
  {
    name: 'Premier 3 Bedroom',
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80',
    beds: 3,
    baths: 3,
    area: '1,420 sq ft',
    plan: 'Large living, guest room, dual balconies',
    price: 'PKR 19.6M'
  }
];

export const amenities = [
  ['Gym', Dumbbell],
  ['Kids Play Area', Home],
  ['Mosque', Landmark],
  ['Shopping Mall', ShoppingBag],
  ['CCTV', Camera],
  ['Reception', BadgeCheck],
  ['Parking', Car],
  ['Green Area', Trees],
  ['Backup Generator', Flame],
  ['High-Speed Internet', Wifi]
];

export const nearby = [
  ['Islamia College', '2 min drive'],
  ['Hospitals', '5 min drive'],
  ['Schools', '4 min drive'],
  ['University', '6 min drive'],
  ['Market', '3 min walk'],
  ['Airport', '18 min drive']
];

export const floorPlans = [
  ['1 Bedroom Plan', '610 sq ft', 'Ideal for young couples, overseas buyers, and rental investors.'],
  ['2 Bedroom Plan', '980 sq ft', 'Balanced family layout with practical storage and attached bathrooms.'],
  ['3 Bedroom Plan', '1,420 sq ft', 'Premium residence for larger families, doctors, executives, and business owners.']
];

export const progress = [
  ['Design approvals', 100],
  ['Excavation and foundation', 92],
  ['Structural work', 68],
  ['MEP services planning', 55],
  ['Interior finishing procurement', 38]
];

export const gallery = [
  'https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1600566753151-384129cf4e3e?auto=format&fit=crop&w=900&q=80'
];

export const testimonials = [
  {
    name: 'Dr. Hamza Khan',
    role: 'Verified buyer',
    image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=300&q=80',
    text: 'The location gives my family quick access to work, schools, and central Peshawar. The booking process was clear and professional.',
    rating: '5.0'
  },
  {
    name: 'Ayesha Rahman',
    role: 'Overseas Pakistani',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80',
    text: 'I wanted a secure apartment investment near strong rental demand. Danish Heights felt organized, transparent, and family-friendly.',
    rating: '4.9'
  },
  {
    name: 'Bilal Afridi',
    role: 'Business owner',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80',
    text: 'The apartment layouts are practical and the shopping arcade adds a smart commercial advantage for long-term value.',
    rating: '5.0'
  }
];

export const investmentStats = [
  ['Projected rental yield', '7.4%', 'Based on nearby apartment demand and professional tenant profiles.'],
  ['Appreciation outlook', '18%', 'Prime educational and commercial corridor supports resilient value growth.'],
  ['Payment flexibility', '24 mo', 'Structured installment plans available for eligible bookings.']
];

export const faqs = [
  ['Where is Danish Heights located?', 'Danish Heights is located on Amjid Shaheed Road, opposite Islamia College, Danish Abad, Peshawar.'],
  ['Which apartment sizes are available?', 'The project offers 1 bedroom, 2 bedroom, and 3 bedroom luxury residential apartments.'],
  ['Can overseas Pakistanis book remotely?', 'Yes. The sales team can arrange virtual consultation, document sharing, and scheduled site visits for family representatives.'],
  ['Is covered parking available?', 'Yes. Covered parking is planned for residents with organized access and security monitoring.'],
  ['How can I request current pricing?', 'Submit the inquiry form, call the sales team, or use WhatsApp to request updated availability and payment plan details.']
];

export const contactActions = [
  ['Book Visit', CheckCircle2],
  ['WhatsApp', MessageCircle],
  ['Call Now', Phone],
  ['Schedule Time', Clock3],
  ['Visit Office', Landmark]
];
