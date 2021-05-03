import React from 'react';
import './Close.scss';
import closeIcon from '../../images/close_white.svg';

export const Close = () => {
    return (
        <div className='close-icon'>
            <img src={closeIcon} alt='close' />
        </div>
    );
};