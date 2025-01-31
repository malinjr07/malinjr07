import Airplane from '@/components/core/svg/Airplane';
import Bed from '@/components/core/svg/Bed';
import { tHeaderArr } from '../types';

const PImg1 = '/images/portfolio/1.jpg';
const PImg2 = '/images/portfolio/4.jpg';
const PImg3 = '/images/portfolio/3.jpg';
const PImg4 = '/images/portfolio/2.jpg';
const PImg5 = '/images/portfolio/img-1.jpg';
const PImg6 = '/images/portfolio/img-2.jpg';
const PImg7 = '/images/portfolio/img-3.jpg';
const PImg8 = '/images/portfolio/img-4.jpg';
const PImg9 = '/images/portfolio/lw-1.jpg';
const PImg10 = '/images/portfolio/lw-2.jpg';
const PImg11 = '/images/portfolio/lw-3.jpg';
const PImg12 = '/images/portfolio/lw-4.jpg';
const PImg13 = '/images/portfolio/cn-1.jpg';
const PImg14 = '/images/portfolio/cn-2.jpg';
const PImg15 = '/images/portfolio/cn-3.jpg';
const PImg16 = '/images/portfolio/cn-4.jpg';

const simg1 = '/images/service/img-1.jpg';
const simg2 = '/images/service/img-2.jpg';
const simg3 = '/images/service/img-3.jpg';

const sSimg1 = '/images/service-single/s1.jpg';
const sSimg2 = '/images/service-single/s2.jpg';
const sSimg3 = '/images/service-single/s3.jpg';
const sSimg4 = '/images/service-single/s4.jpg';
const sSimg5 = '/images/service-single/s5.jpg';
const sSimg6 = '/images/service-single/s6.jpg';
const sSimg7 = '/images/service-single/s7.jpg';
const sSimg8 = '/images/service-single/s8.jpg';
const sSimg9 = '/images/service-single/s9.jpg';
const sSimg10 = '/images/service-single/s10.jpg';
const sSimg11 = '/images/service-single/s11.jpg';
const sSimg12 = '/images/service-single/s12.jpg';
const sSimg13 = '/images/service-single/s13.jpg';
const sSimg14 = '/images/service-single/s14.jpg';
const sSimg15 = '/images/service-single/s15.jpg';
const sSimg16 = '/images/service-single/s16.jpg';
const sSimg17 = '/images/service-single/s17.jpg';
const sSimg18 = '/images/service-single/s18.jpg';
const sSimg19 = '/images/service-single/s19.jpg';
const sSimg20 = '/images/service-single/s20.jpg';
const sSimg21 = '/images/service-single/s21.jpg';
const sSimg22 = '/images/service-single/s22.jpg';
const sSimg23 = '/images/service-single/s23.jpg';
const sSimg24 = '/images/service-single/s1.jpg';
const sSimg25 = '/images/service-single/s1.jpg';
const sSimg26 = '/images/service-single/s1.jpg';
const sSimg27 = '/images/service-single/s1.jpg';
const sSimg28 = '/images/service-single/s1.jpg';
const sSimg29 = '/images/service-single/s1.jpg';

const icon1 = '/images/service/1.svg';
const icon2 = '/images/service/2.svg';
const icon3 = '/images/service/3.svg';
const icon4 = '/images/service/4.svg';
const icon5 = '/images/service/5.svg';
const icon6 = '/images/service/6.svg';
const icon7 = '/images/service/1.svg';
const icon8 = '/images/service/2.svg';
const icon9 = '/images/service/3.svg';
const icon10 = '/images/service/lw1.svg';
const icon11 = '/images/service/lw2.svg';
const icon12 = '/images/service/lw3.svg';
const icon13 = '/images/service/lw4.svg';
const icon14 = '/images/service/lw5.svg';
const icon15 = '/images/service/lw6.svg';
const icon16 = '/images/service/fi1.svg';
const icon17 = '/images/service/fi2.svg';
const icon18 = '/images/service/fi3.svg';
const icon19 = '/images/service/fi4.svg';
const icon20 = '/images/service/fi5.svg';
const icon21 = '/images/service/fi6.svg';
const icon22 = '/images/service/fi7.svg';
const icon23 = '/images/service/fi8.svg';
const icon24 = '/images/service/cn1.svg';
const icon25 = '/images/service/cn2.svg';
const icon26 = '/images/service/cn3.svg';
const icon27 = '/images/service/cn4.svg';
const icon28 = '/images/service/cn5.svg';
const icon29 = '/images/service/cn6.svg';

