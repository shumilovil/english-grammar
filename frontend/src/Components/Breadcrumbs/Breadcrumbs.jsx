import React from 'react';
import { Breadcrumb } from 'antd';
import { useSelector } from 'react-redux';
import { Link, useHistory, useLocation, useParams, useRouteMatch } from 'react-router-dom';

export const AntBreadCrumbs = () => {

    const currentCategory = useSelector(state => state.app.currentCategory);
    const currentSubcategory = useSelector(state => state.app.currentSubcategory);
    const currentStaticPage = useSelector(state => state.app.currentStaticPage);

    // const history = useHistory();
    // const location = useLocation();
    // const params = useParams();
    // const routeMatch = useRouteMatch();

    // console.log('history', history);
    // console.log('location', location);
    // console.log('params', params);
    // console.log('routeMatch', routeMatch);

    if (!currentCategory && !currentSubcategory && !currentStaticPage) return null;

    if (currentCategory && !currentSubcategory) {
        return (
            <Breadcrumb>

                <Breadcrumb.Item>
                    <Link to='/'>Главная</Link>
                </Breadcrumb.Item>

                <Breadcrumb.Item>
                    {currentCategory.title}
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
                    <Link to={currentCategory.url}>{currentCategory.title}</Link>
                </Breadcrumb.Item>

                <Breadcrumb.Item>
                    {currentSubcategory.title}
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
                    {currentStaticPage.title}
                </Breadcrumb.Item>

            </Breadcrumb>
        );
    }

    return null;
};