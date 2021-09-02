export const sortReviews = (reviews) => reviews
    .filter(review => review.moderated)
    .sort((a, b) => b.date - a.date);