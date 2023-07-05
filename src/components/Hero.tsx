import Image from 'next/image';
import Link from 'next/link';
import React, { FC } from 'react';

const Hero: FC = () => {
  return (
    <section className='mt-10'>
      <div className='flex flex-col items-start justify-start pl-64 pt-56 font-bold'>
        <h2 className='text-[40px] '>Hi, I am</h2>
        <h1 className='mt-14 text-6xl'>Mosaddik Ali Maruf</h1>
        <h3 className='text-2xl text-[#909090] '>
          Front-End Web Developer (React.js) <br /> React Native Mobile App
          developer
        </h3>
        <div className='mt-32 flex items-center justify-between gap-8'>
          <a
            href='mailto:malinjr07@gmail.com'
            target='_blank'
            className='links bg-[#c4c4c4] px-3 py-2 text-4xl text-black '
          >
            <i className='fa-solid fa-at'></i>
          </a>
          <a
            href='https://github.com/malinjr07'
            target='_blank'
            className='links bg-[#c4c4c4] px-3 py-2 text-4xl text-black '
          >
            <i className='fa-brands fa-github'></i>
          </a>
          <a
            href='https://www.linkedin.com/in/malinjr07/'
            target='_blank'
            className='links bg-[#c4c4c4] px-3 py-2 text-4xl text-black '
          >
            <i className='fa-brands fa-linkedin'></i>
          </a>
        </div>
      </div>
      <div className='main-hero absolute right-0 top-0 z-10 h-[880px] w-[1008px] bg-[#071420]'>
        <Image
          src='/hero.png'
          alt="Maruf's Photo"
          fill
          className='mt-10 object-contain '
        />
      </div>
    </section>
  );
};

export default Hero;

