import * as axios from 'axios';

const baseUrl = 'http://localhost:5000/';

export const getAchievementsImgs = async () => {
    const achievements = await axios.get(baseUrl + 'achievements')
        .then(res => res.data.achievements);
    return achievements;
};