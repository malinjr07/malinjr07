import React, { useState } from 'react'; 

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { Navigation, Thumbs } from 'swiper/core'; 

import PS1 from '../../images/project-single/1.jpg';
import PS2 from '../../images/project-single/2.jpg';
import PS3 from '../../images/project-single/3.jpg';
import PS4 from '../../images/project-single/4.jpg';

import PS01 from '../../images/project-single/img-1.jpg';
import PS02 from '../../images/project-single/img-2.jpg';
import PS03 from '../../images/project-single/img-3.jpg';
import PS04 from '../../images/project-single/img-4.jpg';




const ProjectSingleSlider = () => {

    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    
    return (
        <div className='project-single-slider'>
            <Swiper
                spaceBetween={10}
                navigation={true}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[Navigation, Thumbs]} 
                className="mySwiper2"
            >
                <SwiperSlide>
                    <img src={PS1} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={PS2} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={PS3} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={PS4} alt="" />
                </SwiperSlide>
        
            </Swiper>
            <Swiper
                onSwiper={setThumbsSwiper}
                spaceBetween={10}
                slidesPerView={3}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[Navigation, Thumbs]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src={PS01} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={PS02} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={PS03} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={PS04} alt="" />
                </SwiperSlide>
                
            </Swiper>
        </div>
    );
}
export default ProjectSingleSlider;
