import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useCatOrSubcat } from '../../hooks/category.hooks';
import { setCurrentSubcategory } from '../../redux/mainReducer';
import { pagesContent } from '../PagesContent/Aggregated';

export const SubcategoryPage = ({ availableSubcategories, currentCategory }) => {

    const currentSubcategory = useCatOrSubcat(availableSubcategories, 'subcategory');    

    const dispatch = useDispatch();

    useEffect(() => {
        if (currentSubcategory) {
            dispatch(setCurrentSubcategory(currentSubcategory));
        }
    });

    if (!currentSubcategory) {
        return <div>404 NOT FOUND</div>;
    }

    const subcategoryContent = pagesContent[currentCategory.name]
        && pagesContent[currentCategory.name].subcategory
        && pagesContent[currentCategory.name].subcategory[currentSubcategory.name];

    return (
        <div className='subcategory'>
            {subcategoryContent}
        </div>
    );
};