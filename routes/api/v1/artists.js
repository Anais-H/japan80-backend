var express = require('express');
const router = express.Router();
const { getArtistsCtrl, getArtistsCountCtrl, createArtistCtrl, deleteArtistByIdCtrl, getArtistByIdCtrl, updateArtistByIdCtrl,
    getArtistTypesCtrl } = require('../../../controllers/v1/artist.controller');
const { ApiError } = require('../../../utils/ApiError');


router.get('/', async function(req, res, next) {
    await getArtistsCtrl(req, res, next)
    .catch(err => next(ApiError.badRequest(err)));
});

router.get('/count', async function(req, res, next) {
    await getArtistsCountCtrl(req, res, next);
});

router.post('/', async function(req, res, next) {
    await createArtistCtrl(req, res, next);
});


router.get('/types', async function(req, res, next) {
    await getArtistTypesCtrl(req, res, next)
    .catch(err => next(ApiError.badRequest(err)));
});



router.get('/:artistId', async function(req, res, next) {
    await getArtistByIdCtrl(req, res, next);
});

router.put('/:artistId', async function(req, res, next) {
    await updateArtistByIdCtrl(req, res, next);
});

router.delete('/:artistId', async function(req, res, next) {
    await deleteArtistByIdCtrl(req, res, next);
});


module.exports = {
    router
};