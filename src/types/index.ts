export interface NavItem {
  label: string;
  href: string;
}

export interface Metric {
  value: string;
  label: string;
}

export interface WorkProject {
  id: string;
  title: string;
  category: string;
  imageClass: string;
  imageAlt: string;
  metrics: {
    roas: string;
    growth: string;
    secondary: {
      value: string;
      label: string;
    };
  };
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  iconType: 'search' | 'document' | 'lightning' | 'chart';
}

export interface Testimonial {
  text: string;
  name: string;
  role: string;
}
