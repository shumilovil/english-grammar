import React, { useEffect } from 'react';
import { Collapse } from 'antd';
import './FileList.scss';
import { DownloadIcon } from '../Icons/ButtonIcons/DownloadIcon';
import { useDispatch, useSelector } from 'react-redux';
import { getFiles } from '../../redux/filesReducer';
import { Preloader } from '../Preloader/Preloader';
import { baseUrl } from '../../api/api';
import { processText } from './helpers';
const { Panel } = Collapse;

const filesUrl = `${baseUrl}/media/files`;

export const FileList = () => {

    const dispatch = useDispatch();

    const isLoading = useSelector(state => state.files.isLoading);
    const currentCategory = useSelector(state => state.app.currentCategory);
    const currentCategoryUrl = currentCategory && currentCategory.url;
    const currentCategoryTitle = currentCategory && currentCategory.title;
    const fileGroups = useSelector(state => state.files.files);
    console.log('fileGroups', fileGroups);

    useEffect(() => {
        if (currentCategoryUrl) dispatch(getFiles(currentCategoryUrl));
    }, [dispatch, currentCategoryUrl]);

    if (isLoading) return <Preloader />;

    return (
        <div className='files'>
            <h2>{currentCategoryTitle} - Файлы для скачивания</h2>
            <Collapse >
                {Object.keys(fileGroups).map(fileGroup => {
                    const groupName = processText(fileGroup);
                    return (
                        <Panel header={groupName} key={groupName}>
                            {fileGroups[fileGroup].map(file => {
                                const fileName = processText(file);
                                const fileUrl = `${filesUrl}${currentCategoryUrl}/${fileGroup}/${file}`;
                                return (
                                    <a
                                        download
                                        href={fileUrl}
                                        className='files__file-to-download'
                                        key={fileName} >
                                        <p>{fileName}</p>
                                        <DownloadIcon />
                                    </a>
                                );
                            })}
                        </Panel>
                    );
                })}
            </Collapse>
        </div>
    );
};