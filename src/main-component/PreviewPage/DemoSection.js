import React from 'react';

import Home1 from './images/demo/img-1.jpg'
import Home2 from './images/demo/img-2.jpg'
import Home3 from './images/demo/img-3.jpg'
import Home4 from './images/demo/img-4.jpg'
import Home5 from './images/demo/img-5.jpg'
import Home6 from './images/demo/img-6.jpg'
import Home7 from './images/demo/img-7.jpg'
import { Link } from 'react-router-dom';

const DemoSection = () => {
    return (
        <section className="wpo-demo-section section-padding" id="demo">
            <div className="container-fluid">
                <div className="row justify-content-center">
                    <div className="col col-lg-6">
                        <div className="wpo-section-title">
                            <h2>Here is Our 20+ Beautiful Templates to Start Your Design!</h2>
                            <p>The Ultimate Multipurpose HTML Template for any Business, Personal, ecommerce, etc</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col col-xs-12">
                        <div className="wpo-demo-grids clearfix">
                            <div className="grid">
                                <div className="inner">
                                    <Link to="home" target="_blank"><img src={Home1}
                                        alt="" /></Link>
                                </div>
                                <h3>Designer Template</h3>
                            </div>
                            <div className="grid">
                                <div className="inner">
                                    <Link to="home-2" target="_blank"><img
                                        src={Home2} alt="" /></Link>
                                </div>
                                <h3>Designer Template</h3>
                            </div>
                            <div className="grid">
                                <div className="inner">
                                    <Link to="home-3" target="_blank"><img
                                        src={Home3} alt="" /></Link>
                                </div>
                                <h3>Developer Template</h3>
                            </div>
                            <div className="grid">
                                <div className="inner">
                                    <Link to="home-4" target="_blank"><img
                                        src={Home4} alt="" /></Link>
                                </div>
                                <h3>Developer Template</h3>
                            </div>
                            <div className="grid">
                                <div className="inner">
                                    <Link to="home-5" target="_blank"><img
                                        src={Home5} alt="" /></Link>
                                </div>
                                <h3>Lawyer Template</h3>
                            </div>
                            <div className="grid">
                                <div className="inner">
                                    <Link to="home-6" target="_blank"><img
                                        src={Home6} alt="" /></Link>
                                </div>
                                <h3>Fitness Instructor</h3>
                            </div>
                            <div className="grid">
                                <div className="inner">
                                    <Link to="home-7" target="_blank"><img
                                        src={Home7} alt="" /></Link>
                                </div>
                                <h3>Consulter Template</h3>
                            </div>

                            <div className="grid coming-soon">
                                <div className="inner">
                                    <Link to="#" target="_blank"><img src={Home5} alt="" /></Link>
                                    <div className="coming">
                                        <h5>Coming Soon</h5>
                                    </div>
                                </div>
                                <h3>Doctor Template</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="shape">
                <svg width="480" height="460" viewBox="0 0 480 460" fill="none">
                    <circle cx="270" cy="270" r="270" fill="url(#paint0_radial_48_29)" fillOpacity="0.3" />
                    <defs>
                        <radialGradient id="paint0_radial_48_29" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                            gradientTransform="translate(270 270) rotate(90) scale(270)">
                            <stop offset="0" stopColor="#C4EF17" stopOpacity="0.8" />
                            <stop offset="1" stopColor="#1B1C1E" stopOpacity="0" />
                        </radialGradient>
                    </defs>
                </svg>
            </div>
        </section>

    );
};

export default DemoSection;