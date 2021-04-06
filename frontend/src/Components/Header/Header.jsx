import React from 'react';
import { MenuOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { toggleMenuVisibility } from '../../redux/testReducer';
import './Header.scss';


export const Header = () => {

    const dispatch = useDispatch();
    
    const onMenuClick = () => {
        dispatch(toggleMenuVisibility());
    };

    return (
        <header className='header'>
            <div className='header__content'>
                <MenuOutlined onClick={onMenuClick}/>
                <div className='header__logo'>
                    <h1>English grammar</h1>
                    <p>by Natalya Shumilova</p>
                </div>
            </div>
        </header>
    );
};