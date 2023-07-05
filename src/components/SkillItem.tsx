import { skillObj } from '@/utils/types';
import React, { FC } from 'react';

const SkillItem: FC<skillObj> = ({ title, icon }) => {
  return (
    <div className='my-16 flex w-1/4 min-w-[150px] flex-col items-center justify-center gap-4'>
      {icon({ width: '100px', height: '100px' })}
      <p className='text-center text-2xl uppercase tracking-[3.5px] text-black '>
        {title}
      </p>
    </div>
  );
};

export default SkillItem;

