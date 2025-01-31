import React, { Fragment } from 'react';
import Header6 from '../../components/Header6/Header6';
import PageTitle from '../../components/pagetitle/PageTitle';
import FeatureSectionS2 from '../../components/FeatureSectionS2/FeatureSectionS2';
import BlogSection from '../../components/BlogSection/BlogSection';
import FooterScetion from '../../components/FooterScetion/FooterScetion';
const FeaturePages2 = () => {
    return (
        <Fragment>
            <div className="page-wrapper">
                <div className="page-wrapper-2" id="smooth-wrapper">
                    <div id="smooth-content">
                        <Header6 />
                        <PageTitle pageTitle={'Feature 02'} pagesub={'Feature'} />
                        <FeatureSectionS2 />
                        <BlogSection />
                        <FooterScetion />
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default FeaturePages2;