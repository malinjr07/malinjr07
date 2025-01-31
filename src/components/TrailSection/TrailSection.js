import React from 'react';
import { Link } from 'react-router-dom';


const TrailSection = () => {
    return (
        <section className="trail-section">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-12">
                        <div className="content">
                            <h2>Start Your Training To
                                Get Better Life</h2>
                        </div>
                    </div>
                    <div className="col-lg-6 col-12">
                        <div className="trail-btn">
                            <Link to="#"><span>Start Free Trial</span> <i className="ti-arrow-right"></i></Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TrailSection;