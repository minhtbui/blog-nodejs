const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const News_Post = new Schema({
    title: { type: String, maxLength: 255 },
    author: { type: String, maxLength: 15 },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('News-Posts', News_Post);
