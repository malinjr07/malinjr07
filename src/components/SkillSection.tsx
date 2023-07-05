import { skillListObj, skillObj } from '@/utils/types';
import React, { FC } from 'react';
import SkillItem from './SkillItem';

const SkillSection: FC<skillListObj> = ({ skillTitle, skillList }) => {
  return (
    <section className='flex w-full lg:w-[1004px] flex-col items-start justify-start gap-[10px]  '>
      <h3 className='text-3xl uppercase tracking-[5px] text-black '>
        {skillTitle}
      </h3>
      <div className='flex w-full flex-row flex-wrap items-start justify-start  '>
        {skillList.map((item: skillObj, i: number) => (
          <SkillItem key={i} {...item} />
        ))}
      </div>
    </section>
  );
};

export default SkillSection;

