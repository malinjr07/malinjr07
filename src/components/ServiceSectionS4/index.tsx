import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import Services from "../../api/Services";
import { Service } from '../../types/api';

const ClickHandler = (): void => {
    window.scrollTo(10, 0);
};

const ServiceSectionS4: FC = () => {
    return (
        <section className="service-section-s2 section-padding" id="Services">
            <div className="container">
                <div className="section-top-content-s2">
                    <h2 className="poort-text poort-in-right">Services</h2>
                    <h3 className="poort-text poort-in-right">My Specializations</h3>
                </div>
                <div className="row">
                    {Services.slice(9, 15).map((service: Service) => (
                        <div className="col col-lg-4 col-md-6 col-12" key={service.id}>
                            <div className="service-card scroll-text-animation" data-animation="fade_from_bottom">
                                <div className="card-content">
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
                        </div>
                    ))}
                </div>
            </div>
            <div className="shape">
                <svg width="330" height="577" viewBox="0 0 330 577" fill="none">
                    <circle 
                        cx="288.5" 
                        cy="288.5" 
                        r="288.5" 
                        fill="url(#paint0_radial_71_35)" 
                        fillOpacity="0.4" 
                    />
                    <defs>
                        <radialGradient 
                            id="paint0_radial_71_35" 
                            cx="0" 
                            cy="0" 
                            r="1" 
                            gradientUnits="userSpaceOnUse"
                            gradientTransform="translate(288.5 288.5) rotate(90) scale(288.5)"
                        >
                            <stop offset="0" stopColor="#C4EF17" stopOpacity="0.8" />
                            <stop offset="1" stopColor="#1B1C1E" stopOpacity="0" />
                        </radialGradient>
                    </defs>
                </svg>
            </div>
        </section>
    );
};

export default ServiceSectionS4;
