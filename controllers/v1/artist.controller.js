const { ApiError } = require("../../utils/ApiError");
const { getArtists, getArtistById, getArtistsCount, createArtist, updateArtistById, deleteArtistById, getArtistTypes } = require('../../services/artist.service');

const getArtistsCtrl = async (req, res, next) => {
    const artists = await getArtists(req.query.limit, req.query.offset)
    .catch(err => {
        next(ApiError.badRequest("An error occured while getting the artists", err));
        return;
    });

    res.send({
        data: artists
    });
}


const getArtistsCountCtrl = async (req, res, next) => {
    const artistsCount = await getArtistsCount()
    .catch(err => {
        next(ApiError.badRequest("An error occured while getting the artists", err));
        return;
    });

    res.send({
        data: artistsCount
    });
}


const getArtistByIdCtrl = async (req, res, next) => {
    const artist = await getArtistById(req.params.artistId)
    
    res.send({
        data: artist
    });
};

const createArtistCtrl = async (req, res, next) => {
    const newArtistId = await createArtist(req.body.data);

    res.status(201).send({
        created_artist_id: newArtistId
    })
};

const updateArtistByIdCtrl = async (req, res, next) => {
    try {
        await updateArtistById(req.body.data)
    } catch (error) {
        next(ApiError.internal(error));
        return;
    }
    
    res.status(200).send({
        updated_artist_id: req.body.data.id
    });
};

const deleteArtistByIdCtrl = async (req, res, next) => {
    try {
        await deleteArtistById(req.params.artistId)
    } catch (error) {
        next(ApiError.internal(error));
        return;
    }
        
    res.status(202).send({
        deleted_artist_id: req.params.artistId
    });
};


const getArtistTypesCtrl = async (req, res, next) => {
    const artistTypes = await getArtistTypes();

    res.send({
        data: artistTypes
    });
}

module.exports = {
    getArtistsCtrl,
    getArtistByIdCtrl,
    createArtistCtrl,
    updateArtistByIdCtrl,
    deleteArtistByIdCtrl,
    getArtistsCountCtrl,
    getArtistTypesCtrl
}