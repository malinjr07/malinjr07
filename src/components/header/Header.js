import React, { useState } from 'react';
import { Link } from 'react-scroll'; 


const Header = (props) => {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };


    return (
        <div>
            <div className="menu-open" onClick={toggleMenu}>
                <i className={isMenuOpen ? "ti-close" : "ti-align-justify"} id="bar_close"></i>
            </div>
            <header id="navbar" className={"" + props.hclass}>
                <div className={`menu ${isMenuOpen ? "open-mobilemenu" : ""}`} id="menu_wrap">
                    <ul>
                        <li><Link activeClass="active" to="top" spy={true} smooth={true} duration={500}>Home</Link></li>
                        <li><Link activeClass="active" to="about" spy={true} smooth={true} duration={500}>About</Link></li>
                        <li><Link activeClass="active" to="Resume" spy={true} smooth={true} duration={500}>Resume</Link></li>
                        <li><Link activeClass="active" to="Services" spy={true} smooth={true} duration={500}>Services</Link></li>
                        <li><Link activeClass="active" to="Portfolio" spy={true} smooth={true} duration={500}>Portfolio</Link></li>
                        <li><Link to="testimonial">Testimonial</Link></li>
                        <li><Link to="Contact">Contact Me</Link></li>
                    </ul>
                </div>
            </header>
        </div>
    );
}

export default Header;
