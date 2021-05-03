import React from 'react';
import { useDispatch } from 'react-redux';
import { Route, Switch, useRouteMatch } from 'react-router';
import { useCategoryOrSubcategory } from '../../hooks/category.hooks';
import { useAvailableSubcategories } from '../../hooks/subcategory.hooks';
import { setCurrentCategory } from '../../redux/mainReducer';
import { Subcategory } from './Subcategory';

export const Category = ({ categories, subcategories }) => {
    
    const currentCategory = useCategoryOrSubcategory(categories, 'category');
    const availableSubcategories = useAvailableSubcategories(currentCategory, subcategories);
    const dispatch = useDispatch();
    const { path, url } = useRouteMatch();

    console.log('availableSubcategories', availableSubcategories);

    if (currentCategory) {
        dispatch(setCurrentCategory(currentCategory));
    } else return <div>404 NOT FOUND</div>;

    return (
        <Switch>

            <Route exact path={path}>
                <div>Категория {currentCategory.name}</div>
                {availableSubcategories.map(subcategory => <div key={subcategory._id}>{subcategory.name}</div>)}
            </Route>

            <Route path={`${path}/:subcategory`}>
                <Subcategory availableSubcategories={availableSubcategories}/>
            </Route>

        </Switch>
    );
};