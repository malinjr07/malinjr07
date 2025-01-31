import React from "react";
import { Link } from 'react-scroll';
import CountUp from 'react-countup';

const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const Hero2 = () => {
    return (
        <section className="hero-section-s2" id="top">
            <div className="hero-wraper">
                <div className="profile-content">
                    <h2 className="poort-text poort-in-right">Hi, I’m</h2>
                    <h3 className="poort-text poort-in-right">Arlene McCoy</h3>
                    <p>Former Designer And Developer. I design and code beautifully simple things and i love
                        what i
                        do.
                    </p>
                    <ul className="socal-icon">
                        <li><a onClick={ClickHandler} href="#"><i className="ti-facebook"></i></a></li>
                        <li><a onClick={ClickHandler} href="#"><i className="ti-twitter-alt"></i></a></li>
                        <li><a onClick={ClickHandler} href="#"><i className="ti-linkedin"></i></a></li>
                        <li><a onClick={ClickHandler} href="#"><i className="ti-instagram"></i></a></li>
                    </ul>
                    <Link className="hire-btn" activeClass="active" to="Contact" spy={true} smooth={true} duration={700}>Hire Me</Link>

                    <div className="count_wrap">
                        <div className="item">
                            <h3><span><CountUp end={980} enableScrollSpy /></span>+</h3>
                            <h5>Complete Projects</h5>
                        </div>
                        <div className="item">
                            <h3><span ><CountUp end={4} enableScrollSpy /></span>/<span><CountUp end={5} enableScrollSpy /></span></h3>
                            <h5>Average Rating</h5>
                        </div>
                        <div className="item">
                            <h3><span><CountUp end={535} enableScrollSpy /></span>+</h3>
                            <h5>Happy Clients</h5>
                        </div>
                    </div>
                </div>
            </div>
            <div className="shape scroll-text-animation" data-animation="fade_from_right">
                <svg width="690" height="631" viewBox="0 0 690 631" fill="none">
                    <path d="M694 631H0L694 0V631Z" fill="#2B3500" fillOpacity="0.5" />
                </svg>
            </div>
        </section>
    )
}

export default Hero2;