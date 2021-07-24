const express = require('express');
const sitesController = require('../app/controllers/SitesController');

const router = express.Router();

//Router

router.get('/search', sitesController.search);
router.get('/', sitesController.home);



module.exports = router;