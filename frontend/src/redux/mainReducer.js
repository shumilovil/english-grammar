const TOGGLE_MENU_VISIBILITY = 'TOGGLE_MENU_VISIBILITY';
const SET_CURRENT_CATEGORY = 'SET_CURRENT_CATEGORY';
const SET_CURRENT_SUBCATEGORY = 'SET_CURRENT_SUBCATEGORY';
const SET_CURRENT_STATIC_PAGE = 'SET_CURRENT_STATIC_PAGE';

const initialState = {
    isMenuVisible: false,
    categories: [
        {
            _id: 101,
            name: 'ABC Street',
            url: '/abc-street',
            subcategoryIds: [201, 202, 203]
        },
        {
            _id: 102,
            name: 'Grammar Smile',
            url: '/grammar-smile',
            subcategoryIds: [201, 202]
        }
    ],
    subcategories: [
        {
            _id: 201,
            name: 'Детям',
            url: '/detyam',
        },
        {
            _id: 202,
            name: 'Учителям',
            url: '/uchitelyam',
        },
        {
            _id: 203,
            name: 'Скачать',
            url: '/downloads',
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
export const setCurrentCategory = (category) => ({ type: SET_CURRENT_CATEGORY, category });
export const setCurrentSubCategory = (subcategory) => ({ type: SET_CURRENT_SUBCATEGORY, subcategory });
export const setCurrentStaticPage = (staticPage) => ({ type: SET_CURRENT_STATIC_PAGE, staticPage });