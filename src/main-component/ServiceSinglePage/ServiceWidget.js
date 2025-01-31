import React from 'react';
import Services from '../../api/Services';
import { Link } from 'react-router-dom';
import Logo from '../../images/logo.svg'

const ServiceWidget = () => {
    return (
        <div className="service-widgets">
            <div className="service-widget widget">
                <h3 className="title">Services</h3>
                <ul>
                    {Services.slice(0,5).map((servic,item) => (
                        <li key={item}><Link to={`/service-single/${servic.slug}`}>{servic.title}</Link></li>
                    ))}
                </ul>
            </div>
            <div className="contact-widget">
                <div className="logo">
                    <Link to="/">
                        <img src={Logo} alt="" />
                    </Link>
                </div>
                <h2>Contact Us Now</h2>
                <a href="tel:+4733378901" className="call">(629) 555-0129</a>
                <div className="contact-btn">
                    <Link to="/contact" className="theme-btn">Get Started</Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceWidget;