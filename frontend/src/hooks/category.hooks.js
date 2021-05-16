import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';

export const useCatOrSubcat = (categories, categoryType) => {
    const { [categoryType]: categoryUrl } = useParams();
    console.log(`${categoryType}URL`, categoryUrl);
    const currentCategory = useMemo(
        () => categories.find(category => category.url === `/${categoryUrl}`),
        [categoryUrl, categories]
    );
    console.log(`current${categoryType}`, currentCategory);
    return currentCategory;
};

export const useCategoryTitle = () => {
    return useSelector(state => {
        const currentCategory = state.app.currentCategory;
        return currentCategory && currentCategory.title;
    });   
}