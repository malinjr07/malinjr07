import React from 'react';
import ResumeData from '../../api/Resume';
const ResumeSection2 = (props) => {
    return (
        <section className={"" + props.hclass} id="Resume">
            <div className="container">
                <div className="section-top-content-s2">
                    <h2 className="scroll-text-center">Resume</h2>
                    <h3 className="scroll-text-center">My Education & Experience</h3>
                </div>
            </div>
            <div className="resume-content">

                {ResumeData.slice(4, 8).map((resume, Rky) => (
                    <div className="item scroll-text-animation" data-animation="fade_from_right" key={Rky}>
                        <div className="line-border"></div>
                        <span>{resume.date}</span>
                        <h2>{resume.title}</h2>
                        <p>{resume.location}</p>
                    </div>
                ))}
            </div>
            <div className="shape">
                <svg width="406" height="750" viewBox="0 0 406 750" fill="none">
                    <circle cx="375" cy="375" r="375" fill="url(#paint0_radial_56_1804)" fillOpacity="0.4" />
                    <defs>
                        <radialGradient id="paint0_radial_56_1804" cx="0" cy="0" r="1"
                            gradientUnits="userSpaceOnUse"
                            gradientTransform="translate(375 375) rotate(90) scale(375)">
                            <stop offset="0" stopColor="#C4EF17" stopOpacity="0.8" />
                            <stop offset="1" stopColor="#1B1C1E" stopOpacity="0" />
                        </radialGradient>
                    </defs>
                </svg>
            </div>
        </section>
    );
};

export default ResumeSection2;