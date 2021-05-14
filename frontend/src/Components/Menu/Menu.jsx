import React from 'react';
import { Menu } from 'antd';
import './Menu.scss';
import { useDispatch, useSelector } from 'react-redux';
import { toggleMenuVisibility } from '../../redux/mainReducer';
import { Link } from 'react-router-dom';
import { useMenuVisibility } from '../../hooks/menu.hooks';

const { SubMenu } = Menu;

export const AntMenu = ({ categories, subcategories }) => {

    const dispatch = useDispatch();

    const isMenuVisible = useSelector((state) => state.app.isMenuVisible);

    const toggleMenu = () => {
        dispatch(toggleMenuVisibility());
    };

    const handleOverlay = ({ target }) => {
        if (target.className === 'overlay') toggleMenu();
    };

    useMenuVisibility(isMenuVisible);

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
            onClick={handleOverlay}>

            <div className='menu'>
                <Menu
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