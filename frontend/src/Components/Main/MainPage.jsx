import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
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
                        <Link key={category._id} to={category.url}>
                            <Card category={category} />
                        </Link>
                    );
                })}
            </div>
        </div>
    );
};