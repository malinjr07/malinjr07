import React, { Fragment } from 'react';
import Header6 from '../../components/Header6/Header6';
import PageTitle from '../../components/pagetitle/PageTitle';
import BlogList from '../../components/BlogList/BlogList';
import FooterScetion from '../../components/FooterScetion/FooterScetion';

const BlogPage =() => {
    return(
         <Fragment>
            <div className="page-wrapper">
                <div className="page-wrapper-2" id="smooth-wrapper">
                    <div id="smooth-content">
                        <Header6 />
                        <PageTitle pageTitle={'Blog'} pagesub={'Blog'} />
                        <BlogList hClass={'blog-page-section section-padding'} />
                        <FooterScetion />
                    </div>
                </div>
            </div>
        </Fragment>
    )
};
export default BlogPage;

