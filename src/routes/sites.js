const express = require('express');
const sitesController = require('../app/controllers/SitesController');

const router = express.Router();



router.use('/search', sitesController.search);
router.use('/', sitesController.home);



module.exports = router;