// src/utils/constants.ts
import type { 
  SiteConfig, 
  ContactInfo, 
  NavigationItem, 
  HeroSlide, 
  Statistic,
  ColorVariant 
} from '@/types';

// Site Configuration
export const SITE_CONFIG: SiteConfig = {
  name: 'Techincglobal',
  title: 'Techincglobal - NXTGEN ERP - ERP Made Easy',
  description: 'We are a boutique service delivery organization who deliver best of breed solutions encapsulated within consultation excellence.',
  url: 'https://techincglobal.com',
  logo: '/files/Asset 4@4x-8.webp',
  favicon: '/files/icon.webp'
};

// Contact Information
export const CONTACT_INFO: ContactInfo = {
  address: {
    line1: 'No. 289/7 d,',
    line2: 'Lake Road,',
    city: 'Malabe',
    country: 'Sri Lanka'
  },
  phone: '+94 707 978 978',
  email: 'info@techincglobal.com',
  socialMedia: {
    facebook: '#',
    twitter: '#',
    linkedin: '#'
  }
};

// Navigation Menu
export const NAVIGATION: NavigationItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'Product', href: '#product' },
  { label: 'Features', href: '#features' },
  { label: 'About us', href: '#about' },
  { label: 'Get started', href: '#contact', isCTA: true }
];

// Hero Slides
export const HERO_SLIDES: HeroSlide[] = [
  {
    id: 'slide-1',
    title: 'NXTGEN ERP - ERP Made Easy',
    subtitle: 'NXTGEN ERP',
    description: 'Presenting the Next Generation of ERP software',
    ctaText: 'Discover Features',
    ctaLink: '#features'
  },
  {
    id: 'slide-2',
    title: 'License Free Software',
    subtitle: 'License Free',
    description: 'Pay for our expertise, We take away the burden of costly license commitments.',
    ctaText: 'Learn More',
    ctaLink: '#about'
  },
  {
    id: 'slide-3',
    title: 'Automate your Administration and Sales Processes',
    subtitle: 'Automate your Administration',
    description: 'Practical Digitization of manual processes by an excellent consultation team',
    ctaText: 'Discover Features',
    ctaLink: '#features'
  },
  {
    id: 'slide-4',
    title: 'Collabsee - Project Management | Time Management & Reporting',
    subtitle: 'Collabsee',
    description: 'Manage your projects, time sheets and tasks - A Techincglobal partner solution',
    ctaText: 'Learn More',
    ctaLink: '#about'
  }
];

// Statistics
export const STATISTICS: Statistic[] = [
  {
    id: 'clients',
    value: 25,
    label: 'Clients',
    description: 'Satisfied customers worldwide'
  },
  {
    id: 'projects',
    value: 26,
    label: 'Projects',
    description: 'Successfully completed projects'
  },
  {
    id: 'support-hours',
    value: 5250,
    label: 'Hours Of Support',
    description: 'Dedicated customer support hours'
  },
  {
    id: 'team-members',
    value: 11,
    label: 'Hard Workers',
    description: 'Dedicated team members'
  }
];

// Why Choose Us Features
export const WHY_CHOOSE_US_FEATURES: string[] = [
  'All our Platforms are FREE',
  'Our Experience is over 20+ years',
  'Our delivery is of global standards',
  'Our customers are referenceable',
  'We keep our promises'
];

// Core Values
export const CORE_VALUES: Array<{ title: string; color: ColorVariant }> = [
  { title: 'Genuine Passion is what drives us.', color: 'blue' },
  { title: 'Creativity is why we deliver the best of breed solutions.', color: 'green' },
  { title: 'Curiosity keeps us in the forefront of technology.', color: 'purple' },
  { title: 'Attitude for striving towards giving our customer the best.', color: 'orange' },
  { title: 'The excellent competence that we process is our Aptitude. Integrity is in everything we do.', color: 'indigo' }
];

// About Sections
export const ABOUT_SECTIONS = {
  company: {
    title: 'About Techincglobal',
    content: 'We are a boutique service delivery organization who deliver best of breed solutions encapsulated within consultation excellence.',
    color: 'blue' as ColorVariant
  },
  goal: {
    title: 'Our Goal',
    content: 'Our prime directive is to help our customers to reap the benefit of Enterprise Applications where they can truly actualize the benefits of process automation through our consultancy.',
    color: 'green' as ColorVariant
  },
  values: {
    title: 'Our Core Values',
    content: 'Our fundamental principles that guide everything we do',
    color: 'purple' as ColorVariant
  }
};

// Services Description
export const SERVICES_DESCRIPTION = `Our services extends to both public and private sector organizations. The Techinc AUTOMATION platform enables us to streamline your organizations administration and selling processes. The NXTGEN ERP Platform enables us to address processes such as Lead to Cash, Procure to Pay, Acquisition to Disposal, Hire to Retire, Engineer to Order, Make to Stock and Make to Order.`;

// Footer Links
export const FOOTER_LINKS = {
  services: [
    { label: 'Cloud', href: '#' },
    { label: 'Support', href: '#' }
  ],
  apps: [
    { label: 'Nxtgen', href: '#' },
    { label: 'CRM', href: '#' }
  ],
  company: [
    { label: 'About', href: '#' },
    { label: 'Blog', href: '#' },
    { label: 'Pricing', href: '#' },
    { label: 'Products', href: '#' }
  ]
};

// Animation Durations
export const ANIMATION_DURATIONS = {
  fast: 200,
  normal: 300,
  slow: 500,
  counter: 2000,
  slideshow: 5000
} as const;

// Breakpoints (matching Tailwind)
export const BREAKPOINTS = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px'
} as const;

// Color Mappings for Dynamic Styling
export const COLOR_CLASSES = {
  blue: {
    bg: 'bg-blue-500',
    text: 'text-blue-600',
    border: 'border-blue-300',
    gradient: 'from-blue-500 to-blue-600'
  },
  green: {
    bg: 'bg-green-500',
    text: 'text-green-600', 
    border: 'border-green-300',
    gradient: 'from-green-500 to-green-600'
  },
  purple: {
    bg: 'bg-purple-500',
    text: 'text-purple-600',
    border: 'border-purple-300', 
    gradient: 'from-purple-500 to-purple-600'
  },
  orange: {
    bg: 'bg-orange-500',
    text: 'text-orange-600',
    border: 'border-orange-300',
    gradient: 'from-orange-500 to-orange-600'
  },
  indigo: {
    bg: 'bg-indigo-500',
    text: 'text-indigo-600',
    border: 'border-indigo-300',
    gradient: 'from-indigo-500 to-indigo-600'
  }
} as const;

// SEO Keywords
export const SEO_KEYWORDS = [
  'ERP software',
  'Enterprise Resource Planning',
  'NXTGEN ERP',
  'Business automation',
  'Frappe ERP',
  'Open source ERP',
  'Sri Lanka ERP',
  'License free software',
  'Business consultation',
  'Process automation',
  'Techincglobal',
  'CRM software',
  'HR management system'
];

// Copyright Notice
export const COPYRIGHT_NOTICE = '© 2025 Techincglobal Consultancy (Pvt) Ltd. All Rights Reserved.';

// Default Meta Description
export const DEFAULT_META_DESCRIPTION = 'Techincglobal delivers best-of-breed ERP solutions with 20+ years of experience. License-free NXTGEN ERP platform for comprehensive business automation.';
