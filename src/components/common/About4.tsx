'use client';
// Placeholder for About4 component
import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';

const About4 = () => {
  const boxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (boxRef.current) {
      gsap.fromTo(
        boxRef.current,
        { scale: 0.5, opacity: 0 },
        { scale: 1, opacity: 1, duration: 2, ease: 'power3.out' }
      );
    }
  }, []);

  return (
    <section className='about-section-s4' id='about'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-6'>
            <div className='about-img' ref={boxRef}>
              {/* Placeholder for image */}
              <div>About Image Placeholder</div>
            </div>
          </div>
          <div className='col-lg-6'>
            <div className='about-content'>
              <div className='section-title-s2'>
                <span>About Me</span>
                <h2>I Create The Best Quality Designs For Your Business</h2>
              </div>
              <div className='about-text'>
                <p>Hello! I’m John Doe, a Web Designer &amp; Developer based in New York, USA. I have a passion for web design and love to create for web and mobile devices.</p>
                <p>I’m a person who is enthusiastic about extraordinary things, and I’m also a vivid dreamer. I believe in the power of design and technology to solve problems and make life easier. I’m always eager to learn new things and meet new people.</p>
              </div>
              <div className='about-info'>
                <ul>
                  <li><span>Name:</span> John Doe</li>
                  <li><span>Email:</span> <a href='mailto:example@example.com'>example@example.com</a></li>
                  <li><span>Phone:</span> +1 123 456 7890</li>
                  <li><span>Freelance:</span> Available</li>
                </ul>
              </div>
              <div className='about-btn'>
                <Link href='/contact' className='btn s2'>Hire Me</Link>
                <a href='#' className='btn s3'>Download CV</a>
              </div>
              <div className='about-social'>
                <ul>
                  <li><a href='#'><i className='fi flaticon-facebook-app-symbol'></i></a></li>
                  <li><a href='#'><i className='fi flaticon-twitter'></i></a></li>
                  <li><a href='#'><i className='fi flaticon-linkedin'></i></a></li>
                  <li><a href='#'><i className='fi flaticon-instagram'></i></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About4;
