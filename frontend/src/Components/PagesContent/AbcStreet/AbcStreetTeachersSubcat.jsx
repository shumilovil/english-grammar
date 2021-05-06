import React from 'react';
import { BigButton } from '../../BigButton/BigButton';
import { icons } from '../../Icons/BtnIcons/Aggregated';

export const AbcStreetTeachersSubcat = () => {

    const icon = icons['Files'];

    return (
        <div className='abc-street-teachers-subcat'>
            <h2>Рекомендации для учителей</h2>
            <p>Дорогие коллеги, рекомендации вы можете скачать ниже:</p>
            <BigButton
                buttonText='Скачать рекомендации'
                url='*'
                icon={icon} />
        </div>
    );
};