import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useRouteMatch } from 'react-router';
import { setCurrentStaticPage } from '../../redux/mainReducer';

const Contacts = () => {

    const { url } = useRouteMatch();
    const dispatch = useDispatch();

    useEffect(() => dispatch(setCurrentStaticPage({ url, title: 'Контакты' })));

    return (
        <h2>Контакты</h2>
    );
};

export default Contacts;