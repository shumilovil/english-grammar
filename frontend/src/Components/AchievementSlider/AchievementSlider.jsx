import React, { useEffect, useRef, useState } from 'react';
import { Image } from 'antd';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Navigation, Autoplay } from 'swiper/core';
import { useSelector } from 'react-redux';
import { baseUrl } from '../../api/api';
import { Preloader } from '../Preloader/Preloader';

// Import Swiper styles
import 'swiper/swiper.min.css';
import 'swiper/components/pagination/pagination.min.css';
import 'swiper/components/navigation/navigation.min.css';
import './AchievementSlider.scss';

const swiperConfig = {
    style: { '--swiper-navigation-color': 'grey', '--swiper-pagination-color': '#1890ff' },
    pagination: { 'clickable': true },
    navigation: true,
    loop: true,
    slidesPerView: 1,
    breakpoints: {
        1024: {
            slidesPerView: 3
        }
    },
    centeredSlides: true,
    autoplay: {
        'delay': 3000,
        'pauseOnMouseEnter': true
    }
};

const achievementsUrl = `${baseUrl}/media/achievements`;

// Install Swiper modules
SwiperCore.use([Pagination, Navigation, Autoplay]);

export const AchievementSlider = () => {  

    const isMenuVisible = useSelector(state => state.app.isMenuVisible);
    const achievements = useSelector(state => state.achievements.achievements);
    const isLoading = useSelector(state => state.achievements.isLoading);

    const [isPreviewOpen, setPreviewOpen] = useState(false);
    const swiperRef = useRef(null);

    useEffect(() => {
        if (isLoading) return;
        if (isMenuVisible || isPreviewOpen) {
            swiperRef.current.swiper.autoplay.stop();
        } else {
            swiperRef.current.swiper.autoplay.start();
        }
    }, [isMenuVisible, isPreviewOpen, achievements, isLoading]);   

    return (
        <>
            <h2>Достижения</h2>
            <div className='achievement-slider-wrapper'>
                {isLoading
                    ? <Preloader />
                    : <Swiper
                        {...swiperConfig}
                        ref={swiperRef}
                        className='achievement-slider'>

                        {achievements.map(achievement => {
                            const imgSrc = `${achievementsUrl}/${achievement}`;
                            return (
                                <SwiperSlide key={achievement}>
                                    {({ isActive }) => (
                                        <div className='slide-img-wrapper'>
                                            {isActive
                                                ? <Image
                                                    src={imgSrc}
                                                    preview={{
                                                        mask: <div>Увеличить</div>,
                                                        onVisibleChange: (isVisible) => setPreviewOpen(isVisible)
                                                    }}
                                                />
                                                : <img src={imgSrc} alt='' />}
                                        </div>
                                    )}
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>}
            </div>
        </>
    );
};