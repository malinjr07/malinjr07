import React from 'react';
import { Link } from 'react-router-dom';

/* images */
import Ficon from '../../images/footer/mail.svg';
import Picon from '../../images/footer/phone.svg';
import Micon from '../../images/footer/map.svg';
import Logo from '../../images/logo.svg';
import Services from '../../api/Services';

const FooterScetion: React.FC = () => {
    return (
        <footer className="footer-section">
            <div className="container">
                <div className="row align-items-center align-items-md-start">
                    <div className="col-lg-4 col-md-6 col-12">
                        <div className="f-contact-widget widget">
                            <h2>Contact Us</h2>
                            <ul>
                                <li><img src={Ficon as string} alt=""/> poort@gmail.com</li>
                                <li><img src={Picon as string} alt=""/>+ 8 (123) 123 - 456 - 789</li>
                                <li><img src={Micon as string} alt=""/>19 Thordge Shiloh,Hawai 863</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12">
                        <div className="f-about-widget widget">
                            <Link to="/" className="logo">
                                <img src={Logo as string} alt=""/>
                            </Link>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab ipsam suscipit minus cum
                                eos porro totam, quam nobis quibusdam. </p>
                            <div className="social-widget">
                                <ul>
                                    <li><Link to="#"><i className="ti-facebook"></i></Link></li>
                                    <li><Link to="#"><i className="ti-linkedin"></i></Link></li>
                                    <li><Link to="#"><i className="ti-twitter-alt"></i></Link></li>
                                    <li><Link to="#"><i className="ti-instagram"></i></Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12">
                        <div className="f-services-widget widget">
                            <h2>Top Services</h2>
                            <ul>
                                {Services.slice(0,4).map((service, index) => (
                                    <li key={index}>
                                        <Link to={`/service-single/${service.slug}`}>
                                            {service.title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="shape">
                <svg width="471" height="540" viewBox="0 0 471 540" fill="none">
                    <circle cx="201" cy="270" r="270" fill="url(#paint0_radial_56_1838)" fillOpacity="0.3" />
                    <defs>
                        <radialGradient id="paint0_radial_56_1838" cx="0" cy="0" r="1"
                            gradientUnits="userSpaceOnUse"
                            gradientTransform="translate(201 270) rotate(90) scale(270)">
                            <stop offset="0" stopColor="#C4EF17" stopOpacity="0.8" />
                            <stop offset="1" stopColor="#1B1C1E" stopOpacity="0" />
                        </radialGradient>
                    </defs>
                </svg>
            </div>
            <div className="shape-start">
                <svg width="136" height="136" viewBox="0 0 136 136" fill="none">
                    <path
                        d="M68 0L73.0672 42.5254L94.0225 5.17619L82.4302 46.4037L116.083 19.9167L89.5963 53.5698L130.824 41.9775L93.4746 62.9328L136 68L93.4746 73.0672L130.824 94.0225L89.5963 82.4302L116.083 116.083L82.4302 89.5963L94.0225 130.824L73.0672 93.4746L68 136L62.9328 93.4746L41.9775 130.824L53.5698 89.5963L19.9167 116.083L46.4037 82.4302L5.17619 94.0225L42.5254 73.0672L0 68L42.5254 62.9328L5.17619 41.9775L46.4037 53.5698L19.9167 19.9167L53.5698 46.4037L41.9775 5.17619L62.9328 42.5254L68 0Z"
                        fill="#344400" />
                </svg>
            </div>
            <div className="shape-2">
                <svg width="471" height="540" viewBox="0 0 471 540" fill="none">
                    <circle cx="201" cy="270" r="270" fill="url(#paint0_radial_56_18381)" fillOpacity="0.3" />
                    <defs>
                        <radialGradient id="paint0_radial_56_18381" cx="0" cy="0" r="1"
                            gradientUnits="userSpaceOnUse"
                            gradientTransform="translate(201 270) rotate(90) scale(270)">
                            <stop offset="0" stopColor="#C4EF17" stopOpacity="0.8" />
                            <stop offset="1" stopColor="#1B1C1E" stopOpacity="0" />
                        </radialGradient>
                    </defs>
                </svg>
            </div>
            <div className="shape-start-2">
                <svg width="136" height="136" viewBox="0 0 136 136" fill="none">
                    <path
                        d="M68 0L73.0672 42.5254L94.0225 5.17619L82.4302 46.4037L116.083 19.9167L89.5963 53.5698L130.824 41.9775L93.4746 62.9328L136 68L93.4746 73.0672L130.824 94.0225L89.5963 82.4302L116.083 116.083L82.4302 89.5963L94.0225 130.824L73.0672 93.4746L68 136L62.9328 93.4746L41.9775 130.824L53.5698 89.5963L19.9167 116.083L46.4037 82.4302L5.17619 94.0225L42.5254 73.0672L0 68L42.5254 62.9328L5.17619 41.9775L46.4037 53.5698L19.9167 19.9167L53.5698 46.4037L41.9775 5.17619L62.9328 42.5254L68 0Z"
                        fill="#344400" />
                </svg>
            </div>
        </footer>
    );
};

export default FooterScetion;
