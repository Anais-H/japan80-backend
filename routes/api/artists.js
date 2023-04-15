
var express = require('express');
const router = express.Router();
const { getArtists, getArtistsCount, createArtist, deleteArtistById } = require('../../services/artist.service');


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

router.post('/', async function(req, res) {
    console.log("req", req.body)
    const queryRes = await createArtist(req.body.data);

    res.status(201).send({
        created_artist_id: queryRes.id
    })
});

router.delete('/:artistId', async function(req, res) {console.log("req.params.artistId", req.params.artistId)
    const queryRes = await deleteArtistById(req.params.artistId);
    
    res.status(200).send({
        deleted_artist_id: queryRes.id
    });
});


module.exports = {
    router
};