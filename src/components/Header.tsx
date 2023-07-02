import { comfortaa } from '@/app/fonts';
import { navItems } from '@/utils/static';
import { navType } from '@/utils/types';
import Link from 'next/link';
import React, { FC } from 'react';

const Header: FC = () => {
  return (
    <header className='py-3 px-28 w-full flex justify-between items-center relative z-50 '>
      <Link
        href={'/'}
        className={comfortaa.className + ` text-lg font-bold text-[#25282B] `}
      >
        Maruf
      </Link>

      <div className='flex justify-end items-center gap-12'>
        {navItems.map((items: navType) => (
          <a
            key={items.id}
            href={'#' + items.id}
            className='capitalize text-white'
          >
            {items.title}
          </a>
        ))}
        <button
          type='button'
          className='px-6 py-2 rounded-full capitalize bg-white'
        >
          contact us
        </button>
      </div>
    </header>
  );
};

export default Header;

