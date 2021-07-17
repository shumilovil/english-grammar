import React from 'react';
import { useCategoryTitle } from '../../../hooks/category.hooks';

export const GrammarSmileCategory = () => {

    const currentCategoryTitle = useCategoryTitle();

    return (
        <div className='grammar-smile-category'>
            <h2>Welcome to {currentCategoryTitle}</h2>
            <ul>
                <li>
                    Использование опор как средство дидактического сопровождения при обучении младших школьников грамматике английского языка
               </li>
                <li>
                    Занимательная форма тренировки.
               </li>
                <li>
                    Осмысленный подход к учебной деятельности
                </li>
            </ul>
        </div>
    );
};