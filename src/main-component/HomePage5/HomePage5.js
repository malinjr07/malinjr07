import React, { Fragment } from 'react';
import Header4 from '../../components/header4/header4';
import Hero5 from '../../components/hero5/hero5';
import FeatureSection from '../../components/FeatureSection/FeatureSection';
import About4 from '../../components/about4/about4';
import ServiceSectionS4 from '../../components/ServiceSectionS4/ServiceSectionS4';
import ProjectSection3 from '../../components/ProjectSection3/ProjectSection3';
import TestimonialSection3 from '../../components/TestimonialSection3/TestimonialSection3';
import BlogSection from '../../components/BlogSection/BlogSection';
import ContactSection2 from '../../components/ContactSection2/ContactSection2';



const HomePage5 = () => {
    return (
        <Fragment>
            <div className="page-wrapper">
                <Header4 mClass={"menu-open menu-open-s2"} hclass={"header-section-s5"} />
                <div className="page-wrapper-2" id="smooth-wrapper">
                    <div id="smooth-content">
                        <Hero5 />
                        <FeatureSection />
                        <About4 />
                        <ServiceSectionS4 />
                        <ProjectSection3 hclass={"portfolio-section-s4"} />
                        <TestimonialSection3 hclass={"testimonial-section-s3"} />
                        <BlogSection />
                        <ContactSection2 Cclass={"contact-section-s2 section-padding"} />
                    </div>
                </div>
            </div>
        </Fragment>
    )
};
export default HomePage5;