const TOGGLE_MENU_VISIBILITY = 'TOGGLE_MENU_VISIBILITY';

const initialState = {
    menuVisible: false 
};

export const appReducer = (state = initialState, action) => {

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