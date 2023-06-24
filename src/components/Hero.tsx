import Image from 'next/image';
import Link from 'next/link';
import React, { FC } from 'react';

const Hero: FC = () => {
  return (
    <section className='mt-10'>
      <div className='flex flex-col justify-start items-start pl-64 pt-56 font-bold'>
        <h2 className='text-[40px] '>Hi, I am</h2>
        <h1 className='text-6xl mt-14'>Mosaddik Ali Maruf</h1>
        <h3 className='text-2xl text-[#909090] '>
          Front-End Web Developer (React.js) <br /> React Native Mobile App
          developer
        </h3>
        <div className='flex justify-between items-center gap-8 mt-32'>
          <a
            href='mailto:malinjr07@gmail.com'
            target='_blank'
            className='bg-[#c4c4c4] text-black links text-4xl px-3 py-2 '
          >
            <i className='fa-solid fa-at'></i>
          </a>
          <a
            href='https://github.com/malinjr07'
            target='_blank'
            className='bg-[#c4c4c4] text-black links text-4xl px-3 py-2 '
          >
            <i className='fa-brands fa-github'></i>
          </a>
          <a
            href='https://www.linkedin.com/in/malinjr07/'
            target='_blank'
            className='bg-[#c4c4c4] text-black links text-4xl px-3 py-2 '
          >
            <i className='fa-brands fa-linkedin'></i>
          </a>
        </div>
      </div>
      <div className='main-hero absolute top-0 right-0 z-10 w-[1008px] h-[880px] bg-[#071420]'>
        <Image
          src='/hero.png'
          alt="Maruf's Photo"
          fill
          className='object-contain mt-10 '
        />
      </div>
    </section>
  );
};

export default Hero;

