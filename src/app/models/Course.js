const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');

const Course = new Schema(
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

// Query helpers
Course.query.sortValidate = function (req) {
    if (req.query.hasOwnProperty('_sort')) {
        const isValidate = ['desc', 'asc'].includes(req.query.type);

        return this.sort({
            [req.query.field]: isValidate ? req.query.type : 'desc',
        });
    }
    return this;
};

// Add plugins
mongoose.plugin(slug);
Course.plugin(mongooseDelete, {
    overrideMethods: 'all',
    deletedAt: true,
});

module.exports = mongoose.model('Courses', Course);
