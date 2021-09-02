/* eslint-disable no-inner-declarations */
const express = require('express');
const sendEmailNotification = require('../helpers/sendEmailNotification');
const reviews = express.Router();
const Review = require('../models/Review');

reviews.post('/new-review', async (req, res) => {
    try {
        const data = req.body;
        const review = new Review({ ...data });
        await review.save();
        await sendEmailNotification(data)
            .then(() => res.status(201).json({ message: 'The review has been created' }))
            .catch(error => { throw error; });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Something is wrong, try again' });
    }
});

reviews.get('/reviews', async (req, res) => {
    try {
        const reviews = await Review.find();
        res.json({ reviews });
    } catch (error) {
        res.status(500).json({ message: 'Something is wrong, try again' });
    }
});

module.exports = reviews;