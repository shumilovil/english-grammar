import React from 'react';
import { useSelector } from 'react-redux';
import { Collapse } from 'antd';
import './FileList.scss';
import { DownloadIcon } from '../Icons/ButtonIcons/DownloadIcon';
import { Link } from 'react-router-dom';
const { Panel } = Collapse;


export const FileList = () => {

    const currentCategory = useSelector(state => state.app.currentCategory);
    const currentCategoryTitle = currentCategory && currentCategory.title;

    return (
        <div className='files'>
            <h2>{currentCategoryTitle} - Файлы для скачивания</h2>
            <Collapse >
                <Panel header='Папка 1' key='1'>
                    <Link to='*' className='files__file-to-download'>
                        <p>Файл Чтение ударной гласной Uu</p>
                        <DownloadIcon />
                    </Link>
                    <Link to='*' className='files__file-to-download'>
                        <p>Файл Чтение ударной гласной Uu</p>
                        <DownloadIcon />
                    </Link>
                </Panel>
                <Panel header='Папка 2' key='2'>
                    <Link to='*' className='files__file-to-download'>
                        <p>Файл Чтение ударной гласной Uu</p>
                        <DownloadIcon />
                    </Link>
                </Panel>
                <Panel header='Папка 3' key='3'>
                    <Link to='*' className='files__file-to-download'>
                        <p>Файл Чтение ударной гласной Uu</p>
                        <DownloadIcon />
                    </Link>
                </Panel>
            </Collapse>
        </div>
    );
};