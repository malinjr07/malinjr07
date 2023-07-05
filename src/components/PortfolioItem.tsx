import { portfolioItem } from '@/utils/types';
import Image from 'next/image';
import React, { FC } from 'react';

const PortfolioItem: FC<portfolioItem> = ({
  img,
  usedTechs,
  portfolioTitle,
  description,
}) => {
  return (
    <div className='relative h-[400px] w-1/3 '>
      <Image
        src={img[0]}
        alt={portfolioTitle + ' banner image'}
        fill
        className='object-cover'
      />
    </div>
  );
};

export default PortfolioItem;

