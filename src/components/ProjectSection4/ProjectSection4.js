import React, { useEffect } from 'react';
import PortfolioItems from "../../api/Project"
import { Link } from 'react-router-dom';
import SimpleParallax from 'simple-parallax-js';

const ProjectSection4 = () => {
    useEffect(() => {
        const thumbnails = document.getElementsByClassName('thumbnail');
        new SimpleParallax(
            thumbnails,{
                delay:0.6,
                transition: 'cubic-bezier(0,0,0,1)'
            }
        )
        const thumbnail2 = document.getElementsByClassName('thumbnail2');
        new SimpleParallax(
            thumbnail2,{
                delay:0.6,
                transition: 'cubic-bezier(0,0,0,1)',
                orientation:"down",
            }
        )
    },[])
    return (
        <section className="portfolio-section-s7" id="Portfolio">
            <div className="container-fluid">
                <div className="row">
                    {PortfolioItems.slice(12, 16).map((project, item) => (
                        <div className="col-xl-3 col-lg-6 col-md-6 col-12" key={item}>
                            <div className="protfolio-card">
                                <div className="image">
                                    <img className={project.category.includes('website') ? 'thumbnail' : 'thumbnail2' } src={project.image} alt="" />
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
            <div className="shape">
                <svg width="349" height="577" viewBox="0 0 349 577" fill="none">
                    <circle cx="60.5" cy="288.5" r="288.5" fill="url(#paint0_radial_174_570)" fillOpacity="0.4" />
                    <defs>
                        <radialGradient id="paint0_radial_174_570" cx="0" cy="0" r="1"
                            gradientUnits="userSpaceOnUse"
                            gradientTransform="translate(60.5 288.5) rotate(90) scale(288.5)">
                            <stop offset="0" stopColor="#C4EF17" stopOpacity="0.8" />
                            <stop offset="1" stopColor="#1B1C1E" stopOpacity="0" />
                        </radialGradient>
                    </defs>
                </svg>
            </div>
            <div className="shape-2">
                <svg width="330" height="577" viewBox="0 0 330 577" fill="none">
                    <circle cx="288.5" cy="288.5" r="288.5" fill="url(#paint0_radial_174_571)" fillOpacity="0.4" />
                    <defs>
                        <radialGradient id="paint0_radial_174_571" cx="0" cy="0" r="1"
                            gradientUnits="userSpaceOnUse"
                            gradientTransform="translate(288.5 288.5) rotate(90) scale(288.5)">
                            <stop offset="0" stopColor="#C4EF17" stopOpacity="0.8" />
                            <stop offset="1" stopColor="#1B1C1E" stopOpacity="0" />
                        </radialGradient>
                    </defs>
                </svg>

            </div>
        </section>
    );
};

export default ProjectSection4;