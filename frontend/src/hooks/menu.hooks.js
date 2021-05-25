import { useEffect } from "react";

export const useMenuVisibility = (isMenuVisible) => {
    useEffect(() => {
        if (isMenuVisible) {
            document.body.classList.add('menu-is-open');
        } else {
            document.body.classList.remove('menu-is-open');
        }
    }, [isMenuVisible]);
};

export const useMenuSelectedItems = (
    currentCategory,
    currentSubCategory,
    currentStaticPage,
    setOpenKeys,
    setSelectedKeys
) => {
    useEffect(() => {
        if (currentCategory) {
            setOpenKeys([`${currentCategory._id}`]);
        } else {
            setOpenKeys([]);
        }

        if (currentCategory && currentSubCategory) {
            setSelectedKeys([`${currentCategory._id}${currentSubCategory._id}`]);
        } else if (currentStaticPage) {
            setSelectedKeys([currentStaticPage.name]);
        } else {
            setSelectedKeys([]);
        }
    }, [currentCategory, currentSubCategory, currentStaticPage, setOpenKeys, setSelectedKeys]);

};