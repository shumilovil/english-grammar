import React from 'react';
import { useDispatch } from 'react-redux';
import { setCurrentSubCategory } from '../../redux/mainReducer';

export const CategoryPage = ({currentCategory, availableSubcategories}) => {
    
    const dispatch = useDispatch();
    dispatch(setCurrentSubCategory(null));

    return (
        <div>
            <div>Категория {currentCategory.name}</div>
            { availableSubcategories.map(subcategory => <div key={subcategory._id}>{subcategory.name}</div>)}
        </div>
    );
};