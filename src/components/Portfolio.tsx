import { portfolioArr } from '@/utils/static/portfolio';
import { portfolioItem, skillObj } from '@/utils/types';
import React, { FC } from 'react';
import PortfolioItem from './PortfolioItem';
import SectionTitle from './SectionTitle';

const Portfolio: FC = () => {
  return (
    <section className=' flex w-full flex-col items-center py-28'>
      <SectionTitle title='portfolio' />
      <div className='flex w-full flex-row flex-wrap items-start justify-center bg-[#1A1A1A] py-3 '>
        {portfolioArr.map((item: portfolioItem, i: number) => {
          console.log(
            '🚀 ~ file: Portfolio.tsx:13 ~ {portfolio2Arr.map ~ item:',
            item
          );

          return (
            <PortfolioItem
              key={i}
              portfolioTitle={item.portfolioTitle}
              projectUrl={item.projectUrl}
              description={item.description}
              img={item.img}
            >
              <>
                {item.usedTechs.map((item: skillObj | string, i: number) => {
                  if (typeof item === 'string') {
                    return (
                      <div
                        key={i}
                        className='flex h-24 w-[12%] flex-col items-center justify-center gap-4 rounded-2xl border border-cyan-700 bg-cyan-50 '
                      >
                        <p className='text-center text-xs uppercase tracking-[3.5px] text-gray-950 '>
                          {item}
                        </p>
                      </div>
                    );
                  } else {
                    return (
                      <div
                        key={i}
                        className='flex h-24 w-[12%] flex-col items-center justify-center gap-4 rounded-2xl border border-cyan-700 bg-cyan-50 '
                      >
                        {' '}
                        {item.icon({ width: '30px', height: '30px' })}
                        <p className='text-center text-xs uppercase tracking-[3.5px] text-gray-950 '>
                          {item.title}
                        </p>
                      </div>
                    );
                  }
                })}
              </>
            </PortfolioItem>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;

