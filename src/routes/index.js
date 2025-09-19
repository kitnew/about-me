const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homeController');

// Home/Landing page
router.get('/', homeController.getHome);

// Future routes for portfolio sections
router.get('/education', homeController.getSection('education'));
router.get('/experience', homeController.getSection('experience'));
router.get('/portfolio', homeController.getSection('portfolio'));
router.get('/about', homeController.getSection('about'));
router.get('/skills', homeController.getSection('skills'));
router.get('/extracurricular', homeController.getSection('extracurricular'));

module.exports = router;