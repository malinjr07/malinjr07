import { portfolioArr } from '@/utils/static/portfolio';
import { portfolioItem } from '@/utils/types';
import React, { FC } from 'react';
import PortfolioItem from './PortfolioItem';
import SectionTitle from './SectionTitle';

const Portfolio: FC = () => {
  return (
    <section className=' flex w-full flex-col items-center py-28'>
      <SectionTitle title='portfolio' />
      <div className='flex w-full flex-row flex-wrap items-start justify-center bg-[#1A1A1A] py-3 '>
        {portfolioArr.map((item: portfolioItem, i: number) => (
          <PortfolioItem key={i} {...item} />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;

