import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../images/logo.svg';

const Header6 = () => {
    const ClickHandler = () => {
        window.scrollTo(10, 0)
    }
    const [isMenuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    }


    const [activeSubMenu, setActiveSubMenu] = useState(null);
    const toggleSubMenu = (index) => {
        setActiveSubMenu(activeSubMenu === index ? null : index);
    }
    

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
                            <div className={`menu-wrap ${isMenuOpen ? "open-mobilemenu" : "" }`}>
                                <ul className="menu-main">
                                    <li>
                                        <Link onClick={ClickHandler} to="#">Home</Link>
                                        <span className={`submenu-open ${activeSubMenu === 0 ? "active" : ""}`} onClick={() => toggleSubMenu(0)}></span>
                                        <ul className={`submenu ${activeSubMenu === 0 ? "active" : ""}`}>
                                            <li><Link onClick={ClickHandler} to="/home">Home Style 01</Link></li>
                                            <li><Link onClick={ClickHandler} to="/home-2">Home Style 02</Link></li>
                                            <li><Link onClick={ClickHandler} to="/home-3">Home Style 03</Link></li>
                                            <li><Link onClick={ClickHandler} to="/home-4">Home Style 04</Link></li>
                                            <li><Link onClick={ClickHandler} to="/home-5">Home Style 05</Link></li>
                                            <li><Link onClick={ClickHandler} to="/home-6">Home Style 06</Link></li>
                                            <li><Link onClick={ClickHandler} to="/home-7">Home Style 07</Link></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <Link onClick={ClickHandler} to="#">Pages</Link>
                                        <span className={`submenu-open ${activeSubMenu === 1 ? "active" : ""}`} onClick={() => toggleSubMenu(1)}></span>
                                        <ul className={`submenu ${activeSubMenu === 1 ? "active" : ""}`}>
                                            <li><Link onClick={ClickHandler} to="/about">About</Link></li>
                                            <li><Link onClick={ClickHandler} to="/skill">Skill</Link></li>
                                            <li><Link onClick={ClickHandler} to="/feature">Feature Style 01</Link></li>
                                            <li><Link onClick={ClickHandler} to="/feature-2">Feature Style 02</Link></li>
                                            <li><Link onClick={ClickHandler} to="/plan">Plan</Link></li>
                                            <li><Link onClick={ClickHandler} to="/testimonial">Testimonial Style 01</Link></li>
                                            <li><Link onClick={ClickHandler} to="/testimonial-2">Testimonial Style 02</Link></li>
                                            <li><Link onClick={ClickHandler} to="/resume">Resume</Link></li>
                                            <li><Link onClick={ClickHandler} to="/404">404</Link></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <Link onClick={ClickHandler} to="#">Services</Link>
                                        <span className={`submenu-open ${activeSubMenu === 2 ? "active" : ""}`} onClick={() => toggleSubMenu(1)}></span>
                                        <ul className={`submenu ${activeSubMenu === 2 ? "active" : ""}`}>
                                            <li><Link onClick={ClickHandler} to="/service">Service Style 01</Link></li>
                                            <li><Link onClick={ClickHandler} to="/service-2">Service Style 02</Link></li>
                                            <li><Link onClick={ClickHandler} to="/service-3">Service Style 03</Link></li>
                                            <li><Link onClick={ClickHandler} to="/service-single/Website-Design">Service Single</Link></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <Link onClick={ClickHandler} to="#">Portfolio</Link>
                                        <span className={`submenu-open ${activeSubMenu === 3 ? "active" : ""}`} onClick={() => toggleSubMenu(1)}></span>
                                        <ul className={`submenu ${activeSubMenu === 3 ? "active" : ""}`}>
                                            <li><Link onClick={ClickHandler} to="/project">Portfolio Style 01</Link></li>
                                            <li><Link onClick={ClickHandler} to="/project-2">Portfolio Style 02</Link></li>
                                            <li><Link onClick={ClickHandler} to="/project-3">Portfolio Style 03</Link></li>
                                            <li><Link onClick={ClickHandler} to="/project-single/Geometric-Shape-Design">Portfolio Single</Link></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <Link onClick={ClickHandler} to="#">Blog</Link>
                                        <span className={`submenu-open ${activeSubMenu === 4 ? "active" : ""}`} onClick={() => toggleSubMenu(1)}></span>
                                        <ul className={`submenu ${activeSubMenu === 4 ? "active" : ""}`}>
                                            <li><Link onClick={ClickHandler} to="/blog">Blog</Link></li>
                                            <li><Link onClick={ClickHandler} to="/blog-single/1">Blog Single</Link></li>
                                        </ul>
                                    </li>
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