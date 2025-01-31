import React from 'react'
import CountUp from 'react-countup';
import abImg from '../../images/about/ab2.jpg'


const About3 = (props) => {


    return (
        <section className="about-section-s3 section-padding" id="about">
            <div className="about-wrap">
                <div className="about-left scroll-text-animation" data-animation="fade_from_left">
                    <h6>More About Myself</h6>
                    <h5>Development is My Passion, Which Create Me More Professional. I have <span>10+</span>
                        years of
                        experiences in this design field for give you better services. Posuere vestibulum
                        feugiat a scelerisque aliquam id in neque. Commodo aenean non enim lacus eleifend.
                    </h5>
                    <div className="count_wrap">
                        <div className="item">
                            <h3><span><CountUp end={980} enableScrollSpy /></span>+</h3>
                            <h5>Complete Projects</h5>
                        </div>
                        <div className="item">
                            <h3><span><CountUp end={4} enableScrollSpy /></span>/<span ><CountUp end={5} enableScrollSpy /></span></h3>
                            <h5>Average Rating</h5>
                        </div>
                        <div className="item">
                            <h3><span><CountUp end={535} enableScrollSpy /></span>+</h3>
                            <h5>Happy Clients</h5>
                        </div>
                    </div>
                </div>
                <div className="about-right scroll-text-animation" data-animation="fade_from_right">
                    <div className="image">
                        <img src={abImg} alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About3;