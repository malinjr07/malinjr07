import { ResumeItem } from '../types/api';

const experience: ResumeItem[] = [
  {
    id: 1,
    title: 'Former Designer & Senior Developer',
    subtitle: 'ABC Design Agency, London',
    period: '2020 - Present',
    description: 'Led a team of developers and designers to deliver high-quality web applications.',
  },
  {
    id: 2,
    title: 'Lead Designer & CEO',
    subtitle: 'Magnificence TOP, London',
    period: '2018 - 2020',
    description: 'Founded and led a design agency specializing in web and mobile applications.',
  },
  {
    id: 3,
    title: 'Junior Designer & Intern',
    subtitle: 'Fastoy Agency, London',
    period: '2016 - 2018',
    description: 'Assisted senior designers and developers in creating responsive web designs.',
  },
];

const education: ResumeItem[] = [
  {
    id: 4,
    title: 'Bachelor Degree of Visual Design',
    subtitle: 'Cambridge University',
    period: '2012 - 2016',
    description: 'Graduated with honors in Visual Design and Interactive Media.',
  },
  {
    id: 5,
    title: 'Web Development Certification',
    subtitle: 'London Tech Institute',
    period: '2011 - 2012',
    description: 'Completed advanced courses in modern web development technologies.',
  },
];

const resume = {
  experience,
  education,
};

export default resume;
