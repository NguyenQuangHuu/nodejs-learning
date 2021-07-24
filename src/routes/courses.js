const express = require('express');


const router = express.Router();

const coursesController = require('../app/controllers/CoursesController');

//Router courses/:slug
router.get('/:slug', coursesController.index);


module.exports = router;