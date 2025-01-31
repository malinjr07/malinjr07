'use client';

import React, { FC, useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger'; // Import ScrollTrigger separately
import { tAnimateImageProps } from '@/utils/types';

// import Ab1 from '../../images/about/ab3.jpg'

gsap.registerPlugin(ScrollTrigger);

const About: FC = () => {
  useEffect(() => {
    const animateImage: tAnimateImageProps = (element) => {
      let image = element.querySelector('img') as HTMLImageElement;
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: element,
          start: 'top 50%',
        },
      });

      tl.set(element, { autoAlpha: 1 });
      tl.from(element, 1.5, {
        xPercent: -100,
        ease: 'power2.out',
      });
      tl.from(image, 1.5, {
        xPercent: 100,
        scale: 1.3,
        delay: -1.5,
        ease: 'power2.out',
      });
    };

    let elements = document.querySelectorAll('.new_img-animet');
    elements.forEach(animateImage);

    return () => {
      // Destroy all ScrollTrigger instances
    };
  }, []);

  return (
    <section className='about-section-s5 pb-0' id='about'>
      <div className='container'>
        <div className='row align-items-center'>
          <div className='col-lg-6 col-12'>
            <div className='about-right'>
              <div className='image new_img-animet'>
                <img src={'/images/about/ab3.jpg'} alt='' data-speed='0.8' />
              </div>
            </div>
          </div>
          <div className='col-lg-6 col-12'>
            <div className='about-left'>
              <div className='section-top-content'>
                <h2 className='poort-text poort-in-right'>About Me</h2>
                <h3 className='poort-text poort-in-right'>
                  Solving Cases is My Passion, Which Create Me More
                  Professional.
                </h3>
                <h4
                  className='scroll-text-animation'
                  data-animation='fade_from_bottom'
                >
                  I have
                  <span> 10+</span>
                  years of experiences in this design field for give you better
                  services.
                </h4>
                <p
                  className='scroll-text-animation'
                  data-animation='fade_from_bottom'
                >
                  Posuere vestibulum feugiat a scelerisque aliquam id in neque.
                  Commodo aenean non enim lacus eleifend. Semper amet facilisis
                  tempor consequat aliquet vel elementum faucibus. Ac vel enim
                  viverra id tincidunt imperdiet nisl auctor odio. Dignissim
                  habitant volutpat viverra quis.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
