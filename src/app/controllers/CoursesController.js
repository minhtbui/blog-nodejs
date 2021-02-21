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

    // GET /courses/:slug
    detail(req, res, next) {
        Course.findOne({ slug: req.params.slug })
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

    // GET /courses/:id/edit
    edit(req, res, next) {
        Course.findById(req.params.id)
            .then((course) =>
                res.render('courses/edit', {
                    course: dataToObj(course),
                }),
            )
            .catch(next);
    }

    // POST /courses/store
    store(req, res, next) {
        const inputData = req.body;
        inputData.img = `https://i3.ytimg.com/vi/${inputData.videoId}/hqdefault.jpg`;
        const course = new Course(inputData);
        course.save().then(res.redirect('/courses')).catch(next);
    }

    // PUT /courses/:id
    update(req, res, next) {
        Course.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect('/user/stored/courses'))
            .catch(next);
    }

    // PATCH /courses/:id/restore
    restore(req, res, next) {
        Course.restore({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }

    // DELETE /courses/:id
    delete(req, res, next) {
        Course.delete({ _id: req.params.id }, req.body)
            .then(() => res.redirect('back'))
            .catch(next);
    }

    // DELETE /courses/:id/force
    deleteForce(req, res, next) {
        Course.deleteOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect('back'))
            .catch(next);
    }

    // POST /courses/handle-actions-form
    handleActionsForm(req, res, next) {
        switch (req.body.action) {
            case 'remove':
                Course.delete({ _id: { $in: req.body.courseIds } })
                    .then(() => res.redirect('back'))
                    .catch(next);
                break;
            default:
                res.json({ message: 'Action is not working!' });
        }
    }
}

module.exports = new CoursesController();
