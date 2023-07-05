import { svgComponentProps } from '@/utils/types';
import Image from 'next/image';
import React, { FC } from 'react';

const DevOps: FC<svgComponentProps> = ({ width, height }) => {
  return (
    <div className={`relative`} style={{ width, height }}>
      <Image
        src={'/devops.png'}
        alt='devops image'
        fill
        className='object-contain'
      />
    </div>
  );
};

export default DevOps;

