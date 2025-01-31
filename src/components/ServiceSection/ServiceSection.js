import React from "react";
import { Link } from 'react-router-dom'
import Services from "../../api/Services"

const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const ServiceSection = (props) => {
    return (
        <section className={"" + props.hclass} id="Services">
            <div className="wraper">
                <div className="section-top-content">
                    <h2 className="poort-text poort-in-right">Services</h2>
                    <h3 className="poort-text poort-in-right">My Specializations</h3>
                </div>
                <div className="row">
                    {Services.slice(0, 4).map((service, sitem) => (
                        <div className="col col-lg-6 col-md-6 col-12" key={sitem}>
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
            <div className="line-shape"></div>
        </section>
    );
}

export default ServiceSection;



