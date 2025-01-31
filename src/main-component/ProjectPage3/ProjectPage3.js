import React, { Fragment } from 'react';
import Header6 from '../../components/Header6/Header6';
import PageTitle from '../../components/pagetitle/PageTitle';
import ProjectSection4 from '../../components/ProjectSection4/ProjectSection4';
import FooterScetion from '../../components/FooterScetion/FooterScetion';

const ProjectPage3 = () => {
    return (
        <Fragment>
            <div className="page-wrapper">
                <div className="page-wrapper-2" id="smooth-wrapper">
                    <div id="smooth-content">
                        <Header6 />
                        <PageTitle pageTitle={'Project 03'} pagesub={'Project'} />
                        <ProjectSection4 hclass={"portfolio-section-s7"} />
                        <FooterScetion />
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default ProjectPage3;