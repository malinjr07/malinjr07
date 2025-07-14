import React, { FC } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ts1 from '../../images/testimonial/1.jpg';
import ts2 from '../../images/testimonial/2.jpg';
import quote from '../../images/testimonial/quote.svg';
import { Settings } from 'react-slick';

interface Testimonial {
  id: string;
  tImg: string;
  Des: string;
  Title: string;
  Sub: string;
}

const testimonial: Testimonial[] = [
  {
    id: '01',
    tImg: ts1,
    Des: '"Purus eget consectur massa amet. Hactor bodiam suspendie faucibus posuere dignissim amet to atthe. Vitaer of sollicitudin mauris erat odio maecenas mattis praesent.Eget vitaoe magna condimentum tristique scelerisque" ',
    Title: 'Kristin Watson',
    Sub: "Content Writer",
  },
  {
    id: '02',
    tImg: ts2,
    Des: '"Purus eget consectur massa amet. Hactor bodiam suspendie faucibus posuere dignissim amet to atthe. Vitaer of sollicitudin mauris erat odio maecenas mattis praesent.Eget vitaoe magna condimentum tristique scelerisque" ',
    Title: 'Watson Kristin',
    Sub: "Content Writer",
  },
  {
    id: '03',
    tImg: ts1,
    Des: '"Purus eget consectur massa amet. Hactor bodiam suspendie faucibus posuere dignissim amet to atthe. Vitaer of sollicitudin mauris erat odio maecenas mattis praesent.Eget vitaoe magna condimentum tristique scelerisque" ',
    Title: 'Watson Kristin',
    Sub: "Content Writer",
  },
];

interface TestimonialSection2Props {
  hclass?: string;
}

const TestimonialSection2: FC<TestimonialSection2Props> = ({ hclass = '' }) => {
  const settings: Settings = {
    dots: false,
    infinite: true,
    arrows: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <section className={hclass} id="testimonial">
      <div className="container">
        <div className="section-top-content-s2">
          <h2 className="poort-text poort-in-right">Testimonial</h2>
          <h3 className="poort-text poort-in-right">What Clients Says</h3>
        </div>
      </div>
      <div className="testimonial-slider-s2">
        <Slider {...settings}>
          {testimonial.map((tesmnl) => (
            <div 
              className="testimonial-card scroll-text-animation" 
              data-animation="fade_from_bottom" 
              key={tesmnl.id}
            >
              <div className="top-content">
                <div className="image">
                  <img src={tesmnl.tImg} alt={tesmnl.Title} />
                </div>
                <div className="text">
                  <h3>{tesmnl.Title}</h3>
                  <span>{tesmnl.Sub}</span>
                </div>
              </div>
              <p>{tesmnl.Des} </p>
              <div className="icon">
                <img src={quote} alt="quote" />
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <div className="shape">
        <svg width="319" height="416" viewBox="0 0 319 416" fill="none">
          <circle 
            cx="208" 
            cy="208" 
            r="208" 
            fill="url(#paint0_radial_56_1807)" 
            fillOpacity="0.4" 
          />
          <defs>
            <radialGradient 
              id="paint0_radial_56_1807" 
              cx="0" 
              cy="0" 
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(208 208) rotate(90) scale(208)"
            >
              <stop offset="0" stopColor="#C4EF17" stopOpacity="0.8" />
              <stop offset="1" stopColor="#1B1C1E" stopOpacity="0" />
            </radialGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default TestimonialSection2;
