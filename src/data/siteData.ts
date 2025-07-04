// src/data/siteData.ts
import type { Product, Service, Feature, Partner } from '@/types';

// Products Data
export const PRODUCTS: Product[] = [
  {
    id: 'nxtgen-erp',
    name: 'NXTGEN ERP',
    subtitle: 'Powered By Frappe ERP',
    description: 'ERP system designed to help businesses manage all aspects of their operations in one platform.',
    image: '/files/icon300.png',
    color: 'blue',
    category: 'erp',
    features: [
      'Complete business operations management',
      'Integrated financial management',
      'Inventory and supply chain control',
      'Manufacturing and production planning',
      'Sales and customer management',
      'Reporting and analytics'
    ]
  },
  {
    id: 'nxtgen-hr',
    name: 'NXTGEN HR',
    subtitle: 'Powered By Frappe HR',
    description: 'Full-featured Human Resource Management System to manage employee records, attendance, leaves, payroll, and more',
    image: '/files/frappeHRMS.png',
    color: 'green',
    category: 'hr',
    features: [
      'Employee record management',
      'Attendance tracking',
      'Leave management',
      'Payroll processing',
      'Performance evaluation',
      'Recruitment management'
    ]
  },
  {
    id: 'nxtgen-crm',
    name: 'NXTGEN CRM',
    subtitle: 'Powered By Frappe CRM',
    description: 'Customer Relationship Management system to track leads, manage opportunities, and streamline sales processes.',
    image: '/files/FrappeCRM.webp',
    color: 'purple',
    category: 'crm',
    features: [
      'Lead tracking and management',
      'Opportunity pipeline',
      'Sales process automation',
      'Customer communication history',
      'Sales analytics and reporting',
      'Integration with marketing tools'
    ]
  },
  {
    id: 'raven',
    name: 'Raven',
    subtitle: 'Team Communication',
    description: 'Team messaging platform, enabling seamless communication through channels, DMs, and AI-powered workflow automation.',
    image: '/files/raven logo.webp',
    color: 'orange',
    category: 'communication',
    features: [
      'Team messaging and channels',
      'Direct messaging',
      'File sharing and collaboration',
      'AI-powered workflow automation',
      'Integration with other tools',
      'Mobile and desktop apps'
    ]
  }
];

// Services Data
export const SERVICES: Service[] = [
  {
    id: 'automation-platform',
    title: 'Techinc Automation Platform',
    description: 'Automate is Techinc\'s effortless workflow automation and integration platform, which can easily automate any workflow whilst integrating to sub-systems within your organization, with absolutely No coding.',
    icon: 'lightning',
    color: 'blue',
    category: 'automation',
    features: [
      'No-code workflow automation',
      'System integration capabilities',
      'Process digitization',
      'Workflow optimization',
      'Real-time monitoring',
      'Custom business rules'
    ]
  },
  {
    id: 'erp-consultation',
    title: 'ERP Consultation & Implementation',
    description: 'Our consultancy is focused on providing Implementation, Consultation, BPR and Support services around the NXTGEN ERP Suite. NXTGEN is based on open-source technology that supports multiple verticals such as: Manufacturing, Distribution, Services, Retail, Education, Healthcare, Agriculture, and Non-profit.',
    icon: 'document',
    color: 'green',
    category: 'consultation',
    features: [
      'ERP implementation services',
      'Business process reengineering',
      'Industry-specific solutions',
      'Open-source technology',
      'Multi-vertical support',
      'Ongoing support and maintenance'
    ]
  }
];

// Features Data
export const FEATURES: Feature[] = [
  {
    id: 'license-free',
    title: 'License Free Software',
    description: 'We take out the heavy burden of license cost which restrict future growth.',
    icon: 'currency-dollar',
    color: 'blue',
    benefits: [
      'No ongoing license fees',
      'Unlimited user access',
      'Cost-effective scaling',
      'Transparent pricing model'
    ]
  },
  {
    id: 'experience',
    title: '20+ YEARS OF EXPERIENCE',
    description: 'Our collective experience enables us to deliver accurate solution within short turn-around times.',
    icon: 'user-group',
    color: 'green',
    benefits: [
      'Proven track record',
      'Industry expertise',
      'Fast implementation',
      'Best practices knowledge'
    ]
  },
  {
    id: 'happy-customers',
    title: 'HAPPY CUSTOMERS',
    description: 'The greatest testimony of our capabilities are our customers success.',
    icon: 'emoji-happy',
    color: 'purple',
    benefits: [
      'Customer satisfaction focus',
      'Success stories',
      'Long-term partnerships',
      'Continuous support'
    ]
  }
];

