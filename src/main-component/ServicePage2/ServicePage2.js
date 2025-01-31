import React, { Fragment } from 'react';
import Header6 from '../../components/Header6/Header6';
import PageTitle from '../../components/pagetitle/PageTitle';
import ServiceSectionS3 from '../../components/ServiceSectionS3/ServiceSectionS3';
import FooterScetion from '../../components/FooterScetion/FooterScetion';

const ServicePage2 = () => {
    return (
        <Fragment>
            <div className="page-wrapper">
                <div className="page-wrapper-2" id="smooth-wrapper">
                    <div id="smooth-content">
                        <Header6 />
                        <PageTitle pageTitle={'Service Page 02'} pagesub={'Service'} />
                        <ServiceSectionS3 />
                        <FooterScetion />
                    </div>
                </div>
            </div>
        </Fragment>
    )
};
export default ServicePage2;