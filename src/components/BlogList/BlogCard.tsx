import React, { FC, ReactElement, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';
import VideoModal from '../ModalVideo/VideoModal';

import Blog1 from '../../images/blog/img-1.jpg';
import Blog2 from '../../images/blog/img-2.jpg';
import VideoBlog from '../../images/blog/img-2.jpg';

import { BlogPost } from '../../types/api';

interface BlogCardProps {
  post: BlogPost;
}

const ClickHandler = (): void => {
  window.scrollTo(10, 0);
};

const BlogCard: FC<BlogCardProps> = ({ post }): ReactElement => {
  const swiperRef = useRef<Swiper | null>(null);

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

    return () => {
      if (swiperRef.current) {
        swiperRef.current.destroy();
      }
    };
  }, []);

  const nextSlide = (): void => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  const prevSlide = (): void => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  const { type, tags, title, description, author, create_at, slug } = post;

  return (
    <div className="blog-grid">
      {type === 'image' && (
        <div className="blog-slide swiper">
          <div className="swiper-wrapper">
            <div className="image swiper-slide">
              <img src={Blog1 as unknown as string} alt="" />
            </div>
            <div className="image swiper-slide">
              <img src={Blog2 as unknown as string} alt="" />
            </div>
          </div>
          <div className="swiper-button-next" onClick={nextSlide}></div>
          <div className="swiper-button-prev" onClick={prevSlide}></div>
        </div>
      )}
      {type === 'video' && (
        <div className="video-wrap">
          <div className="image">
            <img src={VideoBlog as unknown as string} alt="" />
          </div>
          <VideoModal />
        </div>
      )}
      <div className="blog-content">
        <div className="top-content">
          <ul className="tag">
            {tags.map((tag, index) => (
              <li key={index}><Link onClick={ClickHandler} to="#">{tag}</Link></li>
            ))}
          </ul>
          <h2><Link onClick={ClickHandler} to={`/blog-single/${slug}`} className="poort-text poort-in-right">{title}</Link></h2>
          <p>{description}</p>
          <Link onClick={ClickHandler} to={`/blog-single/${slug}`}>Read More...</Link>
        </div>
        <div className="buttom-content">
          <ul>
            <li><span>By:</span>{author}</li>
            <li><span>Date:</span>{create_at}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
