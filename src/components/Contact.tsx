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
          action='https://formsubmit.co/malinjr07@gmail.com'
          method='post'
          className='mt-[120px] flex w-full flex-col items-start justify-start gap-14 md:w-[610px]'
        >
          <input
            type='text'
            name='name'
            id=''
            required
            placeholder='Enter your name*'
            className='w-full border-0 border-b-4 border-l-4 border-black bg-transparent px-4 py-2 tracking-widest placeholder:uppercase placeholder:text-gray-500 '
          />
          <input
            type='email'
            name='email'
            id=''
            required
            placeholder='enter your email*'
            className='w-full border-0 border-b-4 border-l-4 border-black bg-transparent px-4 py-2 tracking-widest placeholder:uppercase placeholder:text-gray-500 '
          />
          <input
            type='text'
            name='_subject'
            placeholder='Querying About'
            className='w-full border-0 border-b-4 border-l-4 border-black bg-transparent px-4 py-2 tracking-widest placeholder:uppercase placeholder:text-gray-500 '
          />
          <textarea
            name='message'
            id=''
            required
            rows={7}
            placeholder='your message*'
            className='w-full border-0 border-b-4 border-l-4 border-black bg-transparent px-4 py-2 tracking-widest placeholder:uppercase placeholder:text-gray-500 '
          />
          <input
            type='hidden'
            name='_next'
            value='https://malinjr07.vercel.app/'
          />
          <input type='hidden' name='_cc' value='devfirmltd@gmail.com' />
          <input type='hidden' name='_captcha' value='false' />
          <button
            type='submit'
            className='mx-auto border-0 border-x-4 border-black px-5 text-base font-bold uppercase tracking-widest '
          >
            submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;

