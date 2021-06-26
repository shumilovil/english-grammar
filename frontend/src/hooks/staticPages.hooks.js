import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentStaticPage } from '../redux/mainReducer';
import { usePageUrl } from './url.hooks';


export const useStaticPage = () => {
    const dispatch = useDispatch();
    const staticPages = useSelector(state => state.app.staticPages);

    const currentStaticPage = usePageUrl(staticPages, 'static'); 
    useEffect(() => dispatch(setCurrentStaticPage(currentStaticPage)));
}