import React from 'react';
import { useStaticPage } from '../../hooks/staticPages.hooks';

const Contacts = () => {

    useStaticPage();

    return (
        <>
            <h2>Контакты</h2>
            <p>Email: <a href='mailto:nshumilova@inbox.ru'>nshumilova@inbox.ru</a></p>
        </>
    );
};

export default Contacts;