import React from 'react';
import { useDispatch } from 'react-redux';
import { useRouteMatch } from 'react-router';
import { setCurrentStaticPage } from '../../redux/mainReducer';

export const Reviews = () => {

    const { url } = useRouteMatch();
    const dispatch = useDispatch();
    dispatch(setCurrentStaticPage({url, name: 'Отзывы'}));

    return (
        <div>Отзывы</div>
    );
};