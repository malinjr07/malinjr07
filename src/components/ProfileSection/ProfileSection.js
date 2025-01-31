import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from "react-router-dom";
import Profilu1 from '../../images/profile/1.jpg'

gsap.registerPlugin(ScrollTrigger); 

const ProfileSection = () => {
    
    useEffect(() => {
        function scroll_animations() {
            var defaults = {
                duration: 1.2,
                ease: "power4.out",
                animation: "fade_from_bottom",
                once: false,
            };
            gsap.utils.toArray(".scroll-text-animation").forEach(function (box) {
                var gsap_obj = {};
                var settings = {
                    duration: box.dataset.animationDuration || defaults.duration,
                };
                var animations = {
                    fade_from_bottom: {
                        y: 180,
                        opacity: 0,
                    },
                    fade_from_top: {
                        y: -180,
                        opacity: 0,
                    },
                    fade_from_left: {
                        x: -180,
                        opacity: 0,
                    },
                    fade_from_right: {
                        x: 180,
                        opacity: 0,
                    },
                    fade_in: {
                        opacity: 0,
                    },
                    rotate_up: {
                        y: 180,
                        rotation: 10,
                        opacity: 0,
                    },
                };
                var scroll_trigger = {
                    scrollTrigger: {
                        trigger: box,
                        once: defaults.once,
                        start: "top bottom+=20%",
                        toggleActions: "play none none reverse",
                        markers: false,
                    },
                };
                Object.assign(gsap_obj, settings);
                Object.assign(gsap_obj, animations[box.dataset.animation || defaults.animation]);
                Object.assign(gsap_obj, scroll_trigger);
                gsap.from(box, gsap_obj);
            });
        }
        scroll_animations();
    }, []);


    return(
        <div>
         <div className="profile">
                <div className="image">
                    <img src={Profilu1} alt="" />
                </div>
                <div className="content">
                    <h2 className="poort-text poort-in-right">Hi, I’m</h2>
                    <h3 className="poort-text poort-in-right">Arlene McCoy</h3>
                    <p>Former Designer And Developer. I design and code beautifully simple things and i love what i do.
                    </p>
                    <ul className="socal-icon">
                        <li><Link to="#"><i className="ti-facebook"></i></Link></li>
                        <li><Link to="#"><i className="ti-twitter-alt"></i></Link></li>
                        <li><Link to="#"><i className="ti-linkedin"></i></Link></li>
                        <li><Link to="#"><i className="ti-instagram"></i></Link></li>
                    </ul>
                </div>
            </div>
            <div className="shape">
                <svg width="372" height="446" viewBox="0 0 372 446" fill="none">
                    <circle cx="149" cy="223" r="223" fill="url(#paint0_radial_0_374)" fillOpacity="0.6" />
                    <defs>
                        <radialGradient id="paint0_radial_0_374" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                            gradientTransform="translate(149 223) rotate(90) scale(223)">
                            <stop offset="0" stopColor="#C4EF17" stopOpacity="0.8" />
                            <stop offset="1" stopColor="#1B1C1E" stopOpacity="0" />
                        </radialGradient>
                    </defs>
                </svg>
            </div>
        </div>
    )
}

export default ProfileSection;