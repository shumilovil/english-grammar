import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useCatOrSubcat } from '../../hooks/category.hooks';
import { useScrollToTop } from '../../hooks/scroll.hooks';
import { setCurrentSubcategory } from '../../redux/mainReducer';
import { PageNotFound } from '../PageNotFound/PageNotFound';
import { pagesContent } from '../PagesContent/Aggregated';
import './SubcategoryPage.scss';

export const SubcategoryPage = ({ availableSubcategories }) => {

    const currentCategory = useSelector(state => state.app.currentCategory);
    const currentSubcategory = useCatOrSubcat(availableSubcategories, 'subcategory');

    const dispatch = useDispatch();

    useEffect(() => {
        if (currentSubcategory) {
            dispatch(setCurrentSubcategory(currentSubcategory));
        }
    }, [currentSubcategory, dispatch]);

    useScrollToTop();

    if (!currentSubcategory) {
        return <PageNotFound />;
    }

    const subcategoryContent = currentCategory
        && pagesContent[currentCategory.name]
        && pagesContent[currentCategory.name].subcategory
        && pagesContent[currentCategory.name].subcategory[currentSubcategory.name];

    return (
        <div className='subcategory'>
            {subcategoryContent}
        </div>
    );
};