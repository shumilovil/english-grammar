import React from 'react';
import { useSelector } from 'react-redux';

export const GrammarSmileCategory = () => {

    const currentCategory = useSelector(state => state.app.currentCategory);
    const currentCategoryTitle = currentCategory && currentCategory.title;

    return (
        <div className='grammar-smile-category'>
            <h2>Welcome to {currentCategoryTitle}</h2>
            <ul>
                <li>
                    Обучение младших школьников грамматике английского языка с помощью графических опор.
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