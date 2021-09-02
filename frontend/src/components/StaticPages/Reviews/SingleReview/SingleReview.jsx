import { React } from 'react';
import './SingleReview.scss';
import { Divider, Rate } from 'antd';

export const SingleReview = ({ review }) => {
    const { username, advantages, disadvantages, rate, formattedDate } = review;

    return (
        <div className='review'>
            <div className='review__username'>
                <h3>{username}:</h3>
                <Rate disabled defaultValue={rate} />
            </div>
            <h3>Достоинства:</h3>
            <div className='review__text'>{advantages}</div>
            <h3>Недостатки:</h3>
            <div className='review__text'>{disadvantages}</div>            
            <div className='review__date'>{formattedDate}</div>
            <Divider />
        </div>
    );

};