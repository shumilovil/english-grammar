import React from 'react';
import { useSelector } from 'react-redux';
import { Collapse } from 'antd';
import './AbcStreetFilesSubcat.scss';
const { Panel } = Collapse;


export const AbcStreetFilesSubcat = () => {

    const currentCategory = useSelector(state => state.app.currentCategory);
    const currentSubcategory = useSelector(state => state.app.currentSubcategory);

    if (!currentCategory || !currentSubcategory) return null;

    return (
        <div className='abc-street-files-subcat'>
            <h2>Файлы для скачивания</h2>
            <div>{currentCategory.title}/{currentSubcategory.title}</div>
            <Collapse >
                <Panel header='Файл 1' key='1'>
                    <p>Скачать файл 1</p>
                    <p>Скачать файл 1</p>
                    <p>Скачать файл 1</p>
                </Panel>
                <Panel header='Файл 2' key='2'>
                    <p>Скачать файл 2</p>
                </Panel>
                <Panel header='Файл 3' key='3'>
                    <p>Скачать файл 3</p>
                </Panel>
            </Collapse>
        </div>
    );
};