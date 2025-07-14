import React, { Fragment } from 'react';
import Header6 from '../../components/Header6/Header6';
import PageTitle from '../../components/pagetitle/PageTitle';
import About2 from '../../components/about2';
import ServiceSectionS6 from '../../components/ServiceSectionS6/ServiceSectionS6';
import FeatureSection from '../../components/FeatureSection';
import BlogSection from '../../components/BlogSection/BlogSection';
import FooterScetion from '../../components/FooterSection';

const AboutPage = () => {
  return (
    <div className='page-wrapper'>
      <div className='page-wrapper-2' id='smooth-wrapper'>
        <div id='smooth-content'>
          <Fragment>
            <Header6 />
            <PageTitle pageTitle={'About Us'} pagesub={'About Us'} />
            <About2 hclass={'about-section-s2'} />
            <ServiceSectionS6 />
            <FeatureSection />
            <BlogSection />
            <FooterScetion />
          </Fragment>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
