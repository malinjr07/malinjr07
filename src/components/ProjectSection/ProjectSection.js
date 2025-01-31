import React, { useEffect, useState } from 'react';
import simpleParallax from 'simple-parallax-js';
import PortfolioItems from '../../api/Project';
import { Link } from 'react-router-dom';

const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const ProjectSection = (props) => {
    useEffect(() => {
        const thumbnails = document.getElementsByClassName('thumbnail');
        new simpleParallax(thumbnails, {
            delay: 0.6,
            transition: 'cubic-bezier(0,0,0,1)'
        });
        const thumbnail2 = document.getElementsByClassName('thumbnail2');
        new simpleParallax(thumbnail2, {
            delay: 0.6,
            transition: 'cubic-bezier(0,0,0,1)',
            orientation: 'down'
        });
    }, []);

    const [activeFilter, setActiveFilter] = useState('all');
    const handleFilterClick = (filter) => {
        setActiveFilter(filter);
    };
    const filterItems = activeFilter === "all" ? PortfolioItems : PortfolioItems.filter(item => {
        const categories = item.category.split(' ');
        return categories.includes(activeFilter);
    });

    return (
        <section className={"" + props.hclass} id="Portfolio">
            <div className="wraper">
                <div className="section-top-content">
                    <h2 className="poort-text poort-in-right">Portfolio</h2>
                    <h3 className="poort-text poort-in-right">My Featured Projects</h3>
                </div>
                <div className="gallery-filters">
                    <div className="port-top-btn">
                        <ul>
                            <li><button onClick={() => handleFilterClick("all")} className={activeFilter === "all" ? "active" : ""} >All</button></li>
                            <li><button onClick={() => handleFilterClick("website")} className={activeFilter === "website" ? "active" : ""} >Website</button></li>
                            <li><button onClick={() => handleFilterClick("app")} className={activeFilter === "app" ? "active" : ""} >App</button></li>
                            <li><button onClick={() => handleFilterClick("webapp")} className={activeFilter === "webapp" ? "active" : ""} >Web App</button></li>
                            <li><button onClick={() => handleFilterClick("brand")} className={activeFilter === "brand" ? "active" : ""} >Branding</button></li>
                        </ul>
                    </div>
                    <div className="portfolio-wrap">
                        <div className="row">
                            {filterItems.slice(0, 4).map(item => (
                                <div key={item.id} className={`col-lg-6 col-md-6 col-12 all zoomIn ${item.category}`} >
                                    <div className="protfolio-card">
                                        <div className="image">
                                            <img className={item.category.includes('website') ? 'thumbnail2' : 'thumbnail'} src={item.image} alt="" />
                                        </div>
                                        <div className="text">
                                            <h2><Link onClick={ClickHandler} to={`/project-single/${item.slug}`}>{item.title}</Link></h2>
                                            <span>{item.subtitle}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
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
            <div className="line-shape"></div>
            <div className="clearfix"></div>
        </section>
    )
}


export default ProjectSection;
