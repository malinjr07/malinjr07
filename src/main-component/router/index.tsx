import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage5 from '../HomePage5';
import AboutPage from '../AboutPage/AboutPage';
import ServicePage from '../ServicePage';
import ServiceSinglePage from '../ServiceSinglePage/ServiceSinglePage';
import ProjectPage from '../ProjectPage';
import ProjectSinglePage from '../ProjectSinglePage';
import TestimonialPage from '../TestimonialPage/TestimonialPage';
import BlogPage from '../BlogPage';
import BlogDetails from '../BlogDetails';
import ContactPage from '../ContactPage';
import ErrorPage from '../../components/404';

const AllRoute: React.FC = () => {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage5 />} />
          <Route path='about' element={<AboutPage />} />
          <Route path='service' element={<ServicePage />} />
          <Route path='service-single/:slug' element={<ServiceSinglePage />} />
          <Route path='project' element={<ProjectPage />} />
          <Route path='project-single/:slug' element={<ProjectSinglePage />} />
          <Route path='testimonial' element={<TestimonialPage />} />
          <Route path='blog' element={<BlogPage />} />
          <Route path='blog-single/:slug' element={<BlogDetails />} />
          <Route path='contact' element={<ContactPage />} />
          <Route path='*' element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default AllRoute;
