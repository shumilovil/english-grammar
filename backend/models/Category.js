const { Schema, model, Types } = require('mongoose');

const schema = new Schema({
    name: { type: String, required: true, unique: true },
    title: { type: String, required: true, unique: true },
    url: { type: String, required: true, unique: true },
    description: { type: String, required: false, unique: false },
    subcategoryIds: [{ type: Types.ObjectId, ref: 'Subcategory' }]
});

module.exports = model('Category', schema);