import { skillObj } from '@/utils/types';
import React, { FC } from 'react';

const SkillItem: FC<skillObj> = ({ title, icon }) => {
  return (
    <div className='my-10 flex w-1/2 min-w-[150px] flex-col items-center justify-center gap-4 lg:my-16 lg:w-1/4'>
      {icon({ width: '100px', height: '100px' })}
      <p className='text-center text-2xl uppercase tracking-[3.5px] text-black '>
        {title}
      </p>
    </div>
  );
};

export default SkillItem;

