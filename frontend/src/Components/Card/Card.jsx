import React from 'react';
import './Card.scss';

export const Card = ({ category }) => {
    return (
        <div key={category._id} className='course-card'>
            <h2 className='course-card__title'>{category.title}</h2>
            <p className='course-card__description'>{category.description}</p>
        </div>
    );
};