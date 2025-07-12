import React from 'react';
import Slider from 'react-slick';

interface TestimonialSection3Props {
  hclass: string;
}

const TestimonialSection3: React.FC<TestimonialSection3Props> = ({ hclass }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <section className={`testimonial-section-s3 ${hclass}`} id='testimonial'>
      <div className='container'>
        <div className='section-title-s2'>
          <span>Testimonials</span>
          <h2>What My Clients Say About Me</h2>
        </div>
        <div className='testimonial-slider'>
          <Slider {...settings}>
            <div className='testimonial-box'>
              <div className='testimonial-img'>
                {/* Placeholder for image */}
                <div>Client Image Placeholder</div>
              </div>
              <div className='testimonial-content'>
                <p>“John is an exceptional designer. He understood our requirements perfectly and delivered a website that exceeded our expectations. Highly recommended!”</p>
                <h4>Jane Smith</h4>
                <span>CEO, TechCorp</span>
                <div className='testimonial-rating'>
                  <i className='fi flaticon-star'></i>
                  <i className='fi flaticon-star'></i>
                  <i className='fi flaticon-star'></i>
                  <i className='fi flaticon-star'></i>
                  <i className='fi flaticon-star'></i>
                </div>
              </div>
            </div>
            <div className='testimonial-box'>
              <div className='testimonial-img'>
                {/* Placeholder for image */}
                <div>Client Image Placeholder</div>
              </div>
              <div className='testimonial-content'>
                <p>“Working with John was a pleasure. His attention to detail and creative ideas helped us achieve a fantastic mobile app. Will definitely hire him again.”</p>
                <h4>Michael Brown</h4>
                <span>CTO, AppWorld</span>
                <div className='testimonial-rating'>
                  <i className='fi flaticon-star'></i>
                  <i className='fi flaticon-star'></i>
                  <i className='fi flaticon-star'></i>
                  <i className='fi flaticon-star'></i>
                  <i className='fi flaticon-star'></i>
                </div>
              </div>
            </div>
            <div className='testimonial-box'>
              <div className='testimonial-img'>
                {/* Placeholder for image */}
                <div>Client Image Placeholder</div>
              </div>
              <div className='testimonial-content'>
                <p>“John’s expertise in UI/UX design transformed our product. The user feedback has been overwhelmingly positive. Thank you for the great work!”</p>
                <h4>Sarah Johnson</h4>
                <span>Product Manager, DesignHub</span>
                <div className='testimonial-rating'>
                  <i className='fi flaticon-star'></i>
                  <i className='fi flaticon-star'></i>
                  <i className='fi flaticon-star'></i>
                  <i className='fi flaticon-star'></i>
                  <i className='fi flaticon-star'></i>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection3;
