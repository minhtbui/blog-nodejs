const News_Post = require('../models/News_Post');
class NewsController {
    // GET /news
    index(req, res) {
        News_Post.find(function (error, news_posts) {
            if (!error) {
                res.json(news_posts);
                return;
            }
            res.status(400).json({ error: 'Connect Failed!!!' });
        });
    }

    // GET /news/:slug
    detail(req, res) {
        res.send('news details');
    }
}

module.exports = new NewsController();
