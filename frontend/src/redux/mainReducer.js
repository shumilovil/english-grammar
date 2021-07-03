import { userAPI } from '../api/api';

export const TOGGLE_MENU_VISIBILITY = 'TOGGLE_MENU_VISIBILITY';
export const HIDE_MENU = 'HIDE_MENU';
export const SET_CURRENT_CATEGORY = 'SET_CURRENT_CATEGORY';
export const SET_CURRENT_SUBCATEGORY = 'SET_CURRENT_SUBCATEGORY';
export const SET_CURRENT_STATIC_PAGE = 'SET_CURRENT_STATIC_PAGE';
const SET_CATEGORIES = 'SET_CATEGORIES';
const SET_SUBCATEGORIES = 'SET_SUBCATEGORIES';
const SET_STATIC_PAGES = 'SET_STATIC_PAGES';
const TOGGLE_APP_LOADING = 'TOGGLE_APP_LOADING';

export const initialState = {
    isLoading: true,
    isMenuVisible: false,
    categories: [],
    subcategories: [],
    staticPages: [],
    currentCategory: null,
    currentSubcategory: null,
    currentStaticPage: null
};

export const mainReducer = (state = initialState, action) => {

    switch (action.type) {

        case TOGGLE_APP_LOADING:
            return {
                ...state,
                isLoading: action.isLoading
            };

        case SET_CATEGORIES:
            return {
                ...state,
                categories: action.categories
            };

        case SET_SUBCATEGORIES:
            return {
                ...state,
                subcategories: action.subcategories
            };

        case SET_STATIC_PAGES:
            return {
                ...state,
                staticPages: action.staticPages
            };

        case TOGGLE_MENU_VISIBILITY:
            return {
                ...state,
                isMenuVisible: !state.isMenuVisible,
            };

        case HIDE_MENU:
            return {
                ...state,
                isMenuVisible: false
            };

        case SET_CURRENT_CATEGORY:
            return {
                ...state,
                currentCategory: action.category,
                currentStaticPage: null
            };

        case SET_CURRENT_SUBCATEGORY:
            return {
                ...state,
                currentSubcategory: action.subcategory
            };

        case SET_CURRENT_STATIC_PAGE:
            return {
                ...state,
                currentStaticPage: action.staticPage,
                currentCategory: null,
                currentSubcategory: null
            };

        default:
            return state;
    };

};

const toggleAppLoading = (isLoading) => ({ type: TOGGLE_APP_LOADING, isLoading });
const setCategories = (categories) => ({ type: SET_CATEGORIES, categories });
const setSubcategories = (subcategories) => ({ type: SET_SUBCATEGORIES, subcategories });
const setStaticPages = (staticPages) => ({ type: SET_STATIC_PAGES, staticPages });
export const getAllPages = () => async (dispatch) => {
    dispatch(toggleAppLoading(true));
    const pages = await userAPI.getAllPages();
    dispatch(setCategories(pages.categories));
    dispatch(setSubcategories(pages.subcategories));
    dispatch(setStaticPages(pages.staticPages));
    dispatch(toggleAppLoading(false));
};

export const toggleMenuVisibility = () => ({ type: TOGGLE_MENU_VISIBILITY });
export const hideMenu = () => ({ type: HIDE_MENU });
export const setCurrentCategory = (category) => ({ type: SET_CURRENT_CATEGORY, category });
export const setCurrentSubcategory = (subcategory) => ({ type: SET_CURRENT_SUBCATEGORY, subcategory });
export const setCurrentStaticPage = (staticPage) => ({ type: SET_CURRENT_STATIC_PAGE, staticPage });



