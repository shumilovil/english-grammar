import React from 'react';
import { Breadcrumb } from 'antd';

export const AntBreadCrumbs = () => {
    return (
        <Breadcrumb>
            <Breadcrumb.Item>
                <a href=''>Home</a>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
                <a href=''>Application Center</a>
            </Breadcrumb.Item>            
            <Breadcrumb.Item>An Application</Breadcrumb.Item>
        </Breadcrumb>
    )
}