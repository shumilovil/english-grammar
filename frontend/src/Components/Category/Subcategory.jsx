import React from 'react';
import { useRouteMatch } from 'react-router';

export const Subcategory = ({ availableSubcategories }) => {

    const { path, url } = useRouteMatch();
    console.log('path', path);
    console.log('url', url);

    return (
        <div>
            Подкатегория
        </div>
    );
}