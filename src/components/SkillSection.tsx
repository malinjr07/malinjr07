import { skillListObj, skillObj } from '@/utils/types';
import React, { FC } from 'react';
import SkillItem from './SkillItem';

const SkillSection: FC<skillListObj> = ({ skillTitle, skillList }) => {
  return (
    <section className='w-[1004px] flex flex-col justify-start items-start gap-[10px]  '>
      <h3 className='text-black text-3xl tracking-[5px] uppercase '>
        {skillTitle}
      </h3>
      <div className='flex flex-row flex-wrap w-full justify-start items-start  '>
        {skillList.map((item: skillObj, i: number) => (
          <SkillItem key={i} {...item} />
        ))}
      </div>
    </section>
  );
};

export default SkillSection;

