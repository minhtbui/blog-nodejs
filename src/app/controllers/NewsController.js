class NewsController {
   // GET /news
   index(req, res) {
      res.render('news');
   }

   // GET /news/:slug
   detail(req, res) {
      res.send('news details');
   }
}

module.exports = new NewsController();
