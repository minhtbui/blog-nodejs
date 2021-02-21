const express = require('express');
const router = express.Router();

const coursesController = require('../app/controllers/CoursesController');

// POST method
router.post('/store', coursesController.store);
router.post('/handle-actions-form', coursesController.handleActionsForm);

// PUT method
router.put('/:id', coursesController.update);

// PATCH method
router.patch('/:id/restore', coursesController.restore);

// DELETE method
router.delete('/:id/force', coursesController.deleteForce);
router.delete('/:id', coursesController.delete);

// GET method
router.get('/create', coursesController.create);
router.get('/:id/edit', coursesController.edit);
router.get('/:slug', coursesController.detail);
router.get('/', coursesController.index);

module.exports = router;
