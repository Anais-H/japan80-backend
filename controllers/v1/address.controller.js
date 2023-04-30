const { ApiError } = require("../../utils/ApiError");
const { getAddressesLike } = require('../../services/address.service');

const getAddressesCtrl = async (req, res, next) => {
    try {
        const addresses = await getAddressesLike(req.query.likeStr);

        res.send({
            data: addresses
        });
    } catch (err) {
        next(ApiError.badRequest("An error occured while getting the addresses", err));
        return;
    }
}

module.exports = {
    getAddressesCtrl,
}