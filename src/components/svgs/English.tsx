import { svgComponentProps } from '@/utils/types';
import Image from 'next/image';
import React, { FC } from 'react';

const English: FC<svgComponentProps> = ({ width, height }) => {
  return (
    <div className={`relative`} style={{ width, height }}>
      <Image
        src={'/english.svg'}
        alt='devops image'
        fill
        className='object-contain'
      />
    </div>
  );
};

export default English;

