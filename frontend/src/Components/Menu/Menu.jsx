import React, { useState } from 'react';
import { Menu } from 'antd';
import './Menu.scss';
import { useDispatch, useSelector } from 'react-redux';
import { toggleMenuVisibility } from '../../redux/mainReducer';
import { Link } from 'react-router-dom';
import { useMenuSelectedItems, useMenuVisibility } from '../../hooks/menu.hooks';

const { SubMenu } = Menu;

export const AntMenu = ({ categories, subcategories }) => {

    const dispatch = useDispatch();

    const isMenuVisible = useSelector(state => state.app.isMenuVisible);
    const currentCategory = useSelector(state => state.app.currentCategory);
    const currentSubCategory = useSelector(state => state.app.currentSubcategory);
    const currentStaticPage = useSelector(state => state.app.currentStaticPage);

    const [openKeys, setOpenKeys] = useState([]);
    const [selectedKeys, setSelectedKeys] = useState([]);

    const submenuKeys = [];
    categories.forEach(category => {
        submenuKeys.push(`${category._id}`);
    });

    // Sets active menu items according to the current page change
    useMenuSelectedItems(
        currentCategory,
        currentSubCategory,
        currentStaticPage,
        setOpenKeys,
        setSelectedKeys
    );

    useMenuVisibility(isMenuVisible);

    const toggleMenu = () => {
        dispatch(toggleMenuVisibility());
    };

    const handleOverlay = ({ target }) => {
        if (target.className === 'overlay') toggleMenu();
    };

    // Sets active menu items according to the menu usage
    // Only one submenu item can be open at a time
    const onOpenChange = (keys) => {
        const latestOpenKey = keys.find(key => !openKeys.includes(key));
        setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
        setSelectedKeys([]);
    };

    return (
        <div className={isMenuVisible ? 'overlay' : 'overlay hidden'}
            onClick={handleOverlay}
            data-testid='menu-test'>

            <div className='menu'>
                <Menu
                    onClick={toggleMenu}
                    mode='inline'
                    theme='light'
                    openKeys={openKeys}
                    selectedKeys={selectedKeys}
                    onOpenChange={onOpenChange}>

                    {categories.map(category => {

                        // Define category items
                        return (
                            <SubMenu key={category._id} title={category.title}>

                                {category.subcategoryIds.map(id => {

                                    // Define subcategory items
                                    const subcategory = subcategories.find(subcategory => subcategory._id === id);                                    
                                    const subcategoryUrl = `${category.url}${subcategory.url}`;
                                    const subcategoryId = `${category._id}${subcategory._id}`;
                                    const subcategoryTitle = subcategory.title;
                                    return (
                                        <Menu.Item key={subcategoryId}>
                                            <Link to={subcategoryUrl}>{subcategoryTitle}</Link>
                                        </Menu.Item>
                                    );
                                })}

                                <Menu.Item key={`all_${category._id}`}>
                                    <Link to={category.url}>Весь раздел</Link>
                                </Menu.Item>

                            </SubMenu>
                        );
                    })}

                    <Menu.Divider />

                    <Menu.Item key='otzyvy' >
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