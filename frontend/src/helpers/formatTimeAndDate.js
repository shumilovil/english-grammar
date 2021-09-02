const convertDate = (dateToConvert) => {
    const date = new Date(dateToConvert);
    const year = date.getFullYear();
    const month = ('00' + (date.getMonth() + 1)).slice(-2);
    const day = ('00' + date.getDate()).slice(-2);
    return `${day}-${month}-${year}`;
};

const convertTime = (dateToConvert) => {
    const date = new Date(dateToConvert);
    const hours = ('00' + date.getHours()).slice(-2);
    const minutes = ('00' + date.getMinutes()).slice(-2);
    return `${hours}:${minutes}`;
};

export const formatTimeAndDate = (dateToFormat) => {    
    const formattedDate = `${convertDate(dateToFormat)}, ${convertTime(dateToFormat)}`;
    return formattedDate;
};