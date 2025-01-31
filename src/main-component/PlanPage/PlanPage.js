import React, { Fragment } from 'react';
import Header6 from '../../components/Header6/Header6';
import PageTitle from '../../components/pagetitle/PageTitle';
import PricingSection2 from '../../components/PricingSection2/PricingSection2';
import FooterScetion from '../../components/FooterScetion/FooterScetion';
const PlanPage = () => {
    return (
        <Fragment>
            <div className="page-wrapper">
                <div className="page-wrapper-2" id="smooth-wrapper">
                    <div id="smooth-content">
                        <Header6 />
                        <PageTitle pageTitle={'Plan'} pagesub={'Plan'} />
                        <PricingSection2 hclass={"pricing-section-s2 section-padding"}/>
                        <FooterScetion />
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default PlanPage;