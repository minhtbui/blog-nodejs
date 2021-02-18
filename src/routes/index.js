const coursesRouter = require('./courses');
const newsRouter = require('./news');
const siteRouter = require('./sites');

const route = (app) => {
    app.use('/courses', coursesRouter);
    app.use('/news', newsRouter);
    app.use('/', siteRouter);
};

module.exports = route;
