import React, { FC, ReactElement, Fragment, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header6 from '../../components/Header6/Header6';
import PageTitle from '../../components/pagetitle/PageTitle';
import FooterScetion from '../../components/FooterScetion/FooterScetion';
import Services from '../../api/Services';
import ServiceWidget from './ServiceWidget';

import S1 from '../../images/service-single/img-1.jpg';
import S2 from '../../images/service-single/img-2.jpg';
import Shape from '../../images/service-single/quote.svg';

import gsap from 'gsap';
import { Power2 } from 'gsap/all';

const ServiceSinglePage: FC = (): ReactElement => {
  const { slug } = useParams<{ slug: string }>();
  const ServiceData = Services.find((item) => item.slug === slug);

  useEffect(() => {
    let newClassNameElements = document.querySelectorAll('.new_img-animet');
    newClassNameElements.forEach((newClassNameElement) => {
      let image = newClassNameElement.querySelector('img');
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: newClassNameElement,
          start: 'top 50%',
        },
      });

      tl.set(newClassNameElement, { autoAlpha: 1 });
      tl.from(newClassNameElement, 1.5, {
        xPercent: -100,
        ease: Power2.easeOut,
      });
      tl.from(image, 1.5, {
        xPercent: 100,
        scale: 1.3,
        delay: -1.5,
        ease: Power2.easeOut,
      });
    });
  }, []);

  return (
    <Fragment>
      <div className='page-wrapper'>
        <div className='page-wrapper-2' id='smooth-wrapper'>
          <div id='smooth-content'>
            <Header6 />
            <PageTitle
              pageTitle={ServiceData?.title || 'Service Details'}
              pagesub={'Service'}
            />
            <section className='service-single-page section-padding'>
              <div className='container'>
                <div className='row'>
                  <div className='col-lg-3 col-12 order-lg-1 order-2'>
                    <ServiceWidget />
                  </div>
                  <div className='col-lg-9 col-12 order-lg-2 order-1'>
                    <div className='service-single-wrap'>
                      <div className='service-image new_img-animet'>
                        <img
                          src={ServiceData?.sSImg || S1}
                          alt=''
                          data-speed='0.8'
                        />
                      </div>
                      <div className='text'>
                        <h2 className='poort-text poort-in-right'>
                          {ServiceData?.title || 'Service Title'}
                        </h2>
                        <p>
                          {' '}
                          <span>B</span> orna nunc pretium mi lacus sagittis
                          varius sit dignissim commodo. Purus nisl aliquet
                          ornare gravida at ullamcorper diam. Min aliquam
                          blandit at facilisi lacus augue aliquet. Congue
                          maecenas erat facilisis varius cursus turpis. Vitae
                          praesent arcu suspendisse egestas. Diam metus tortor
                          diam in urna egestas mi enim. Posuere eu laoreet dui
                          scelerisque pulvinar tincidunt. Mi tellus ullamcorper
                          turpis tellus auctor vel nulla semper. Mattis
                          dignissim mattis ac sed. Ac elementum cursus id lorem
                          feugiat quisque bibendum urna. Massa tincidunt a
                          dictum volutpat enim enim dignissim sit. Lectus montes
                          tellus aliquam vel. Vestibulum ultrices nec lobortis
                          eget. Suspendisse gravida magnis viverra vitae purus
                          quam. Tellus fermentum vel amet mauris velit gravida
                          est adipiscing donec.
                          <br />
                          <br />
                          Magna enim netus scelerisque velit. Nunc dui feugiat
                          justo erat adipiscing feugiat velit ut. Metus ut risus
                          cum nulla gravida varius morbi. A dui eu mauris eget
                          nunc in sapien. Pretium vel faucibus tortor neque
                          fusce ornare. Lobortis viverra integer a velit arcu
                          enim enim vulputate.{' '}
                        </p>
                      </div>

                      <div className='quote-content'>
                        <p>
                          Mattis sit metus duis condimentum. At turpis gravida
                          orci suspendisse. Aliquam eget urna mauris semper
                          tempus sit ac. Sed maecenas tincidunt aenean sagittis
                          nascetur. Tellus hendrerit posuere magnis tempor
                          quisque ut nunc enim mattis. Nisl faucibus mus amet
                          integer scelerisque urna non arcu risus.
                        </p>
                        <div className='shape'>
                          <img src={Shape as unknown as string} alt='' />
                        </div>
                      </div>

                      <div className='content'>
                        <h3 className='poort-text poort-in-right'>
                          Making Your Dream True
                        </h3>
                        <p>
                          Dignissim netus aliquam hac mattis. Fringilla metus
                          purus pharetra semper nulla tellus mauris risus.
                          Ullamcorper tellus nisl augue lectus nisl tellus
                          quisque sapien nisl. Vestibulum risus nisl augue
                          lectus nisl tellus quisque sapien nisl. Vestibulum
                          risus nisl augue lectus nisl tellus quisque sapien
                          nisl. Vestibulum risus nisl augue lectus nisl tellus
                          quisque sapien nisl. Vestibulum risus nisl augue
                          lectus nisl tellus quisque sapien nisl. Vestibulum
                          risus nisl augue lectus nisl tellus quisque sapien
                          nisl. Vestibulum risus nisl augue lectus nisl tellus
                          quisque sapien nisl. Vestibulum risus nisl augue
                          lectus nisl tellus quisque sapien nisl. Vestibulum
                          risus nisl augue lectus nisl tellus quisque sapien
                          nisl. Vestibulum risus nisl augue lectus nisl tellus
                          quisque sapien nisl. Vestibulum risus nisl augue
                          lectus nisl tellus quisque sapien nisl. Vestibulum
                          risus nisl augue lectus nisl tellus quisque sapien
                          nisl. Vestibulum risus nisl augue lectus nisl tellus
                          quisque sapien nisl.
                        </p>
                      </div>

                      <div className='feature-wrap row'>
                        <div className='col-md-6 col-12'>
                          <div className='feature-item'>
                            <div className='icon'>
                              <i className='fi flaticon-draw'></i>
                            </div>
                            <div className='content'>
                              <h3>Planning & Design</h3>
                              <p>
                                Donec gravida turpis lectus tellus. Nec augue
                                nisl augue lectus nisl tellus quisque sapien
                                nisl.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className='col-md-6 col-12'>
                          <div className='feature-item'>
                            <div className='icon'>
                              <i className='fi flaticon-house-2'></i>
                            </div>
                            <div className='content'>
                              <h3>Architectural Solutions</h3>
                              <p>
                                Donec gravida turpis lectus tellus. Nec augue
                                nisl augue lectus nisl tellus quisque sapien
                                nisl.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className='col-md-6 col-12'>
                          <div className='feature-item'>
                            <div className='icon'>
                              <i className='fi flaticon-house-1'></i>
                            </div>
                            <div className='content'>
                              <h3>Exterior Design</h3>
                              <p>
                                Donec gravida turpis lectus tellus. Nec augue
                                nisl augue lectus nisl tellus quisque sapien
                                nisl.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className='col-md-6 col-12'>
                          <div className='feature-item'>
                            <div className='icon'>
                              <i className='fi flaticon-apartment'></i>
                            </div>
                            <div className='content'>
                              <h3>Custom Solutions</h3>
                              <p>
                                Donec gravida turpis lectus tellus. Nec augue
                                nisl augue lectus nisl tellus quisque sapien
                                nisl.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className='service-image-wrap row new_img-animet'>
                        <div className='col-lg-6 col-12'>
                          <img src={S1} alt='' />
                        </div>
                        <div className='col-lg-6 col-12'>
                          <img src={S2} alt='' />
                        </div>
                      </div>

                      <div className='content-wrap row'>
                        <div className='col-lg-6 col-12'>
                          <div className='content'>
                            <h3 className='poort-text poort-in-right'>
                              Planning & Design
                            </h3>
                            <p>
                              Aliquam erat volutpat. Vestibulum risus nisl augue
                              lectus nisl tellus quisque sapien nisl. Vestibulum
                              risus nisl augue lectus nisl tellus quisque sapien
                              nisl. Vestibulum risus nisl augue lectus nisl
                              tellus quisque sapien nisl. Vestibulum risus nisl
                              augue lectus nisl tellus quisque sapien nisl.
                              Vestibulum risus nisl augue lectus nisl tellus
                              quisque sapien nisl. Vestibulum risus nisl augue
                              lectus nisl tellus quisque sapien nisl. Vestibulum
                              risus nisl augue lectus nisl tellus quisque sapien
                              nisl.
                            </p>
                          </div>
                        </div>
                        <div className='col-lg-6 col-12'>
                          <div className='content'>
                            <h3 className='poort-text poort-in-right'>
                              Architectural Solutions
                            </h3>
                            <p>
                              Aliquam erat volutpat. Vestibulum risus nisl augue
                              lectus nisl tellus quisque sapien nisl. Vestibulum
                              risus nisl augue lectus nisl tellus quisque sapien
                              nisl. Vestibulum risus nisl augue lectus nisl
                              tellus quisque sapien nisl. Vestibulum risus nisl
                              augue lectus nisl tellus quisque sapien nisl.
                              Vestibulum risus nisl augue lectus nisl tellus
                              quisque sapien nisl. Vestibulum risus nisl augue
                              lectus nisl tellus quisque sapien nisl. Vestibulum
                              risus nisl augue lectus nisl tellus quisque sapien
                              nisl.
                            </p>
                          </div>
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

export default ServiceSinglePage;

