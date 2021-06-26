import React, { useEffect, useRef, useState } from 'react';
import { Image } from 'antd';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Navigation, Autoplay } from 'swiper/core';
import { useDispatch, useSelector } from 'react-redux';

// Import Swiper styles
import 'swiper/swiper.min.css';
import 'swiper/components/pagination/pagination.min.css';
import 'swiper/components/navigation/navigation.min.css';
import './AchievementSlider.scss';
import { getAchievements } from '../../redux/achievementReducer';



// Install Swiper modules
SwiperCore.use([Pagination, Navigation, Autoplay]);
const achievementImgs = Array.from({ length: 19 }).map((u, i) => i);

export const AchievementSlider = () => {

    const isMenuVisible = useSelector(state => state.app.isMenuVisible);    
    const [isPreviewOpen, setPreviewOpen] = useState(false);
    const swiperRef = useRef(null);
    
    useEffect(() => {
        if (isMenuVisible || isPreviewOpen) {
            swiperRef.current.swiper.autoplay.stop();
        } else {            
            swiperRef.current.swiper.autoplay.start();
        }
    }, [isMenuVisible, isPreviewOpen]);

    const dispatch = useDispatch();
    useEffect(() => dispatch(getAchievements()));

    return (
        <div>
            <h2>Достижения</h2>
            <Swiper style={{ '--swiper-navigation-color': 'grey', '--swiper-pagination-color': '#1890ff' }}
                pagination={{ 'clickable': true }}
                navigation={true}
                loop={true}
                slidesPerView={1}
                breakpoints={{
                    1024: {
                        slidesPerView: 3
                    }
                }}
                centeredSlides={true}
                autoplay={{
                    'delay': 3000,
                    'pauseOnMouseEnter': true
                }}
                ref={swiperRef}
                className='achievement-slider'>

                {achievementImgs.map(achievementNumber => {
                    return (
                        <SwiperSlide key={achievementNumber}>
                            {({ isActive }) => (
                                <div className='slide-img-wrapper'>
                                    {isActive
                                        ? <Image
                                            src={`/achievements/${achievementNumber + 1}.jpg`}
                                            preview={{
                                                mask: <div>Увеличить</div>,
                                                onVisibleChange: (isVisible) => setPreviewOpen(isVisible)
                                            }}
                                        />
                                        : <img src={`/achievements/${achievementNumber + 1}.jpg`} alt='' />}
                                </div>
                            )}                            
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </div>
    );
};