import React from 'react';
import { BigButton } from '../../BigButton/BigButton';
import { icons } from '../../Icons/ButtonIcons/Aggregated';
import { useSelector } from 'react-redux';
import { baseUrl } from '../../../api/api';

const mediaUrl = `${baseUrl}/media`;

export const TeachersSubcategory = () => {

    const currentCategory = useSelector(state => state.app.currentCategory);
    const currentCategoryUrl = currentCategory && currentCategory.url;
    const currentCategoryTitle = currentCategory && currentCategory.title;
    const recommendationFileUrl = currentCategoryUrl
        && `${mediaUrl}${currentCategoryUrl}/recommendations${currentCategoryUrl}_recommendations.pdf`;    

    const icon = icons['files'];

    if (!recommendationFileUrl) return null;

    return (
        <div className='abc-street-teachers-subcat'>
            <h2>{currentCategoryTitle} - Рекомендации для учителей</h2>
            <p>Уважаемые коллеги, рекомендации по материалу '{currentCategoryTitle}' вы можете скачать ниже:</p>
            <BigButton
                download={true}
                buttonText='Скачать рекомендации'
                url={recommendationFileUrl}
                icon={icon} />
        </div>
    );
};