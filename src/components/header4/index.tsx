import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import Logo from "../../images/logo.svg";

interface Header4Props {
  /** Additional class name for the menu button */
  mClass?: string;
  /** Additional class name for the header */
  hclass?: string;
}

const Header4: React.FC<Header4Props> = (props) => {
  const [isMenuOpen, setMenuOpen] = useState<boolean>(false);
  const [isSticky, setSticky] = useState<boolean>(false);
  
  const toggleMenu = (): void => {
    setMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = (): void => {
      const navbar = document.getElementById("navbar");
      if (!navbar) return;

      const sticky = navbar.offsetTop;
      setSticky(window.pageYOffset >= sticky && window.pageYOffset !== 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <div className={props.mClass || ""} onClick={toggleMenu}>
        <i className={isMenuOpen ? "ti-close" : "ti-align-justify"} id="bar_close"></i>
      </div>
      <header className={`${props.hclass || ""} ${isSticky ? "sticky" : ""}`} id="navbar">
        <Link to="/" className="logo">
          <img src={Logo as string} alt="" />
        </Link>
        <div className="header-section">
          <div className={`menu ${isMenuOpen ? "open-mobilemenu" : ""}`} id="menu_wrap">
            <ul>
              <li><Link activeClass="active" to="top" spy={true} smooth={true} duration={500}>Home</Link></li>
              <li><Link activeClass="active" to="about" spy={true} smooth={true} duration={500}>About</Link></li>
              <li><Link activeClass="active" to="Services" spy={true} smooth={true} duration={500}>Services</Link></li>
              <li><Link activeClass="active" to="Portfolio" spy={true} smooth={true} duration={500}>Portfolio</Link></li>
              <li><Link activeClass="active" to="testimonial" spy={true} smooth={true} duration={500}>Testimonial</Link></li>
              <li><Link activeClass="active" to="blog" spy={true} smooth={true} duration={500}>Blog</Link></li>
              <li><Link activeClass="active" to="Contact" spy={true} smooth={true} duration={500}>Contact Me</Link></li>
            </ul>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header4;
