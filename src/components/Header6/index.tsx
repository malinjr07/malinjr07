import Logo from 'components/svgs/LogoWhite';
import React, { useState, FC } from 'react';
import { Link } from 'react-router-dom';

const Header6: FC = () => {
  const [isMenuOpen, setMenuOpen] = useState<boolean>(false);

  const handleClick = (): void => {
    window.scrollTo(10, 0);
  };

  const toggleMenu = (): void => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <header className='header-section-s11'>
      <div className='herader-wrap'>
        <div className='container-fluid'>
          <div className='row align-items-center'>
            <div className='col-lg-3 col-5'>
              <Link onClick={handleClick} to='/' className='logo'>
                <Logo width='155' height='40' />
              </Link>
            </div>
            <div className='col-lg-7 col-5'>
              <div className='menu-open' onClick={toggleMenu}>
                <i
                  className={isMenuOpen ? 'ti-close' : 'ti-align-justify'}
                  id='bar_close'
                ></i>
              </div>
              <div
                className={`menu-wrap ${isMenuOpen ? 'open-mobilemenu' : ''}`}
              >
                <ul className='menu-main'>
                  <li>
                    <Link onClick={handleClick} to='/'>
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link onClick={handleClick} to='/about'>
                      About
                    </Link>
                  </li>
                  <li>
                    <Link onClick={handleClick} to='/service'>
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link onClick={handleClick} to='/project'>
                      Portfolio
                    </Link>
                  </li>
                  <li>
                    <Link onClick={handleClick} to='/contact'>
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className='col-lg-2 col-1'>
              <div className='header-right'>
                <div className='contact-btn'>
                  <Link
                    onClick={handleClick}
                    to='/contact'
                    className='theme-btn'
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header6;

