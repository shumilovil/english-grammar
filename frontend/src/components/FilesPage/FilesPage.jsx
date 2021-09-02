import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFiles } from '../../redux/filesReducer';
import { Preloader } from '../Preloader/Preloader';
import { removeUnderscoreAndName } from './componentHelpers';
import { FilesList } from './../FilesList/FilesList';
import { useCategoryTitle, useCategoryUrl } from '../../hooks/category.hooks';

export const FilesPage = () => {

    const dispatch = useDispatch();

    const isLoading = useSelector(state => state.files.isLoading);
    const currentCategoryUrl = useCategoryUrl();
    const currentCategoryTitle = useCategoryTitle();
    const fileGroups = useSelector(state => state.files.files);

    useEffect(() => {
        if (currentCategoryUrl) dispatch(getFiles(currentCategoryUrl));
    }, [dispatch, currentCategoryUrl]);

    if (isLoading) return <Preloader />;

    return (
        <div>
            <h2>{currentCategoryTitle} - Файлы для скачивания</h2>
            <FilesList
                fileGroups={fileGroups}
                processText={removeUnderscoreAndName}
                pageType='files'
                currentCategoryUrl={currentCategoryUrl} />          
        </div>
    );
};