import React, { FC } from 'react';
import SectionTitle from './SectionTitle';

const Portfolio: FC = () => {
  return (
    <section className=' w-full flex items-center flex-col py-28'>
      <SectionTitle title='portfolio' />
      <div className='py-3 flex flex-row justify-start flex-wrap items-start w-full bg-[#1A1A1A] '></div>
    </section>
  );
};

export default Portfolio;

