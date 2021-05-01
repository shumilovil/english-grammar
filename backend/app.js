const express = require('express');
const config = require('config');
const mongoose = require('mongoose');
const cors = require('cors');
const Category = require('./models/Category');
const Subcategory = require('./models/Subcategory');

const app = express();

const PORT = config.get('port') || 5000;


app.use(cors());
app.use(express.json({ extended: true }));

app.get('/shum', (req, res) => {
  res.send({ testRes: 'shumtestres111222' });
});

app.get('/categories', async (req, res) => {
  try {
      const categories = await Category.find();
      const subcategories = await Subcategory.find();
      res.json({categories, subcategories});
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
