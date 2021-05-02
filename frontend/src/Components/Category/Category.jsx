import React from 'react';
import { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from "react-router-dom";
import { setCurrentCategory } from '../../redux/mainReducer';

export const Category = ({ categories }) => {

    const dispatch = useDispatch();

    const categoryUrl = useParams().category;
    console.log('categoryUrl', categoryUrl);
    const currentCategory = useMemo(
        () => categories.find(category => category.url === categoryUrl),
        [categoryUrl, categories]
    );
    dispatch(setCurrentCategory(currentCategory));


    return (
        <div>
            Категория {categoryUrl}
        </div>
    );
};