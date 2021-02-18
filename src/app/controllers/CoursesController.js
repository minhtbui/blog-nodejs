const Course = require('../models/Course');
const { dataListToObj, dataToObj } = require('../../util/mongoose');

class CoursesController {
    // GET /courses
    index(req, res, next) {
        // promise
        Course.find({})
            .then((courses) =>
                res.render('courses', {
                    courses: dataListToObj(courses),
                }),
            )
            .catch(next);
    }

    // GET /courses/:title
    detail(req, res, next) {
        Course.findOne({ title: req.params.title })
            .then((course) =>
                res.render('courses/course-detail', {
                    course: dataToObj(course),
                }),
            )
            .catch(next);
    }

    // GET /courses/create
    create(req, res) {
        res.render('courses/create');
    }

    // POST /courses/store
    store(req, res, next) {
        const inputData = req.body;
        inputData.img = `https://i3.ytimg.com/vi/${inputData.videoId}/hqdefault.jpg`;
        const course = new Course(inputData);
        course.save().then(res.redirect('/courses'));
    }
}

module.exports = new CoursesController();
