import React from 'react';
import Services from '../../api/Services';
import { Link } from 'react-router-dom';

const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const ServiceSectionS6 = () => {
    return (
        <section className="service-section-s2 pt-0" id="Services">
            <div className="container">
                <div className="section-top-content-s2">
                    <h2 className="scroll-text-center">Services</h2>
                    <h3 className="scroll-text-center">My Specializations</h3>
                </div>
                <div className="row">
                    {Services.slice(23, 29).map((service, item) => (
                        <div className="col col-lg-4 col-md-6 col-12" key={item}>
                            <div className="service-card scroll-text-animation" data-animation="fade_from_bottom">
                                <div className="icon">
                                    <img src={service.icon} alt="" />
                                </div>
                                <div className="content">
                                    <h2><Link onClick={ClickHandler} to={`/service-single/${service.slug}`}>{service.title}</Link></h2>
                                    <span>{service.description}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServiceSectionS6;