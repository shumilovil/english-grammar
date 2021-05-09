import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { setCurrentCategory, setCurrentSubcategory } from '../../redux/mainReducer';
import { Card } from '../Card/Card';
import './MainPage.scss';

export const MainPage = ({ categories }) => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setCurrentCategory(null));
        dispatch(setCurrentSubcategory(null));
    });

    return (
        <div className='main-page'>
            <div className='main-page__cards'>
                {categories.map(category => {
                    return (
                        <Card category={category} />
                    );
                })}
            </div>
        </div>
    );
};