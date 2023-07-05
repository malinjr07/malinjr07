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
  description: string;
  usedTechs: Array<skillObj | string>;
  img: Array<string>;
}
export interface footerLink {
  icon: string;
  url: string;
}

