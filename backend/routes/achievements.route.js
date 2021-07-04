const fs = require('fs');
const express = require('express');
const achievements = express.Router();

achievements.get('/achievements', (req, res) => {
    try {
      const achievements = fs.readdirSync('./media/achievements');
      res.json({ achievements });
    } catch (error) {
      res.status(500).json({ message: 'Something is wrong, try again' });
    }
  });

  module.exports = achievements;