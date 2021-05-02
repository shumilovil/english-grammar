const TOGGLE_MENU_VISIBILITY = 'TOGGLE_MENU_VISIBILITY';
const SET_CURRENT_CATEGORY = 'SET_CURRENT_CATEGORY';

const initialState = {
    menuVisible: false,
    categories: [
        {
            _id: 101,
            name: 'ABC Street',
            url: 'abc-street',
            subcategoryIds: [201, 202, 203]
        },
        {
            _id: 102,
            name: 'Grammar Smile',
            url: 'grammar-smile',
            subcategoryIds: [201, 202]
        }
    ],
    subcategories: [
        {
            _id: 201,
            name: 'Детям',
            url: 'for-kids',
        },
        {
            _id: 202,
            name: 'Учителям',
            url: 'for-teachers',
        },
        {
            _id: 203,
            name: 'Скачать',
            url: 'downloads',
        }
    ],
    currentCategory: null,
    currentSubCategory: null
};

export const mainReducer = (state = initialState, action) => {

    switch (action.type) {

        case TOGGLE_MENU_VISIBILITY:
            return {
                ...state,
                menuVisible: !state.menuVisible
            };

        case SET_CURRENT_CATEGORY:
            return {
                ...state,
                currentCategory: action.category
            };

        default:
            return state;
    };

};



export const toggleMenuVisibility = () => ({ type: TOGGLE_MENU_VISIBILITY });
export const setCurrentCategory = (category) => ({ type: SET_CURRENT_CATEGORY, category });