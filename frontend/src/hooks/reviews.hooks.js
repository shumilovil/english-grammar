
import { toggleErrorMessage, toggleSuccessMessage } from './../redux/reviewsReducer';
import { message } from 'antd';
import { useEffect } from 'react';

const successMessage = 'Благодарим за отзыв! После модерации он появится на сайте';
const errorMessage = 'Что-то пошло не так... Попробуйте позднее';

export const useResultMessage = (showSuccessMessage, showErrorMessage, dispatch) => {
    useEffect(() => {
        if (showSuccessMessage) {
            message.info(successMessage, 7, () => dispatch(toggleSuccessMessage(false)));
        } else if (showErrorMessage) {
            message.error(errorMessage, 7, () => dispatch(toggleErrorMessage(false)));
        }
        return () => {
            dispatch(toggleSuccessMessage(false));
            dispatch(toggleErrorMessage(false));
        };
    }, [showSuccessMessage, showErrorMessage, dispatch]);
};