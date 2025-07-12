// Placeholder for FeatureSection component
import React from 'react';
import CountUp from 'react-countup';

const FeatureSection = () => {
  return (
    <section className="features-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-sm-6">
            <div className="features-box">
              <div className="features-icon">
                <i className="fi flaticon-trophy"></i>
              </div>
              <div className="features-content">
                <h3><CountUp end={12} duration={2} /> +</h3>
                <p>Years Of Experience</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="features-box">
              <div className="features-icon">
                <i className="fi flaticon-start-up"></i>
              </div>
              <div className="features-content">
                <h3><CountUp end={350} duration={2} /> +</h3>
                <p>Project Completed</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="features-box">
              <div className="features-icon">
                <i className="fi flaticon-reviews"></i>
              </div>
              <div className="features-content">
                <h3><CountUp end={250} duration={2} /> +</h3>
                <p>Happy Clients</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="features-box">
              <div className="features-icon">
                <i className="fi flaticon-coffee"></i>
              </div>
              <div className="features-content">
                <h3><CountUp end={650} duration={2} /> +</h3>
                <p>Cup Of Coffee</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
