var express = require('express');
const router = express.Router();
const { router: artistRouter } = require('./artists.js');

// define the home page route
router.use('/artists', artistRouter);

module.exports = {
    router
};