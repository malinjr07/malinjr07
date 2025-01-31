import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Icon from "../../images/star.svg"

const TextSliderSection = () => {
    const settings = {
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 0,
        speed: 8000,
        dots: false,
        cssEase: 'linear',
        pauseOnHover: false,
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
        <div className="hero-text-slider-s2">
            <Slider {...settings}>
                <div className="item">
                    <span>Product Design <img src={Icon} alt="" /></span>
                </div>
                <div className="item">
                    <span>Product Design <img src={Icon} alt="" /></span>
                </div>
                <div className="item">
                    <span>UX/UI Design <img src={Icon} alt="" /></span>
                </div>
                <div className="item">
                    <span>UX/UI Design <img src={Icon} alt="" /></span>
                </div>
                <div className="item">
                    <span>UX/UI Design <img src={Icon} alt="" /></span>
                </div>
                <div className="item">
                    <span>UX/UI Design <img src={Icon} alt="" /></span>
                </div>
            </Slider>
        </div>
    );
};

export default TextSliderSection;