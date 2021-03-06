const Course = require('../models/Course');
const { dataListToObj, dataToObj } = require('../../util/mongoose');

class UserController {
    // GET /user/stored/courses
    storedCourses(req, res, next) {
        Promise.all([
            Course.find({}).sortValidate(req),
            Course.countDocumentsDeleted(),
        ])
            .then(([courses, deletedCourses]) =>
                res.render('user/stored-courses', {
                    courses: dataListToObj(courses),
                    deletedCourses,
                }),
            )
            .catch(next);
    }

    // GET /user/removed/courses
    removedCourses(req, res, next) {
        Course.findDeleted()
            .then((courses) =>
                res.render('user/removed-courses', {
                    courses: dataListToObj(courses),
                }),
            )
            .catch(next);
    }
}

module.exports = new UserController();
