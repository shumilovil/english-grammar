import React from 'react';
import { MenuOutlined } from '@ant-design/icons';

export const Header = () => {
    return (
        <header className='header'>
            <div className='header__content'>
                <MenuOutlined />
                <div className='header__logo'>
                    <h1>English grammar</h1>
                    <p>by Natalya Shumilova</p>
                </div>
            </div>
        </header>
    );
};