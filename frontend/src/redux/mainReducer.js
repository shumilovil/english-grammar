const TOGGLE_MENU_VISIBILITY = 'TOGGLE_MENU_VISIBILITY';
const HIDE_MENU = 'HIDE_MENU';
const SET_CURRENT_CATEGORY = 'SET_CURRENT_CATEGORY';
const SET_CURRENT_SUBCATEGORY = 'SET_CURRENT_SUBCATEGORY';
const SET_CURRENT_STATIC_PAGE = 'SET_CURRENT_STATIC_PAGE';

const initialState = {
    isMenuVisible: false,
    categories: [
        {
            _id: 101,
            name: 'ABC Street',
            title: 'ABC Street',
            url: '/abc-street',
            description: 'Обучение младших школьников технике чтения на английском языке',
            subcategoryIds: [201, 202, 203]
        },
        {
            _id: 102,
            name: 'Grammar Smile',
            title: 'Grammar Smile',
            url: '/grammar-smile',
            description: 'Обучение младших школьников грамматике английского языка',
            subcategoryIds: [201, 202, 203]
        },
        {
            _id: 103,
            name: 'Questions',
            title: 'Составление вопросов',
            url: '/sostavlenie-voprosov',
            description: 'Построение всех видов вопросов с помощью опорных схем',
            subcategoryIds: []
        }
    ],
    subcategories: [
        {
            _id: 201,
            name: 'Detyam',
            title: 'Детям',
            url: '/detyam',
        },
        {
            _id: 202,
            name: 'Uchitelyam',
            title: 'Учителям',
            url: '/uchitelyam',
        },
        {
            _id: 203,
            name: 'Files',
            title: 'Файлы',
            url: '/files',
        }
    ],
    currentCategory: null,
    currentSubcategory: null,
    currentStaticPage: null
};

export const mainReducer = (state = initialState, action) => {

    switch (action.type) {

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



export const toggleMenuVisibility = () => ({ type: TOGGLE_MENU_VISIBILITY });
export const hideMenu = () => ({ type: HIDE_MENU });
export const setCurrentCategory = (category) => ({ type: SET_CURRENT_CATEGORY, category });
export const setCurrentSubCategory = (subcategory) => ({ type: SET_CURRENT_SUBCATEGORY, subcategory });
export const setCurrentStaticPage = (staticPage) => ({ type: SET_CURRENT_STATIC_PAGE, staticPage });