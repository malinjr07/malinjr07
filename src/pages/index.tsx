import Fallback from '@/components/Fallback';
import Image from 'next/image';
import { Suspense } from 'react';
import HTMLFlipBook from 'react-pageflip';

export default function Home() {
  return (
    <>
      {/*  */}
      <Suspense
        fallback={
          <>
            <div className='relative z-10 w-screen h-screen '>
              <Fallback />
            </div>
          </>
        }
      >
        <div className='relative z-10 w-screen h-screen'>
          <Image
            src='/wooden-table.webp'
            alt='Table-Background'
            fill
            className='object-cover'
            placeholder='blur'
            blurDataURL='/wooden-table-small.webp'
          />
        </div>
      </Suspense>

      <section className='absolute w-screen h-screen z-20'>
        <HTMLFlipBook
          width={550}
          height={733}
          size='stretch'
          minWidth={315}
          maxWidth={1000}
          minHeight={400}
          maxHeight={1533}
          maxShadowOpacity={0.5}
          showCover={true}
          mobileScrollSupport={true}
          className='demo-book'
          startPage={2}
          style={{}}
          drawShadow
          flippingTime={0.5}
          usePortrait={false}
          startZIndex={40}
          autoSize={false}
          clickEventForward
          useMouseEvents
          swipeDistance={2}
          showPageCorners
          disableFlipByClick
        >
          <div className='demoPage bg-slate-600 w-full h-full '>Page 1</div>
          <div className='demoPage bg-slate-600 w-full h-full '>Page 2</div>
          <div className='demoPage bg-slate-600 w-full h-full '>Page 3</div>
          <div className='demoPage bg-slate-600 w-full h-full '>Page 4</div>
        </HTMLFlipBook>
      </section>
    </>
  );
}

