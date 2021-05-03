import React from 'react';
import { useDispatch } from 'react-redux';
import { Route, Switch, useRouteMatch } from 'react-router';
import { useCategoryOrSubcategory } from '../../hooks/category.hooks';
import { useAvailableSubcategories } from '../../hooks/subcategory.hooks';
import { setCurrentCategory, setCurrentSubCategory } from '../../redux/mainReducer';
import { Subcategory } from './Subcategory';

export const Category = ({ categories, subcategories }) => {

    const currentCategory = useCategoryOrSubcategory(categories, 'category');
    const availableSubcategories = useAvailableSubcategories(currentCategory, subcategories);
    const { path } = useRouteMatch();
    const dispatch = useDispatch();    

    dispatch(setCurrentSubCategory(null));

    if (currentCategory) {
        console.log('setCurrentCategory');
        dispatch(setCurrentCategory(currentCategory));
    } else return <div>404 NOT FOUND</div>;

    return (
        <Switch>

            <Route exact path={path}>
                <div>Категория {currentCategory.name}</div>
                {availableSubcategories.map(subcategory => <div key={subcategory._id}>{subcategory.name}</div>)}
            </Route>

            <Route path={`${path}/:subcategory`}>
                <Subcategory availableSubcategories={availableSubcategories} />
            </Route>

        </Switch>
    );
};