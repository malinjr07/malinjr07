import React from "react";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import hero1 from '../../images/hero/img-1.png'
import Shape from '../../images/hero/shape-2.svg'
import Shape1 from '../../images/hero/shape-3.svg'
import HeroSlider1 from '../../images/hero/hero-slider-img-1.jpg'
import HeroSlider2 from '../../images/hero/hero-slider-img-2.jpg'
import HeroSlider3 from '../../images/hero/hero-slider-img-3.jpg'


const Hero3 = () => {

    const settings = {
        dots: false,
        arrows: false,
        speed: 500,
        fade: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
    };

    return (
        <section className="hero-section-s3" id="top">
            <div className="wraper">
                <div className="content">
                    <h3>Darlene
                        Rberts <span>n</span></h3>
                    <p>A Developer with the creativity,
                        professional and master of code.
                        Much more than what you expect.
                        High quality product & flexible price. </p>
                    <div className="hero-image-slider">
                        <Slider {...settings}>
                            <div className="item">
                                <img src={HeroSlider1} alt="" />
                            </div>
                            <div className="item">
                                <img src={HeroSlider2} alt="" />
                            </div>
                            <div className="item">
                                <img src={HeroSlider3} alt="" />
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
            <div className="left-image">
                <img src={hero1} alt="" />
            </div>
            <div className="shape-1">
                <svg width="97" height="97" viewBox="0 0 97 97" fill="none">
                    <path
                        d="M48.5 97L52.1141 66.6694L67.0602 93.3082L58.7921 63.9033L82.7947 82.7947L63.9033 58.7921L93.3082 67.0601L66.6694 52.1141L97 48.5L66.6694 44.8859L93.3082 29.9398L63.9033 38.2079L82.7947 14.2053L58.7921 33.0967L67.0602 3.69184L52.1141 30.3306L48.5 0L44.8859 30.3306L29.9399 3.69184L38.2079 33.0967L14.2053 14.2053L33.0967 38.2079L3.69184 29.9398L30.3306 44.8859L0 48.5L30.3306 52.1141L3.69184 67.0601L33.0967 58.7921L14.2053 82.7947L38.2079 63.9033L29.9399 93.3082L44.8859 66.6694L48.5 97Z"
                        fill="#C4EF17" />
                </svg>
            </div>
            <div className="shape-2">
                <img src={Shape} alt="" />
            </div>
            <div className="shape-3">
                <img src={Shape1} alt="" />
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
        </section>
    )
}

export default Hero3;