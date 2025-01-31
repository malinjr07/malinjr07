import React, { Fragment } from 'react';
import Header6 from '../../components/Header6/Header6';
import PageTitle from '../../components/pagetitle/PageTitle';
import FooterScetion from '../../components/FooterScetion/FooterScetion';
import ServiceSectionS5 from '../../components/ServiceSectionS5/ServiceSectionS5';

const ServicePage3 = () => {
    return (
        <Fragment>
            <div className="page-wrapper">
                <div className="page-wrapper-2" id="smooth-wrapper">
                    <div id="smooth-content">
                        <Header6 />
                        <PageTitle pageTitle={'Service Page 03'} pagesub={'Service'} />
                        <ServiceSectionS5 />
                        <FooterScetion />
                    </div>
                </div>
            </div>
        </Fragment>
    )
};
export default ServicePage3;