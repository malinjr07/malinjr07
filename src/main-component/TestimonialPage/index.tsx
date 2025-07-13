import React, { Fragment } from 'react';
import Header6 from '../../components/Header6/Header6';
import PageTitle from '../../components/pagetitle/PageTitle';
import TestimonialSection2 from '../../components/TestimonialSection2/TestimonialSection2';
import FooterScetion from '../../components/FooterScetion/FooterScetion';
const TestimonialPage = () => {
  return (
    <Fragment>
      <div className='page-wrapper'>
        <div className='page-wrapper-2' id='smooth-wrapper'>
          <div id='smooth-content'>
            <Header6 />
            <PageTitle pageTitle={'Testimonial 01'} pagesub={'Testimonial'} />
            <TestimonialSection2 hclass={'testimonial-section-s2 s3'} />
            <FooterScetion />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default TestimonialPage;

