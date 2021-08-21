import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentStaticPage } from '../redux/mainReducer';
import { usePageUrl } from './url.hooks';


export const useStaticPage = () => {
    const dispatch = useDispatch();
    const staticPages = useSelector(state => state.app.staticPages);

    const currentStaticPage = usePageUrl(staticPages, 'static');
    useEffect(() => dispatch(setCurrentStaticPage(currentStaticPage)));
};

export const useSortStaticPage = (staticPages) => {
    const sortedStaticPages = useMemo(() => {
        if (!staticPages.length) return staticPages;
        return [...staticPages].sort((a, b) => {
            if (!a.order || !b.order) return 0;
            return a.order - b.order;
        });
    }, [staticPages]);
    return sortedStaticPages;
};