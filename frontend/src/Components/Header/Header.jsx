import React from 'react';
import { MenuOutlined, CloseSquareOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { toggleMenuVisibility } from '../../redux/mainReducer';
import './Header.scss';


export const Header = () => {    

    const dispatch = useDispatch();
    const isMenuVisible = useSelector((state) => state.app.isMenuVisible);

    const toggleMenu = () => {
        dispatch(toggleMenuVisibility());
    };

    return (
        <header className='header'>
            <div className='header__content'>
                <div className='header__menu-toggle'
                    onClick={toggleMenu}
                >
                    {isMenuVisible ? <CloseSquareOutlined /> : <MenuOutlined />}
                </div>
                <div className='header__logo'>
                    <h1>English grammar</h1>
                    <p>by Natalya Shumilova</p>
                </div>
            </div>
        </header>
    );
};