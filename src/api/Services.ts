export interface Service {
  id: number;
  slug: string;
  icon: string;
  title: string;
  description: string;
  details: string;
  features: string[];
}

export const Services: Service[] = [
  {
    id: 1,
    slug: 'business-law',
    icon: '/images/icons/briefcase.svg',
    title: 'Business Law',
    description: 'Expert legal advice for all your business needs',
    details: 'Comprehensive legal services for businesses of all sizes, including formation, contracts, and compliance.',
    features: [
      'Business Formation & Structuring',
      'Contract Drafting & Review',
      'Corporate Governance',
      'Mergers & Acquisitions',
      'Compliance & Regulatory Matters'
    ]
  },
  {
    id: 2,
    slug: 'family-law',
    icon: '/images/icons/family.svg',
    title: 'Family Law',
    description: 'Compassionate legal support for family matters',
    details: 'Guidance through divorce, child custody, and other family-related legal issues with care and expertise.',
    features: [
      'Divorce & Separation',
      'Child Custody & Support',
      'Adoption',
      'Prenuptial Agreements',
      'Domestic Violence Cases'
    ]
  },
  {
    id: 3,
    slug: 'criminal-defense',
    icon: '/images/icons/scales.svg',
    title: 'Criminal Defense',
    description: 'Strong defense for criminal charges',
    details: 'Aggressive representation to protect your rights and achieve the best possible outcome for your case.',
    features: [
      'DUI/DWI Defense',
      'Drug Crimes',
      'Theft & Fraud',
      'Violent Crimes',
      'White Collar Crimes'
    ]
  },
  {
    id: 4,
    slug: 'real-estate-law',
    icon: '/images/icons/house.svg',
    title: 'Real Estate Law',
    description: 'Expert guidance for property transactions',
    details: 'Comprehensive legal services for buying, selling, and managing real estate properties.',
    features: [
      'Residential & Commercial Transactions',
      'Lease Agreements',
      'Title Issues',
      'Zoning & Land Use',
      'Real Estate Litigation'
    ]
  },
  {
    id: 5,
    slug: 'estate-planning',
    icon: '/images/icons/will.svg',
    title: 'Estate Planning',
    description: 'Secure your legacy with proper planning',
    details: 'Comprehensive estate planning to protect your assets and ensure your wishes are carried out.',
    features: [
      'Wills & Trusts',
      'Power of Attorney',
      'Healthcare Directives',
      'Probate & Trust Administration',
      'Estate Tax Planning'
    ]
  },
  {
    id: 6,
    slug: 'immigration-law',
    icon: '/images/icons/passport.svg',
    title: 'Immigration Law',
    description: 'Navigating the complex immigration process',
    details: 'Expert guidance through visa applications, green cards, citizenship, and deportation defense.',
    features: [
      'Work & Student Visas',
      'Family-Based Immigration',
      'Citizenship & Naturalization',
      'Asylum & Refugee Status',
      'Deportation Defense'
    ]
  }
];
