import React, { Fragment } from 'react';
import ProfileSection2 from '../../components/ProfileSection2/ProfileSection2';
import Hero4 from '../../components/hero4/hero4';
import About from '../../components/about/about';
import ResumeSection from '../../components/ResumeSection/ResumeSection';
import Service from '../../components/ServiceSection/ServiceSection';
import ProjectSection from '../../components/ProjectSection/ProjectSection';
import Testimonial from '../../components/Testimonial/Testimonial';
import ContactForm from '../../components/ContactSection/ContactSection';
import BlogSectionS2 from '../../components/BlogSectionS2/BlogSectionS2';

const HomePage4 = () => {
    return (
        <Fragment>
            <div className="page-wrapper">
                <div className="left-wraper-s2">
                    <ProfileSection2 />
                </div>
                <div className="right-wraper s2">
                    <Hero4 />
                    <About hclass={'about-section s2'} />
                    <ResumeSection hclass={"resume-section"} />
                    <Service hclass={"service-section"} />
                    <ProjectSection hclass={"portfolio-section"} />
                    <Testimonial hclass={'testimonial-section'} />
                    <BlogSectionS2 />
                    <ContactForm Cclass={"contact-section"} />
                </div>
            </div>
        </Fragment>
    )
};
export default HomePage4;