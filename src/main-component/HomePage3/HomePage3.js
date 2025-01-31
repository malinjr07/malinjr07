import React, { Fragment } from 'react';
import Header3 from '../../components/header3/header3';
import Hero3 from '../../components/hero3/hero3';
import About3 from '../../components/about3/about3';
import SkillSection from '../../components/SkillSection/SkillSection';
import ServiceSectionS3 from '../../components/ServiceSectionS3/ServiceSectionS3';
import ProjectSection2 from '../../components/ProjectSection2/ProjectSection2';
import TestimonialSection3 from '../../components/TestimonialSection3/TestimonialSection3';
import BlogSection from '../../components/BlogSection/BlogSection';
import ContactSection2 from '../../components/ContactSection2/ContactSection2';

const HomePage3 = () => {
    return (
        <Fragment>
            <div className="page-wrapper">
                <Header3 mClass={"menu-open menu-open-s2"} hclass={"header-section-s3"} />
                <div className="page-wrapper-2" id="smooth-wrapper">
                    <div id="smooth-content">
                        <Hero3 />
                        <About3 />
                        <SkillSection hclass={'skill-section'}/>
                        <ServiceSectionS3 />
                        <ProjectSection2 hclass={"portfolio-section-s3"} />
                        <TestimonialSection3 hclass={"testimonial-section-s3"}/>
                        <BlogSection />
                        <ContactSection2 Cclass={"contact-section-s2 section-padding"} />
                    </div>
                </div>
            </div>
        </Fragment>
    )
};
export default HomePage3;