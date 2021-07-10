import { useMemo } from 'react';
import { useRouteMatch } from 'react-router-dom';

export const usePageUrl = (pages, pageType) => {
    const urlData = useRouteMatch();
    let pageUrl = urlData.params[pageType];    
    if (pageType === 'static') pageUrl = urlData.url.replace('/', '');
    const currentPage = useMemo(
        () => pages.find(page => page.url === `/${pageUrl}`),
        [pageUrl, pages]
    );
    return currentPage;
};