// Placeholder for ProjectSection3 component
import React from 'react';
import Link from 'next/link';

interface ProjectSection3Props {
  hclass: string;
}

const ProjectSection3: React.FC<ProjectSection3Props> = ({ hclass }) => {
  return (
    <section className={`project-section-s3 ${hclass}`} id='Portfolio'>
      <div className='container'>
        <div className='section-title-s2'>
          <span>My Portfolio</span>
          <h2>Check Out Some Of My Latest Projects</h2>
        </div>
        <div className='row'>
          <div className='col-lg-4 col-md-6'>
            <div className='project-box'>
              <div className='project-img'>
                {/* Placeholder for image */}
                <div>Project Image Placeholder</div>
              </div>
              <div className='project-content'>
                <h3><Link href='/portfolio-details'>E-commerce Website</Link></h3>
                <span>Web Design</span>
              </div>
            </div>
          </div>
          <div className='col-lg-4 col-md-6'>
            <div className='project-box'>
              <div className='project-img'>
                {/* Placeholder for image */}
                <div>Project Image Placeholder</div>
              </div>
              <div className='project-content'>
                <h3><Link href='/portfolio-details'>Fitness App</Link></h3>
                <span>Mobile App</span>
              </div>
            </div>
          </div>
          <div className='col-lg-4 col-md-6'>
            <div className='project-box'>
              <div className='project-img'>
                {/* Placeholder for image */}
                <div>Project Image Placeholder</div>
              </div>
              <div className='project-content'>
                <h3><Link href='/portfolio-details'>Corporate Website</Link></h3>
                <span>Web Development</span>
              </div>
            </div>
          </div>
          <div className='col-lg-4 col-md-6'>
            <div className='project-box'>
              <div className='project-img'>
                {/* Placeholder for image */}
                <div>Project Image Placeholder</div>
              </div>
              <div className='project-content'>
                <h3><Link href='/portfolio-details'>Restaurant App</Link></h3>
                <span>Mobile App</span>
              </div>
            </div>
          </div>
          <div className='col-lg-4 col-md-6'>
            <div className='project-box'>
              <div className='project-img'>
                {/* Placeholder for image */}
                <div>Project Image Placeholder</div>
              </div>
              <div className='project-content'>
                <h3><Link href='/portfolio-details'>Real Estate Platform</Link></h3>
                <span>Web Development</span>
              </div>
            </div>
          </div>
          <div className='col-lg-4 col-md-6'>
            <div className='project-box'>
              <div className='project-img'>
                {/* Placeholder for image */}
                <div>Project Image Placeholder</div>
              </div>
              <div className='project-content'>
                <h3><Link href='/portfolio-details'>Dashboard UI</Link></h3>
                <span>UI/UX Design</span>
              </div>
            </div>
          </div>
        </div>
        <div className='project-btn'>
          <Link href='/portfolio' className='btn s2'>View All Projects</Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection3;
