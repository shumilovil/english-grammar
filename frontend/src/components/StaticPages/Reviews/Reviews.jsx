import { React, useEffect, useMemo } from 'react';
import { useStaticPage } from '../../../hooks/staticPages.hooks';
import { Form, Input, Button, Rate, message } from 'antd';
import './Reviews.scss';
import { useDispatch, useSelector } from 'react-redux';
import { getReviews, toggleErrorMessage, toggleSuccessMessage } from '../../../redux/reviewsReducer';
import { setReview } from './../../../redux/reviewsReducer';
import { Preloader } from './../../Preloader/Preloader';
import { SingleReview } from './SingleReview/SingleReview';
import { sortReviews } from './componentHelpers';

const textAreaInputConfig = {
    rows: '5',
    showCount: true,
    maxLength: 5000,
};

const ReviewTextArea = ({ label, name, emptyMessage }) => {
    return (
        <Form.Item
            label={label}
            name={name}
            rules={[
                {
                    required: true,
                    message: emptyMessage,
                },
                {
                    max: 5000,
                    message: 'Максимальная длина 5000 символов'
                }
            ]}>
            <Input.TextArea {...textAreaInputConfig} />
        </Form.Item>
    );
};

const successMessage = 'Благодарим за отзыв! После модерации он появится на сайте';
const errorMessage = 'Что-то пошло не так... Попробуйте позднее';

const Reviews = () => {

    const dispatch = useDispatch();

    const isLoading = useSelector(state => state.reviews.isLoading);
    const showSuccessMessage = useSelector(status => status.reviews.showSuccessMessage);
    const showErrorMessage = useSelector(status => status.reviews.showErrorMessage);
    const reviews = useSelector(state => state.reviews.reviews);
    const moderatedReviews = useMemo(() => sortReviews(reviews), [reviews]);

    const [form] = Form.useForm();

    const onFinish = (data) => {
        console.log('Success:', data);
        dispatch(setReview(data));
        form.resetFields();
    };

    useStaticPage();

    useEffect(() => dispatch(getReviews()), [dispatch]);

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

    if (isLoading) return <Preloader />;

    return (
        <>
            <h2>Отзывы</h2>

            {moderatedReviews.map(review => {
                return <SingleReview review={review} key={review._id} />;
            })}

            <h2>Написать отзыв</h2>

            <Form
                name='new-review'
                onFinish={onFinish}
                form={form}>

                <Form.Item
                    label='Имя'
                    name='username'
                    className='new-review__name'
                    rules={[
                        {
                            required: true,
                            message: 'Пожалуйста, укажите имя'
                        },
                        {
                            max: 10,
                            message: 'Максимальная длина 10 символов'
                        }
                    ]}>
                    <Input />
                </Form.Item>

                <ReviewTextArea
                    label='Достоинства'
                    name='advantages'
                    emptyMessage='Пожалуйста, укажите достоинства' />

                <ReviewTextArea
                    label='Недостатки'
                    name='disadvantages'
                    emptyMessage='Пожалуйста, укажите недостатки' />

                <Form.Item
                    label='Оценка'
                    name='rate'
                    rules={[
                        {
                            required: true,
                            message: 'Пожалуйста, укажите оценку'
                        }
                    ]}>
                    <Rate />
                </Form.Item>

                <Form.Item>
                    <Button type='primary' htmlType='submit'>
                        Отправить отзыв
                    </Button>
                </Form.Item>

            </Form>
        </>
    );
};

export default Reviews;