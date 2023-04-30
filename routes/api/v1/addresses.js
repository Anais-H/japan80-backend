var express = require('express');
const router = express.Router();
const { getAddressesCtrl } = require('../../../controllers/v1/address.controller');
const { ApiError } = require('../../../utils/ApiError');


router.get('/', async function(req, res, next) {
    await getAddressesCtrl(req, res, next)
    .catch(err => next(ApiError.badRequest(err)));
});

module.exports = {
    router
};