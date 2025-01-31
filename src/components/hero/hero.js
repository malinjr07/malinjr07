
import CountUp from 'react-countup';
import { Link } from 'react-router-dom'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Logo from '../../images/logo.svg'
import Start from '../../images/star.svg'

import React, { useEffect } from "react";
import gsap from "gsap";




const Hero = () => {
    useEffect(() => {
        const tl = gsap.timeline();
        tl.from(".poort-in-right ", 1.8, {
            y: 100,
            ease: "power4.out",
            delay: 0.5,
            skewY: 2,
            stagger: {
                amount: 0.3
            }
        });
    }, []);
    
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }
    const settings = {
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: false,
        autoplay: true,
        autoplaySpeed: 0,
        speed: 7000,
        cssEase: "linear",
        pauseOnHover: true
    };
    return (

        <section className="hero-section" id="top">
            <Link onClick={ClickHandler} to="/" className="logo">
                <img src={Logo} alt="" />
            </Link>
            <div className="hero-wrap">
                <div className="section-top-content">
                    <h2 className="poort-text poort-in-right">Introduce</h2>
                    <h3 className="poort-text poort-in-right">Say Hi from Arlene, Former Designer and Developer
                    </h3>
                    <p>I have 8 years of experience of this design and development field, I've done remote
                        work for
                        agencies, consulted for startups, and collaborated with talented people to create
                        digital
                        products for both business and consumer use. I'm quietly confident, naturally
                        curious.</p>
                </div>
                <div className="line-shape"></div>
                <div className="funfact-section">
                    <div className="item">
                        <h3><span><CountUp end={985} enableScrollSpy /></span>+</h3>
                        <h5>Complete Projects</h5>
                    </div>
                    <div className="item">
                        <h3>
                            <span ><CountUp end={4.9} enableScrollSpy /></span>/<span><CountUp end={5} enableScrollSpy /></span>
                        </h3>
                        <h5>Average Rating</h5>
                    </div>
                    <div className="item">
                        <h3><span><CountUp end={535} enableScrollSpy /></span>+</h3>
                        <h5>Happy Clients</h5>
                    </div>
                    <div className="item">
                        <h3><span ><CountUp end={15} enableScrollSpy /></span>+</h3>
                        <h5>Winning Awards</h5>
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
                                hire me your dream project.
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
            <div className="bg-shape">
                <svg width="596" height="665" viewBox="0 0 596 665" fill="none">
                    <circle cx="375" cy="290" r="375" fill="url(#paint0_radial_0_373)" fillOpacity="0.6" />
                    <defs>
                        <radialGradient id="paint0_radial_0_373" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                            gradientTransform="translate(375 290) rotate(90) scale(375)">
                            <stop offset="0" stopColor="#C4EF17" stopOpacity="0.8" />
                            <stop offset="1" stopColor="#1B1C1E" stopOpacity="0" />
                        </radialGradient>
                    </defs>
                </svg>
            </div>
            <div className="hero-text-slider">
                <Slider {...settings}>
                    <div className="item">
                        <span>Product Design <img src={Start} alt="" /></span>
                    </div>
                    <div className="item">
                        <span>Product Design <img src={Start} alt="" /></span>
                    </div>
                    <div className="item">
                        <span>UX/UI Design <img src={Start} alt="" /></span>
                    </div>
                    <div className="item">
                        <span>Product Design <img src={Start} alt="" /></span>
                    </div>
                </Slider>
            </div>
        </section>
    )
}

export default Hero;