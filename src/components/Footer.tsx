import { footerLinks } from '@/utils/static';
import { footerLink } from '@/utils/types';
import Link from 'next/link';
import React, { FC } from 'react';

const Footer: FC = () => {
  return (
    <section className='flex w-full flex-col items-center justify-center gap-16 bg-black py-20 '>
      <div className='flex flex-row items-center justify-center gap-7 '>
        {footerLinks.map((item: footerLink, i: number) => (
          <Link
            href={item.url}
            target='_blank'
            key={i}
            className='text-3xl text-white'
          >
            <i className={item.icon}></i>
          </Link>
        ))}
      </div>
      <h6 className=' text-lg uppercase tracking-widest text-white '>
        &copy; {new Date().getFullYear()} <b>Mosadddik Ali Maruf</b>. All right
        Reserved
      </h6>
    </section>
  );
};

export default Footer;

