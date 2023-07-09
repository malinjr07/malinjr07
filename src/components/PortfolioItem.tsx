'use client';
import React, { FC, Fragment, useState } from 'react';
import { portfolioItem } from '@/utils/types';
import Image from 'next/image';
import { Dialog, Transition } from '@headlessui/react';

const PortfolioItem: FC<portfolioItem> = ({
  img,
  usedTechs,
  portfolioTitle,
  description,
  projectUrl,
}) => {
  const [visible, setVisible] = useState<boolean>(false);
  return (
    <div className='group relative h-[400px] w-full lg:w-1/3 '>
      <Image
        src={img}
        alt={portfolioTitle + ' banner image'}
        fill
        sizes='100%'
        className='z-10 object-cover'
      />
      <div className='absolute z-20 flex h-full w-full scale-x-0 flex-col items-start justify-start gap-2 bg-gradient-to-br from-cyan-700 to-cyan-950 px-6 py-3 text-white transition-all group-hover:scale-x-100'>
        <h5 className='text-center text-3xl font-semibold   '>
          {portfolioTitle}
        </h5>
        <p
          className='mt-5 text-base  '
          dangerouslySetInnerHTML={{
            __html: `${description.substring(0, 550)}...`,
          }}
        />

        <button
          type='button'
          onClick={() => setVisible(true)}
          className='mx-auto mt-auto border-0 border-x-2 border-white px-4 py-2 font-semibold uppercase tracking-widest transition-all hover:border-x-0 hover:border-y-2 '
        >
          see details
        </button>
      </div>
      <Transition appear show={visible} as={Fragment}>
        <Dialog
          as='div'
          className='relative z-10'
          onClose={() => setVisible(false)}
        >
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <div className='fixed inset-0 bg-black bg-opacity-25' />
          </Transition.Child>

          <div className='fixed inset-0 overflow-y-auto'>
            <div className='flex min-h-full items-center justify-center p-4 text-center'>
              <Transition.Child
                as={Fragment}
                enter='ease-out duration-300'
                enterFrom='opacity-0 scale-95'
                enterTo='opacity-100 scale-100'
                leave='ease-in duration-200'
                leaveFrom='opacity-100 scale-100'
                leaveTo='opacity-0 scale-95'
              >
                <Dialog.Panel className='relative w-full max-w-7xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all'>
                  {' '}
                  <button
                    type='button'
                    className='absolute right-2 top-2 flex h-6 w-6 items-center justify-center rounded-full bg-slate-200 text-base text-black shadow-md '
                    onClick={() => setVisible(false)}
                  >
                    <i className='fa-solid fa-xmark'></i>
                  </button>
                  <Dialog.Title
                    as='a'
                    href={projectUrl}
                    target='_blank'
                    className='text-2xl font-bold leading-6 text-cyan-800'
                  >
                    {portfolioTitle}{' '}
                    <sup>
                      {' '}
                      <i className='fa-solid fa-up-right-from-square text-base '></i>
                    </sup>
                  </Dialog.Title>
                  <div className='my-8'>
                    <p
                      className='text-base text-gray-900 '
                      dangerouslySetInnerHTML={{
                        __html: `${description}`,
                      }}
                    />
                  </div>
                  <div className='mt-2'>
                    <p className='text-lg font-semibold text-gray-500'>
                      Used Techs:
                    </p>
                  </div>
                  <div className='mt-2 flex w-full flex-row flex-wrap items-start justify-start gap-4 '>
                    {usedTechs.map((item: string, i: number) => (
                      <div
                        key={i}
                        className='flex h-14 w-[12%] flex-col items-center justify-center gap-4 rounded-2xl border border-cyan-700 bg-cyan-50 '
                      >
                        <p className='text-center text-xs uppercase tracking-[3.5px] text-gray-950 '>
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};

export default PortfolioItem;

