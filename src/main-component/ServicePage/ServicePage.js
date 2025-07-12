import React, { Fragment } from 'react';
import Header6 from '../../components/Header6/Header6';
import PageTitle from '../../components/pagetitle/PageTitle';
import ServiceSectionS2 from '../../components/ServiceSectionS2/ServiceSectionS2';
import FooterScetion from '../../components/FooterScetion/FooterScetion';

const ServicePage = () => {
    return (
        <Fragment>
            <div className="page-wrapper">
                <div className="page-wrapper-2" id="smooth-wrapper">
                    <div id="smooth-content">
                        <Header6 />
                        <PageTitle pageTitle={'Service Page 01'} pagesub={'Service'} />
                        <ServiceSectionS2 />
                        <FooterScetion />
                    </div>
                </div>
            </div>
        </Fragment>
    )
};
export default ServicePage;
