import React from 'react';
import BlogData from '../../api/blogs';
import { Link } from 'react-router-dom';

const ClickHandler = () => {
    window.scrollTo(10, 0);
}
const BlogSectionS2 = () => {
    return (
        <section className="blog-section-s2">
            <div className="wraper">
                <div className="section-top-content">
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
            <div className="line-shape">
                <span></span>
            </div>
        </section>
    );
};

export default BlogSectionS2;