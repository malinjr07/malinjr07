import React, { Fragment } from 'react';
import Header6 from '../../components/Header6/Header6';
import PageTitle from '../../components/pagetitle/PageTitle';
import TestimonialSection3 from '../../components/TestimonialSection3/TestimonialSection3';
import FooterScetion from '../../components/FooterScetion/FooterScetion';
const TestimonialPage2 = () => {
    return (
        <Fragment>
            <div className="page-wrapper">
                <div className="page-wrapper-2" id="smooth-wrapper">
                    <div id="smooth-content">
                        <Header6 />
                        <PageTitle pageTitle={'Testimonial 02'} pagesub={'Testimonial'} />
                        <TestimonialSection3 hclass={'testimonial-section-s3 section-padding'} />
                        <FooterScetion />
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default TestimonialPage2;