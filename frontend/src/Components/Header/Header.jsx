import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { hideMenu, toggleMenuVisibility } from '../../redux/mainReducer';
import './Header.scss';
import { CloseIcon } from '../Icons/HeaderIcons/CloseIcon';
import { MenuIcon } from '../Icons/HeaderIcons/MenuIcon';
import { Link } from 'react-router-dom';


export const Header = ({ isAppLoading }) => {

    const dispatch = useDispatch();

    const isMenuVisible = useSelector(state => state.app.isMenuVisible);

    const toggleMenu = () => {
        dispatch(toggleMenuVisibility());
    };

    const logoClickHandler = () => {
        dispatch(hideMenu());
    };

    return (
        <header className='header'>
            <div className='header__content'>

                {!isAppLoading &&
                    <div className='header__menu-toggle' onClick={toggleMenu} data-testid='menu-toggle-test'>
                        {isMenuVisible ? <CloseIcon /> : <MenuIcon />}
                    </div>}

                <div className='header__logo' onClick={logoClickHandler}>
                    <Link to='/'>
                        <h1 className='header__logo-title'>English</h1>
                        <p className='header__logo-text'>with different kinds of supports</p>
                    </Link>
                </div>

            </div>
        </header>
    );
};