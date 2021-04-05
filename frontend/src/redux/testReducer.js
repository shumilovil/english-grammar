const TOGGLE_WANT_EAT = 'TOGGLE_WANT_EAT';
const NEW_NAME = 'NEW_NAME';

const initialState = {
    name: 'Shum111',
    wantEat: false
};

export const eatReducer = (state = initialState, action) => {

    switch (action.type) {

        case TOGGLE_WANT_EAT:
            return {
                ...state,
                wantEat: !state.wantEat
            };

        case NEW_NAME:
            return {
                ...state,
                name: action.name
            };  

        default:
            return state;
    };

};



export const toggleWantEat = () => ({ type: TOGGLE_WANT_EAT });
export const setNewName = (payload) => ({ type: NEW_NAME, payload });