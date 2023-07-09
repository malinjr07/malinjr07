import React, { FC } from 'react';

type propsType = {
  title: string;
};
const SectionTitle: FC<propsType> = ({ title }) => {
  return (
    <div className='my-12 w-11/12 border-2 border-black py-4 md:my-16 md:w-auto md:px-32 lg:my-28 '>
      <h4 className='text-center text-3xl font-bold uppercase leading-[127%] tracking-[10px] '>
        {title}
      </h4>
    </div>
  );
};

export default SectionTitle;

