import React, { useEffect, useRef, useState } from 'react';
import { Image } from 'antd';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Navigation, Autoplay } from 'swiper/core';
import { useSelector } from 'react-redux';

// Import Swiper styles
import 'swiper/swiper.min.css';
import 'swiper/components/pagination/pagination.min.css';
import 'swiper/components/navigation/navigation.min.css';
import './AchievementSlider.scss';



// install Swiper modules
SwiperCore.use([Pagination, Navigation, Autoplay]);
const achievementsImgs = Array.from({ length: 19 }).map((u, i) => i);

export const AchievementSlider = () => {

    const isMenuVisible = useSelector(state => state.app.isMenuVisible);
    // const [autoplay, setAutoplay] = useState(false);
    // const [activeIndexState, setActiveIndexState] = useState();
    const swiperRef = useRef(null);

    // const onSlideChange = (swiper) => {

    //     activeIndex.current = swiper.realIndex;
    //     console.log('activeIndex.current', activeIndex.current);
    // };
    useEffect(() => {
        if (isMenuVisible) {
            // setAutoplay(false);
            swiperRef.current.swiper.autoplay.stop();
        } else {
            // setAutoplay({
            //     'delay': 2500,
            //     'pauseOnMouseEnter': true,
            //     'disableOnInteraction': false
            // });
            // swiperRef.current.swiper.autoplay.start();
        }
    }, [isMenuVisible]);

    return (
        <div>
            <h2>Достижения</h2>
            <Swiper style={{ '--swiper-navigation-color': 'grey', '--swiper-pagination-color': '#1890ff' }}
                pagination={{
                    'clickable': true
                }}
                navigation={true}
                loop={true}
                slidesPerView={1}
                breakpoints={{
                    1024: {
                        slidesPerView: 3
                    }
                }}
                // onSlideChange={onSlideChange}
                // spaceBetween={20}
                centeredSlides={true}
                // initialSlide={1}
                // autoplay={{
                //     'delay': 3000,
                //     'pauseOnMouseEnter': true,
                //     'disableOnInteraction': false
                // }}
                ref={swiperRef}
                className='achievement-slider'>

                {achievementsImgs.map(achievementNumber => {
                    return (
                        <SwiperSlide key={achievementNumber}>
                            {({ isActive }) => (
                                <div className='slide-img-wrapper'>
                                    {
                                        isActive
                                            ? <Image
                                                src={`/achievements/${achievementNumber + 1}.jpg`}
                                                preview={{ mask: <div>Увеличить</div> }} 
                                                 />
                                            : <img src={`/achievements/${achievementNumber + 1}.jpg`} alt='' />
                                    }
                                </div>
                            )}
                            {/* <Image src={`/achievements/${achievementNumber + 1}.jpg`} preview={{
                                mask: <div>Увеличить</div>,
                                visible: isActive
                            }} /> */}
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </div>
    );
};