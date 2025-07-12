// Placeholder for ServiceSectionS4 component
import React from 'react';
import Link from 'next/link';

const ServiceSectionS4 = () => {
  return (
    <section className='services-section-s4' id='Services'>
      <div className='container'>
        <div className='section-title-s2'>
          <span>My Services</span>
          <h2>What Solutions I Provide For You</h2>
        </div>
        <div className='row'>
          <div className='col-lg-4 col-md-6'>
            <div className='service-box'>
              <div className='service-icon'>
                <i className='fi flaticon-web-design'></i>
              </div>
              <div className='service-content'>
                <h3><Link href='/services/web-design'>Web Design</Link></h3>
                <p>I design beautiful and functional websites that help businesses grow and succeed online.</p>
              </div>
            </div>
          </div>
          <div className='col-lg-4 col-md-6'>
            <div className='service-box'>
              <div className='service-icon'>
                <i className='fi flaticon-code'></i>
              </div>
              <div className='service-content'>
                <h3><Link href='/services/web-development'>Web Development</Link></h3>
                <p>I build robust and scalable web applications using the latest technologies and frameworks.</p>
              </div>
            </div>
          </div>
          <div className='col-lg-4 col-md-6'>
            <div className='service-box'>
              <div className='service-icon'>
                <i className='fi flaticon-smartphone'></i>
              </div>
              <div className='service-content'>
                <h3><Link href='/services/mobile-app'>Mobile App</Link></h3>
                <p>I create intuitive and engaging mobile applications for iOS and Android platforms.</p>
              </div>
            </div>
          </div>
          <div className='col-lg-4 col-md-6'>
            <div className='service-box'>
              <div className='service-icon'>
                <i className='fi flaticon-ux-design'></i>
              </div>
              <div className='service-content'>
                <h3><Link href='/services/ui-ux-design'>UI/UX Design</Link></h3>
                <p>I craft user experiences that are visually appealing and easy to navigate for optimal user satisfaction.</p>
              </div>
            </div>
          </div>
          <div className='col-lg-4 col-md-6'>
            <div className='service-box'>
              <div className='service-icon'>
                <i className='fi flaticon-seo'></i>
              </div>
              <div className='service-content'>
                <h3><Link href='/services/seo'>SEO Services</Link></h3>
                <p>I optimize websites to rank higher in search engine results, driving more traffic and leads.</p>
              </div>
            </div>
          </div>
          <div className='col-lg-4 col-md-6'>
            <div className='service-box'>
              <div className='service-icon'>
                <i className='fi flaticon-brainstorming'></i>
              </div>
              <div className='service-content'>
                <h3><Link href='/services/consulting'>Consulting</Link></h3>
                <p>I provide expert advice on digital strategy, helping businesses achieve their online goals.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSectionS4;
