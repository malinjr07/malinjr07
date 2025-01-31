import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Profile from '../../images/profile/2.jpg'

gsap.registerPlugin(ScrollTrigger);

const ProfileSection2 = () => {
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
    return (
       <div>
            <div className="profile-s2 scroll-text-animation">
                <div className="image">
                    <img src={Profile} alt="" />
                </div>
                <div className="content">
                    <h2 className="poort-text poort-in-right">Hi, I’m</h2>
                    <h3 className="poort-text poort-in-right">Arlene McCoy</h3>
                    <p>Former Designer And Developer. I design and code beautifully simple things and i love what i do.
                    </p>
                </div>
            </div>
            <div className="left-sidetext">
                <h2>Framer Developer</h2>
            </div>
            <div className="circle-content">
                <div>
                    <svg viewBox="0 0 100 100">
                        <defs>
                            <path id="circle" d="
                                M 50, 50
                                m -37, 0
                                a 37,37 0 1,1 74,0
                                a 37,37 0 1,1 -74,0" />
                        </defs>
                        <text>
                            <textPath xlinkHref="#circle">
                                hire me your dream project.
                            </textPath>
                        </text>
                    </svg>
                </div>
                <div className="arrows">
                    <svg viewBox="0 0 37 37" fill="none">
                        <path
                            d="M12.6789 7.51532V10.182H21.4655L6.01221 25.6353L7.89221 27.5153L23.3455 12.062V20.8487H26.0122V7.51532H12.6789Z"
                            fill="black" />
                    </svg>
                </div>
            </div>
       </div>
    );
};

export default ProfileSection2;