const blogImg1 = '/images/blog/1.jpg';
const blogImg2 = '/images/blog/2.jpg';

const blogSingleImg1 = '/images/blog/img-5.jpg';
const blogSingleImg2 = '/images/blog/img-4.jpg';

export const headerArr: tHeaderArr[] = [
  {
    slug: '/search-flights',
    title: 'find flight',
    icon: (fillColor?: string) => <Airplane fillColor={fillColor} />,
  },
  {
    slug: '/search-hotels',
    title: 'find stays',
    icon: (fillColor?: string) => <Bed fillColor={fillColor} />,
  },
];

export const staticServices = [
  {
    Id: '01',
    sSImg: sSimg1,
    icon: icon1,
    title: 'Website Design',
    slug: 'Website-Design',
    description: 'I have complete 125+ websitedesign for my happy clients.',
  },
  {
    Id: '02',
    sSImg: sSimg2,
    icon: icon2,
    title: 'Mobile App Design',
    slug: 'Mobile-App-Design',
    description: 'I have complete 125+ websitedesign for my happy clients.',
  },
  {
    Id: '03',
    sSImg: sSimg3,
    icon: icon3,
    title: 'Web App Design',
    slug: 'Web-App-Design',
    description: 'I have complete 125+ websitedesign for my happy clients.',
  },
  {
    Id: '04',
    sSImg: sSimg4,
    icon: icon4,
    title: 'Branding Design',
    slug: 'Branding-Design',
    description: 'I have complete 125+ websitedesign for my happy clients.',
  },
  {
    Id: '05',
    sSImg: sSimg5,
    icon: icon5,
    title: 'Graphic Design',
    slug: 'Graphic-Design',
    description: 'I have complete 125+ websitedesign for my happy clients.',
  },
  {
    Id: '06',
    sSImg: sSimg6,
    icon: icon6,
    title: 'UX/UI Design',
    slug: 'UX-UI-Design',
    description: 'I have complete 125+ websitedesign for my happy clients.',
  },
  {
    Id: '07',
    sSImg: sSimg7,
    image: simg1,
    icon: icon7,
    title: 'Website Design',
    slug: 'Website-Design-2',
    description: 'I have complete 125+ websitedesign for my happy clients.',
  },
  {
    Id: '08',
    sSImg: sSimg8,
    image: simg2,
    icon: icon8,
    title: 'Mobile App Design',
    slug: 'Mobile-App-Design-2',
    description: 'I have complete 125+ websitedesign for my happy clients.',
  },
  {
    Id: '09',
    sSImg: sSimg9,
    image: simg3,
    icon: icon9,
    title: 'Web App Design',
    slug: 'Web-App-Design-3',
    description: 'I have complete 125+ websitedesign for my happy clients.',
  },
  {
    Id: '10',
    sSImg: sSimg10,
    icon: icon10,
    title: 'Family Law',
    slug: 'Family-Law',
    description: 'I have complete 125+ websitedesign for my happy clients.',
  },
  {
    Id: '11',
    sSImg: sSimg11,
    icon: icon11,
    title: 'Personal Injury',
    slug: 'Personal-Injury',
    description: 'I have complete 125+ websitedesign for my happy clients.',
  },
  {
    Id: '12',
    sSImg: sSimg12,
    icon: icon12,
    title: 'Education Law',
    slug: 'Education-Law',
    description: 'I have complete 125+ websitedesign for my happy clients.',
  },
  {
    Id: '13',
    sSImg: sSimg13,
    image: simg3,
    icon: icon13,
    title: 'Criminal Law',
    slug: 'Criminal-Law',
    description: 'I have complete 125+ websitedesign for my happy clients.',
  },
  {
    Id: '14',
    sSImg: sSimg14,
    image: simg3,
    icon: icon14,
    title: 'Business Law',
    slug: 'Business-Law',
    description: 'I have complete 125+ websitedesign for my happy clients.',
  },
  {
    Id: '15',
    sSImg: sSimg15,
    image: simg3,
    icon: icon15,
    title: 'Real Estate Law',
    slug: 'Real-Estate-Law',
    description: 'I have complete 125+ websitedesign for my happy clients.',
  },
  {
    Id: '16',
    sSImg: sSimg16,
    image: simg3,
    icon: icon16,
    title: 'Cycling',
    slug: 'Cycling',
    description: 'I have complete 125+ websitedesign for my happy clients.',
  },
  {
    Id: '17',
    sSImg: sSimg17,
    image: simg3,
    icon: icon17,
    title: 'Stretching',
    slug: 'Stretching',
    description: 'I have complete 125+ websitedesign for my happy clients.',
  },
  {
    Id: '18',
    sSImg: sSimg18,
    image: simg3,
    icon: icon18,
    title: 'Boxing',
    slug: 'Boxing',
    description: 'I have complete 125+ websitedesign for my happy clients.',
  },
  {
    Id: '19',
    sSImg: sSimg19,
    image: simg3,
    icon: icon19,
    title: 'Swimming',
    slug: 'Swimming',
    description: 'I have complete 125+ websitedesign for my happy clients.',
  },
  {
    Id: '20',
    sSImg: sSimg20,
    image: simg3,
    icon: icon20,
    title: 'Aerobics',
    slug: 'Aerobics',
    description: 'I have complete 125+ websitedesign for my happy clients.',
  },
  {
    Id: '21',
    sSImg: sSimg21,
    image: simg3,
    icon: icon21,
    title: 'Yoga',
    slug: 'Yoga',
    description: 'I have complete 125+ websitedesign for my happy clients.',
  },
  {
    Id: '22',
    sSImg: sSimg22,
    image: simg3,
    icon: icon22,
    title: 'Strength Training',
    slug: 'Strength-Training',
    description: 'I have complete 125+ websitedesign for my happy clients.',
  },
  {
    Id: '23',
    sSImg: sSimg23,
    image: simg3,
    icon: icon23,
    title: 'Flexibility',
    slug: 'Flexibility',
    description: 'I have complete 125+ websitedesign for my happy clients.',
  },
  {
    Id: '24',
    sSImg: sSimg24,
    image: simg3,
    icon: icon24,
    title: 'Lawyer Consulting',
    slug: 'Lawyer-Consulting',
    description: 'I have complete 125+ websitedesign for my happy clients.',
  },
  {
    Id: '25',
    sSImg: sSimg25,
    image: simg3,
    icon: icon25,
    title: 'Financial Consulting',
    slug: 'Financial-Consulting',
    description: 'I have complete 125+ websitedesign for my happy clients.',
  },
  {
    Id: '26',
    sSImg: sSimg26,
    image: simg3,
    icon: icon26,
    title: 'Business Consulting',
    slug: 'Business-Consulting',
    description: 'I have complete 125+ websitedesign for my happy clients.',
  },
  {
    Id: '27',
    sSImg: sSimg27,
    image: simg3,
    icon: icon27,
    title: 'IT Management',
    slug: 'IT-Management',
    description: 'I have complete 125+ websitedesign for my happy clients.',
  },
  {
    Id: '28',
    sSImg: sSimg28,
    image: simg3,
    icon: icon28,
    title: 'Marketing',
    slug: 'Marketing',
    description: 'I have complete 125+ websitedesign for my happy clients.',
  },
  {
    Id: '29',
    sSImg: sSimg29,
    image: simg3,
    icon: icon29,
    title: 'Bank Management',
    slug: 'Bank-Management',
    description: 'I have complete 125+ websitedesign for my happy clients.',
  },
];

