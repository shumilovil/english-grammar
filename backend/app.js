const express = require('express');
const config = require('config');
const mongoose = require('mongoose');
const cors = require('cors');
const Category = require('./models/Category');
const Subcategory = require('./models/Subcategory');
const StaticPage = require('./models/StaticPage');
const fs = require('fs');
const path = require('path');

const app = express();

const PORT = config.get('port') || 5000;


app.use(cors());
app.use(express.json({ extended: true }));
app.use('/media', express.static(path.join(__dirname, 'media')));

app.get('/shum', (req, res) => {
  res.send({ testRes: 'shumtestres111222' });
});

app.get('/allpages', async (req, res) => {
  try {
    const categories = await Category.find();
    const subcategories = await Subcategory.find();
    const staticPages = await StaticPage.find();
    res.json({ categories, subcategories, staticPages });
  } catch (error) {
    res.status(500).json({ message: 'Something is wrong, try again' });
  }
});

app.get('/achievements', (req, res) => {
  try {
    const achievements = fs.readdirSync('./media/achievements');
    res.json({ achievements });
  } catch (error) {
    res.status(500).json({ message: 'Something is wrong, try again' });
  }
});



const start = async () => {
  try {
    await mongoose.connect(config.get('mongoUri'), {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    });
    app.listen(PORT, () => console.log(`App has been started on port ${PORT}...`));
  } catch (error) {
    console.log('Server error', error.message);
    process.exit(1);
  }

};

start();
