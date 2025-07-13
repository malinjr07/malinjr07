import { Service } from '../types/api';

// Import images
import simg1 from '../images/service/img-1.jpg';
import simg2 from '../images/service/img-2.jpg';
import simg3 from '../images/service/img-3.jpg';

// Import icons
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
    icon: icon1,
    description: 'Creating beautiful, responsive websites that work seamlessly across all devices.',
    image: simg1,
  },
  {
    id: 2,
    title: 'Web Development',
    icon: icon2,
    description: 'Building robust and scalable web applications with modern technologies.',
    image: simg2,
  },
  {
    id: 3,
    title: 'UI/UX Design',
    icon: icon3,
    description: 'Designing intuitive and engaging user experiences that drive user satisfaction.',
    image: simg3,
  },
  {
    id: 4,
    title: 'Mobile App Development',
    icon: icon4,
    description: 'Creating cross-platform mobile applications with React Native.',
    image: simg1,
  },
  {
    id: 5,
    title: 'E-commerce Solutions',
    icon: icon5,
    description: 'Building online stores with secure payment gateways and inventory management.',
    image: simg2,
  },
  {
    id: 6,
    title: 'SEO & Digital Marketing',
    icon: icon6,
    description: 'Improving online visibility and driving traffic through SEO and marketing strategies.',
    image: simg3,
  },
];

export default services;
