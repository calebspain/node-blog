const express = require('express');
const router = express.Router();
const blogController = require('../controllers/blogController');
const pagesController = require('../controllers/pagesController');
const projectsController = require('../controllers/projectsController');

router.get('/', pagesController.homePage);

router.get('/about', pagesController.about);

router.get('/projects', projectsController.index);

router.get('/blog', blogController.index);

module.exports = router;