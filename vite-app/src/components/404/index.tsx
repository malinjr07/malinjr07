import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  return (
    <section className='error-page-section section-padding'>
      <div className='container'>
        <div className='content'>
          <h2>Oops</h2>
          <h3>404 - Page Not Found</h3>
          <p>
            It looks like nothing was found at this location. Click the button
            below to return home.
          </p>
          <Link onClick={ClickHandler} to='/' className='theme-btn'>
            Back To Home
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Error;

