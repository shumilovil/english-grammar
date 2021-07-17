import './FilesList.scss';
import React from 'react';
import { Collapse } from 'antd';
import { DownloadIcon } from './../Icons/ButtonIcons/DownloadIcon';
const { Panel } = Collapse;

const mediaUrl = '/media';

export const FilesList = ({ fileGroups, processText, pageType, currentCategoryUrl, isFirstActive }) => {

    const defaultActiveKey = isFirstActive ? Object.keys(fileGroups)[0] : null;

    return (
        <Collapse className='files' defaultActiveKey={[defaultActiveKey]}>
            {Object.keys(fileGroups).map(fileGroup => {
                const groupName = processText ? processText(fileGroup) : fileGroup;
                return (
                    <Panel header={groupName} key={fileGroup}>
                        {fileGroups[fileGroup].map(file => {
                            const fileName = processText ? processText(file) : file;
                            const fileUrl = `${mediaUrl}${currentCategoryUrl}/${pageType}/${fileGroup}/${file}`;
                            return (
                                <a
                                    download
                                    href={fileUrl}
                                    className='files__file-to-download'
                                    key={file} >
                                    <p>{fileName}</p>
                                    <DownloadIcon />
                                </a>
                            );
                        })}
                    </Panel>
                );
            })}
        </Collapse>
    );
};