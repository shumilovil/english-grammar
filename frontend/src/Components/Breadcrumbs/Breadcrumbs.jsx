import React from 'react';
import { Breadcrumb } from 'antd';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export const AntBreadCrumbs = () => {

    const currentCategory = useSelector(state => state.app.currentCategory);
    const currentSubcategory = useSelector(state => state.app.currentSubcategory);
    const currentStaticPage = useSelector(state => state.app.currentStaticPage);

    if (!currentCategory && !currentSubcategory && !currentStaticPage) return null;

    if (currentCategory && !currentSubcategory) {
        return (
            <Breadcrumb>

                <Breadcrumb.Item>
                    <Link to='/'>Главная</Link>
                </Breadcrumb.Item>

                <Breadcrumb.Item>
                    {currentCategory.name}
                </Breadcrumb.Item>

            </Breadcrumb>
        );
    }

    if (currentCategory && currentSubcategory) {
        return (
            <Breadcrumb>

                <Breadcrumb.Item>
                    <Link to='/'>Главная</Link>
                </Breadcrumb.Item>

                <Breadcrumb.Item>
                    <Link to={currentCategory.url}>{currentCategory.name}</Link>
                </Breadcrumb.Item>

                <Breadcrumb.Item>
                    {currentSubcategory.name}
                </Breadcrumb.Item>

            </Breadcrumb>
        );
    }

    if (currentStaticPage) {
        return (
            <Breadcrumb>

                <Breadcrumb.Item>
                    <Link to='/'>Главная</Link>
                </Breadcrumb.Item>

                <Breadcrumb.Item>
                    {currentStaticPage.name}
                </Breadcrumb.Item>

            </Breadcrumb>
        );
    } 
    
    return null;
};