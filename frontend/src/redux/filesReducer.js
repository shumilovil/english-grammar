import { userAPI } from '../api/api';

const TOGGLE_FILES_LOADING = 'TOGGLE_FILES_LOADING';
const SET_FILES = 'SET_FILES';

const initialState = {
    isLoading: true,
    files: {}
};

export const filesReducer = (state = initialState, action) => {

    switch (action.type) {

        case TOGGLE_FILES_LOADING:
            return {
                ...state,
                isLoading: action.isLoading
            };

        case SET_FILES:
            return {
                ...state,
                files: action.files
            };

        default:
            return state;

    }

};

const toggleFilesLoading = (isLoading) => ({ type: TOGGLE_FILES_LOADING, isLoading });
const setFiles = (files) => ({ type: SET_FILES, files });
export const getFiles = (categoryUrl) => async (dispatch) => {
    dispatch(toggleFilesLoading(true));
    const files = await userAPI.getFiles(categoryUrl, 'files');
    dispatch(setFiles(files));
    dispatch(toggleFilesLoading(false));
};
