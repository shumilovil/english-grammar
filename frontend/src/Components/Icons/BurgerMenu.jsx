import React from 'react';
import './BurgerMenu.scss';
import menuIcon from '../../images/burger_white.svg';

export const BurgerMenu = () => {
    return (
        <div className='burger-menu-icon'>
            <img src={menuIcon} alt='menu' />
        </div>
    );
};