import React from 'react';
import { Spin } from 'antd';
import './Preloader.scss';

export const Preloader = () => {
    return (
        <div className='preloader'>
            <Spin size='large'/>
        </div>
    );
};