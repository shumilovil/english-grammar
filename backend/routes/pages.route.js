const express = require('express');
const pages = express.Router();
const Category = require('../models/Category');
const Subcategory = require('../models/Subcategory');
const StaticPage = require('../models/StaticPage');

pages.get('/pages', async (req, res) => {
    try {
        const categories = await Category.find();
        const subcategories = await Subcategory.find();
        const staticPages = await StaticPage.find();
        res.json({ categories, subcategories, staticPages });
    } catch (error) {
        res.status(500).json({ message: 'Something is wrong, try again' });
    }
});

module.exports = pages;