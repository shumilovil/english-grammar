import React from 'react';
import { useDispatch } from 'react-redux';
import { useCatOrSubcat } from '../../hooks/category.hooks';
import { setCurrentSubCategory } from '../../redux/mainReducer';

export const Subcategory = ({ availableSubcategories }) => {    
    
    const currentSubCategory = useCatOrSubcat(availableSubcategories, 'subcategory');
    const dispatch = useDispatch();
    if (currentSubCategory) {
        dispatch(setCurrentSubCategory(currentSubCategory));
    } else return <div>404 NOT FOUND</div>;

    return (
        <div>
            {currentSubCategory.name}
        </div>
    );
}