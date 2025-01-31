import React from 'react';
import Header from '@/components/core/Header';
import Hero from '@/components/layouts/Hero';
import ProjectSection3 from '../../components/ProjectSection3/ProjectSection3';
import TestimonialSection3 from '../../components/TestimonialSection3/TestimonialSection3';
import BlogSection from '../../components/BlogSection/BlogSection';
import ContactSection2 from '../../components/ContactSection2/ContactSection2';
import FeatureSection from '@/components/layouts/FeatureSection';
import About from '@/components/layouts/About';
import ServiceSection from '@/components/layouts/ServiceSection';

const HomePage5 = () => {
  return (
    <>
      <div className='page-wrapper'>
        <Header
          mClass={'menu-open menu-open-s2'}
          hClass={'header-section-s5'}
        />
        <div className='page-wrapper-2' id='smooth-wrapper'>
          <div id='smooth-content'>
            <Hero />
            <FeatureSection />
            <About />
            <ServiceSection />
            <ProjectSection3 hclass={'portfolio-section-s4'} />
            <TestimonialSection3 hclass={'testimonial-section-s3'} />
            <BlogSection />
            <ContactSection2 Cclass={'contact-section-s2 section-padding'} />
          </div>
        </div>
      </div>
    </>
  );
};
export default HomePage5;

