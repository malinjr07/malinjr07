import React from 'react';
import { Link } from 'react-scroll';


import Img1 from './images/slider/img-1.jpg'
import Img2 from './images/slider/img-2.jpg'
import Img3 from './images/slider/img-3.jpg'
import Img4 from './images/slider/img-4.jpg'
import Img5 from './images/slider/img-5.jpg'
import Img6 from './images/slider/img-6.jpg'
import Img7 from './images/slider/img-7.jpg'
import Img8 from './images/slider/mouse-scroll.svg'

const HeroSection = () => {
    return (
        <section className="static-hero" id='div'>
            <div className="hero-container">
                <div className="hero-inner">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="hero-title">
                                <h1>Portio | Personal Portfolio Resume Template<span>(Now 07 Template Added, Comming
                                    Soon Another 10+ unique Template)</span></h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="circle-content">
                    <div>
                        <svg viewBox="0 0 100 100">
                            <defs>
                                <path id="circle" d="
                                    M 50, 50
                                    m -37, 0
                                    a 37,37 0 1,1 74,0
                                    a 37,37 0 1,1 -74,0" />
                            </defs>
                            <text>
                                <textPath xlinkHref="#circle">
                                    Unique Portfolio Template
                                </textPath>
                            </text>
                        </svg>
                    </div>
                    <div className="arrows">
                        <svg viewBox="0 0 37 37" fill="none">
                            <path
                                d="M12.6789 7.51532V10.182H21.4655L6.01221 25.6353L7.89221 27.5153L23.3455 12.062V20.8487H26.0122V7.51532H12.6789Z"
                                fill="black" />
                        </svg>
                    </div>
                </div>
            </div>
            <div className="hero-img">
                <div className="image img-1 ">
                    <img src={Img1} alt="" />
                </div>
                <div className="image img-2 ">
                    <img src={Img2} alt="" />
                </div>
                <div className="image img-3 ">
                    <img src={Img3} alt="" />
                </div>
                <div className="image img-4 ">
                    <img src={Img4} alt="" />
                </div>
                <div className="image img-5 ">
                    <img src={Img5} alt="" />
                </div>
                <div className="image img-6 ">
                    <img src={Img6} alt="" />
                </div>
                <div className="image img-7 ">
                    <img src={Img7} alt="" />
                </div>
            </div>
            <div className="mouse-scroll">
                <Link  activeClass="active" to="demo" spy={true} smooth={true} duration={500}><img src={Img8} alt="" /></Link>
            </div>
        </section>
    );
};

export default HeroSection;