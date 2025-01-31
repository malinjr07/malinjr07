import Airplane from '@/components/core/svg/Airplane';
import Bed from '@/components/core/svg/Bed';
import { tHeaderArr } from '../types';

import PImg1 from '/images/portfolio/1.jpg';
import PImg2 from '/images/portfolio/4.jpg';
import PImg3 from '/images/portfolio/3.jpg';
import PImg4 from '/images/portfolio/2.jpg';
import PImg5 from '/images/portfolio/img-1.jpg';
import PImg6 from '/images/portfolio/img-2.jpg';
import PImg7 from '/images/portfolio/img-3.jpg';
import PImg8 from '/images/portfolio/img-4.jpg';
import PImg9 from '/images/portfolio/lw-1.jpg';
import PImg10 from '/images/portfolio/lw-2.jpg';
import PImg11 from '/images/portfolio/lw-3.jpg';
import PImg12 from '/images/portfolio/lw-4.jpg';
import PImg13 from '/images/portfolio/cn-1.jpg';
import PImg14 from '/images/portfolio/cn-2.jpg';
import PImg15 from '/images/portfolio/cn-3.jpg';
import PImg16 from '/images/portfolio/cn-4.jpg';

import simg1 from '/images/service/img-1.jpg';
import simg2 from '/images/service/img-2.jpg';
import simg3 from '/images/service/img-3.jpg';

import sSimg1 from '/images/service-single/s1.jpg';
import sSimg2 from '/images/service-single/s2.jpg';
import sSimg3 from '/images/service-single/s3.jpg';
import sSimg4 from '/images/service-single/s4.jpg';
import sSimg5 from '/images/service-single/s5.jpg';
import sSimg6 from '/images/service-single/s6.jpg';
import sSimg7 from '/images/service-single/s7.jpg';
import sSimg8 from '/images/service-single/s8.jpg';
import sSimg9 from '/images/service-single/s9.jpg';
import sSimg10 from '/images/service-single/s10.jpg';
import sSimg11 from '/images/service-single/s11.jpg';
import sSimg12 from '/images/service-single/s12.jpg';
import sSimg13 from '/images/service-single/s13.jpg';
import sSimg14 from '/images/service-single/s14.jpg';
import sSimg15 from '/images/service-single/s15.jpg';
import sSimg16 from '/images/service-single/s16.jpg';
import sSimg17 from '/images/service-single/s17.jpg';
import sSimg18 from '/images/service-single/s18.jpg';
import sSimg19 from '/images/service-single/s19.jpg';
import sSimg20 from '/images/service-single/s20.jpg';
import sSimg21 from '/images/service-single/s21.jpg';
import sSimg22 from '/images/service-single/s22.jpg';
import sSimg23 from '/images/service-single/s23.jpg';
import sSimg24 from '/images/service-single/s1.jpg';
import sSimg25 from '/images/service-single/s1.jpg';
import sSimg26 from '/images/service-single/s1.jpg';
import sSimg27 from '/images/service-single/s1.jpg';
import sSimg28 from '/images/service-single/s1.jpg';
import sSimg29 from '/images/service-single/s1.jpg';

import icon1 from '/images/service/1.svg';
import icon2 from '/images/service/2.svg';
import icon3 from '/images/service/3.svg';
import icon4 from '/images/service/4.svg';
import icon5 from '/images/service/5.svg';
import icon6 from '/images/service/6.svg';
import icon7 from '/images/service/1.svg';
import icon8 from '/images/service/2.svg';
import icon9 from '/images/service/3.svg';
import icon10 from '/images/service/lw1.svg';
import icon11 from '/images/service/lw2.svg';
import icon12 from '/images/service/lw3.svg';
import icon13 from '/images/service/lw4.svg';
import icon14 from '/images/service/lw5.svg';
import icon15 from '/images/service/lw6.svg';
import icon16 from '/images/service/fi1.svg';
import icon17 from '/images/service/fi2.svg';
import icon18 from '/images/service/fi3.svg';
import icon19 from '/images/service/fi4.svg';
import icon20 from '/images/service/fi5.svg';
import icon21 from '/images/service/fi6.svg';
import icon22 from '/images/service/fi7.svg';
import icon23 from '/images/service/fi8.svg';
import icon24 from '/images/service/cn1.svg';
import icon25 from '/images/service/cn2.svg';
import icon26 from '/images/service/cn3.svg';
import icon27 from '/images/service/cn4.svg';
import icon28 from '/images/service/cn5.svg';
import icon29 from '/images/service/cn6.svg';

import blogImg1 from '/images/blog/1.jpg';
import blogImg2 from '/images/blog/2.jpg';

import blogSingleImg1 from '/images/blog/img-5.jpg';
import blogSingleImg2 from '/images/blog/img-4.jpg';

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

