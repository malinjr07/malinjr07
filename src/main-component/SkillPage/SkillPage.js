import React, { Fragment } from 'react';
import Header6 from '../../components/Header6/Header6';
import PageTitle from '../../components/pagetitle/PageTitle';
import SkillSection from '../../components/SkillSection/SkillSection';
import FooterScetion from '../../components/FooterScetion/FooterScetion';

const SkillPage = () => {
    return (
        <Fragment>
            <div className="page-wrapper">
                <div className="page-wrapper-2" id="smooth-wrapper">
                    <div id="smooth-content">
                        <Header6 />
                        <PageTitle pageTitle={'Skill'} pagesub={'Skill'} />
                        <SkillSection hclass={'skill-section-s3'} />
                        <FooterScetion />
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default SkillPage;