export const PortfolioItems = [
  {
    id: 1,
    category: 'app brand',
    image: PImg1,
    title: 'Geometric Shape Design',
    subtitle: 'Brand Design',
    slug: 'Geometric-Shape-Design',
  },
  {
    id: 2,
    category: 'website',
    image: PImg2,
    title: 'Geometric Shape Design',
    subtitle: 'Brand Design',
    slug: 'Geometric-Shape-Design-2',
  },
  {
    id: 3,
    category: 'app webapp brand',
    image: PImg3,
    title: 'Geometric Shape Design',
    subtitle: 'Brand Design',
    slug: 'Geometric-Shape-Design-3',
  },
  {
    id: 4,
    category: 'brand webapp',
    image: PImg4,
    title: 'Geometric Shape Design',
    subtitle: 'Brand Design',
    slug: 'Geometric-Shape-Design-4',
  },
  {
    id: 5,
    category: 'website',
    image: PImg5,
    title: 'Geometric Shape Design',
    subtitle: 'Brand Design',
    slug: 'Geometric-Shape-Design-5',
  },
  {
    id: 6,
    category: 'brand',
    image: PImg6,
    title: 'Geometric Shape Design',
    subtitle: 'Brand Design',
    slug: 'Geometric-Shape-Design-7',
  },
  {
    id: 7,
    category: 'website ',
    image: PImg7,
    title: 'Geometric Shape Design',
    subtitle: 'Brand Design',
    slug: 'Geometric-Shape-Design-7',
  },
  {
    id: 8,
    category: 'brand',
    image: PImg8,
    title: 'Geometric Shape Design',
    subtitle: 'Brand Design',
    slug: 'Geometric-Shape-Design-8',
  },
  {
    id: 9,
    category: 'brand',
    image: PImg9,
    title: 'Geometric Shape Design',
    subtitle: 'Brand Design',
    slug: 'Geometric-Shape-Design-9',
  },
  {
    id: 10,
    category: 'brand',
    image: PImg10,
    title: 'Geometric Shape Design',
    subtitle: 'Brand Design',
    slug: 'Geometric-Shape-Design-10',
  },
  {
    id: 11,
    category: 'brand',
    image: PImg11,
    title: 'Geometric Shape Design',
    subtitle: 'Brand Design',
    slug: 'Geometric-Shape-Design-11',
  },
  {
    id: 12,
    category: 'brand',
    image: PImg12,
    title: 'Geometric Shape Design',
    subtitle: 'Brand Design',
    slug: 'Geometric-Shape-Design-13',
  },
  {
    id: 13,
    category: 'brand',
    image: PImg13,
    title: 'Business Consulting',
    subtitle: 'Business, Finance',
    slug: 'Geometric-Shape-Design-14',
  },
  {
    id: 14,
    category: 'website',
    image: PImg14,
    title: 'Business Consulting',
    subtitle: 'Business, Finance',
    slug: 'Geometric-Shape-Design-15',
  },
  {
    id: 15,
    category: 'brand',
    image: PImg15,
    title: 'Business Consulting',
    subtitle: 'Business, Finance',
    slug: 'Geometric-Shape-Design-16',
  },
  {
    id: 16,
    category: 'website',
    image: PImg16,
    title: 'Business Consulting',
    subtitle: 'Business, Finance',
    slug: 'Geometric-Shape-Design-17',
  },
];

