import React, { Fragment } from 'react';
import Header5 from '../../components/Header5/Header5';
import Hero7 from '../../components/Hero7/Hero7';
import FeatureSectionS3 from '../../components/FeatureSectionS3/FeatureSectionS3';
import About6 from '../../components/about6/about6';
import ServiceSectionS6 from '../../components/ServiceSectionS6/ServiceSectionS6';
import ProjectSection4 from '../../components/ProjectSection4/ProjectSection4';
import TestimonialSection3 from '../../components/TestimonialSection3/TestimonialSection3';
import BlogSection from '../../components/BlogSection/BlogSection';
import ContactSection2 from '../../components/ContactSection2/ContactSection2';
const HomePage7 = () => {
    return (
        <Fragment>
            <div className="page-wrapper">
                <Header5 mClass={"menu-open menu-open-s2"} hclass={"header-section-s5"} />
                <div className="page-wrapper-2" id="smooth-wrapper">
                    <div id="smooth-content">
                        <Hero7 />
                        <FeatureSectionS3 />
                        <About6 />
                        <ServiceSectionS6 />
                        <ProjectSection4 />
                        <TestimonialSection3 hclass={"testimonial-section-s3"} />
                        <BlogSection />
                        <ContactSection2 Cclass={"contact-section-s2 section-padding"} />
                    </div>

                </div>
            </div>
        </Fragment>
    );
};

export default HomePage7;