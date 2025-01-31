import React, { Fragment } from 'react';
import Header6 from '../../components/Header6/Header6';
import PageTitle from '../../components/pagetitle/PageTitle';
import Error from '../../components/404/404'
import FooterScetion from '../../components/FooterScetion/FooterScetion';

const ErrorPage = () => {
    return (
        <Fragment>
            <div className="page-wrapper">
                <div className="page-wrapper-2" id="smooth-wrapper">
                    <div id="smooth-content">
                        <Header6 />
                        <PageTitle pageTitle={'404'} pagesub={'404'} />
                        <Error />
                        <FooterScetion />
                    </div>
                </div>
            </div>
        </Fragment>
    )
};
export default ErrorPage;



