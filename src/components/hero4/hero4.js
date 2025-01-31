import React from 'react';
import { Link } from 'react-router-dom'
import Logo from '../../images/logo.svg'
import ProgressTracker from '../ProgressTracker/ProgressTracker';

const hero4 = () => {
    return (
        <section className="hero-section" id="top">
            <Link to="/" className="logo">
                <img src={Logo} alt="" />
            </Link>
            <ul className="socal-icon s2">
                <li><Link to="#"><i className="ti-facebook"></i></Link></li>
                <li><Link to="#"><i className="ti-twitter-alt"></i></Link></li>
                <li><Link to="#"><i className="ti-linkedin"></i></Link></li>
                <li><Link to="#"><i className="ti-instagram"></i></Link></li>
            </ul>

            <div className="hero-wrap">
                <div className="section-top-content">
                    <h2 className="poort-text poort-in-right">Introduce</h2>
                    <h3 className="poort-text poort-in-right">Say Hi from Arlene, Former Designer and Developer</h3>
                    <p>I have 8 years of experience of this design and development field, I've done remote work for
                        agencies, consulted for startups, and collaborated with talented people to create digital
                        products for both business and consumer use. I'm quietly confident, naturally curious.</p>
                </div>
                <div className="line-shape"></div>
                <ProgressTracker />
            </div>

        </section>
    );
};

export default hero4;