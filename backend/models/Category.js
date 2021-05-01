const { Schema, model, Types } = require('mongoose');

const schema = new Schema({
    name: { type: String, required: true, unique: true },
    url: { type: String, required: true, unique: true },
    subcategories: [{ type: Types.ObjectId, ref: 'Subcategory' }]
});

module.exports = model('Category', schema);