import React, { Fragment } from 'react';
import Header5 from '../../components/Header5/Header5';
import Hero6 from '../../components/hero6/hero6';
import TrailSection from '../../components/TrailSection/TrailSection';
import About5 from '../../components/about5/about5';
import VideoSection from '../../components/VideoSection/VideoSection';
import ServiceSectionS5 from '../../components/ServiceSectionS5/ServiceSectionS5';
import TestimonialSection2 from '../../components/TestimonialSection2/TestimonialSection2';
import BlogSection from '../../components/BlogSection/BlogSection';
import ContactSection2 from '../../components/ContactSection2/ContactSection2';
import FeatureSectionS2 from '../../components/FeatureSectionS2/FeatureSectionS2';


const HomePage6 = () => {
    return (
        <Fragment>
            <div className="page-wrapper">
                <Header5 mClass={"menu-open menu-open-s2"} hclass={"header-section-s5"} />
                <div className="page-wrapper-2" id="smooth-wrapper">
                    <div id="smooth-content">
                        <Hero6 />
                        <TrailSection />
                        <About5 />
                        <VideoSection />
                        <ServiceSectionS5 />
                        <TestimonialSection2 hclass={"testimonial-section-s2"} />
                        <FeatureSectionS2 />
                        <BlogSection />
                        <ContactSection2 Cclass={"contact-section-s2 section-padding"} />
                    </div>
                </div>
            </div>
        </Fragment>
    )
};
export default HomePage6;