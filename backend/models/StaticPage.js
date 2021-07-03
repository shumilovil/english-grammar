const { Schema, model } = require('mongoose');

const schema = new Schema({
    name: { type: String, required: true, unique: true },
    title: { type: String, required: true, unique: true },
    url: { type: String, required: true, unique: true }    
});

module.exports = model('StaticPage', schema);