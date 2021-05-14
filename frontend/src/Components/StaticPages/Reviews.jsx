import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useRouteMatch } from 'react-router';
import { setCurrentStaticPage } from '../../redux/mainReducer';

const Reviews = () => {

    const dispatch = useDispatch();

    const { url } = useRouteMatch();    

    useEffect(() => dispatch(setCurrentStaticPage({ url, title: 'Отзывы', name: 'otzyvy' })));

    return (
        <h2>Отзывы</h2>
    );
};

export default Reviews;