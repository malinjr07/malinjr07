import { skillObj } from '@/utils/types';
import React, { FC } from 'react';

const SkillItem: FC<skillObj> = ({ title, icon }) => {
  return (
    <div className='flex justify-center items-center gap-4 flex-col w-1/4 min-w-[150px] my-16'>
      {icon({ width: '100px', height: '100px' })}
      <p className='text-black text-2xl tracking-[3.5px] uppercase text-center '>
        {title}
      </p>
    </div>
  );
};

export default SkillItem;

