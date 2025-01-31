import React from 'react';
import BlogData from '../../api/blogs';
import { Link } from 'react-router-dom';

const ClickHandler = () => {
    window.scrollTo(10, 0);
}
const BlogSection = () => {
    return (
        <section className="blog-section section-padding" id='blog'>
            <div className="container">
                <div className="section-top-content-s2">
                    <h2 className="poort-text poort-in-right">Blog</h2>
                    <h3 className="poort-text poort-in-right">Latest News</h3>
                </div>
                <div className="row">
                    {BlogData.slice(0, 2).map((Blogs, item) => (
                        <div className="col-md-6 col-12 scroll-text-animation" data-animation="fade_from_bottom" key={item}>
                            <div className="blog-card">
                                <div className="image">
                                    <img src={Blogs.screens} alt="" />
                                </div>
                                <div className="content">
                                    <ul>
                                        <li>{Blogs.create_at}</li>
                                        <li>{Blogs.author}</li>
                                    </ul>
                                    <h2><Link onClick={ClickHandler} to={`/blog-single/${Blogs.slug}`}>{Blogs.title}</Link></h2>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="shape">
                <svg width="352" height="352" viewBox="0 0 352 352" fill="none">
                    <circle cx="176" cy="176" r="176" fill="url(#paint0_radial_56_1808)" fillOpacity="0.4" />
                    <defs>
                        <radialGradient id="paint0_radial_56_1808" cx="0" cy="0" r="1"
                            gradientUnits="userSpaceOnUse"
                            gradientTransform="translate(176 176) rotate(90) scale(176)">
                            <stop offset="0" stopColor="#C4EF17" stopOpacity="0.8" />
                            <stop offset="1" stopColor="#1B1C1E" stopOpacity="0" />
                        </radialGradient>
                    </defs>
                </svg>
            </div>
        </section>

    );
};

export default BlogSection;