import React, { Fragment } from 'react';
import Header6 from '../../components/Header6/Header6';
import PageTitle from '../../components/pagetitle/PageTitle';
import FeatureSection from '../../components/FeatureSection/FeatureSection';
import BlogSection from '../../components/BlogSection/BlogSection';
import FooterScetion from '../../components/FooterScetion/FooterScetion';
const FeaturePage = () => {
    return (
        <Fragment>
            <div className="page-wrapper">
                <div className="page-wrapper-2" id="smooth-wrapper">
                    <div id="smooth-content">
                        <Header6 />
                        <PageTitle pageTitle={'Feature 01'} pagesub={'Feature'} />
                        <FeatureSection />
                        <BlogSection />
                        <FooterScetion />
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default FeaturePage;