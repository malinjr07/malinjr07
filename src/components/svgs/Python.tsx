import { svgComponentProps } from '@/utils/types';
import Image from 'next/image';
import React, { FC } from 'react';

const Python: FC<svgComponentProps> = ({ width, height }) => {
  return (
    <div className={`relative`} style={{ width, height }}>
      <Image
        src={'/python.svg'}
        alt='Python Logo'
        fill
        sizes='100%'
        className='object-contain'
      />
    </div>
  );
};

export default Python;