// Partners Data
export const PARTNERS: Partner[] = [
  {
    id: 'frappe',
    name: 'Frappe Partner',
    logo: '/files/FrappePartner.png',
    category: 'technology',
    description: 'Official Frappe technology partner'
  },
  {
    id: 'sebsa',
    name: 'SEBSA',
    logo: '/files/SEBSA.webp',
    category: 'regional',
    description: 'Regional implementation partner'
  },
  {
    id: 'orel-it',
    name: 'Orel IT',
    logo: '/files/Orel-IT.png',
    category: 'technology',
    description: 'Technology solutions partner'
  },
  {
    id: 'sparc',
    name: 'SPARC',
    logo: '/files/SPARC.webp',
    category: 'consulting',
    description: 'Strategic consulting partner'
  },
  {
    id: 'partner-5',
    name: 'Partner',
    logo: '/files/footer-logo.png',
    category: 'implementation',
    description: 'Implementation partner'
  },
  {
    id: 'empowerx',
    name: 'EmpowerX',
    logo: '/files/EmpowerX.png',
    category: 'technology',
    description: 'Technology empowerment partner'
  }
];

// Business Processes Supported
export const BUSINESS_PROCESSES = [
  'Lead to Cash',
  'Procure to Pay',
  'Acquisition to Disposal',
  'Hire to Retire',
  'Engineer to Order',
  'Make to Stock',
  'Make to Order'
];

// Industry Verticals Supported
export const INDUSTRY_VERTICALS = [
  'Manufacturing',
  'Distribution',
  'Services',
  'Retail',
  'Education',
  'Healthcare',
  'Agriculture',
  'Non-profit'
];

// Partnership Benefits
export const PARTNERSHIP_BENEFITS = [
  {
    id: 'enhanced-solutions',
    title: 'Enhanced Solutions',
    description: 'Integrated technologies for comprehensive business solutions',
    icon: 'lightning-bolt'
  },
  {
    id: 'global-expertise',
    title: 'Global Expertise',
    description: 'Access to international best practices and standards',
    icon: 'users'
  },
  {
    id: 'trusted-quality',
    title: 'Trusted Quality',
    description: 'Reliable partnerships ensuring consistent service quality',
    icon: 'shield-check'
  }
];

// Testimonials (for future use)
export const TESTIMONIALS = [
  {
    id: 'testimonial-1',
    name: 'John Doe',
    company: 'ABC Manufacturing',
    position: 'CEO',
    content: 'Techincglobal transformed our business operations with their NXTGEN ERP solution.',
    rating: 5,
    image: '/files/testimonial-1.jpg'
  }
  // Add more testimonials as needed
];

// FAQ Data (for future use)
export const FAQ_DATA = [
  {
    id: 'faq-1',
    question: 'What makes NXTGEN ERP different from other ERP solutions?',
    answer: 'NXTGEN ERP is completely license-free and based on open-source technology, eliminating ongoing license costs while providing enterprise-grade functionality.'
  },
  {
    id: 'faq-2',
    question: 'How long does ERP implementation typically take?',
    answer: 'Implementation time varies based on company size and complexity, but our 20+ years of experience enables us to deliver accurate solutions within short turn-around times.'
  },
  {
    id: 'faq-3',
    question: 'Do you provide ongoing support after implementation?',
    answer: 'Yes, we provide comprehensive support services including maintenance, updates, training, and technical assistance to ensure your continued success.'
  }
];

// Company Milestones (for timeline/history section)
export const COMPANY_MILESTONES = [
  {
    year: '2003',
    title: 'Company Founded',
    description: 'Techincglobal established with a vision to deliver best-of-breed enterprise solutions'
  },
  {
    year: '2010',
    title: 'ERP Specialization',
    description: 'Focused expertise development in ERP consultation and implementation'
  },
  {
    year: '2018',
    title: 'Frappe Partnership',
    description: 'Became official Frappe partner, expanding open-source ERP capabilities'
  },
  {
    year: '2023',
    title: 'NXTGEN Launch',
    description: 'Launched comprehensive NXTGEN suite including ERP, HR, and CRM solutions'
  }
];

// Export helper functions for data access
export const getProductById = (id: string): Product | undefined => {
  return PRODUCTS.find(product => product.id === id);
};

export const getServiceById = (id: string): Service | undefined => {
  return SERVICES.find(service => service.id === id);
};

export const getPartnersByCategory = (category: Partner['category']): Partner[] => {
  return PARTNERS.filter(partner => partner.category === category);
};

export const getProductsByCategory = (category: Product['category']): Product[] => {
  return PRODUCTS.filter(product => product.category === category);
};
