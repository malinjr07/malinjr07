import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';
import blogs from '../../api/blogs';
import { useParams } from 'react-router-dom'
import BlogSidebar from '../BlogSidebar/BlogSidebar.js'
import gsap from 'gsap';
import { Power2 } from 'gsap/all';
import CommentForm from './CommentForm.js';

import Blog1 from '../../images/blog/img-1.jpg'
import Blog2 from '../../images/blog/img-2.jpg'



import blog3 from '../../images/blog/author/img-1.jpg'
import blog5 from '../../images/blog/author/img-2.jpg'
import gl1 from '../../images/blog/sin-1.jpg'
import gl2 from '../../images/blog/sin-2.jpg'

const BlogSingle = (props) => {

    const { slug } = useParams()

    const BlogDetails = blogs.find(item => item.slug === slug)

    const submitHandler = (e) => {
        e.preventDefault()
    }

    useEffect(() => {
        let newClassNameElements = document.querySelectorAll(".new_img-animet");
        newClassNameElements.forEach((newClassNameElement) => {
            let image = newClassNameElement.querySelector("img");
            let tl = gsap.timeline({
                scrollTrigger: {
                    trigger: newClassNameElement,
                    start: "top 50%",
                }
            });

            tl.set(newClassNameElement, { autoAlpha: 1 });
            tl.from(newClassNameElement, 1.5, {
                xPercent: -100,
                ease: Power2.out
            });
            tl.from(image, 1.5, {
                xPercent: 100,
                scale: 1.3,
                delay: -1.5,
                ease: Power2.out
            });
        });
    }, []);



    const swiperRef = useRef(null);
    useEffect(() => {
        swiperRef.current = new Swiper(".blog-slide", {
            loop: true,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
        });
    }, []);
    const nextSlide = () => {
        if (swiperRef.current) {
            swiperRef.current.slideNext();
        }
    };

    const prevSlide = () => {
        if (swiperRef.current) {
            swiperRef.current.slidePrev();
        }
    };


    return (
        <section className="blog-single-page section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-12">
                        <div className="blog-grid">
                            <div className="blog-slide swiper">
                                <div className="swiper-wrapper">
                                    <div className="image swiper-slide">
                                        <img src={Blog1} alt="" />
                                    </div>
                                    <div className="image swiper-slide">
                                        <img src={Blog2} alt="" />
                                    </div>
                                </div>
                                <div className="swiper-button-next" onClick={nextSlide}></div>
                                <div className="swiper-button-prev" onClick={prevSlide}></div>
                            </div>
                            <div className="blog-content">
                                <div className="top-content">
                                    <ul className="tag">
                                        <li><Link to="#">Website</Link></li>
                                        <li><Link to="#">Branding</Link></li>
                                    </ul>
                                </div>
                                <div className="buttom-content">
                                    <ul>
                                        <li><span>By:</span>admin</li>
                                        <li><span>Date:</span>Sep 09, 2024</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="content">
                            <h2 className="poort-text poort-in-right">{BlogDetails.title}</h2>
                            <p>Lorem ipsum dolor sit amet consectetur. Dignissim id sagittis vitae auctor. Interdum quam
                                faucibus nisl enim quis. Et mattis nisl at sagittis urna vitae nec vel risus. Nisl eget
                                dictumst tincidunt elementum aliquet. Congue at cras nam habitant ac. Ac vehicula tempus
                                ante massa dictum nibh non. Ultrices urna dui dolor metus porta tellus enim odio.
                                Maecenas diam nisl mattis tincidunt consequat hac. Sed sit ipsum porta dapibus facilisis
                                et faucibus. Mauris mauris in massa consectetur. Felis cursus aliquam placerat ipsum
                                mauris consequat. Volutpat ultricies faucibus donec pellentesque eu dignissim enim.</p>
                            <p>Senectus faucibus arcu pulvinar libero. At consequat sed mattis neque a volutpat ut
                                nisl
                                nisi. Ut sit sed leo dolor in sodales. In mus nisi facilisi augue nulla maecenas.
                                Amet a
                                sodales interdum amet purus. Accumsan cursus pulvinar neque ullamcorper dui id urna.
                                Id
                                nisl vitae turpis varius.</p>
                        </div>
                        <div className="content">
                            <h3 className="poort-text poort-in-right">Showcase your work in a dedicated portfolio section
                            </h3>
                            <p>Lorem ipsum dolor sit amet consectetur. Dignissim id sagittis vitae auctor. Interdum quam
                                faucibus nisl enim quis. Et mattis nisl at sagittis urna vitae nec vel risus. Nisl eget
                                dictumst tincidunt elementum aliquet. Congue at cras nam habitant ac. Ac vehicula tempus
                                ante massa dictum nibh non. Ultrices urna dui dolor metus porta tellus enim odio.
                                Maecenas diam nisl mattis tincidunt consequat hac. Sed sit ipsum porta dapibus facilisis
                                et faucibus. Mauris mauris in massa consectetur. Felis cursus aliquam placerat ipsum
                                mauris consequat. Volutpat ultricies faucibus donec pellentesque eu dignissim enim.</p>
                            <p>Senectus faucibus arcu pulvinar libero. At consequat sed mattis neque a volutpat ut
                                nisl
                                nisi. Ut sit sed leo dolor in sodales. In mus nisi facilisi augue nulla maecenas.
                                Amet a
                                sodales interdum amet purus. Accumsan cursus pulvinar neque ullamcorper dui id urna.
                                Id
                                nisl vitae turpis varius.</p>
                        </div>
                        <div className="blog-single-img">
                            <div className="row">
                                <div className="col-lg-6 col-12">
                                    <div className="image new_img-animet">
                                        <img src={gl1} data-speed="0.8" alt="" />
                                    </div>
                                </div>
                                <div className="col-lg-6 col-12">
                                    <div className="image new_img-animet">
                                        <img src={gl2} data-speed="0.8" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="content">
                            <h3 className="poort-text poort-in-right">Once your website is live.</h3>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                                has been the industry's standard dummy text ever since the 1500s, when an unknown
                                printer took a galley of type and scrambled it to make a type specimen book.</p>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                                has been the industry's standard dummy text ever since the 1500s, when an unknown
                                printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </div>
                        <div className="content">
                            <h3 className="poort-text poort-in-right">Choose a design theme that reflects your personality
                            </h3>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                                has been the industry's standard dummy text ever since the 1500s, when an unknown
                                printer took a galley of type and scrambled it to make a type specimen book.</p>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                                has been the industry's standard dummy text ever since the 1500s, when an unknown
                                printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </div>
                        <div className="comment-wrap">
                            <div className="comment">
                                <h2>Comments:</h2>
                                <ul>
                                    <li className="grid-comment">
                                        <div className="image">
                                            <img src={blog3} alt="" />
                                        </div>
                                        <div className="content">
                                            <h3>Ronald Trisna</h3>
                                            <span>Marketing Coordinator</span>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry
                                                has
                                                been the industry's standard dummy text ever since the 1500s, when an
                                                unknown printer took a galley of type and scrambled.</p>
                                            <Link to="#">REPLY</Link>
                                        </div>
                                    </li>
                                    <li className="grid-comment">
                                        <div className="image">
                                            <img src={blog5} alt="" />
                                        </div>
                                        <div className="content">
                                            <h3>Dania Skitura</h3>
                                            <span>Web Designer</span>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry
                                                has
                                                been the industry's standard dummy text ever since the 1500s, when an
                                                unknown printer took a galley of type and scrambled.</p>
                                            <Link to="#">REPLY</Link>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="comment-form">
                                <h2>Leave a comment:</h2>
                                <CommentForm />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-12">
                        <BlogSidebar />
                    </div>
                </div>
            </div>
        </section>
    )

}

export default BlogSingle;
