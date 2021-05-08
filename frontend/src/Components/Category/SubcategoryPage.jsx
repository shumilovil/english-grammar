import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useCatOrSubcat } from '../../hooks/category.hooks';
import { useScrollToTop } from '../../hooks/scroll.hooks';
import { setCurrentSubcategory } from '../../redux/mainReducer';
import { PageNotFound } from '../PageNotFound/PageNotFound';
import { pagesContent } from '../PagesContent/Aggregated';

export const SubcategoryPage = ({ availableSubcategories, currentCategory }) => {

    const currentSubcategory = useCatOrSubcat(availableSubcategories, 'subcategory');    

    const dispatch = useDispatch();

    useEffect(() => {
        if (currentSubcategory) {
            dispatch(setCurrentSubcategory(currentSubcategory));
        }
    });

    useScrollToTop();

    if (!currentSubcategory) {
        return <PageNotFound />;
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