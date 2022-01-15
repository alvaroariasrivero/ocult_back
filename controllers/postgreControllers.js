const pool = require('../utils/postgreSQL');


const getUsers = async (req,res) => {
    const response = await pool.query('SELECT * FROM users');
    res.status(200).json(response.rows)
}

module.exports = {
    getUsers
}