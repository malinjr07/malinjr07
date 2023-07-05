import React, { FC } from 'react';

type propsType = {
  title: string;
};
const SectionTitle: FC<propsType> = ({ title }) => {
  return (
    <div className='my-28 border-2 border-black px-32 py-4 '>
      <h4 className='text-3xl font-bold uppercase leading-[127%] tracking-[10px] '>
        {title}
      </h4>
    </div>
  );
};

export default SectionTitle;

