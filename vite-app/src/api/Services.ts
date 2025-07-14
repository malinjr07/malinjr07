// Service data for the application

import { Service } from 'types';
import simg1 from '../images/service-single/img-1.jpg';
import simg2 from '../images/service-single/img-2.jpg';

import icon1 from '../images/service/1.svg';
import icon2 from '../images/service/2.svg';
import icon3 from '../images/service/3.svg';
import icon4 from '../images/service/4.svg';
import icon5 from '../images/service/5.svg';
import icon6 from '../images/service/6.svg';

const services: Service[] = [
  {
    id: 1,
    title: 'Web Design',
    slug: 'web-design',
    icon: icon1 as unknown as string,
    description:
      'Creating beautiful, responsive websites that work seamlessly across all devices.',
    sSImg: simg1,
    image: simg1,
  },
  {
    id: 2,
    title: 'Web Development',
    slug: 'web-development',
    icon: icon2 as unknown as string,
    description:
      'Building robust and scalable web applications with modern technologies.',
    sSImg: simg2,
    image: simg2,
  },
  {
    id: 3,
    title: 'UI/UX Design',
    slug: 'ui-ux-design',
    icon: icon3 as unknown as string,
    description:
      'Designing intuitive and engaging user experiences that drive user satisfaction.',
    sSImg: simg2,
    image: simg2,
  },
  {
    id: 4,
    title: 'Mobile App Development',
    slug: 'mobile-app-development',
    icon: icon4 as unknown as string,
    description:
      'Creating cross-platform mobile applications with React Native.',
    sSImg: simg1,
    image: simg1,
  },
  {
    id: 5,
    title: 'E-commerce Solutions',
    slug: 'e-commerce-solutions',
    icon: icon5 as unknown as string,
    description:
      'Building online stores with secure payment gateways and inventory management.',
    sSImg: simg2,
    image: simg2,
  },
  {
    id: 6,
    title: 'SEO & Digital Marketing',
    slug: 'seo-digital-marketing',
    icon: icon6 as unknown as string,
    description:
      'Improving online visibility and driving traffic through SEO and marketing strategies.',
    sSImg: simg2,
    image: simg2,
  },
];

export default services;

