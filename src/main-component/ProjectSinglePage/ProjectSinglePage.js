import React, { Fragment } from 'react';
import { Link, useParams } from 'react-router-dom';
import PageTitle from '../../components/pagetitle/PageTitle';
import FooterScetion from '../../components/FooterScetion/FooterScetion';
import PortfolioItems from '../../api/Project';
import ProjectSingleSlider from './ProjectSingleSlider';
import VideoModal from '../../components/ModalVideo/VideoModal';
import Logo from '../../images/logo.svg';
import Header4 from '../../components/header4/header4';

const ProjectSinglePage = () => {
  const { slug } = useParams();
  const Portfolio = PortfolioItems.find((item) => item.slug === slug);
  return (
    <Fragment>
      <div className='page-wrapper'>
        <div className='page-wrapper-2' id='smooth-wrapper'>
          <div id='smooth-content'>
            <Header4
              mClass={'menu-open menu-open-s2'}
              hclass={'header-section-s5'}
            />
            <PageTitle pageTitle={Portfolio.title} pagesub={'Project'} />
            <section className='project-single-page section-padding'>
              <div className='container'>
                <div className='row'>
                  <div className='col-xl-9 col-lg-8 col-12'>
                    <ProjectSingleSlider />
                    <div className='content'>
                      <h2 className='poort-text poort-in-right'>
                        Every project, team, and organization is unique.
                      </h2>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It has
                        survived not only five centuries, but also the leap into
                        electronic typesetting, remaining essentially unchanged.
                        It was popularised in the 1960s with the release of
                        Letraset sheets containing Lorem Ipsum passages.
                      </p>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book.
                      </p>
                    </div>
                    <div className='content'>
                      <h3 className='poort-text poort-in-right'>
                        As your business grows, your projects might too.
                      </h3>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book.
                      </p>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book.
                      </p>
                    </div>
                    <div className='vider-content'>
                      <div className='video-wrap'>
                        <div className='popup-video'>
                          <VideoModal />
                        </div>
                      </div>
                      <div className='text'>
                        <h3>Project summery:</h3>
                        <p>
                          Lorem ipsum dolor sit amet consectetur. Sit aliquam
                          dignissim sit id amet cum. Nulla varius purus bibendum
                          pellentesque eu sit nascetur vitae. Nibh tortor et
                          nibh tincidunt tempor proin. Est placerat felis
                          pellentesque tempus condimentum consectetur. Faucibus
                          nunc pellentesque ac mus posuere aliquam morbi augue
                          orci. Egestas donec sit pellentesque lacus. Adipiscing
                          semper diam augue id. Et donec a cursus eget convallis
                          elit commodo felis. Amet id feugiat eget nunc nec
                          ultricies ac feugiat.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className='col-xl-3 col-lg-4 col-12'>
                    <div className='project-sidebar'>
                      <div className='project-widget'>
                        <h3>Project Info:</h3>
                        <ul>
                          <li>
                            <span>Project :</span>
                            <span>ANT BUilding</span>
                          </li>
                          <li>
                            <span> Architect :</span>
                            <span>Jhonthan Hayway</span>
                          </li>
                          <li>
                            <span>Clients :</span>
                            <span>David Arham</span>
                          </li>
                          <li>
                            <span>Duration :</span>
                            <span>06 Months</span>
                          </li>
                          <li>
                            <span>Budget :</span>
                            <span>$800.58</span>
                          </li>

                          <li>
                            <span>Location :</span>
                            <span>Nastek, USA.</span>
                          </li>
                        </ul>
                      </div>
                      <div className='contact-widget'>
                        <div className='logo'>
                          <Link to='/'>
                            <img src={Logo} alt='' />
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
                  </div>
                </div>
              </div>
            </section>
            <FooterScetion />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ProjectSinglePage;
