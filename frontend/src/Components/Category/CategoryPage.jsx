import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setCurrentSubCategory } from '../../redux/mainReducer';
import { textContent } from '../TextContent/Aggregated';
import './CategoryPage.scss';

export const CategoryPage = ({ currentCategory, availableSubcategories }) => {

    const dispatch = useDispatch();

    const categoryText = textContent[currentCategory.name]
        && textContent[currentCategory.name].categorie;

    useEffect(() => dispatch(setCurrentSubCategory(null)));

    return (
        <div className='category'>            
            <h2 className='category__title'>{currentCategory.title}</h2>

            {categoryText && <div>{categoryText}</div>}

            {availableSubcategories.map(subcategory => {
                return (
                    <div key={subcategory._id}>{subcategory.title}</div>
                );
            })}
            
        </div>
    );
};