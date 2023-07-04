import React, { FC } from 'react';

type propsType = {
  title: string;
};
const SectionTitle: FC<propsType> = ({ title }) => {
  return (
    <div className='py-4 px-32 border-2 border-black my-28 '>
      <h4 className='font-bold text-3xl leading-[127%] tracking-[10px] uppercase '>
        {title}
      </h4>
    </div>
  );
};

export default SectionTitle;

