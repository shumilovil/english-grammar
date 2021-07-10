import * as axios from 'axios';

export const baseUrl = 'http://localhost:5000';
const apiUrl = baseUrl + '/api';

export const userAPI = {

    async getAchievements() {
        const achievements = await axios.get(apiUrl + '/achievements')
            .then(res => res.data.achievements);
        return achievements;
    },

    async getPages() {
        const pages = await axios(`${apiUrl}/pages`).then(res => res.data);
        return pages;
    },

    async getFiles(categoryUrl, type) {
        const files = await axios.get(`${apiUrl}${categoryUrl}/${type}`).then(res => res.data);
        return files;
    }

};
