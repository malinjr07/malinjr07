import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Icon1 from './images/pages/1.png'
import Icon2 from './images/pages/2.png'
import Icon3 from './images/pages/3.png'
import Icon4 from './images/pages/4.png'
import Icon5 from './images/pages/5.png'
import { Link } from 'react-router-dom';

const ChooseSection = () => {
    const settings = {
        dots: false,
        infinite: true,
        arrows: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
            
        ]
    };


    return (
        <section id="pages" className="wpo-inner-demo-section section-padding">
            <div className="container-fluid">
                <div className="row justify-content-center">
                    <div className="col col-lg-5">
                        <div className="wpo-section-title">
                            <h2>40+ Impressive Inner Pages</h2>
                            <p>we have crafted many different beautiful inner single pages for you.</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col col-xs-12">
                        <div className="wpo-inner-demo-grids clearfix wpo-demo-active ">
                            <Slider {...settings}>
                                <div className="grid">
                                    <div className="inner">
                                        <Link to="/service-single/Website-Design" target="_blank"><img
                                            src={Icon1} alt="" /></Link>
                                    </div>
                                    <h3>Service Single</h3>
                                </div>
                                <div className="grid">
                                    <div className="inner">
                                        <Link to="/project-single/Geometric-Shape-Design" target="_blank"><img
                                            src={Icon2} alt="" /></Link>
                                    </div>
                                    <h3>Portfolio Single</h3>
                                </div>
                                <div className="grid">
                                    <div className="inner">
                                        <Link to="/blog" target="_blank"><img src={Icon3}
                                            alt="" /></Link>
                                    </div>
                                    <h3>Blog</h3>
                                </div>
                                <div className="grid">
                                    <div className="inner">
                                        <Link to="/blog-single/1" target="_blank"><img
                                            src={Icon4} alt="" /></Link>
                                    </div>
                                    <h3>Blog Single</h3>
                                </div>
                                <div className="grid">
                                    <div className="inner">
                                        <Link to="/contact" target="_blank"><img src={Icon5}
                                            alt="" /></Link>
                                    </div>
                                    <h3>Contact</h3>
                                </div>
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
            <div className="shape">
                <svg width="480" height="460" viewBox="0 0 480 460" fill="none">
                    <circle cx="270" cy="270" r="270" fill="url(#paint0_radial_48_2912)" fillOpacity="0.3" />
                    <defs>
                        <radialGradient id="paint0_radial_48_2912" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
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

export default ChooseSection;