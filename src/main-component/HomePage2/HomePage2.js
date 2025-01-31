import React, { Fragment } from 'react';
import Header2 from '../../components/header2/header2';
import Hero2 from '../../components/hero2/Hero2';
import TextSliderSection from '../../components/TextSliderSection/TextSliderSection';
import About2 from '../../components/about2/about2';
import ResumeSection2 from '../../components/ResumeSection2/ResumeSection2';
import SkillSection from '../../components/SkillSection/SkillSection';
import ServiceSectionS2 from '../../components/ServiceSectionS2/ServiceSectionS2';
import ProjectSection2 from '../../components/ProjectSection2/ProjectSection2';
import TestimonialSection2 from '../../components/TestimonialSection2/TestimonialSection2';
import PricingSection2 from '../../components/PricingSection2/PricingSection2';
import ContactSection2 from '../../components/ContactSection2/ContactSection2';

const HomePage2 = () => {


    return (
        <Fragment>
            <div className="page-wrapper">
                <Header2 mClass={"menu-open menu-open-s2"} hclass={"header-section-s2"} />
                <div className="page-wrapper-2" id="smooth-wrapper">
                    <div id="smooth-content">
                        <Hero2 />
                        <TextSliderSection />
                        <About2 hclass={'about-section-s2'} />
                        <ResumeSection2 hclass={"resume-section-s2"} />
                        <SkillSection hclass={'skill-section'} />
                        <ServiceSectionS2 />
                        <ProjectSection2 hclass={"portfolio-section-s3"} />
                        <TestimonialSection2 hclass={"testimonial-section-s2"} />
                        <PricingSection2 hclass={"pricing-section-s2"} />
                        <ContactSection2 Cclass={"contact-section-s2 section-padding"} />
                    </div>
                </div>
            </div>
        </Fragment>
    )
};
export default HomePage2;