import React from 'react';
import './Card.scss';

export const Card = ({ category }) => {
    return (
        <div key={category._id} className='course-card'>
            <div className='course-card__text-wrapper'>
                <h2 className='course-card__title'>{category.name}</h2>
                <p className='course-card__description'>{category.description}</p>
            </div>
        </div>
    );
};