import React from 'react';
import { Breadcrumb } from 'antd';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export const AntBreadCrumbs = () => {

    const currentCategory = useSelector(state => state.app.currentCategory);
    const currentSubcategory = useSelector(state => state.app.currentSubcategory);
    const currentStaticPage = useSelector(state => state.app.currentStaticPage);

    const pages = [currentCategory, currentSubcategory, currentStaticPage];
    const activePages = pages.filter(page => !!page);   

    if (!activePages.length) return null;

    return (
        <Breadcrumb>
            <Breadcrumb.Item>
                <Link to='/'>Главная</Link>
            </Breadcrumb.Item>
            {activePages.map((page, index) => {
                if (!page) return null;
                // console.log('page', page);                
                const isLast = index === activePages.length - 1;
                // console.log('isLast', isLast);
                return (
                    <Breadcrumb.Item key={page._id}>
                        {isLast
                            ? page.title
                            : <Link to={page.url}>{page.title}</Link>}
                    </Breadcrumb.Item>
                );
            })}
        </Breadcrumb>
    );
};