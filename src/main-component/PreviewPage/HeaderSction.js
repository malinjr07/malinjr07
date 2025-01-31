import React, { useState } from 'react';
import { Link } from 'react-scroll';
import Logo from './images/logo.png'

const HeaderSction = () => {

    const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

    const toggleMobileNavigation = () => {
        setIsMobileNavOpen(!isMobileNavOpen);
    };

    return (
        <header id="header" className="wpo-header-style-1">
            <div className="wpo-site-header">
                <nav className="navigation navbar navbar-expand-lg navbar-light">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-3 col-md-3 col-3 d-lg-none dl-block">
                                <div className="mobail-menu">
                                    <button type="button" className="navbar-toggler open-btn" onClick={toggleMobileNavigation}>
                                        <span className="sr-only">Toggle navigation</span>
                                        <span className="icon-bar first-angle"></span>
                                        <span className="icon-bar middle-angle"></span>
                                        <span className="icon-bar last-angle"></span>
                                    </button>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-6 col-6">
                                <div className="navbar-header">
                                    <Link className="navbar-brand site-logo" to="#"><img
                                        src={Logo} alt="" /></Link>
                                </div>
                            </div>
                            <div className="col-lg-8 col-md-1 col-1">
                                <div id="navbar" className={`collapse navbar-collapse navigation-holder ${isMobileNavOpen ? 'slideInn' : ''}`}>
                                    <button className="menu-close" onClick={toggleMobileNavigation}><i className="ti-close"></i></button>
                                    <ul className="nav navbar-nav mb-2 mb-lg-0">
                                        <li><Link activeClass="active" to="demo" spy={true} smooth={true} duration={500}>Demos</Link></li>
                                        <li><Link activeClass="active" to="pages" spy={true} smooth={true} duration={500}>Pages</Link></li>
                                        <li><Link activeClass="active" to="features" spy={true} smooth={true} duration={500}>Features</Link></li>
                                        <li><Link activeClass="active" to="service" spy={true} smooth={true} duration={500}>Services</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-2 col-2">
                                <div className="header-right">
                                    <div className="header-btn">
                                        <a className="theme-btn ss" target={"_blank"} href="https://support.wpocean.com/login">
                                            Support
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default HeaderSction;