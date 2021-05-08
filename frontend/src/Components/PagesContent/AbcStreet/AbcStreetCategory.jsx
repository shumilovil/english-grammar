import React from 'react';
import { useSelector } from 'react-redux';

export const AbcStreetCategory = () => {

    const currentCategory = useSelector(state => state.app.currentCategory);
    const currentCategoryTitle = currentCategory && currentCategory.title;

    if (!currentCategoryTitle) return null;

    return (
        <div className='abc-street-category'>
            <h2>Welcome to {currentCategoryTitle}</h2>
            <ul>
                <li>
                    Обучение младших школьников технике чтения на английском языке.
               </li>
                <li>
                    Мультисенсорный подход в освоении техники чтения на английском языке  через трехканальную систему восприятия: «слышу, вижу, делаю».
               </li>
                <li>
                    Управление вниманием детей посредством анимации, звука, цвета, ритма, игрового контекста, положительных эмоций.
                </li>
                <li>
                    Систематизация и обобщение правил чтения ударных гласных в графическом моделировании ядра слова.
                </li>
            </ul>
        </div>
    );
};