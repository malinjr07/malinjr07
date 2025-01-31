import React from 'react';
import CountUp from 'react-countup';
/* images  */
import Icon1 from "../../images/feature/w1.svg"
import Icon2 from "../../images/feature/w2.svg"
import Icon3 from "../../images/feature/w3.svg"

const FeatureSectionS2 = () => {
    return (
        <section className="feature-section-s2" id='feature'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-12">
                        <div className="feature-item scroll-text-animation" data-animation="fade_from_bottom">
                            <div className="icon">
                                <img src={Icon1} alt="" />
                            </div>
                            <div className="content">
                                <h2><span><CountUp end={10} enableScrollSpy /></span> Years</h2>
                                <h5>Winning Award</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12">
                        <div className="feature-item scroll-text-animation" data-animation="fade_from_bottom">
                            <div className="icon">
                                <img src={Icon2} alt="" />
                            </div>
                            <div className="content">
                                <h2><span><CountUp end={620} enableScrollSpy /></span>+</h2>
                                <h5>Happy Clients</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12">
                        <div className="feature-item scroll-text-animation" data-animation="fade_from_bottom">
                            <div className="icon">
                                <img src={Icon3} alt="" />
                            </div>
                            <div className="content">
                                <h2><span><CountUp end={99} enableScrollSpy /></span>%</h2>
                                <h5>Case Solved</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeatureSectionS2;