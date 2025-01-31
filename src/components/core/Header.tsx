import React, { useState, useEffect, FC } from 'react';
import { Link } from 'react-scroll';
import Logo from '../../images/logo.svg';
import { tHeader } from '@/utils/types/propTypes';

const Header: FC<tHeader> = ({ mClass, hClass }) => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isSticky, setSticky] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById('navbar');
      if (!navbar) return;

      const sticky = navbar.offsetTop;
      if (window.pageYOffset >= sticky) {
        setSticky(true);
      } else {
        setSticky(false);
      }
      if (window.pageYOffset === 0) {
        setSticky(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <div className={'' + mClass} onClick={toggleMenu}>
        <i
          className={isMenuOpen ? 'ti-close' : 'ti-align-justify'}
          id='bar_close'
        ></i>
      </div>
      <header className={`${hClass} ${isSticky ? 'sticky' : ''}`} id='navbar'>
        <Link to='/' className='logo'>
          <img src={Logo} alt='' />
        </Link>
        <div className='header-section'>
          <div
            className={`menu ${isMenuOpen ? 'open-mobilemenu' : ''}`}
            id='menu_wrap'
          >
            <ul>
              <li>
                <Link
                  activeClass='active'
                  to='top'
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  activeClass='active'
                  to='about'
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  activeClass='active'
                  to='Services'
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  activeClass='active'
                  to='Portfolio'
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  activeClass='active'
                  to='testimonial'
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  Testimonial
                </Link>
              </li>
              <li>
                <Link
                  activeClass='active'
                  to='blog'
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  activeClass='active'
                  to='Contact'
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  Contact Me
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;

