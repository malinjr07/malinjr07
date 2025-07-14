import React, { FC, ReactElement } from 'react';
import Header6 from '../../components/Header6/Header6';
import PageTitle from '../../components/pagetitle/PageTitle';
import BlogList from '../../components/BlogList';
import FooterScetion from '../../components/FooterSection';

const BlogPage: FC = (): ReactElement => {
  return (
    <div className='page-wrapper'>
      <div className='page-wrapper-2' id='smooth-wrapper'>
        <div id='smooth-content'>
          <Header6 />
          <PageTitle pageTitle={'Blog'} pagesub={'Blog'} />
          <BlogList hClass={'blog-page-section section-padding'} />
          <FooterScetion />
        </div>
      </div>
    </div>
  );
};

export default BlogPage;

