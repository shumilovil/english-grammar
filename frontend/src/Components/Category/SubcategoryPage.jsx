import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useCatOrSubcat } from '../../hooks/category.hooks';
import { setCurrentSubCategory } from '../../redux/mainReducer';

export const SubcategoryPage = ({ availableSubcategories }) => {

    const currentSubCategory = useCatOrSubcat(availableSubcategories, 'subcategory');
    const dispatch = useDispatch();

    useEffect(() => {
        if (currentSubCategory) {
            dispatch(setCurrentSubCategory(currentSubCategory));
        }
    });

    if (!currentSubCategory) {
        return <div>404 NOT FOUND</div>;
    }

    return (
        <div>
            {currentSubCategory.title}
        </div>
    );
};