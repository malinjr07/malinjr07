import React, { useEffect, useRef, FormEvent } from 'react';
import { Link, useParams } from 'react-router-dom';
import Swiper from 'swiper';
import { Swiper as SwiperType } from 'swiper/types';
import 'swiper/swiper-bundle.css';
import gsap from 'gsap';
import { Power2 } from 'gsap/all';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { BlogPost } from '../../types/components/BlogDetails';
import BlogSidebar from '../BlogSidebar';
import CommentForm from './CommentForm';

// Import images
import Blog1 from '../../images/blog/img-1.jpg';
import Blog2 from '../../images/blog/img-2.jpg';
import blog3 from '../../images/blog/author/img-1.jpg';
import blog5 from '../../images/blog/author/img-2.jpg';
import gl1 from '../../images/blog/sin-1.jpg';
import gl2 from '../../images/blog/sin-2.jpg';

// Import blog data
import blogs from '../../api/blogs';

// Initialize GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const BlogSingle: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const swiperRef = useRef<SwiperType | null>(null);
  
  // Find the blog post by slug and map to the expected type
  const blogDetails: BlogPost | undefined = (() => {
    const post = blogs.find(item => item.slug === slug);
    if (!post) return undefined;
    
    // Map the API blog post to our extended BlogPost type
    return {
      ...post,
      create_at: post.date || '', // Map date to create_at, ensure it's a string
      blogSingleImg: post.featuredImage || '',
      comment: post.comments?.toString() || '0',
      day: post.date ? new Date(post.date).getDate().toString() : '',
      month: post.date ? new Date(post.date).toLocaleString('default', { month: 'long' }) : '',
      screens: post.image,
      description: post.excerpt || '',
      blClass: post.blClass || 'format-standard-image',
      animation: post.animation || '1000',
    };
  })();

  // Handle form submission
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Form submission logic here
  };

  // Initialize animations on component mount
  useEffect(() => {
    // Animation for image elements with class 'new_img-animet'
    const animateElements = () => {
      const elements = document.querySelectorAll(".new_img-animet");
      
      elements.forEach((element) => {
        const image = element.querySelector("img");
        if (!image) return;

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: element,
            start: "top 50%",
          }
        });

        tl.set(element, { autoAlpha: 1 });
        tl.from(element, 1.5, {
          xPercent: -100,
          ease: Power2.easeOut
        });
        tl.from(image, 1.5, {
          xPercent: 100,
          scale: 1.3,
          delay: -1.5,
          ease: Power2.easeOut
        });
      });
    };

    animateElements();

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  // Initialize Swiper
  useEffect(() => {
    if (swiperRef.current) return;

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

    // Cleanup function
    return () => {
      if (swiperRef.current) {
        swiperRef.current.destroy();
        swiperRef.current = null;
      }
    };
  }, []);

  // Handle next slide
  const nextSlide = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  // Handle previous slide
  const prevSlide = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  // Show a fallback if blog post is not found
  if (!blogDetails) {
    return (
      <section className="blog-single-page section-padding">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2>Blog post not found</h2>
              <p>The requested blog post could not be found.</p>
              <Link to="/blog" className="theme-btn">
                Back to Blog
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="blog-single-page section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-12">
            <div className="blog-grid">
              <div className="blog-slide swiper">
                <div className="swiper-wrapper">
                  <div className="image swiper-slide">
                    <img src={Blog1} alt="Blog post image 1" />
                  </div>
                  <div className="image swiper-slide">
                    <img src={Blog2} alt="Blog post image 2" />
                  </div>
                </div>
                <div 
                  className="swiper-button-next" 
                  onClick={nextSlide}
                  role="button"
                  aria-label="Next slide"
                ></div>
                <div 
                  className="swiper-button-prev" 
                  onClick={prevSlide}
                  role="button"
                  aria-label="Previous slide"
                ></div>
              </div>
              <div className="blog-content">
                <div className="top-content">
                  <ul className="tag">
                    {blogDetails.tags?.map((tag, index) => (
                      <li key={index}>
                        <Link to="#">{tag}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="buttom-content">
                  <ul>
                    <li><span>By:</span>{blogDetails.author}</li>
                    <li><span>Date:</span>{blogDetails.create_at}</li>
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Blog content sections */}
            <div className="content">
              <h2 className="poort-text poort-in-right">{blogDetails.title}</h2>
              <p>{blogDetails.description}</p>
              <p>Senectus faucibus arcu pulvinar libero. At consequat sed mattis neque a volutpat ut nisl nisi. 
              Ut sit sed leo dolor in sodales. In mus nisi facilisi augue nulla maecenas. Amet a sodales 
              interdum amet purus. Accumsan cursus pulvinar neque ullamcorper dui id urna. Id nisl vitae turpis varius.</p>
            </div>
            
            {/* Additional content sections */}
            <div className="content">
              <h3 className="poort-text poort-in-right">Showcase your work in a dedicated portfolio section</h3>
              <p>Lorem ipsum dolor sit amet consectetur. Dignissim id sagittis vitae auctor. Interdum quam
                faucibus nisl enim quis. Et mattis nisl at sagittis urna vitae nec vel risus. Nisl eget
                dictumst tincidunt elementum aliquet. Congue at cras nam habitant ac. Ac vehicula tempus
                ante massa dictum nibh non. Ultrices urna dui dolor metus porta tellus enim odio.
                Maecenas diam nisl mattis tincidunt consequat hac. Sed sit ipsum porta dapibus facilisis
                et faucibus. Mauris mauris in massa consectetur. Felis cursus aliquam placerat ipsum
                mauris consequat. Volutpat ultricies faucibus donec pellentesque eu dignissim enim.</p>
            </div>
            
            {/* Blog images */}
            <div className="blog-single-img">
              <div className="row">
                <div className="col-lg-6 col-12">
                  <div className="image new_img-animet">
                    <img src={gl1} data-speed="0.8" alt="Blog detail 1" />
                  </div>
                </div>
                <div className="col-lg-6 col-12">
                  <div className="image new_img-animet">
                    <img src={gl2} data-speed="0.8" alt="Blog detail 2" />
                  </div>
                </div>
              </div>
            </div>
            
            {/* More content */}
            <div className="content">
              <h3 className="poort-text poort-in-right">Once your website is live.</h3>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                has been the industry's standard dummy text ever since the 1500s, when an unknown
                printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
            
            <div className="content">
              <h3 className="poort-text poort-in-right">Choose a design theme that reflects your personality</h3>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                has been the industry's standard dummy text ever since the 1500s, when an unknown
                printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
            
            {/* Comments section */}
            <div className="comment-wrap">
              <div className="comment">
                <h2>Comments:</h2>
                <ul>
                  <li className="grid-comment">
                    <div className="image">
                      <img src={blog3} alt="Commenter avatar" />
                    </div>
                    <div className="content">
                      <h3>Ronald Trisna</h3>
                      <span>Marketing Coordinator</span>
                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry
                        has been the industry's standard dummy text ever since the 1500s, when an
                        unknown printer took a galley of type and scrambled.</p>
                      <Link to="#">REPLY</Link>
                    </div>
                  </li>
                  <li className="grid-comment">
                    <div className="image">
                      <img src={blog5} alt="Commenter avatar" />
                    </div>
                    <div className="content">
                      <h3>Dania Skitura</h3>
                      <span>Web Designer</span>
                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry
                        has been the industry's standard dummy text ever since the 1500s, when an
                        unknown printer took a galley of type and scrambled.</p>
                      <Link to="#">REPLY</Link>
                    </div>
                  </li>
                </ul>
              </div>
              
              {/* Comment form */}
              <div className="comment-form">
                <h2>Leave a comment:</h2>
                <CommentForm />
              </div>
            </div>
          </div>
          
          {/* Blog sidebar */}
          <div className="col-lg-4 col-12">
            <BlogSidebar />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSingle;
