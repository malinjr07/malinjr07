// Type definitions for API responses
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

type BlogPost = {
  id: number;
  type?: string;
  title: string;
  date: string;
  author: string;
  excerpt: string;
  content?: string;
  image: string;
  slug: string;
  featuredImage?: string;
  comments?: number;
  tags?: string[];
  blClass?: string;
  animation?: string;
};

type ApiData = {
  projects: Project[];
  resume: {
    experience: ResumeItem[];
    education: ResumeItem[];
  };
  services: Service[];
  blogs: BlogPost[];
};

export type { Project, ResumeItem, Service, BlogPost, ApiData };

