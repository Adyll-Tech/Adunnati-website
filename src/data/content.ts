import type { NavItem, WorkProject, ProcessStep, Testimonial } from '../types';

export const NAV_LINKS: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export const WORK_PROJECTS: WorkProject[] = [
  {
    id: 'sovra',
    title: 'SŌVRA',
    category: 'E-COMMERCE · META ADS',
    imageClass: 'work-sovra',
    imageAlt: 'Luxury skincare product',
    metrics: {
      roas: '4.2x',
      growth: '312%',
      secondary: {
        value: '48%',
        label: 'Lower CPA',
      },
    },
  },
  {
    id: 'lume',
    title: 'Lume',
    category: 'BRANDING · WEB · PERFORMANCE',
    imageClass: 'work-lume',
    imageAlt: 'Contemporary architectural interior',
    metrics: {
      roas: '3.6x',
      growth: '220%',
      secondary: {
        value: '2.8x',
        label: 'Conversion Rate',
      },
    },
  },
  {
    id: 'kairo',
    title: 'Kairo',
    category: 'PRODUCT PHOTOGRAPHY · VIDEO',
    imageClass: 'work-kairo',
    imageAlt: 'Premium wristwatch product',
    metrics: {
      roas: '5.1x',
      growth: '410%',
      secondary: {
        value: '60%',
        label: 'Lower CPA',
      },
    },
  },
  {
    id: 'vellora',
    title: 'Vellora',
    category: 'SOCIAL MEDIA · REELS · ADS',
    imageClass: 'work-vellora',
    imageAlt: 'Fashion portrait with sunglasses',
    metrics: {
      roas: '2.9x',
      growth: '280%',
      secondary: {
        value: '3.1x',
        label: 'Conversion Rate',
      },
    },
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'Understand',
    description: 'We learn about your business, goals and challenges.',
    iconType: 'search',
  },
  {
    number: '02',
    title: 'Plan',
    description: 'We create a tailored strategy with clear deliverables.',
    iconType: 'document',
  },
  {
    number: '03',
    title: 'Execute',
    description: 'We bring the plan to life with precision and creativity.',
    iconType: 'lightning',
  },
  {
    number: '04',
    title: 'Grow',
    description: 'We measure, optimise and scale what works.',
    iconType: 'chart',
  },
];

export const TRUST_BRANDS: string[] = ['SŌVRA', 'Lume', 'Kairo', 'Vellora', 'NEXUS'];

export const TESTIMONIALS: Testimonial[] = [
  {
    text: '“Adunnati completely transformed our online presence. From strategy to execution, everything was seamless and result-driven.”',
    name: 'Jessica Miller',
    role: 'Founder, SŌVRA',
  },
  {
    text: '“Their creative thinking and performance focus brought new energy to our brand and helped us reach the right customers.”',
    name: 'Alex Morgan',
    role: 'Marketing Lead, Lume',
  },
  {
    text: '“A thoughtful team that understands both brand storytelling and measurable business outcomes.”',
    name: 'Taylor Reed',
    role: 'Director, Kairo',
  },
];
