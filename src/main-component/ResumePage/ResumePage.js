import React, { Fragment } from 'react';
import Header6 from '../../components/Header6/Header6';
import PageTitle from '../../components/pagetitle/PageTitle';
import ResumeSection2 from '../../components/ResumeSection2/ResumeSection2';
import FooterScetion from '../../components/FooterScetion/FooterScetion';
const ResumePage = () => {
    return (
        <Fragment>
            <div className="page-wrapper">
                <div className="page-wrapper-2" id="smooth-wrapper">
                    <div id="smooth-content">
                        <Header6 />
                        <PageTitle pageTitle={'Resume'} pagesub={'Resume'} />
                        <ResumeSection2 hclass={"resume-section-s2 s3"} />
                        <FooterScetion />
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default ResumePage;