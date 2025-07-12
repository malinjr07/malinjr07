import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../images/logo.svg';

const Header6 = () => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    };
    
    const [isMenuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    return (
        <header className="header-section-s11">
            <div className="herader-wrap">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-lg-3 col-5">
                            <Link onClick={ClickHandler} to="/" className="logo">
                                <img src={Logo} alt="" />
                            </Link>
                        </div>
                        <div className="col-lg-7 col-5">
                            <div className="menu-open" onClick={toggleMenu}>
                                <i className={isMenuOpen ? "ti-close" : "ti-align-justify"} id="bar_close"></i>
                            </div>
                            <div className={`menu-wrap ${isMenuOpen ? "open-mobilemenu" : ""}`}>
                                <ul className="menu-main">
                                    <li><Link onClick={ClickHandler} to="/">Home</Link></li>
                                    <li><Link onClick={ClickHandler} to="/about">About</Link></li>
                                    <li><Link onClick={ClickHandler} to="/service">Services</Link></li>
                                    <li><Link onClick={ClickHandler} to="/project">Portfolio</Link></li>
                                    <li><Link onClick={ClickHandler} to="/blog">Blog</Link></li>
                                    <li><Link onClick={ClickHandler} to="/contact">Contact</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-2 col-1">
                            <div className="header-right">
                                <div className="contact-btn">
                                    <Link onClick={ClickHandler} to="/contact" className="theme-btn">Contact Us</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header6;