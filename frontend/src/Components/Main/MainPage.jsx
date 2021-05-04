import React from 'react';
import { useDispatch } from 'react-redux';
import { setCurrentCategory, setCurrentSubCategory } from '../../redux/mainReducer';

export const MainPage = ({ categories }) => {

    const dispatch = useDispatch();
    dispatch(setCurrentCategory(null));
    dispatch(setCurrentSubCategory(null));

    return (
        <div>
            <div>Здесь будут плашки</div>
            {categories.map(category => <div key={category._id}>{category.name}</div>)}
        </div>
    );
};