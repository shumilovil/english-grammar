import React from 'react';
import { useStaticPage } from '../../hooks/staticPages.hooks';

const Reviews = () => {

    useStaticPage();

    return (
        <h2>Отзывы</h2>
    );
};

export default Reviews;