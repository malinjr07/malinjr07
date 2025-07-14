import { FC, ReactElement } from 'react';
import Header6 from '../../components/Header6/Header6';
import PageTitle from '../../components/pagetitle/PageTitle';
import FooterScetion from '../../components/FooterSection';
import ContactForm from './ContactForm';

const ContactPage: FC = (): ReactElement => {
  return (
    <div className='page-wrapper'>
      <div className='page-wrapper-2' id='smooth-wrapper'>
        <div id='smooth-content'>
          <Header6 />
          <PageTitle pageTitle={'Contact Us'} pagesub={'Contact'} />
          <section className='contact-page-section section-padding'>
            <div className='contacts-section'>
              <div className='container'>
                <div className='row'>
                  <div className='col-lg-8 col-12'>
                    <div className='contact-form'>
                      <h2>Get in touch.</h2>
                      <span>We would love to hear from you.</span>
                      <ContactForm />
                    </div>
                  </div>
                  <div className='col-lg-4 col-12'>
                    <div className='contact-info-wrap'>
                      <ul>
                        <li className='contact-info'>
                          <div className='icon'>
                            <img
                              src={'../../images/contact/c1.svg'}
                              alt='Location'
                            />
                          </div>
                          <div className='content'>
                            <h3>Our Location:</h3>
                            <span>8932, Natiska, USA.</span>
                          </div>
                        </li>
                        <li className='contact-info'>
                          <div className='icon'>
                            <img
                              src={'../../images/contact/c2.svg'}
                              alt='Opening Hours'
                            />
                          </div>
                          <div className='content'>
                            <h3>Opening Hours:</h3>
                            <span>09:00 am to 10:00 pm</span>
                          </div>
                        </li>
                        <li className='contact-info'>
                          <div className='icon'>
                            <img
                              src={'../../images/contact/c3.svg'}
                              alt='Email'
                            />
                          </div>
                          <div className='content'>
                            <h3>E-mail Us:</h3>
                            <span>wosabinfo@gmail.com</span>
                          </div>
                        </li>
                        <li className='contact-info'>
                          <div className='icon'>
                            <img
                              src={'../../images/contact/c4.svg'}
                              alt='Phone'
                            />
                          </div>
                          <div className='content'>
                            <h3>Call Us:</h3>
                            <span>+00 697-836-937</span>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <section className='contact-mape-section'>
              <div className='map-wrap'>
                <iframe
                  src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2822.7806761080233!2d-93.29138368446431!3d44.96844997909819!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52b32b6ee2c87c91%3A0xc20dff2748d2bd92!2sWalker+Art+Center!5e0!3m2!1sen!2sus!4v1514524647889'
                  width='100%'
                  height='100%'
                  frameBorder='0'
                  style={{ border: 0 }}
                  allowFullScreen
                  title='Google Map'
                ></iframe>
              </div>
            </section>
          </section>
          <FooterScetion />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;

