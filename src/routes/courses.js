const express = require('express');
const router = express.Router();

const coursesController = require('../app/controllers/CoursesController');

// POST method
router.post('/store', coursesController.store);

// PUT method
router.put('/:id', coursesController.update);

// PATCH method
router.patch('/:id/restore', coursesController.restore);

// DELETE method
router.delete('/:id', coursesController.delete);
router.delete('/:id/force', coursesController.deleteForce);

// GET method
router.get('/create', coursesController.create);
router.get('/:id/edit', coursesController.edit);
router.get('/:slug', coursesController.detail);
router.get('/', coursesController.index);

module.exports = router;
