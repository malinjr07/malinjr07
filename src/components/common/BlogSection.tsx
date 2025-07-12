// Placeholder for BlogSection component
import React from 'react';
import Link from 'next/link';

const BlogSection = () => {
  return (
    <section className="blog-section" id="blog">
      <div className="container">
        <div className="section-title-s2">
          <span>My Blog</span>
          <h2>Read My Latest News & Articles</h2>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="blog-box">
              <div className="blog-img">
                {/* Placeholder for image */}
                <div>Blog Image Placeholder</div>
              </div>
              <div className="blog-content">
                <div className="blog-meta">
                  <span><i className="fi flaticon-calendar"></i> 10 Mar, 2023</span>
                  <span><i className="fi flaticon-chat"></i> 2 Comments</span>
                </div>
                <h3><Link href="/blog-details">How to Build a Great Web Design Portfolio</Link></h3>
                <p>Creating a standout portfolio is crucial for web designers. Here are some tips to make yours shine.</p>
                <Link href="/blog-details" className="blog-read-more">Read More <i className="fi flaticon-right-arrow"></i></Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="blog-box">
              <div className="blog-img">
                {/* Placeholder for image */}
                <div>Blog Image Placeholder</div>
              </div>
              <div className="blog-content">
                <div className="blog-meta">
                  <span><i className="fi flaticon-calendar"></i> 15 Mar, 2023</span>
                  <span><i className="fi flaticon-chat"></i> 5 Comments</span>
                </div>
                <h3><Link href="/blog-details">Top 10 Web Design Trends for 2023</Link></h3>
                <p>Stay ahead of the curve with these web design trends that are set to dominate in 2023.</p>
                <Link href="/blog-details" className="blog-read-more">Read More <i className="fi flaticon-right-arrow"></i></Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="blog-box">
              <div className="blog-img">
                {/* Placeholder for image */}
                <div>Blog Image Placeholder</div>
              </div>
              <div className="blog-content">
                <div className="blog-meta">
                  <span><i className="fi flaticon-calendar"></i> 20 Mar, 2023</span>
                  <span><i className="fi flaticon-chat"></i> 3 Comments</span>
                </div>
                <h3><Link href="/blog-details">The Importance of UX in Web Design</Link></h3>
                <p>User experience can make or break a website. Learn why UX is critical in web design.</p>
                <Link href="/blog-details" className="blog-read-more">Read More <i className="fi flaticon-right-arrow"></i></Link>
              </div>
            </div>
          </div>
        </div>
        <div className="blog-btn">
          <Link href="/blog" className="btn s2">View All Posts</Link>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
