import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Switch, useRouteMatch } from 'react-router';
import { useCatOrSubcat } from '../../hooks/category.hooks';
import { useAvailableSubcat } from '../../hooks/subcategory.hooks';
import { setCurrentCategory } from '../../redux/mainReducer';
import { PageNotFound } from '../PageNotFound/PageNotFound';
import { CategoryPage } from './CategoryPage';
import { SubcategoryPage } from './SubcategoryPage';

const Category = ({ categories, subcategories }) => {

    console.log('Category COMPONENT');

    const currentCategory = useCatOrSubcat(categories, 'category');
    const availableSubcategories = useAvailableSubcat(currentCategory, subcategories);
    const { path } = useRouteMatch();
    const dispatch = useDispatch();

    useEffect(() => {
        if (currentCategory) {
            dispatch(setCurrentCategory(currentCategory));
        }
    }, [currentCategory, dispatch]);

    if (!currentCategory) {
        return <PageNotFound />;
    }

    return (
        <Switch>

            <Route exact path={path}>
                <CategoryPage
                    availableSubcategories={availableSubcategories} />
            </Route>

            <Route path={`${path}/:subcategory`}>
                <SubcategoryPage
                    availableSubcategories={availableSubcategories} />
            </Route>

        </Switch>
    );
};

export default Category;