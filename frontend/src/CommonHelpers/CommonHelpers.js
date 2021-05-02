export const getCategoryUrls = (categories) => {
    let urls = '';
    categories.forEach(category => {
        if (!urls.length) {
            urls = category.url;
        } else {
            urls = urls + '|' + category.url;
        }        
    });
    return urls;
};