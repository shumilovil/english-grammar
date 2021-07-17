import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FilesList } from '../../FilesList/FilesList';
import { getRecommendations } from '../../../redux/recommendationsReducer';
import { Preloader } from './../../Preloader/Preloader';
import { useEffect } from 'react';
import { useCategoryTitle, useCategoryUrl } from '../../../hooks/category.hooks';
import './TeachersSubcategory.scss';
import { removeUnderscore } from './helpers';

export const TeachersSubcategory = () => {

    const dispatch = useDispatch();

    const isLoading = useSelector(state => state.recommendations.isLoading);
    const currentCategoryUrl = useCategoryUrl();
    const currentCategoryTitle = useCategoryTitle();
    const fileGroups = useSelector(state => state.recommendations.recommendations);

    useEffect(() => {
        if (currentCategoryUrl) dispatch(getRecommendations(currentCategoryUrl));
    }, [dispatch, currentCategoryUrl]);

    if (isLoading) return <Preloader />;

    return (
        <div className='teachers-subcat'>
            <h2>{currentCategoryTitle} - Рекомендации для учителей</h2>
            <p className='teachers-subcat__note'>Уважаемые коллеги, рекомендации по материалу '{currentCategoryTitle}' вы можете скачать ниже:</p>           
            <FilesList
                fileGroups={fileGroups}
                pageType='recommendations'
                currentCategoryUrl={currentCategoryUrl}
                processText={removeUnderscore}
                isFirstActive={true}
            />
        </div>
    );
};