const News_Post = require('../models/News_Post');
const { dataListToObj } = require('../../util/mongoose');

class NewsController {
    // GET /news
    index(req, res, next) {
        // promise
        News_Post.find({})
            .then((news_posts) =>
                res.render('news', {
                    news_posts: dataListToObj(news_posts),
                }),
            )
            .catch(next);

        // callback function
        // News_Post.find(function (error, news_posts) {
        //     if (!error) {
        //         res.json(news_posts);
        //         return;
        //     }
        //     res.status(400).json({ error: 'Connect Failed!!!' });
        // });
    }

    // GET /news/:slug
    detail(req, res) {
        res.send('news details');
    }
}

module.exports = new NewsController();
