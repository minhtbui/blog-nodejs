const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-generator');

mongoose.plugin(slug);

const Courses = new Schema(
    {
        title: { type: String },
        author: { type: String },
        desc: { type: String },
        img: { type: String },
        videoId: { type: String },
        slug: { type: String, slug: 'title', unique: true },
    },
    {
        timestamps: true,
    },
);

module.exports = mongoose.model('Courses', Courses);
