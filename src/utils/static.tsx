import { ReactNode } from 'react';

export type navType = {
  title: string;
  id: string;
};

export const navItems: navType[] = [
  {
    title: 'about me',
    id: 'about-me',
  },
  {
    title: 'skills',
    id: 'skills',
  },
  {
    title: 'portfolio',
    id: 'portfolio',
  },
];

export interface skillObj {
  icon: ReactNode;
  title: string;
}
export interface skillListObj {
  skillTitle: string;
  skillList: skillObj[];
}

export const skillLists: skillListObj[] = [
  {
    skillTitle: 'using now',
    skillList: [{ icon: '', title: '' }],
  },
  {
    skillTitle: 'learning',
    skillList: [{ icon: '', title: '' }],
  },
  {
    skillTitle: 'other skill',
    skillList: [{ icon: '', title: '' }],
  },
];

