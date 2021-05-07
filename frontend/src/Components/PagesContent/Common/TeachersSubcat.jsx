import React from 'react';
import { useSelector } from 'react-redux';
import { BigButton } from '../../BigButton/BigButton';
import { icons } from '../../Icons/ButtonIcons/Aggregated';

export const TeachersSubcat = () => {

    const currentCategory = useSelector(state => state.app.currentCategory);
    const currentCategoryTitle = currentCategory && currentCategory.title;

    const icon = icons['Files'];

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