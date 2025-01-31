import React from 'react';
import { Link } from 'react-router-dom'
import Services from "../../api/Services"

const ClickHandler = () => {
    window.scrollTo(10, 0);
}


const ServiceSectionS5 = () => {
    return (
        <section className="service-section-s4" id="Services">
            <div className="container-fluid">
                <div className="row">
                    {Services.slice(15, 23).map((service, sitem) => (
                        <div className="col col-lg-3 col-md-6 col-12" key={sitem}>
                            <div className="service-card scroll-text-animation" data-animation="fade_from_bottom">
                                <div className="card-content">
                                    <div className="icon">
                                        <img src={service.icon} alt="" />
                                    </div>
                                    <div className="content">
                                        <h2><Link onClick={ClickHandler} to={`/service-single/${service.slug}`}>{service.title}</Link></h2>
                                        <span>{service.description}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServiceSectionS5;