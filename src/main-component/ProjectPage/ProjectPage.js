import React, { Fragment } from 'react';
import Header6 from '../../components/Header6/Header6';
import PageTitle from '../../components/pagetitle/PageTitle';
import ProjectSection2 from '../../components/ProjectSection2/ProjectSection2';
import FooterScetion from '../../components/FooterScetion/FooterScetion';

const ProjectPage = () => {
    return (
        <Fragment>
            <div className="page-wrapper">
                <div className="page-wrapper-2" id="smooth-wrapper">
                    <div id="smooth-content">
                        <Header6 />
                        <PageTitle pageTitle={'Project 01'} pagesub={'Project'} />
                        <ProjectSection2 hclass={"portfolio-section-s3 section-padding pb-0"} />
                        <FooterScetion />
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default ProjectPage;