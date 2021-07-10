import React from 'react';
import { Link } from 'react-router-dom';
import './BigButton.scss';

export const BigButton = ({url, icon, buttonText }) => {

    return (
        <Link className='big-button' to={url} >
            <div>{icon}</div>
            <p>{buttonText}</p>
        </Link>
    );
};