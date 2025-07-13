import React, { FC, ReactElement } from 'react';
import blogs from '../../api/blogs';
import BlogCard from './BlogCard';
import Pagination from './Pagination';
import BlogSidebar from '../BlogSidebar/BlogSidebar';

const ClickHandler = (): void => {
  window.scrollTo(10, 0);
};

interface BlogListProps {
  hClass?: string;
}

const BlogList: FC<BlogListProps> = ({ hClass }): ReactElement => {
  return (
    <section className={'' + (hClass || '')}>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-8 col-12'>
            <div className='blog-wraper'>
              {blogs.map((posts, index) => (
                <BlogCard key={index} post={posts} />
              ))}
              <Pagination />
            </div>
          </div>
          <div className='col-lg-4 col-12'>
            <BlogSidebar />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogList;

