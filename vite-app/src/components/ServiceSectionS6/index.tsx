import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import Services from '../../api/Services';
import { Service } from '../../types/api';

const ClickHandler = (): void => {
    window.scrollTo(10, 0);
};

const ServiceSectionS6: FC = () => {
    return (
        <section className="service-section-s2 pt-0" id="Services">
            <div className="container">
                <div className="section-top-content-s2">
                    <h2 className="scroll-text-center">Services</h2>
                    <h3 className="scroll-text-center">My Specializations</h3>
                </div>
                <div className="row">
                    {Services.slice(23, 29).map((service: Service) => (
                        <div className="col col-lg-4 col-md-6 col-12" key={service.id}>
                            <div className="service-card scroll-text-animation" data-animation="fade_from_bottom">
                                <div className="icon">
                                    <img src={service.icon as string} alt={service.title} />
                                </div>
                                <div className="content">
                                    <h2>
                                        <Link 
                                            onClick={ClickHandler} 
                                            to={`/service-single/${service.slug}`}
                                        >
                                            {service.title}
                                        </Link>
                                    </h2>
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
