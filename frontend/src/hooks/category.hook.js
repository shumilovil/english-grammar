import { useMemo } from 'react';
import { useParams } from 'react-router';

export const useCategory = (categories) => {
    const { category: categoryUrl } = useParams();
    console.log('categoryUrl', categoryUrl);
    const currentCategory = useMemo(
        () => categories.find(category => category.url === categoryUrl),
        [categoryUrl, categories]
    );
    return currentCategory;
};