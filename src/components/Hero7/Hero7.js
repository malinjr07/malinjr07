import React from 'react';
import { Link } from 'react-router-dom';

const Hero7 = () => {
    return (
        <section className="hero-section-s7" id="top">
            <div className="wraper">
                <div className="content">
                    <h2>Hello I’m</h2>
                    <h3>Jerome Bella </h3>
                    <p>The best Lawyer for your case. I want to solve my clients problems as like a friends. I am so
                        much
                        professional of my work that's why i won almost all of my cases.</p>
                    <div className="hero-btn">
                        <Link to="/contact" className="theme-btn">Free Consultation</Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero7;