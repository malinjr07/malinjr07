import { comfortaa } from '@/app/fonts';
import { navItems } from '@/utils/static';
import { navType } from '@/utils/types';
import Link from 'next/link';
import React, { FC } from 'react';

const Header: FC = () => {
  return (
    <header className='relative z-50 flex w-full items-center justify-between px-28 py-3 '>
      <Link
        href={'/'}
        className={comfortaa.className + ` text-lg font-bold text-[#25282B] `}
      >
        Maruf
      </Link>

      <div className='flex items-center justify-end gap-12'>
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
          className='rounded-full bg-white px-6 py-2 capitalize'
        >
          contact us
        </button>
      </div>
    </header>
  );
};

export default Header;

