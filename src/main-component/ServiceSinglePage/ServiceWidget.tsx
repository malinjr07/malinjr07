import React, { FC, ReactElement } from 'react';
import { Link } from 'react-router-dom';
import Services from '../../api/Services';
import Logo from '../../images/logo.svg';

const ServiceWidget: FC = (): ReactElement => {
  return (
    <div className='service-widgets'>
      <div className='service-widget widget'>
        <h3 className='title'>Services</h3>
        <ul>
          {Services.slice(0, 5).map((service, item) => (
            <li key={item}>
              <Link to={`/service-single/${service.slug}`}>
                {service.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className='contact-widget'>
        <div className='logo'>
          <Link to="/">
            <img src={Logo as unknown as string} alt="" />
          </Link>
        </div>
        <h2>Contact Us Now</h2>
        <a href='tel:+4733378901' className='call'>
          (629) 555-0129
        </a>
        <div className='contact-btn'>
          <Link to='/contact' className='theme-btn'>
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceWidget;
