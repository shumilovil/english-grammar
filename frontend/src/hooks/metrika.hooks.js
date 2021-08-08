import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const useYMUrlChange = () => {
    const { pathname } = useLocation();
    useEffect(() => {
        if (!window.ym) return;
        window.ym(83801950, 'hit', pathname);
    }, [pathname]);
};