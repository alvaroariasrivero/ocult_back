const pool = require('../utils/postgreSQL');


const getUsers = async (res,req) => {
    let connection,response;
    try {
        connection = await pool.connect();
        response = await pool.query('SELECT * FROM users')
        console.log(response.rows)
        // res.status(200).json(response.rows)
    } catch (error) {
        console.log(error);

    }finally {
        connection.release();
    }
    return response
}


const createUser = async (res,req) => {
    let connection,response;
    try {
        connection = await pool.connect();
        response = await pool.query(`INSERT INTO users(id_company, name, email,password,image,last_score,correct_answer,incorrect_answer) VALUES ($1, $2, $3, $4, $5, $6, $7, $8 )`,
        [
            "1", 
            'Maria', 
            'mmarcos@gmail.com',
            '1234',
            'https://www.kindpng.com/picc/m/780-7804962_cartoon-avatar-png-image-transparent-avatar-user-image.png',
            "5",
            ['Ámbito financiero', 'Ámbito empresarial'],
            ['Ámbito doméstico', 'Phishing']

          
        ]
        
        );
        console.log(response.rows)
        // res.status(200).json(response.rows)
    } catch (error) {
        console.log(error);

    } finally {
        connection.release();
    }
     return response
}


module.exports = {
    getUsers,
    createUser
}