import React from 'react';
import { useDispatch } from 'react-redux';
import { useCategory } from '../../hooks/category.hook';
import { setCurrentCategory } from '../../redux/mainReducer';

export const Category = ({ categories }) => {

    const dispatch = useDispatch();
    const currentCategory = useCategory(categories);

    if (currentCategory) {
        dispatch(setCurrentCategory(currentCategory));
    } else return <div>404 NOT FOUND</div>;   


    return (
        <div>
            Категория {currentCategory.name}
        </div>
    );
};