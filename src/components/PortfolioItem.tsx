import { portfolioItem } from '@/utils/types';
import Image from 'next/image';
import React, { FC } from 'react';

const PortfolioItem: FC<portfolioItem> = ({ img, usedTechs, title }) => {
  return (
    <div className='w-1/3 h-[400px] relative '>
      <Image
        src={img[0]}
        alt={title + ' banner image'}
        fill
        className='object-cover'
      />
    </div>
  );
};

export default PortfolioItem;

