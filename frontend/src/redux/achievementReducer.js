import { userAPI } from '../api/api';

const TOGGLE_ACHIEVEMENTS_LOADING = 'TOGGLE_ACHIEVEMENTS_LOADING';
const SET_ACHIEVEMENTS = 'SET_ACHIEVEMENTS';

const initialState = {
    isLoading: true,
    achievements: []
};

export const achievementReducer = (state = initialState, action) => {

    switch (action.type) {

        case TOGGLE_ACHIEVEMENTS_LOADING:
            return {
                ...state,
                isLoading: action.isLoading
            };

        case SET_ACHIEVEMENTS:
            return {
                ...state,
                achievements: action.achievements
            };

        default:
            return state;

    }

};

const toggleAchievementsLoading = (isLoading) => ({ type: TOGGLE_ACHIEVEMENTS_LOADING, isLoading });
export const setAchievements = (achievements) => ({ type: SET_ACHIEVEMENTS, achievements });
export const getAchievements = () => async (dispatch) => {
    dispatch(toggleAchievementsLoading(true));
    const achievements = await userAPI.getAchievements();
    dispatch(setAchievements(achievements));
    dispatch(toggleAchievementsLoading(false));
};