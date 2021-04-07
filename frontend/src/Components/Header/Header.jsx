import React from 'react';
import { MenuOutlined, CloseSquareOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { toggleMenuVisibility } from '../../redux/testReducer';
import './Header.scss';


export const Header = () => {

    const dispatch = useDispatch();
    const menuVisible = useSelector((state) => state.app.menuVisible);

    const toggleMenu = () => {
        dispatch(toggleMenuVisibility());
    };

    return (
        <header className='header'>
            <div className='header__content'>
                <div className='header__menuToggle'
                    onClick={toggleMenu}
                >
                    {menuVisible ? <CloseSquareOutlined /> : <MenuOutlined />}
                </div>
                <div className='header__logo'>
                    <h1>English grammar</h1>
                    <p>by Natalya Shumilova</p>
                </div>
            </div>
        </header>
    );
};