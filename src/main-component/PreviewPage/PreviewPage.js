import React, { Fragment } from 'react';
import './css/themify-icons.css';
import './css/flaticon.css';
import './css/animate.css';
import './sass/style.scss';

import HeaderSction from './HeaderSction';
import HeroSection from './HeroSection';
import DemoSection from './DemoSection';
import FeaturesSection from './FeaturesSection';
import ChooseSection from './ChooseSection';
import AwesomeFeatures from './AwesomeFeatures';
import SiteFooter from './SiteFooter';


const PreviewPage = () => {
    return (
        <Fragment>
            <HeaderSction />
            <HeroSection />
            <DemoSection />
            <FeaturesSection />
            <ChooseSection />
            <AwesomeFeatures/>
            <SiteFooter/>
        </Fragment>
    );
};

export default PreviewPage;