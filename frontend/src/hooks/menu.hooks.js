import { useEffect } from "react";


export const useMenuVisibility = (isMenuVisible) => {
    useEffect(() => {
        if (isMenuVisible) {
            document.body.classList.add('menu-is-open');
        } else {
            document.body.classList.remove('menu-is-open');
        }
    }, [isMenuVisible]);
}