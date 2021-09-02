import * as axios from 'axios';
import { formatTimeAndDate } from '../helpers/formatTimeAndDate';

const apiUrl = '/api';

export const userAPI = {

    async getAchievements() {
        const achievements = await axios.get(apiUrl + '/achievements')
            .then(res => res.data.achievements);
        return achievements;
    },

    async getPages() {
        const pages = await axios.get(`${apiUrl}/pages`).then(res => res.data);
        return pages;
    },

    async getFiles(categoryUrl, type) {
        const files = await axios.get(`${apiUrl}${categoryUrl}/${type}`).then(res => res.data);
        return files;
    },

    async createReview(data) {
        const currentDate = Date.now();
        const formattedDate = formatTimeAndDate(currentDate);
        const response = await axios.post(`${apiUrl}/new-review`, {
            ...data,
            formattedDate,
            date: currentDate,
            moderated: false
        }).then(res => res).catch(() => null);
        return response;
    },

    async getReviews() {
        const reviews = await axios.get(`${apiUrl}/reviews`).then(res => res.data.reviews);
        return reviews;
    }

};
