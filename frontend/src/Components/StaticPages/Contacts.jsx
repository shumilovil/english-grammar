import React from 'react';
import { useDispatch } from 'react-redux';
import { useRouteMatch } from 'react-router';
import { setCurrentStaticPage } from '../../redux/mainReducer';

export const Contacts = () => {

    const { url } = useRouteMatch();
    const dispatch = useDispatch();
    dispatch(setCurrentStaticPage({ url, name: 'Контакты' }));

    return (
        <div>Контакты</div>
    );
};