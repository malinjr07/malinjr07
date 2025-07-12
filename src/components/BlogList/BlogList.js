import React from 'react';
import blogs from '../../api/blogs'
import BlogCard from './BlogCard';
import Pagination from './Pagination';
import BlogSidebar from '../BlogSidebar/BlogSidebar';



const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const BlogList = (props) => {

    return (
        <section className={"" + props.hClass}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-12">
                        <div className="blog-wraper">
                            {blogs.map((posts, index) => (
                                <BlogCard key={index} post={posts} />
                            ))}
                            <Pagination />
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

export default BlogList;
