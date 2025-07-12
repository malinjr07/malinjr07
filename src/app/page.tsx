import React, { Fragment } from 'react';
// Placeholder components - to be replaced with actual components
import Header4 from '../components/layouts/Header4';
import Hero5 from '../components/common/Hero5';
import FeatureSection from '../components/common/FeatureSection';
import About4 from '../components/common/About4';
import ServiceSectionS4 from '../components/common/ServiceSectionS4';
import ProjectSection3 from '../components/common/ProjectSection3';
import TestimonialSection3 from '../components/common/TestimonialSection3';
import BlogSection from '../components/common/BlogSection';
import ContactSection2 from '../components/common/ContactSection2';

export default function Home() {
  return (
    <Fragment>
      <div className="page">
        <Header4 mClass="menu-open menu-open-s2" hclass="header-section-s5" />
        <div className="main" id="smooth-wrapper">
          <div id="smooth-content">
            <Hero5 />
            <FeatureSection />
            <About4 />
            <ServiceSectionS4 />
            <ProjectSection3 hclass="portfolio-section-s4" />
            <TestimonialSection3 hclass="testimonial-section-s3" />
            <BlogSection />
            <ContactSection2 Cclass="contact-section-s2 section-padding" />
          </div>
        </div>
      </div>
    </Fragment>
  );
}
