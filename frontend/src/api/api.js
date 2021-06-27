import * as axios from 'axios';

export const baseUrl = 'http://localhost:5000/';

// export const getAchievements = async () => {
//     const achievements = await axios.get(baseUrl + 'achievements')
//         .then(res => res.data.achievements);
//     return achievements;
// };

export const userAPI = {
    async getAchievements() {
        const achievements = await axios.get(baseUrl + 'achievements')
            .then(res => res.data.achievements);
        return achievements;
    }
  };