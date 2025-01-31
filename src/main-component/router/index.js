import React from 'react';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import PreviewPage from '../PreviewPage/PreviewPage'
import Homepage from '../HomePage/HomePage'
import HomePage2 from '../HomePage2/HomePage2';
import HomePage3 from '../HomePage3/HomePage3';
import HomePage4 from '../HomePage4/HomePage4';
import HomePage5 from '../HomePage5/HomePage5';
import HomePage6 from '../HomePage6/HomePage6';
import HomePage7 from '../HomePage7/HomePage7';
import AboutPage from '../AboutPage/AboutPage';
import SkillPage from '../SkillPage/SkillPage';
import FeaturePage from '../FeaturePage/FeaturePage';
import FeaturePages2 from '../FeaturePages2/FeaturePages2';
import PlanPage from '../PlanPage/PlanPage';
import TestimonialPage from '../TestimonialPage/TestimonialPage';
import TestimonialPage2 from '../TestimonialPage2/TestimonialPage2';
import ResumePage from '../ResumePage/ResumePage';
import ServicePage from '../ServicePage/ServicePage';
import ServicePage2 from '../ServicePage2/ServicePage2';
import ServicePage3 from '../ServicePage3/ServicePage3';
import ServiceSinglePage from '../ServiceSinglePage/ServiceSinglePage';
import ErrorPage from '../ErrorPage/ErrorPage';
import ProjectPage from '../ProjectPage/ProjectPage';
import ProjectPage2 from '../ProjectPage2/ProjectPage2';
import ProjectPage3 from '../ProjectPage3/ProjectPage3';
import ProjectSinglePage from '../ProjectSinglePage/ProjectSinglePage';
import BlogPage from '../BlogPage/BlogPage'
import BlogDetails from '../BlogDetails/BlogDetails'
import ContactPage from '../ContactPage/ContactPage';



const AllRoute = () => {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PreviewPage />} />
          <Route path="preview" element={<PreviewPage />} />
          <Route path="/" element={<Homepage />} />
          <Route path="home" element={<Homepage />} />
          <Route path="home-2" element={<HomePage2 />} />
          <Route path="home-3" element={<HomePage3 />} />
          <Route path="home-4" element={<HomePage4 />} />
          <Route path="home-5" element={<HomePage5 />} />
          <Route path="home-6" element={<HomePage6 />} />
          <Route path='home-7' element={<HomePage7 />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="skill" element={<SkillPage />} />
          <Route path="feature" element={<FeaturePage />} />
          <Route path="feature-2" element={<FeaturePages2 />} />
          <Route path='plan' element={<PlanPage />} />
          <Route path='testimonial' element={<TestimonialPage />} />
          <Route path='testimonial-2' element={<TestimonialPage2 />} />
          <Route path='resume' element={<ResumePage />} />
          <Route path="service" element={<ServicePage />} />
          <Route path="service-2" element={<ServicePage2 />} />
          <Route path="service-3" element={<ServicePage3 />} />
          <Route path="service-single/:slug" element={<ServiceSinglePage />} />
          <Route path="project" element={<ProjectPage />} />
          <Route path="project-2" element={<ProjectPage2 />} />
          <Route path="project-3" element={<ProjectPage3 />} />
          <Route path="project-single/:slug" element={<ProjectSinglePage />} />
          <Route path='blog' element={<BlogPage />} />
          <Route path='blog-single/:slug' element={<BlogDetails />} />
          <Route path='contact' element={<ContactPage />} />
          <Route path='404' element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default AllRoute;
