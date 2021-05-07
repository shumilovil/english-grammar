import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useRouteMatch } from 'react-router';
import { setCurrentStaticPage } from '../../redux/mainReducer';

export const Reviews = () => {

    const { url } = useRouteMatch();
    const dispatch = useDispatch();
    
    useEffect(() => dispatch(setCurrentStaticPage({url, title: 'Отзывы'})));

    return (
        <h2>Отзывы</h2>
    );
};