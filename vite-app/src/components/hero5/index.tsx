import React from 'react';
import { Link } from 'react-scroll';

/* images */
import Hero1 from '../../images/hero/img-2.png';
import Star from '../../images/hero/star.svg';
import VideoModal from '../ModalVideo';

const Hero5: React.FC = () => {
    return (
        <section className="hero-section-s5" id="top">
            <div className="wraper">
                <div className="content">
                    <h2>Hi I'm</h2>
                    <h3>William Marker</h3>
                    <p>The best Lawyer for your case. I want to solve my clients problems as like a friends. I am so
                        much professional of my work that's why i won almost all of my cases.</p>
                    <div className="btn-wraper">
                        <Link 
                            activeClass="active" 
                            to="Contact" 
                            spy={true} 
                            smooth={true} 
                            duration={500} 
                            className="theme-btn"
                        >
                            Free Consultation
                        </Link>
                        <div className="popup-video">
                            <VideoModal />
                            <span>Watch Videos</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hero-image">
                <div className="image">
                    <img src={Hero1 as string} alt="William Marker" />
                </div>
                <div className="bg-border"></div>
                <div className="bg-shape">
                    <div className="shape-1">
                        <img src={Star as string} alt="" />
                    </div>
                    <div className="shape-2">
                        <img src={Star as string} alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero5;
