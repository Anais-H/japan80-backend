
var express = require('express');
const router = express.Router();
const { getArtists } = require('../../services/artist.service');

// define the home page route
router.get('/', function(req, res) {
    const artists = getArtists();
    res.send({
        data: artists
    });
});

module.exports = {
    router
};