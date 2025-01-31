import React, { Fragment } from 'react';
import Header6 from '../../components/Header6/Header6';
import PageTitle from '../../components/pagetitle/PageTitle';
import ProjectSection3 from '../../components/ProjectSection3/ProjectSection3';
import FooterScetion from '../../components/FooterScetion/FooterScetion';

const ProjectPage2 = () => {
    return (
        <Fragment>
            <div className="page-wrapper">
                <div className="page-wrapper-2" id="smooth-wrapper">
                    <div id="smooth-content">
                        <Header6 />
                        <PageTitle pageTitle={'Project 02'} pagesub={'Project'} />
                        <ProjectSection3 hclass={"portfolio-section-s4 section-padding pb-0"} />
                        <FooterScetion />
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default ProjectPage2;