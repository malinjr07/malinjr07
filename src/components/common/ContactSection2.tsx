'use client';
import React from 'react';
import { toast } from 'react-toastify';

interface ContactSection2Props {
  Cclass: string;
}

const ContactSection2: React.FC<ContactSection2Props> = ({ Cclass }) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Thanks for your message! I will get back to you soon.');
    // Reset form or handle submission logic here
  };

  return (
    <section className={`contact-section-s2 ${Cclass}`} id='Contact'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-6'>
            <div className='contact-info'>
              <div className='section-title-s2'>
                <span>Get In Touch</span>
                <h2>Have Any Questions? Contact Me</h2>
              </div>
              <div className='contact-text'>
                <p>
                  Feel free to get in touch with me. I am always open to
                  discussing new projects, creative ideas or opportunities to be
                  part of your vision.
                </p>
              </div>
              <div className='contact-address'>
                <div className='address-box'>
                  <i className='fi flaticon-location'></i>
                  <p>123 Street Name, City Name, Country</p>
                </div>
                <div className='address-box'>
                  <i className='fi flaticon-email'></i>
                  <p>
                    <a href='mailto:example@example.com'>example@example.com</a>
                  </p>
                </div>
                <div className='address-box'>
                  <i className='fi flaticon-phone-call'></i>
                  <p>
                    <a href='tel:1234567890'>+1 123 456 7890</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className='col-lg-6'>
            <div className='contact-form'>
              <form onSubmit={handleSubmit}>
                <div className='form-group'>
                  <input
                    type='text'
                    className='form-control'
                    placeholder='Your Name'
                    required
                  />
                </div>
                <div className='form-group'>
                  <input
                    type='email'
                    className='form-control'
                    placeholder='Email Address'
                    required
                  />
                </div>
                <div className='form-group'>
                  <input
                    type='text'
                    className='form-control'
                    placeholder='Subject'
                    required
                  />
                </div>
                <div className='form-group'>
                  <textarea
                    className='form-control'
                    placeholder='Message'
                    required
                  ></textarea>
                </div>
                <div className='form-group'>
                  <button type='submit' className='btn s2'>
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection2;