export const blogsData = [
  {
    id: '1',
    type: 'image',
    title: 'How can you Generate Perfect AI Photo',
    slug: '1',
    screens: blogImg1,
    description:
      'Lorem ipsum dolor sit amet consectetur. Sollicitudin congue ac aliquam nunc vulputate sit. Morbi rutrum aliquet est malesuada commodo turpis. Integer semper adipiscing nunc eu tempor. Risus platea id rhoncus sem varius dui nibh tortor dictumst.',
    author: 'Loura Sweety',
    create_at: '25 Sep 2024',
    blogSingleImg: blogSingleImg1,
    comment: '35',
    day: '28',
    month: 'AUGUST',
    blClass: 'format-standard-image',
    animation: '1200',
    tags: ['Website', 'Branding'],
  },
  {
    id: '2',
    title: 'Next Generation will be the Robot User.',
    slug: '2',
    screens: blogImg2,
    description:
      'Lorem ipsum dolor sit amet consectetur. Sollicitudin congue ac aliquam nunc vulputate sit. Morbi rutrum aliquet est malesuada commodo turpis. Integer semper adipiscing nunc eu tempor. Risus platea id rhoncus sem varius dui nibh tortor dictumst.',
    author: 'David Luis',
    create_at: '23 Sep 2024',
    blogSingleImg: blogSingleImg2,
    comment: '80',
    day: '25',
    month: 'March',
    blClass: 'format-standard-image',
    animation: '1400',
    tags: ['Website', 'Branding'],
  },
  {
    type: 'video',
    id: '2',
    title: 'Next Generation will be the Robot User.',
    slug: '3',
    screens: blogImg2,
    description:
      'Lorem ipsum dolor sit amet consectetur. Sollicitudin congue ac aliquam nunc vulputate sit. Morbi rutrum aliquet est malesuada commodo turpis. Integer semper adipiscing nunc eu tempor. Risus platea id rhoncus sem varius dui nibh tortor dictumst.',
    author: 'David Luis',
    create_at: '23 Sep 2024',
    blogSingleImg: blogSingleImg2,
    comment: '80',
    day: '25',
    month: 'March',
    blClass: 'format-standard-image',
    animation: '1400',
    tags: ['Website', 'Branding'],
  },
];

