import React from 'react';
import { Menu } from 'antd';
// import {
//     MailOutlined,
//     CalendarOutlined,
//     AppstoreOutlined,
//     SettingOutlined,
//     LinkOutlined,
// } from '@ant-design/icons';

import './Menu.scss';
import { useDispatch, useSelector } from 'react-redux';
import { toggleMenuVisibility } from '../../redux/mainReducer';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const { SubMenu } = Menu;

export const AntMenu = ({ categories, subcategories }) => {
    // const [mode, setMode] = React.useState('inline');
    // const [theme, setTheme] = React.useState('light');

    // const changeMode = value => {
    //     setMode(value ? 'vertical' : 'inline');
    // };

    // const changeTheme = value => {
    //     setTheme(value ? 'dark' : 'light');
    // };
    const dispatch = useDispatch();
    const isMenuVisible = useSelector((state) => state.app.isMenuVisible);

    const toggleMenu = () => {
        dispatch(toggleMenuVisibility());
    };

    const handleOverlay = ({ target }) => {
        if (target.className === 'overlay') toggleMenu();
    };




    useEffect(() => {
        if (isMenuVisible) {
            document.body.classList.add('menu-is-open');
        } else {
            document.body.classList.remove('menu-is-open');
        }
    }, [isMenuVisible]);


    // if (!isMenuVisible) return null;

    // className={isMenuVisible ? 'overlay' : 'overlay-hidden'}
    const resetSelectedItems = {
        selectedKeys: [],
        openKeys: []
    };

    if (isMenuVisible) {
        for (let key in resetSelectedItems) {
            delete resetSelectedItems[key];
        }
    }

    return (
        <div className={isMenuVisible ? 'overlay' : 'overlay-hidden'}
            onClick={handleOverlay}
        >
            <div className='menu'>
                <Menu
                    //style={{ width: 256 }}
                    // defaultSelectedKeys={['1']}
                    // defaultOpenKeys={['sub1']}
                    // selectedKeys={undefined}
                    // openKeys={false}

                    onClick={toggleMenu}
                    mode='inline'
                    theme='light'
                    {...resetSelectedItems}>

                    {categories.map(category => {

                        // Define category items
                        return (
                            <SubMenu key={category._id} title={category.title}>

                                {category.subcategoryIds.map(id => {

                                    // Define subcategory items
                                    const subcategory = subcategories.find(subcategory => subcategory._id === id);
                                    const subcategoryKey = `${category._id}_${subcategory._id}`;
                                    const subcategoryUrl = `${category.url}${subcategory.url}`;
                                    return (
                                        <Menu.Item key={subcategoryKey}>
                                            <Link to={subcategoryUrl}>{subcategory.title}</Link>
                                        </Menu.Item>
                                    );
                                })}

                                <Menu.Item key={`all_${category._id}`}>
                                    <Link to={category.url}>Весь раздел</Link>
                                </Menu.Item>

                            </SubMenu>
                        );
                    })}


                    {/* <Menu.Item key="1" icon={<MailOutlined />}>
                        Navigation One
                    </Menu.Item>
                    <Menu.Item key="2" icon={<CalendarOutlined />}>
                        Navigation Two
                    </Menu.Item>
                    <SubMenu key="sub1" icon={<AppstoreOutlined />} title="Navigation Two">
                        <Menu.Item key="3">Option 3</Menu.Item>
                        <Menu.Item key="4">Option 4</Menu.Item>
                        <SubMenu key="sub1-2" title="Submenu">
                            <Menu.Item key="5">Option 5</Menu.Item>
                            <Menu.Item key="6">Option 6</Menu.Item>
                        </SubMenu>
                    </SubMenu>
                    <SubMenu key="sub2" icon={<SettingOutlined />} title="Navigation Three">
                        <Menu.Item key="7">Option 7</Menu.Item>
                        <Menu.Item key="8">Option 8</Menu.Item>
                        <Menu.Item key="9">Option 9</Menu.Item>
                        <Menu.Item key="10">Option 10</Menu.Item>
                    </SubMenu>
                    <Menu.Item key="link" icon={<LinkOutlined />}>
                        <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
                            Ant Design
                        </a>
                    </Menu.Item>
                    <Menu.Item key="link" icon={<LinkOutlined />}>
                        <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
                            Ant Design
                        </a>
                    </Menu.Item> */}
                    <Menu.Divider />

                    <Menu.Item key='reviews' >
                        <Link to='/otzyvy'>Отзывы</Link>
                    </Menu.Item>

                    <Menu.Item key='contacts'>
                        <Link to='/contacts'>Контакты</Link>
                    </Menu.Item>

                </Menu>
            </div>
        </div>
    );
};