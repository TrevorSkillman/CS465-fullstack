const express = require('express');
const router = express.Router();
const controller = require('../controllers/contact');

/* GET homepage */
router.get('/', controller.contact);

module.exports = router;