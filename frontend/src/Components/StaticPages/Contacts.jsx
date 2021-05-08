import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useRouteMatch } from 'react-router';
import { setCurrentStaticPage } from '../../redux/mainReducer';

const Contacts = () => {

    const dispatch = useDispatch();

    const { url } = useRouteMatch();    

    useEffect(() => dispatch(setCurrentStaticPage({ url, title: 'Контакты', name: 'Contacts' })));

    return (
        <h2>Контакты</h2>
    );
};

export default Contacts;