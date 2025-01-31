import React, { useEffect } from 'react';

import Ab7 from "../../images/about/ab7.jpg"

const About6 = () => {

    useEffect(() => {
        const block = document.querySelectorAll(".block");
        block.forEach(item => {
            let numElement = item.querySelector('.num');
            let num = parseInt(numElement.innerText);
            let count = 0;
            let time = 2000 / num;
            let circle = item.querySelector('.circle');

            const intervalID = setInterval(() => {
                if (count === num) {
                    clearInterval(intervalID)
                } else {
                    count += 1;
                    numElement.innerText = count;
                }
            }, time);
            circle.style.strokeDashoffset = 503 - (503 * (num / 100));
            return () => clearInterval(intervalID);
        });
    }, []);

    return (
        <section className="about-section-s7 section-padding" id="about">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-7 col-12 order-lg-1 order-2">
                        <div className="about-left">
                            <div className="section-top-content">
                                <h2 className="poort-text poort-in-right">About Me</h2>
                                <h3 className="poort-text poort-in-right">Build Up Your Business Strategy We Provide
                                    High
                                    Quality Idea
                                </h3>
                                <h4 className="scroll-text-animation" data-animation="fade_from_bottom">I have
                                    <span> 10+ </span>
                                    years of experiences in this design field for give you better
                                    services.</h4>
                                <p className="scroll-text-animation" data-animation="fade_from_bottom">Posuere
                                    vestibulum
                                    feugiat a
                                    scelerisque aliquam id in neque. Commodo aenean non enim lacus
                                    eleifend. Semper amet facilisis tempor consequat aliquet vel elementum faucibus.
                                    Ac
                                    vel enim
                                    viverra id tincidunt imperdiet nisl auctor odio. Dignissim habitant volutpat
                                    viverra
                                    quis.
                                </p>
                            </div>
                            <div className="about-progres">
                                <div className="progres-card">
                                    <div className="block">
                                        <div className="box"></div>
                                        <p className="number">
                                            <span className="num">95</span>
                                            <span className="sub"> %</span>
                                        </p>
                                        <svg className="svg">
                                            <defs>
                                                <linearGradient id="gradientStyle">
                                                    <stop offset="0%" stopColor="#C4EF17" />
                                                    <stop offset="100%" stopColor="#C4EF17" />
                                                </linearGradient>
                                            </defs>
                                            <circle className="circle" cx="85" cy="85" r="75" />
                                        </svg>
                                    </div>
                                    <h3 className="title">Success Projects</h3>
                                </div>
                                <div className="progres-card">
                                    <div className="block">
                                        <div className="box"></div>
                                        <p className="number">
                                            <span className="num">65</span>
                                            <span className="sub"> %</span>
                                        </p>
                                        <svg className="svg">
                                            <defs>
                                                <linearGradient id="gradientStyle1">
                                                    <stop offset="0%" stopColor="#C4EF17" />
                                                    <stop offset="100%" stopColor="#C4EF17" />
                                                </linearGradient>
                                            </defs>
                                            <circle className="circle" cx="85" cy="85" r="75" />
                                        </svg>
                                    </div>
                                    <h3 className="title">Client Review</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 col-12 order-lg-2 order-1">
                        <div className="about-right scroll-text-animation" data-animation="fade_from_right">
                            <div className="image">
                                <img src={Ab7} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About6;