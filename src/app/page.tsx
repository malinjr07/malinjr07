import Fallback from '@/components/Fallback';
import Image from 'next/image';
import { Suspense } from 'react';

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
        <Image
          src='/wooden-table.jpeg'
          alt='Table-Background'
          fill
          className='object-cover'
          placeholder='blur'
          blurDataURL='data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAFFAU1AAD//gAQTGF2YzYwLjMxLjEwMgD/2wBDAAgEBAQEBAUFBQUFBQYGBgYGBgYGBgYGBgYHBwcICAgHBwcGBgcHCAgICAkJCQgICAgJCQoKCgwMCwsODg4RERT/xAB7AAEBAQEAAAAAAAAAAAAAAAAGAgUDAQEBAQEBAAAAAAAAAAAAAAADBQQBAhAAAgEDBAIBBQEAAAAAAAAAAQIDBCEREkEiADETBVJxYlEyBhEAAQIEAwYHAQEAAAAAAAAAARECIRIAAzFxUWGBoUEyBLHB4TPwIgUUkf/AABEIAA0AFAMBEgACEgADEgD/2gAMAwEAAhEDEQA/AOC1EsoA9ECuwEiMKQg4xgkXuBncE9r4crGyDQHVlYHW8rPbxpcyZUfj47Bb9W8yMPcFebipjpgABvCcavuAJxGvRXGrqeJ86P8A+vpq+sWNqRQHSVWaWGN1LKo/lhrtc5sNsdR1iw8pPRFpQ2XDls+BzMhsP1jrWSgMyiBEjnNxPMFN0aFSnU4Lkn+JWb9Kx3F5jf53I4OVQCFQcz6Vql1Q/M6KPSfLVIjk9GjgowYGUnG54tc/fuw1I8ru5nkOWOA3LSPpU24jYdVl21bEr3K5Yo9R4iiLkgABlBdp20Nq33JtMmDZpQCjcTrEUwbtJzr/2Q=='
        />
      </Suspense>
    </>
  );
}

