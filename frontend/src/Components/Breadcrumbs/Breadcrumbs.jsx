import React from 'react';
import { Breadcrumb } from 'antd';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export const AntBreadCrumbs = () => {

    const currentCategory = useSelector(state => state.app.currentCategory);
    const currentSubcategory = useSelector(state => state.app.currentSubcategory);
    const currentStaticPage = useSelector(state => state.app.currentStaticPage);

    const pages = [currentCategory, currentSubcategory, currentStaticPage];

    if (pages.every(page => !page)) return null;

    console.log('pages', pages);

    return (
        <Breadcrumb>
            <Breadcrumb.Item>
                <Link to='/'>Главная</Link>
            </Breadcrumb.Item>
            {pages.map((page, index) => {
                if (!page) return null;
                const isLast = index === pages.length - 1;
                return (
                    <Breadcrumb.Item>
                        {isLast
                            ? page.title
                            : <Link to={page.url}>{page.title}</Link>}
                    </Breadcrumb.Item>
                );
            })}
        </Breadcrumb>
    );   
};