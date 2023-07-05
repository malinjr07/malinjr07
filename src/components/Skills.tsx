import { skillLists } from '@/utils/static/skillLists';
import { skillListObj } from '@/utils/types';
import React, { FC } from 'react';
import SectionTitle from './SectionTitle';
import SkillSection from './SkillSection';

const Skills: FC = () => {
  return (
    <section className='container flex flex-col items-center'>
      <SectionTitle title='skills' />
      <div className=' mt-[100px] flex flex-col items-start justify-start gap-[100px] '>
        {skillLists.map((item: skillListObj, i: number) => (
          <SkillSection key={i} {...item} />
        ))}
      </div>
    </section>
  );
};

export default Skills;

