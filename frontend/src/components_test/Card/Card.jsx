import React from 'react';
import { Link } from 'react-router-dom';
import './Card.scss';

export const Card = ({ category }) => {
    return (
        <Link key={category._id} to={category.url} className='course-card'>
            <h2 className='course-card__title'>{category.title}</h2>
            <p className='course-card__description'>{category.description}</p>
        </Link>
    );
};