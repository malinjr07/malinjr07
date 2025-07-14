import React, { FC, Fragment, ReactElement } from 'react';
import Header4 from '../../components/header4';
import Hero5 from '../../components/hero5';
import FeatureSection from '../../components/FeatureSection';
import About4 from '../../components/about4';
import ServiceSectionS4 from '../../components/ServiceSectionS4';
import ProjectSection3 from '../../components/ProjectSection3';
import TestimonialSection3 from '../../components/TestimonialSection3/TestimonialSection3';
import BlogSection from '../../components/BlogSection/BlogSection';
import ContactSection2 from '../../components/ContactSection2';

/**
 * HomePage5 Component
 *
 * The main landing page component that composes various section components
 * to create the complete home page layout.
 *
 * @returns {ReactElement} The rendered home page
 */
const HomePage5: FC = (): ReactElement => {
  return (
    <Fragment>
      <div className='page-wrapper'>
        <Header4
          mClass={'menu-open menu-open-s2'}
          hclass={'header-section-s5'}
        />
        <div className='page-wrapper-2' id='smooth-wrapper'>
          <div id='smooth-content'>
            <Hero5 />
            <FeatureSection />
            <About4 />
            <ServiceSectionS4 />
            <ProjectSection3 hclass={'portfolio-section-s4'} />
            <TestimonialSection3 hclass={'testimonial-section-s3'} />
            <BlogSection />
            <ContactSection2 Cclass={'contact-section-s2 section-padding'} />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default HomePage5;

