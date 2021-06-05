import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setCurrentCategory, setCurrentSubcategory } from '../../redux/mainReducer';
import { AchievementSlider } from '../AchievementSlider/AchievementSlider';
import { Card } from '../Card/Card';
import './MainPage.scss';

export const MainPage = ({ categories }) => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setCurrentCategory(null));
        dispatch(setCurrentSubcategory(null));
    });

    return (
        <div className='main-page' data-testid='main-page-test'>
            <h2>Методические пособия</h2>
            <div className='main-page__cards'>
                {categories.map(category => {
                    return (
                        <Card category={category} key={category._id} />
                    );
                })}
            </div>
            <AchievementSlider/>
        </div>
    );
};