import React from 'react';
// import { MenuOutlined, CloseSquareOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { hideMenu, toggleMenuVisibility } from '../../redux/mainReducer';
import './Header.scss';
import { CloseIcon } from '../Icons/HeaderIcons/CloseIcon';
import { MenuIcon } from '../Icons/HeaderIcons/MenuIcon';
import { Link } from 'react-router-dom';


export const Header = () => {    

    const dispatch = useDispatch();
    const isMenuVisible = useSelector((state) => state.app.isMenuVisible);

    const toggleMenu = () => {
        dispatch(toggleMenuVisibility());
    };

    const logoClickHandler = () => {
        dispatch(hideMenu());
    };

    return (
        <header className='header'>
            <div className='header__content'>
                <div className='header__menu-toggle'
                    onClick={toggleMenu}
                >
                    {isMenuVisible ? <CloseIcon /> : <MenuIcon />}
                </div>
                <div className='header__logo' onClick={logoClickHandler}>
                    <Link to='/'>
                        <h1 className='header__logo-title'>English grammar</h1>
                        <p className='header__logo-text'>by Natalya Shumilova</p>
                    </Link>
                </div>
            </div>
        </header>
    );
};