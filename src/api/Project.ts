export interface Project {
  id: number;
  slug: string;
  title: string;
  subtitle: string;
  image: string;
  category: string[];
  client?: string;
  date?: string;
  description?: string;
  challenges?: string[];
  solutions?: string[];
  technologies?: string[];
  gallery?: string[];
}

export const PortfolioItems: Project[] = [
  {
    id: 1,
    slug: 'business-law-case',
    title: 'Business Law Case',
    subtitle: 'Corporate Legal Advisory',
    image: '/images/portfolio/1.jpg',
    category: ['business', 'legal'],
    client: 'ABC Corporation',
    date: 'January 2023',
    description: 'Provided comprehensive legal advisory services for a major corporate restructuring.',
    challenges: [
      'Complex regulatory compliance requirements',
      'Stakeholder management across multiple jurisdictions',
      'Tight deadlines for restructuring completion'
    ],
    solutions: [
      'Developed a phased compliance strategy',
      'Coordinated with international legal teams',
      'Implemented efficient document management system'
    ],
    technologies: ['Legal Research', 'Contract Law', 'Corporate Governance'],
    gallery: [
      '/images/portfolio/1.jpg',
      '/images/portfolio/2.jpg',
      '/images/portfolio/3.jpg'
    ]
  },
  {
    id: 2,
    slug: 'family-law-case',
    title: 'Family Law Settlement',
    subtitle: 'Divorce & Child Custody',
    image: '/images/portfolio/2.jpg',
    category: ['family', 'legal'],
    client: 'Confidential',
    date: 'March 2023',
    description: 'Successfully negotiated a fair settlement in a high-conflict divorce case.',
    challenges: [
      'High emotional tension between parties',
      'Complex asset division',
      'Child custody arrangements'
    ],
    solutions: [
      'Mediation and conflict resolution',
      'Comprehensive asset evaluation',
      'Child-focused custody plan'
    ],
    technologies: ['Mediation', 'Family Law', 'Conflict Resolution']
  },
  {
    id: 3,
    slug: 'criminal-defense-win',
    title: 'Criminal Defense Victory',
    subtitle: 'Acquittal in Major Case',
    image: '/images/portfolio/3.jpg',
    category: ['criminal', 'legal'],
    client: 'Confidential',
    date: 'June 2023',
    description: 'Successfully defended client against serious criminal charges, resulting in full acquittal.',
    challenges: [
      'Substantial evidence against client',
      'High-profile case with media attention',
      'Complex legal technicalities'
    ],
    solutions: [
      'Thorough evidence review and analysis',
      'Expert witness testimony',
      'Strategic defense planning'
    ],
    technologies: ['Criminal Law', 'Trial Advocacy', 'Evidence Analysis']
  },
  {
    id: 4,
    slug: 'real-estate-transaction',
    title: 'Major Real Estate Deal',
    subtitle: 'Commercial Property Acquisition',
    image: '/images/portfolio/4.jpg',
    category: ['real-estate', 'business'],
    client: 'Prime Properties LLC',
    date: 'August 2023',
    description: 'Facilitated a multi-million dollar commercial real estate transaction.',
    challenges: [
      'Complex zoning requirements',
      'Title issues',
      'Negotiation with multiple stakeholders'
    ],
    solutions: [
      'Comprehensive due diligence',
      'Strategic negotiation planning',
      'Efficient closing process'
    ],
    technologies: ['Real Estate Law', 'Contract Negotiation', 'Title Search']
  },
  {
    id: 5,
    slug: 'estate-planning-case',
    title: 'Comprehensive Estate Plan',
    subtitle: 'Wealth Preservation',
    image: '/images/portfolio/5.jpg',
    category: ['estate', 'planning'],
    client: 'Confidential',
    date: 'October 2023',
    description: 'Developed a comprehensive estate plan for high-net-worth individuals.',
    challenges: [
      'Complex family dynamics',
      'Tax optimization requirements',
      'Multi-jurisdictional assets'
    ],
    solutions: [
      'Customized trust structures',
      'Tax-efficient distribution plans',
      'Clear succession planning'
    ],
    technologies: ['Estate Planning', 'Tax Law', 'Trust Administration']
  },
  {
    id: 6,
    slug: 'immigration-case',
    title: 'Successful Immigration Case',
    subtitle: 'Work Visa Approval',
    image: '/images/portfolio/6.jpg',
    category: ['immigration'],
    client: 'Tech Talent Inc.',
    date: 'December 2023',
    description: 'Successfully obtained work visas for highly skilled professionals.',
    challenges: [
      'Strict documentation requirements',
      'Tight deadlines',
      'Complex eligibility criteria'
    ],
    solutions: [
      'Thorough document preparation',
      'Strategic application timing',
      'Compliance with immigration regulations'
    ],
    technologies: ['Immigration Law', 'Visa Processing', 'Regulatory Compliance']
  }
];
