import React, { Fragment } from 'react';
import ProfileSection from '../../components/ProfileSection/ProfileSection';
import Hero from '../../components/hero/hero';
import Header from '../../components/header/Header';
import About from '../../components/about/about';
import ResumeSection from '../../components/ResumeSection/ResumeSection';
import Service from '../../components/ServiceSection/ServiceSection';
import ProjectSection from '../../components/ProjectSection/ProjectSection';
import Testimonial from '../../components/Testimonial/Testimonial';
import PricingSection from '../../components/PricingSection/PricingSection';
import ContactForm from '../../components/ContactSection/ContactSection';

const HomePage = () => {
    return (
        
        <Fragment>
            <div className="page-wrapper">
                <div className="left-wraper">
                    <ProfileSection />
                </div>
                <div className="right-wraper">
                    <Hero />
                    <Header hclass={"header-section"} />
                    <About hclass={'about-section'} />
                    <ResumeSection hclass={"resume-section"} />
                    <Service hclass={"service-section"} />
                    <ProjectSection hclass={"portfolio-section"} />
                    <Testimonial hclass={'testimonial-section'} />
                    <PricingSection hclass={'pricing-section'} />
                    <ContactForm Cclass={"contact-section"} />
                </div>
            </div>
        </Fragment>
    )
};
export default HomePage;