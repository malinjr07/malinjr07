import React from 'react';

const SkillSection = (props) => {
    const calculateRadius = (percent) => {
        const radius = 93;
        const circumference = 2 * Math.PI * radius;
        const offset = circumference - (percent / 100) * circumference;
        return offset;
    };

    return (
        <section className={"" + props.hclass }id="skill">
            <div className="container">
                <div className="row">
                    <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12 scroll-text-animation"
                        data-animation="fade_from_bottom">
                        <div className="progras-card">
                            <div className="percent">
                                <svg>
                                    <circle cx="150" cy="75" r="93"></circle>
                                    <circle cx="150" cy="75" r="93" style={{ strokeDashoffset: calculateRadius(75) }}></circle>
                                </svg>
                                <div className="number">
                                    <h3>75<span>%</span></h3>
                                </div>
                            </div>
                            <div className="title">
                                <h2>Website Design</h2>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12 scroll-text-animation"
                        data-animation="fade_from_bottom">
                        <div className="progras-card">
                            <div className="percent">
                                <svg>
                                    <circle cx="150" cy="75" r="93"></circle>
                                    <circle cx="150" cy="75" r="93" style={{ strokeDashoffset: calculateRadius(65) }}></circle>
                                </svg>
                                <div className="number">
                                    <h3>65<span>%</span></h3>
                                </div>
                            </div>
                            <div className="title">
                                <h2>App Design</h2>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12 scroll-text-animation"
                        data-animation="fade_from_bottom">
                        <div className="progras-card">
                            <div className="percent">
                                <svg>
                                    <circle cx="150" cy="75" r="93"></circle>
                                    <circle cx="150" cy="75" r="93" style={{ strokeDashoffset: calculateRadius(85) }}></circle>
                                </svg>
                                <div className="number">
                                    <h3>85<span>%</span></h3>
                                </div>
                            </div>
                            <div className="title">
                                <h2>Graphic Design</h2>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12 scroll-text-animation"
                        data-animation="fade_from_bottom">
                        <div className="progras-card">
                            <div className="percent">
                                <svg>
                                    <circle cx="150" cy="75" r="93"></circle>
                                    <circle cx="150" cy="75" r="93" style={{ strokeDashoffset: calculateRadius(50) }}></circle>
                                </svg>
                                <div className="number">
                                    <h3>50<span>%</span></h3>
                                </div>
                            </div>
                            <div className="title">
                                <h2>Dashboard Design</h2>
                            </div>
                        </div>
                    </div>
                   
                </div>
            </div>
        </section>
    );
};

export default SkillSection;
