import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.min.css';
import 'swiper/components/pagination/pagination.min.css';
import 'swiper/components/navigation/navigation.min.css';
import './AchievementSlider.scss';

// import Swiper core and required modules
import SwiperCore, {
    Pagination, Navigation, Autoplay
} from 'swiper/core';

// install Swiper modules
SwiperCore.use([Pagination, Navigation, Autoplay]);

const achievementsImgs = Array.from({ length: 19 }).map((u, i) => i);

export const AchievementSlider = () => {



    return (
        <>

            <Swiper style={{ '--swiper-navigation-color': '#000', '--swiper-pagination-color': '#1890ff' }}
                pagination={{
                    'clickable': true
                }}
                navigation={true}
                loop={true}
                slidesPerView={3}
                spaceBetween={20}
                centeredSlides={true}
                // initialSlide={1}
                autoplay={{
                    'delay': 2500,
                    'pauseOnMouseEnter': true,
                    'disableOnInteraction': false
                }}
                className='achievement-slider'>

                {achievementsImgs.map(achievementNumber => {
                    return (
                        <SwiperSlide>
                            <img src={`/achievements/${achievementNumber + 1}.jpg`} loading='lazy' alt='' />
                        </SwiperSlide>
                    );
                })}


            </Swiper>
        </>
    );
};