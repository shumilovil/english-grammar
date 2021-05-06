import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useCatOrSubcat } from '../../hooks/category.hooks';
import { setCurrentSubCategory } from '../../redux/mainReducer';
import { pagesContent } from '../PagesContent/Aggregated';

export const SubcategoryPage = ({ availableSubcategories, currentCategory }) => {

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

    const subcategoryContent = pagesContent[currentCategory.name]
        && pagesContent[currentCategory.name].subcategory
        && pagesContent[currentCategory.name].subcategory[currentSubCategory.name];

    return (
        <div className='subcategory'>
            {subcategoryContent}
        </div>
    );
};