import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage5 from '../HomePage5/HomePage5';
import ServiceSinglePage from '../ServiceSinglePage/ServiceSinglePage';
import ErrorPage from '../ErrorPage/ErrorPage';
import ProjectSinglePage from '../ProjectSinglePage/ProjectSinglePage';

const AllRoute = () => {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage5 />} />
          <Route path='service-single/:slug' element={<ServiceSinglePage />} />
          <Route path='project-single/:slug' element={<ProjectSinglePage />} />
          <Route path='404' element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default AllRoute;
