import React, { FC } from 'react';
import SectionTitle from './SectionTitle';

const Portfolio: FC = () => {
  return (
    <section className=' flex w-full flex-col items-center py-28'>
      <SectionTitle title='portfolio' />
      <div className='flex w-full flex-row flex-wrap items-start justify-start bg-[#1A1A1A] py-3 '></div>
    </section>
  );
};

export default Portfolio;

