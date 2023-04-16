const { pool } = require('../db/pool');
const { ApiError } = require('../utils/ApiError');

/**
 * Retourne les informations sur les artists compris entre offset et offset+limit
 * @param {number} limit Max number of results
 * @param {number} offset Number of results to be skipped
 * @returns Artists informations
 */
async function getArtists(limit, offset) {
    const queryRes = await pool.query(`select 
    artist.id, name, jp_name, birthday, active_since_year, active_until_year, 
    city.city || ', ' || prefecture.prefecture || ', ' || country.country as birthplace,
    short_description
    from artist
    left join address on address.id = birthplace_address_id
    left join city on address.city_id = city.id
    left join prefecture on address.prefecture_id = prefecture.id
    left join country on country.id = address.country_id
    order by created_at desc 
    limit $1 offset $2`, [limit, offset]);
    return queryRes.rows;
}

async function getArtistById(artistId) {
    const queryRes = await pool.query(`select 
    artist.id, name, jp_name, birthday, active_since_year, active_until_year, 
    city.city || ', ' || prefecture.prefecture || ', ' || country.country as birthplace,
    short_description
    from artist
    left join address on address.id = birthplace_address_id
    left join city on address.city_id = city.id
    left join prefecture on address.prefecture_id = prefecture.id
    left join country on country.id = address.country_id
    where id = $1`, [artistId]);
    return queryRes.rows;
}

async function createArtist(artist) {
    const queryRes = await pool.query(`INSERT INTO artist (name, jp_name, birthday, birthplace_address_id, active_since_year, active_until_year, artist_type_id, short_description)
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
    RETURNING id`, [artist.name, artist.jp_name, artist.bithday, artist.birthplace_address_id, artist.active_since_year, artist.active_until_year,
        artist.artist_type_id, artist.short_description]);

    return queryRes.rows[0].id;
}

async function updateArtistById(artist) {
    await pool.query(`UPDATE artist SET name = $2, jp_name = $3, birthday = $4, birthplace_address_id = $5, active_since_year = $6, active_until_year = $7, artist_type_id = $8,
    short_description = $9 WHERE id = $1`, [artist.id, artist.name, artist.jp_name, artist.bithday, artist.birthplace_address_id, artist.active_since_year, artist.active_until_year,
        artist.artist_type_id, artist.short_description]);

    return artist.id;
}

async function deleteArtistById(artistId) {
    await pool.query(`DELETE FROM artist where id = $1 RETURNING id`, [artistId]);
}

/**
 * Returns the total number of rows in artist table.
 * @returns The total number of rows in artist table
 */
async function getArtistsCount() {
    const queryRes = await pool.query("select count(*) count from artist");
    return queryRes.rows[0];
}

module.exports = {
    getArtists,
    getArtistById,
    getArtistsCount,
    createArtist,
    updateArtistById,
    deleteArtistById
}