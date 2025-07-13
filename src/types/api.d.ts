// Type definitions for API responses

type Testimonial = {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
  category: 'design' | 'development' | 'marketing';
  image: string;
};

type Project = {
  id: number;
  category: string;
  image: string;
  title: string;
  subtitle: string;
  slug: string;
};

type ResumeItem = {
  id: number;
  title: string;
  subtitle: string;
  period: string;
  description: string;
};

import { FunctionComponent, SVGProps } from 'react';

type Service = {
  id: number;
  title: string;
  slug: string;
  icon: string | FunctionComponent<SVGProps<SVGSVGElement>>;
  description: string;
  image: string;
  sSImg: string;
};

interface BlogPost {
  id: number;
  slug: string;
  title: string;
  type?: 'image' | 'video';
  tags?: string[];
  description: string;
  excerpt?: string;
  content?: string;
  author: string;
  create_at: string;
  date?: string;
  image: string;
  screens?: string;
  featuredImage?: string;
  comments?: number;
  blClass?: string;
  animation?: string;
}

type ApiData = {
  projects: Project[];
  resume: {
    experience: ResumeItem[];
    education: ResumeItem[];
  };
  services: Service[];
  blogs: BlogPost[];
};

export type { Project, ResumeItem, Service, BlogPost, ApiData, Testimonial };
