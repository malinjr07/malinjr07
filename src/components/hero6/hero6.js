import React, { useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.min.css';
import CountUp from 'react-countup';
/* image */
import Slide1 from '../../images/hero/slider-1.jpg'
import Slide2 from '../../images/hero/slider-2.jpg'
import Slide3 from '../../images/hero/slider-3.jpg'
import Shape from '../../images/hero/shape-4.svg'

// team slider
import T1 from '../../images/volunteer/1.jpg'
import T2 from '../../images/volunteer/2.jpg'
import T3 from '../../images/volunteer/3.jpg'
import T4 from '../../images/volunteer/4.jpg'
import T5 from '../../images/volunteer/5.jpg'
import T6 from '../../images/volunteer/2.jpg'

const Hero6 = () => {
    const settings = {
        autoplay: true,
        speed: 1000,
        lazyLoad: 'progressive',
        arrows: false,
        dots: true,
    };
    useEffect(() => {
        const swiper = new Swiper('.swiper-container', {
            centeredSlides: true,
            longSwipesMs: 0,
            loopPreventsSlide: false,
            longSwipes: true,
            longSwipesRatio: 0,
            threshold: 0,
            slideToClickedSlide: true,
            slidesPerView: 5,
            speed: 900,
            loop: true,
            loopedSlides: 1,
            spaceBetween: 0,
            autoplay: {
                delay: 3000,
            },
            pagination: {
                el: '.swiper-pagination',
            },
        });

        return () => {
            swiper.destroy(true, true);
        };
    }, []);
    return (
        <section className="hero-section-s6" id="top">
            <div className="hero-slider">
                <Slider {...settings}>
                    <div className="slide-item">
                        <div className="slide-img">
                            <img src={Slide1} className="full-image animated"
                                data-animation-in="zoomInImage" alt="" />
                        </div>
                        <div className="slide-content">
                            <h2 className="animated">Hi I’m</h2>
                            <h3 className="animated">Annette Black,<br />
                                Your Gym Instructor</h3>

                            <div className="shape">
                                <img src={Shape} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="slide-item">
                        <div className="slide-img">
                            <img src={Slide2} className="full-image animated"
                                data-animation-in="zoomInImage" alt="" />
                        </div>
                        <div className="slide-content">
                            <h2 className="animated">Hi I’m</h2>
                            <h3 className="animated" >Annette Black,<br />
                                Your Gym Instructor</h3>
                            <div className="shape">
                                <img src={Shape} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="slide-item">
                        <div className="slide-img">
                            <img src={Slide3} className="full-image animated"
                                data-animation-in="zoomInImage" alt="" />
                        </div>
                        <div className="slide-content">
                            <h2 className="animated">Hi I’m</h2>
                            <h3 className="animated">Annette Black,<br />
                                Your Gym Instructor</h3>
                            <div className="shape">
                                <img src={Shape} alt="" />
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
            <div className="volunteer">
                <div className="volunteer-slider">
                    <div className="swiper-container">
                        <div className="swiper-wrapper">
                            <div className="item swiper-slide">
                                <img src={T1} alt="" />
                            </div>
                            <div className="item swiper-slide">
                                <img src={T2} alt="" />
                            </div>
                            <div className="item swiper-slide">
                                <img src={T3} alt="" />
                            </div>
                            <div className="item swiper-slide">
                                <img src={T4} alt="" />
                            </div>
                            <div className="item swiper-slide">
                                <img src={T5} alt="" />
                            </div>
                            <div className="item swiper-slide">
                                <img src={T6} alt="" />
                            </div>
                        </div>
                        <div className="swiper-pagination"></div>
                    </div>
                </div>
                <div className="content">
                    <h3><span><CountUp end={521} enableScrollSpy /></span>+</h3>
                    <p>Successful Members</p>
                </div>
            </div>
        </section>
    );
};

export default Hero6;


