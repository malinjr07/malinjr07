import React from 'react';

const FeaturesSection = () => {
    return (
        <section id="features" className="wpo-features-section section-padding">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col col-lg-6">
                        <div className="wpo-section-title">
                            <h2>Why Choose Our Template</h2>
                            <p>Make perfect website with our template. It is fully responsive & retina ready.</p>
                        </div>
                    </div>
                </div>
                <div className="wpo-features-wrapper">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-12">
                            <div className="wpo-features-item">
                                <div className="wpo-features-icon">
                                    <div className="icon">
                                        <i className="fi flaticon-creativity"></i>
                                    </div>
                                </div>
                                <div className="wpo-features-text">
                                    <h2>Hand-crafted Design</h2>
                                    <p>Portio brings a brand new design for Portfolio, Designer,
                                        Developer, Lawyer, Fitness Instructor,Consulter.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-12">
                            <div className="wpo-features-item">
                                <div className="wpo-features-icon">
                                    <div className="icon">
                                        <i className="fi flaticon-gift"></i>
                                    </div>
                                </div>
                                <div className="wpo-features-text">
                                    <h2>Lifetime License</h2>
                                    <p>A little mistake on your website could have a big impact on your/client's
                                        business. we provide lifetime license.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-12">
                            <div className="wpo-features-item">
                                <div className="wpo-features-icon">
                                    <div className="icon">
                                        <i className="fi flaticon-support"></i>
                                    </div>
                                </div>
                                <div className="wpo-features-text">
                                    <h2>Top-Notch Support</h2>
                                    <p>We guarantee the best possible fastest support so that you don’t ever get stopped
                                        in the development of your work. </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-12">
                            <div className="wpo-features-item">
                                <div className="wpo-features-icon">
                                    <div className="icon">
                                        <i className="fi flaticon-laptop"></i>
                                    </div>
                                </div>
                                <div className="wpo-features-text">
                                    <h2>Free Updates</h2>
                                    <p>We mainly focuse on our buyers demands. So, as a great help we update our themes
                                        fully free with thair demands. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="shape">
                <svg width="480" height="460" viewBox="0 0 480 460" fill="none">
                    <circle cx="270" cy="270" r="270" fill="url(#paint0_radial_48_291)" fillOpacity="0.3" />
                    <defs>
                        <radialGradient id="paint0_radial_48_291" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                            gradientTransform="translate(270 270) rotate(90) scale(270)">
                            <stop offset="0" stopColor="#C4EF17" stopOpacity="0.8" />
                            <stop offset="1" stopColor="#1B1C1E" stopOpacity="0" />
                        </radialGradient>
                    </defs>
                </svg>
            </div>
        </section>
    );
};

export default FeaturesSection;