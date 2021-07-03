import * as axios from 'axios';

export const baseUrl = 'http://localhost:5000/';

export const userAPI = {

    async getAchievements() {
        const achievements = await axios.get(baseUrl + 'achievements')
            .then(res => res.data.achievements);
        return achievements;
    },

    async getAllPages() {
        const pages = await axios(baseUrl + 'allpages').then(res => res.data);
        return pages;
    }

};
