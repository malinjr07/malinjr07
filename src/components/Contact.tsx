'use client';

import React, { FC } from 'react';
import SectionTitle from './SectionTitle';

const Contact: FC = () => {
  const sectionDescription: string = `Unlock the potential of your projects with a seamless collaboration.
          Reach out to me and let's ignite creativity, transform ideas into
          captivating experiences, and make your vision a remarkable reality.
          Don't hesitate to take the first step and connect with me today for an
          extraordinary journey of innovation and success.`;
  return (
    <section className=' flex w-full flex-col items-center py-28'>
      <SectionTitle title='Contact' />
      <div className='container flex flex-col items-center justify-center py-3 '>
        <div className='max-w-5xl'>
          <h4 className='text-center text-base'>{sectionDescription}</h4>
        </div>
        <form
          onSubmit={() => {}}
          method='post'
          className='mt-[120px] flex w-[610px] flex-col items-start justify-start gap-14'
        >
          <input
            type='text'
            name='user name'
            id=''
            required
            placeholder='Enter your name*'
            className='w-full border-0 border-b-4 border-l-4 border-black bg-transparent px-4 py-2 tracking-widest placeholder:uppercase placeholder:text-gray-500 '
          />
          <input
            type='email'
            name='user email'
            id=''
            required
            placeholder='Enter your email*'
            className='w-full border-0 border-b-4 border-l-4 border-black bg-transparent px-4 py-2 tracking-widest placeholder:uppercase placeholder:text-gray-500 '
          />
        </form>
      </div>
    </section>
  );
};

export default Contact;

