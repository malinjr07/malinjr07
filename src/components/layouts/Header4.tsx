import React, { useState, useEffect } from 'react';
import Link from 'next/link';

// Placeholder for logo image - to be copied to public directory
interface Header4Props {
  mClass: string;
  hclass: string;
}

const Header4: React.FC<Header4Props> = ({ mClass, hclass }) => {
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
      <div className={mClass} onClick={toggleMenu}>
        <i className={isMenuOpen ? 'ti-close' : 'ti-align-justify'} id='bar_close'></i>
      </div>
      <header className={`${hclass} ${isSticky ? 'sticky' : ''}`} id='navbar'>
        <Link href='/' className='logo'>
          {/* Placeholder for logo image */}
          <div>Logo Placeholder</div>
        </Link>
        <div className='header-section'>
          <div className={`menu ${isMenuOpen ? 'open-mobilemenu' : ''}`} id='menu_wrap'>
            <ul>
              <li><Link href='#top'>Home</Link></li>
              <li><Link href='#about'>About</Link></li>
              <li><Link href='#Services'>Services</Link></li>
              <li><Link href='#Portfolio'>Portfolio</Link></li>
              <li><Link href='#testimonial'>Testimonial</Link></li>
              <li><Link href='#blog'>Blog</Link></li>
              <li><Link href='#Contact'>Contact Me</Link></li>
            </ul>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header4;
