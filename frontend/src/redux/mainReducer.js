const TOGGLE_MENU_VISIBILITY = 'TOGGLE_MENU_VISIBILITY';

const initialState = {
    menuVisible: false,
    categories: [
        {
            name: 'abc-street',
            url: '/abc-street',
            subcategories: [
                {
                    name: 'for-kids',
                    url: '/for-kids',
                },
                {
                    name: 'for-teachers',
                    url: '/for-teachers',
                }
            ]
        },
        {
            name: 'grammar-smile',
            url: '/grammar-smile',
            subcategories: [
                {
                    name: 'for-kids',
                    url: '/for-kids',
                },
                {
                    name: 'for-teachers',
                    url: '/for-teachers',
                }
            ]
        }
    ],
    currentCategory: null 
};

export const mainReducer = (state = initialState, action) => {

    switch (action.type) {

        case TOGGLE_MENU_VISIBILITY:
            return {
                ...state,
                menuVisible: !state.menuVisible
            };        

        default:
            return state;
    };

};



export const toggleMenuVisibility = () => ({ type: TOGGLE_MENU_VISIBILITY });