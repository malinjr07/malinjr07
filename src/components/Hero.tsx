import Image from 'next/image';
import Link from 'next/link';
import React, { FC } from 'react';

const Hero: FC = () => {
  return (
    <section className='flex flex-col items-start justify-start '>
      <div className='main-hero relative right-0 top-0 z-10 h-[350px] w-full bg-[#071420] lg:absolute lg:h-[880px] lg:w-[1008px]'>
        <Image
          src='/hero.png'
          alt="Maruf's Photo"
          fill
          sizes='100%'
          className='m-0 object-contain lg:mt-10 '
        />
      </div>{' '}
      <div className='flex flex-col items-start justify-start p-0 font-bold lg:pl-64 lg:pt-56'>
        <h2 className='text-[40px] '>Hi, I am</h2>
        <h1 className='my-3 text-4xl md:mt-7 lg:mt-14 lg:text-6xl'>
          Mosaddik Ali Maruf
        </h1>
        <h3 className='text-[#909090] md:text-lg lg:text-2xl '>
          Front-End Web Developer (React.js) <br /> React Native Mobile App
          developer
        </h3>
        <div className='mt-10 flex items-center justify-between gap-8 md:mt-20 lg:mt-32'>
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
    </section>
  );
};

export default Hero;

