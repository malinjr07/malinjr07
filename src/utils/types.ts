import { ReactNode } from 'react';

export type navType = {
  title: string;
  id: string;
};
export interface skillObj {
  icon: (e: svgComponentProps) => ReactNode;
  title: string;
}
export interface skillListObj {
  skillTitle: string;
  skillList: skillObj[];
}

export interface svgComponentProps {
  width: string;
  height: string;
}

export interface portfolioItem {
  portfolioTitle: string;
  projectUrl: string;
  description: string;
  usedTechs: Array<skillObj | string>;
  img: string;
}
export interface PortfolioProps {
  portfolioTitle: string;
  projectUrl: string;
  description: string;
  children: ReactNode;
  img: string;
}
export interface footerLink {
  icon: string;
  url: string;
}

