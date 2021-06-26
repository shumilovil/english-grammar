import { useSelector } from 'react-redux';

export const useCategoryTitle = () => {
    return useSelector(state => {
        const currentCategory = state.app.currentCategory;
        return currentCategory && currentCategory.title;
    });
};