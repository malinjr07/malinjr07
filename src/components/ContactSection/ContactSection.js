import React from 'react';

// image
import Icon1 from '../../images/contact/1.svg'
import Icon2 from '../../images/contact/2.svg'
import Icon3 from '../../images/contact/3.svg'
import ContactForm from '../ContactFrom/ContactForm';

const ContactSection = (props) => {

    return(
        <section className={"" + props.Cclass } id="Contact">
            <div className="wraper">
                <div className="section-top-content">
                    <h2 className="poort-text poort-in-right">Contact</h2>
                    <h3 className="poort-text poort-in-right">Lets Work Together!</h3>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-12">
                        <div className="contact-info">
                            <div className="icon">
                                <img src={Icon1} alt="" />
                            </div>
                            <div className="text">
                                <h3>Contact Info</h3>
                                <span>241 Royal Mesa, New Jersey </span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12">
                        <div className="contact-info">
                            <div className="icon">
                                <img src={Icon2} alt="" />
                            </div>
                            <div className="text">
                                <h3>Email Address</h3>
                                <span>poortdemo@gmail.com</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12">
                        <div className="contact-info">
                            <div className="icon">
                                <img src={Icon3} alt="" />
                            </div>
                            <div className="text">
                                <h3>Phone</h3>
                                <span>+(684) 555-0102</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="contact-from">
                 <ContactForm />
                </div>
            </div>
            <div className="shape">
                <svg width="352" height="352" viewBox="0 0 352 352" fill="none">
                    <circle cx="176" cy="176" r="176" fill="url(#paint0_radial_56_1808)" fillOpacity="0.4" />
                    <defs>
                        <radialGradient id="paint0_radial_56_18080" cx="0" cy="0" r="1"
                            gradientUnits="userSpaceOnUse"
                            gradientTransform="translate(176 176) rotate(90) scale(176)">
                            <stop offset="0" stopColor="#C4EF17" stopOpacity="0.8" />
                            <stop offset="1" stopColor="#1B1C1E" stopOpacity="0" />
                        </radialGradient>
                    </defs>
                </svg>
            </div>
        </section>
     )
        
}

export default ContactSection;
