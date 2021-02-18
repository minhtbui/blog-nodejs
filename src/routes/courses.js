const express = require('express');
const router = express.Router();

const coursesController = require('../app/controllers/CoursesController');

router.post('/store', coursesController.store);
router.get('/create', coursesController.create);
router.get('/:title', coursesController.detail);
router.get('/', coursesController.index);

module.exports = router;
