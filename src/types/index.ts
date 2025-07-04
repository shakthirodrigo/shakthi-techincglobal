// src/types/index.ts

// Site Configuration Types
export interface SiteConfig {
  name: string;
  title: string;
  description: string;
  url: string;
  logo: string;
  favicon: string;
}

// Contact Information Types
export interface ContactInfo {
  address: {
    line1: string;
    line2: string;
    city: string;
    country: string;
  };
  phone: string;
  email: string;
  socialMedia: SocialMediaLinks;
}

export interface SocialMediaLinks {
  facebook?: string;
  twitter?: string;
  linkedin?: string;
  youtube?: string;
}

// Product Types
export interface Product {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  image: string;
  icon?: string;
  color: string;
  features?: string[];
  category: 'erp' | 'hr' | 'crm' | 'communication' | 'automation';
}

// Service Types
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  color: string;
  category: 'automation' | 'consultation' | 'implementation' | 'support';
}

// Feature Types
export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  benefits?: string[];
}

// Statistics Types
export interface Statistic {
  id: string;
  value: number;
  label: string;
  description?: string;
  icon?: string;
}

// Partner Types
export interface Partner {
  id: string;
  name: string;
  logo: string;
  website?: string;
  description?: string;
  category: 'technology' | 'implementation' | 'consulting' | 'regional';
}

// Hero Slide Types
export interface HeroSlide {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  ctaText?: string;
  ctaLink?: string;
  backgroundImage?: string;
}

// Navigation Types
export interface NavigationItem {
  label: string;
  href: string;
  isExternal?: boolean;
  isCTA?: boolean;
}

// Core Values Types
export interface CoreValue {
  id: string;
  title: string;
  description: string;
  color: string;
  icon?: string;
}

// About Section Types
export interface AboutSection {
  title: string;
  content: string;
  color: string;
  values?: CoreValue[];
}

// Form Types
export interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  message: string;
  subject?: string;
  newsletter?: boolean;
}

export interface NewsletterFormData {
  email: string;
}

// Layout Props Types
export interface LayoutProps {
  title: string;
  description?: string;
  keywords?: string[];
  image?: string;
  noIndex?: boolean;
}

// Component Props Types
export interface ComponentWithChildren {
  children?: any;
  className?: string;
}

// API Response Types
export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
}

// SEO Types
export interface SEOData {
  title: string;
  description: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'product';
  author?: string;
  publishedDate?: string;
  modifiedDate?: string;
}

// Utility Types
export type ColorVariant = 
  | 'blue' 
  | 'green' 
  | 'purple' 
  | 'orange' 
  | 'red' 
  | 'indigo' 
  | 'pink' 
  | 'yellow';

export type Size = 'sm' | 'md' | 'lg' | 'xl';

export type Status = 'idle' | 'loading' | 'success' | 'error';

// Event Types
export interface FormSubmitEvent {
  preventDefault(): void;
  target: HTMLFormElement;
}

// Animation Types
export interface AnimationConfig {
  duration?: number;
  delay?: number;
  easing?: string;
  direction?: 'normal' | 'reverse' | 'alternate';
  iterations?: number | 'infinite';
}

// Theme Types
export interface ThemeConfig {
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    foreground: string;
  };
  fonts: {
    primary: string;
    secondary?: string;
  };
  spacing: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
  };
}

// Export commonly used union types
export type ProductCategory = Product['category'];
export type ServiceCategory = Service['category'];
export type PartnerCategory = Partner['category'];
