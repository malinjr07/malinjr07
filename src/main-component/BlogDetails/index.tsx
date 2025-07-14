import React, { Fragment } from 'react';
import { useParams } from 'react-router-dom';
import Header6 from '../../components/Header6';
import PageTitle from '../../components/pagetitle/PageTitle';
import FooterScetion from '../../components/FooterSection';
import blogs from '../../api/blogs';
import BlogSingle from 'components/BlogDetails';

const BlogDetails = () => {
  const { slug } = useParams();

  const BlogDetails = blogs.find((item) => item.slug === slug);

  return (
    <Fragment>
      <div className='page-wrapper'>
        <div className='page-wrapper-2' id='smooth-wrapper'>
          <div id='smooth-content'>
            <Header6 />
            <PageTitle pageTitle={BlogDetails?.title} pagesub={'Blog'} />
            <BlogSingle />
            <FooterScetion />
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default BlogDetails;
