const { pool } = require('../db/pool');

async function getAddressesLike(likeStr) {
    const queryRes = await pool.query(`select
    address.id address_id, city, prefecture, country
    from address
    left join city on city.id = city_id
    left join prefecture on prefecture.id = prefecture_id
    left join country on country.id = country_id
    where LOWER(city) like LOWER($1)
    OR LOWER(prefecture) like LOWER($1)`, ['%' + likeStr + '%']);
    
    return queryRes.rows;
}


module.exports = {
    getAddressesLike,
}