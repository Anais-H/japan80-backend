
var express = require('express');
const router = express.Router();
const { getArtists, getArtistsCount } = require('../../services/artist.service');


router.get('/', async function(req, res) {
    const artists = await getArtists(req.query.limit, req.query.offset);

    res.send({
        data: artists
    });
});

router.get('/count', async function(req, res) {
    const artists = await getArtistsCount();

    res.send({
        data: artists
    });
});

router.get('/:artistId', async function(req, res) {
    //if (isNumber(req.params.artistId)) 
    const artist = await getArtistById(artistIdParam);

    res.send({
        data: artist
    });
});


module.exports = {
    router
};