import React from 'react';
import { useDispatch } from 'react-redux';
import { Route, Switch, useRouteMatch } from 'react-router';
import { useCategory } from '../../hooks/category.hook';
import { setCurrentCategory } from '../../redux/mainReducer';

export const Category = ({ categories, subcategories }) => {

    const dispatch = useDispatch();
    const currentCategory = useCategory(categories);
    const { path, url } = useRouteMatch();

    console.log('path', path);
    console.log('url', url);

    if (currentCategory) {
        dispatch(setCurrentCategory(currentCategory));
    } else return <div>404 NOT FOUND</div>;


    return (
        <Switch>

            <Route exact path={path}>
                <div>Категория {currentCategory.name}</div>
            </Route>

            <Route path={`${path}/for-teachers`}>
                <div>Для учителей</div>
            </Route>

            <Route path={`${path}/for-kids`}>
                <div>Для детей</div>
            </Route>

        </Switch>
    );
};