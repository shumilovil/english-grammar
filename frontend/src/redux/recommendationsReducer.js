import { userAPI } from '../api/api';

const TOGGLE_RECOMMENDATIONS_LOADING = 'TOGGLE_RECOMMENDATIONS_LOADING';
const SET_RECOMMENDATIONS = 'SET_RECOMMENDATIONS';

const initialState = {
    isLoading: true,
    recommendations: {}
};

export const recommendationsReducer = (state = initialState, action) => {

    switch (action.type) {

        case TOGGLE_RECOMMENDATIONS_LOADING:
            return {
                ...state,
                isLoading: action.isLoading
            };

        case SET_RECOMMENDATIONS:
            return {
                ...state,
                recommendations: action.recommendations
            };

        default:
            return state;

    }

};

const toggleRecommendationsLoading = (isLoading) => ({ type: TOGGLE_RECOMMENDATIONS_LOADING, isLoading });
const setRecommendations = (recommendations) => ({ type: SET_RECOMMENDATIONS, recommendations });
export const getRecommendations = (categoryUrl) => async (dispatch) => {
    dispatch(toggleRecommendationsLoading(true));
    const recommendations = await userAPI.getFiles(categoryUrl, 'recommendations');
    dispatch(setRecommendations(recommendations));
    dispatch(toggleRecommendationsLoading(false));
};
