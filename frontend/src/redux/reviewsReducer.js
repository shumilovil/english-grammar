import { userAPI } from '../api/api';

const TOGGLE_REVIEWS_LOADING = 'TOGGLE_REVIEWS_LOADING';
const SET_REVIEWS = 'SET_REVIEWS';
const TOGGLE_SUCCESS_MESSAGE = 'TOGGLE_SUCCESS_MESSAGE';
const TOGGLE_ERROR_MESSAGE = 'TOGGLE_ERROR_MESSAGE';

const initialState = {
    isLoading: true,
    reviews: [],
    showSuccessMessage: false,
    showErrorMessage: false,
};

export const reviewsReducer = (state = initialState, action) => {

    switch (action.type) {

        case TOGGLE_REVIEWS_LOADING:
            return {
                ...state,
                isLoading: action.isLoading
            };

        case SET_REVIEWS:
            return {
                ...state,
                reviews: action.reviews
            };

        case TOGGLE_SUCCESS_MESSAGE:
            return {
                ...state,
                showSuccessMessage: action.showSuccessMessage
            };

        case TOGGLE_ERROR_MESSAGE:
            return {
                ...state,
                showErrorMessage: action.showErrorMessage
            };

        default:
            return state;

    }

};

const toggleReviewsLoading = (isLoading) => ({ type: TOGGLE_REVIEWS_LOADING, isLoading });
const setReviews = (reviews) => ({ type: SET_REVIEWS, reviews });
export const getReviews = () => async (dispatch) => {
    dispatch(toggleReviewsLoading(true));
    const reviews = await userAPI.getReviews();
    dispatch(setReviews(reviews));
    dispatch(toggleReviewsLoading(false));
};
export const toggleSuccessMessage = (showSuccessMessage) => ({ type: TOGGLE_SUCCESS_MESSAGE, showSuccessMessage });
export const toggleErrorMessage = (showErrorMessage) => ({ type: TOGGLE_ERROR_MESSAGE, showErrorMessage });
export const setReview = (data) => async (dispatch) => {
    const response = await userAPI.createReview(data);
    if (response && response.status === 201) {
        dispatch(toggleSuccessMessage(true));
    } else {
        dispatch(toggleErrorMessage(true));
    }
    // dispatch(getReviews());
};
