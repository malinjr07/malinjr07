import React, { FC, ReactElement, Fragment } from 'react';
import Header6 from '../../components/Header6';
import PageTitle from '../../components/pagetitle';
import ServiceSectionS2 from '../../components/ServiceSectionS2';
import FooterScetion from '../../components/FooterSection';

const ServicePage: FC = (): ReactElement => {
  return (
    <Fragment>
      <div className='page-wrapper'>
        <div className='page-wrapper-2' id='smooth-wrapper'>
          <div id='smooth-content'>
            <Header6 />
            <PageTitle pageTitle={'Service Page 01'} pagesub={'Service'} />
            <ServiceSectionS2 />
            <FooterScetion />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ServicePage;

