import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Switch, useRouteMatch } from 'react-router';
import { useCatOrSubcat } from '../../hooks/category.hooks';
import { useAvailableSubcat } from '../../hooks/subcategory.hooks';
import { setCurrentCategory } from '../../redux/mainReducer';
import { CategoryPage } from './CategoryPage';
import { SubcategoryPage } from './SubcategoryPage';

export const Category = ({ categories, subcategories }) => {

    const currentCategory = useCatOrSubcat(categories, 'category');
    const availableSubcategories = useAvailableSubcat(currentCategory, subcategories);
    const { path } = useRouteMatch();
    const dispatch = useDispatch();

    useEffect(() => {
        if (currentCategory) {
            dispatch(setCurrentCategory(currentCategory));
        }
    });

    if (!currentCategory) {
        return <div>404 NOT FOUND</div>;
    }

    return (
        <Switch>

            <Route exact path={path}>
                <CategoryPage
                    currentCategory={currentCategory}
                    availableSubcategories={availableSubcategories} />
            </Route>

            <Route path={`${path}/:subcategory`}>
                <SubcategoryPage
                    currentCategory={currentCategory}
                    availableSubcategories={availableSubcategories} />
            </Route>

        </Switch>
    );
};