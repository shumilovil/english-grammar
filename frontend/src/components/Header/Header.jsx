import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { hideMenu, toggleMenuVisibility } from '../../redux/mainReducer';
import './Header.scss';
import { CloseIcon } from '../Icons/HeaderIcons/CloseIcon';
import { MenuIcon } from '../Icons/HeaderIcons/MenuIcon';
import { Link, useLocation } from 'react-router-dom';
import { Logo } from './Logo';


export const Header = ({ isAppLoading }) => {

    const { pathname } = useLocation();
    const isHomePage = pathname === '/';
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
                    {isHomePage
                        ? <Logo />
                        : <Link to='/'>
                            <Logo />
                        </Link>}
                </div>

            </div>
        </header>
    );
};