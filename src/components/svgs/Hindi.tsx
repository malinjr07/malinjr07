import { svgComponentProps } from '@/utils/types';
import Image from 'next/image';
import React, { FC } from 'react';

const Hindi: FC<svgComponentProps> = ({ width, height }) => {
  return (
    <div className={`relative`} style={{ width, height }}>
      <Image
        src={'/hindi.svg'}
        alt='devops image'
        fill
        className='object-contain'
      />
    </div>
  );
};

export default Hindi;

