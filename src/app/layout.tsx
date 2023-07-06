import './globals.css';
import { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/react';
import 'swiper/css';
import { raleway } from './fonts';
import '../fontawesome/css/all.min.css';

export const metadata: Metadata = {
  title: 'Mosaddik Ali Maruf - Front-End Developer',
  description: `Welcome to my portfolio! I'm Mosaddik Ali Maruf, a skilled Front-End Web Application Developer with a passion for crafting exceptional user experiences. With a solid track record of three years as a successful freelancer on Upwork and valuable experience working with mDoc, Uptechunt, and Flerr, I bring a wealth of expertise to the table.

My portfolio showcases a diverse range of projects where I have leveraged my expertise in React.js, TypeScript, Next.js, Rest API, Material UI, Tailwind CSS, GraphQL, Stripe, and various Third Party APIs. From developing visually stunning interfaces to seamlessly integrating APIs and creating smooth animations using Framer Motion and React Spring, my work reflects a strong dedication to delivering high-quality and impactful web applications.

Throughout my journey, I have collaborated with clients of various industries and sizes, ensuring that their specific needs and goals are met. My ability to transform complex ideas into elegant and intuitive designs sets me apart, and my eye for detail ensures pixel-perfect precision in every project I undertake.

Beyond technical skills, I prioritize effective communication and collaborative teamwork. I thrive in agile environments and excel at delivering exceptional results under tight deadlines. Clients appreciate my ability to adapt quickly and my unwavering commitment to their satisfaction.

I invite you to explore my portfolio and witness the projects that highlight my creativity, problem-solving abilities, and commitment to excellence. Each project demonstrates my expertise in creating seamless user experiences, optimizing performance, and utilizing the latest technologies to deliver exceptional results.

If you're looking for a Front-End Web Application Developer who can bring your digital vision to life, I would be thrilled to discuss how I can contribute to your next project. Let's connect and explore the possibilities of creating remarkable web experiences that captivate your users and drive your business forward.

Thank you for visiting my portfolio, and I look forward to the opportunity of working together!`,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={raleway.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}

