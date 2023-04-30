var express = require('express');
const router = express.Router();
const { router: artistRouter } = require('./artists.js');
const { router: addressRouter } = require('./addresses.js');

// define the home page route
router.use('/artists', artistRouter);
router.use('/addresses', addressRouter);

module.exports = {
    router
};