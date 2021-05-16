import React from 'react';
import { useCategoryTitle } from '../../../hooks/category.hooks';

export const QuestionsCategory = () => {

    const currentCategoryTitle = useCategoryTitle();

    return (
        <div className='questions-category'>
            <h2>{currentCategoryTitle}</h2>
            <ul>
                <li>
                    Поэтапное формирование учебных действий
               </li>
                <li>
                    Визуальная подвижность изучаемой конструкции
               </li>
                <li>
                    Цветовоздействие, как стимулятор интеллектуальной деятельности
                </li>
            </ul>
        </div>
    );
};