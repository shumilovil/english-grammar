const { Schema, model } = require('mongoose');

const schema = new Schema({
    date: { type: Number, required: true },
    formattedDate: { type: String, required: true },
    username: { type: String, required: true },
    advantages: { type: String, required: true },
    disadvantages: { type: String, required: true },
    rate: { type: Number, required: true },
    moderated: { type: Boolean, required: true }
});

module.exports = model('Review', schema);