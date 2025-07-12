'use client';
// Placeholder for Hero5 component
import React, { useState } from 'react';
import Link from 'next/link';
import ModalVideo from 'react-modal-video';

const Hero5 = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <section className='banner-section-s5' id='top'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-7'>
            <div className='banner-content'>
              <h1>I’m a Designer I Can Design Anything You Want</h1>
              <p>Hello there! I’m a web designer, and I’m very passionate and dedicated to my work. With 20 years experience as a professional web developer, I have acquired the skills and knowledge necessary to make your project a success.</p>
              <div className='banner-btn'>
                <Link href='/contact' className='btn s2'>Hire Me</Link>
                <div className='video-btn' onClick={() => setOpen(true)}>
                  <i className='fi flaticon-play-button'></i>
                </div>
              </div>
            </div>
          </div>
          <div className='col-lg-5'>
            <div className='banner-img'>
              {/* Placeholder for image */}
              <div>Hero Image Placeholder</div>
            </div>
          </div>
        </div>
      </div>
      <ModalVideo channel='youtube' isOpen={isOpen} videoId='L61p2uyiMSo' onClose={() => setOpen(false)} />
    </section>
  );
};

export default Hero5;
