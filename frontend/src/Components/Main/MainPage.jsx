import React from 'react';
import { useDispatch } from 'react-redux';
import { setCurrentCategory, setCurrentSubCategory } from '../../redux/mainReducer';
import { Card } from '../Card/Card';
import './MainPage.scss';

export const MainPage = ({ categories }) => {

    const dispatch = useDispatch();
    dispatch(setCurrentCategory(null));
    dispatch(setCurrentSubCategory(null));

    return (
        <div className='main-page'>            
            <div className='main-page__cards'>
                {categories.map(category => {
                    return (
                        <Card category={category}/>
                    );
                })}
            </div>
        </div>
    );
};