const { pool } = require('../db/pool');

/**
 * Retourne les informations sur les artists compris entre offset et offset+limit
 * @param {number} limit Max number of results
 * @param {number} offset Number of results to be skipped
 * @returns Artists informations
 */
async function getArtists(limit, offset, orderBy = 'created_at') {
    const queryRes = await pool.query("select * from artist order by $3 limit $1 offset $2", [limit, offset, orderBy]);
    return queryRes.rows;
}

async function getArtistById(artistId) {
    const queryRes = await pool.query("select * from artist where id = $1", [artistId]);
    return queryRes.rows;
}

/**
 * Returns the total number of rows in artist table.
 * @returns The total number of rows in artist table
 */
async function getArtistsCount() {
    const queryRes = await pool.query("select count(*) count from artist");
    console.log("queryRes.rows", queryRes.rows)
    return queryRes.rows[0];
}

module.exports = {
    getArtists,
    getArtistById,
    getArtistsCount,
}