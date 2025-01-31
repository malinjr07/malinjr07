import React, { useEffect } from 'react';
import SimpleParallax from 'simple-parallax-js';
import { Link } from 'react-router-dom';
import PortfolioItems from "../../api/Project"

const ProjectSection3 = (props) => {

    useEffect(() => {
        const thumbnails = document.getElementsByClassName('thumbnail');
        new SimpleParallax(thumbnails, {
            delay: 0.6,
            transition: 'cubic-bezier(0,0,0,1)'
        });
        const thumbnail2 = document.getElementsByClassName('thumbnail2');
        new SimpleParallax(thumbnail2, {
            delay: 0.6,
            transition: 'cubic-bezier(0,0,0,1)',
            orientation: 'down'
        });
    }, [])

    return (
        <section className={"" + props.hclass} id="Portfolio">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-12">
                        <div className="section-top-content-s2">
                            <h2 className="poort-text poort-in-right">Portfolio</h2>
                            <h3 className="poort-text poort-in-right">My Recent Case
                                Studies</h3>
                            <p>I have done much more project. Most of them my clients love so much. I think you
                                also
                                like them.</p>
                        </div>
                    </div>
                </div>
                <div className="gallery-filters">
                    <div className="row gallery-container">
                        {PortfolioItems.slice(8, 12).map((project, Pky) => (
                            <div className="col col-md-6 col-12" key={Pky}>
                                <div className="protfolio-card">
                                    <div className="image">
                                        <img className={project.category.includes('website') ? "thumbnail2" : "thumbnail"} src={project.image} alt="" />
                                    </div>
                                    <div className="text">
                                        <h2><Link to={`/project-single/${project.slug}`}>{project.title}</Link></h2>
                                        <span>{project.subtitle}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="shape">
                <svg width="478" height="478" viewBox="0 0 478 478" fill="none">
                    <circle cx="239" cy="239" r="239" fill="url(#paint0_radial_56_1806)" fillOpacity="0.6" />
                    <defs>
                        <radialGradient id="paint0_radial_56_1806" cx="0" cy="0" r="1"
                            gradientUnits="userSpaceOnUse"
                            gradientTransform="translate(239 239) rotate(90) scale(239)">
                            <stop offset="0" stopColor="#C4EF17" stopOpacity="0.8" />
                            <stop offset="1" stopColor="#1B1C1E" stopOpacity="0" />
                        </radialGradient>
                    </defs>
                </svg>
            </div>
        </section>
    );
};

export default ProjectSection3;