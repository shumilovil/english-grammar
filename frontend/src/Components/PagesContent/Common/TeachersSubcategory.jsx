import React from 'react';
import { useCategoryTitle } from '../../../hooks/category.hooks';
import { BigButton } from '../../BigButton/BigButton';
import { icons } from '../../Icons/ButtonIcons/Aggregated';

export const TeachersSubcategory = () => {

    const currentCategoryTitle = useCategoryTitle();

    const icon = icons['files'];

    return (
        <div className='abc-street-teachers-subcat'>
            <h2>{currentCategoryTitle} - Рекомендации для учителей</h2>
            <p>Уважаемые коллеги, рекомендации по материалу '{currentCategoryTitle}' вы можете скачать ниже:</p>
            <BigButton
                buttonText='Скачать рекомендации'
                url='*'
                icon={icon} />
        </div>
    );
};