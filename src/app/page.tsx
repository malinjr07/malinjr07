import React from 'react';
import Header from '@common/Header';
import Hero from '@layouts/Hero';
import FeatureSection from '@layouts/FeatureSection';
import About from '@layouts/About';
import ServiceSection from '@layouts/ServiceSection';
import ProjectSection from '@/components/layouts/ProjectSection';
import TestimonialSection from '@/components/layouts/TestimonialSection';
import BlogSection from '@/components/layouts/BlogSection';
import ContactSection from '@/components/layouts/ContactSection';
import { NextPage } from 'next';

const HomePage: NextPage = () => {
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
            <ProjectSection hClass={'portfolio-section-s4'} />
            <TestimonialSection hClass={'testimonial-section-s3'} />
            <BlogSection />
            <ContactSection hClass={'contact-section-s2 section-padding'} />
          </div>
        </div>
      </div>
    </>
  );
};
export default HomePage;

