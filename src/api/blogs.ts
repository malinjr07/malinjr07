import { BlogPost } from '../types/api';

// Import images
import blogImg1 from "../images/blog/1.jpg";
import blogImg2 from "../images/blog/2.jpg";
import blogSingleImg1 from "../images/blog/img-5.jpg";
import blogSingleImg2 from "../images/blog/img-4.jpg";

const blogs: BlogPost[] = [
  {
    id: 1,
    title: 'How can you Generate Perfect AI Photo',
    date: '28 August 2024',
    author: 'Loura Sweety',
    excerpt: 'Learn the secrets behind generating perfect AI photos with our comprehensive guide.',
    image: blogImg1,
    slug: 'how-to-generate-perfect-ai-photo',
    content: 'Lorem ipsum dolor sit amet consectetur. Sollicitudin congue ac aliquam nunc vulputate sit. Morbi rutrum aliquet est malesuada commodo turpis. Integer semper adipiscing nunc eu tempor. Risus platea id rhoncus sem varius dui nibh tortor dictumst.',
    tags: ["AI", "Photography", "Technology"],
    featuredImage: blogSingleImg1,
    comments: 35,
  },
  {
    id: 2,
    title: 'Next Generation will be the Robot User',
    date: '25 March 2024',
    author: 'David Luis',
    excerpt: 'Exploring how robots will shape the future of user interaction and experience.',
    image: blogImg2,
    slug: 'next-generation-robot-user',
    content: 'Lorem ipsum dolor sit amet consectetur. Sollicitudin congue ac aliquam nunc vulputate sit. Morbi rutrum aliquet est malesuada commodo turpis. Integer semper adipiscing nunc eu tempor. Risus platea id rhoncus sem varius dui nibh tortor dictumst.',
    tags: ["Robotics", "Technology", "Future"],
    featuredImage: blogSingleImg2,
    comments: 80,
  },
  {
    id: 3,
    title: 'The Future of Web Development in 2024',
    date: '15 April 2024',
    author: 'Sarah Johnson',
    excerpt: 'Discover the latest trends and technologies shaping the future of web development.',
    image: blogImg1,
    slug: 'future-of-web-development-2024',
    content: 'Lorem ipsum dolor sit amet consectetur. Sollicitudin congue ac aliquam nunc vulputate sit. Morbi rutrum aliquet est malesuada commodo turpis. Integer semper adipiscing nunc eu tempor. Risus platea id rhoncus sem varius dui nibh tortor dictumst.',
    tags: ["Web Development", "Trends", "2024"],
    featuredImage: blogSingleImg1,
    comments: 42,
  },
];

export default blogs;
