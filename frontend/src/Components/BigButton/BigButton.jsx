import React from 'react';
import { Link } from 'react-router-dom';
import './BigButton.scss';

export const BigButton = ({url, icon, buttonText, download }) => {

    if (download) return (
        <a className='big-button' download href={url} >
            <div>{icon}</div>
            <p>{buttonText}</p>
        </a>
    );

    return (
        <Link className='big-button' to={url} >
            <div>{icon}</div>
            <p>{buttonText}</p>
        </Link>
    );
};