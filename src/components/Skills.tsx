import { skillLists } from '@/utils/static';
import { skillListObj } from '@/utils/types';
import React, { FC } from 'react';
import SectionTitle from './SectionTitle';
import SkillSection from './SkillSection';

const Skills: FC = () => {
  return (
    <section className='container flex items-center flex-col py-28'>
      <SectionTitle title='skills' />
      <div className=' flex flex-col justify-start items-start gap-[100px] mt-[100px] '>
        {skillLists.map((item: skillListObj, i: number) => (
          <SkillSection key={i} {...item} />
        ))}
      </div>
    </section>
  );
};

export default Skills;

