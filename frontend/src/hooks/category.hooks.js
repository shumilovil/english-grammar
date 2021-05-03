import { useMemo } from 'react';
import { useParams } from 'react-router';

export const useCategoryOrSubcategory = (categories, categoryType) => {
    const { [categoryType]: categoryUrl } = useParams();
    console.log('categoryUrl', categoryUrl);
    const currentCategory = useMemo(
        () => categories.find(category => category.url === categoryUrl),
        [categoryUrl, categories]
    );
    console.log('currentCategory', currentCategory);
    return currentCategory;
};