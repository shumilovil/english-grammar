import React from 'react';
import { useStaticPage } from '../../hooks/staticPages.hooks';

const Contacts = () => {

    useStaticPage();

    return (
        <h2>Контакты</h2>
    );
};

export default Contacts;