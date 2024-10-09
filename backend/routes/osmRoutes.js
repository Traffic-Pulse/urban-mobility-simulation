const express = require('express');
const { downloadOSM } = require('../controllers/osmController');

const router = express.Router();

// Route for downloading OSM data
router.get('/download', downloadOSM);

module.exports = router;
