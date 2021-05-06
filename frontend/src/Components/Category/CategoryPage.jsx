import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setCurrentSubCategory } from '../../redux/mainReducer';
import { BigButton } from '../BigButton/BigButton';
import { icons } from '../Icons/BtnIcons/Aggregated';
import { pagesContent } from '../PagesContent/Aggregated';
import './CategoryPage.scss';

export const CategoryPage = ({ currentCategory, availableSubcategories }) => {

    const dispatch = useDispatch();

    const categoryContent = pagesContent[currentCategory.name]
        && pagesContent[currentCategory.name].category;

    useEffect(() => dispatch(setCurrentSubCategory(null)));

    return (
        <div className='category'>
            <h2 className='category__title'>{currentCategory.title}</h2>

            {categoryContent}

            <div className='category__big-btns'>
                {availableSubcategories.map(subcategory => {
                    const subcategoryUrl = `${currentCategory.url}${subcategory.url}`;
                    const buttonText = subcategory.title;
                    const icon = icons[subcategory.name];
                    return (
                        <BigButton
                            key={subcategory._id}
                            url={subcategoryUrl}
                            icon={icon}
                            buttonText={buttonText} />
                    );
                })}
            </div>

        </div>
    );
};