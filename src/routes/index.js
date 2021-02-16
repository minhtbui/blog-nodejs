const newsRouter = require('./news');
const siteRouter = require('./sites');

const route = (app) => {
    app.use('/news', newsRouter);
    app.use('/', siteRouter);
};

module.exports = route;
