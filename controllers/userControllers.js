const pool = require('../utils/postgreSQL');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


//Funcion para traer todos los usuarios
const getUsers = async (req, res) => {
    let connection,response;
    try {
        connection = await pool.connect();
        response = await pool.query('SELECT * FROM users')
        console.log(response.rows)
    } catch (error) {
        console.log(error);

    }finally {
        connection.release();
    }
    return response
}

const getActualUser = async (req, res) => {
    let connection,response;
    try {
        connection = await pool.connect();
        response = await pool.query('SELECT * FROM users WHERE id = $1)', [1])
        console.log(response.rows)
    } catch (error) {
        console.log(error);

    }finally {
        connection.release();
    }
    return response
}

//Funcion para crear usuario-Registrar
const createUser = async (req,res) => {
    const {id_company, username, email, password, image} = req.body;
    const saltRounds = 10;
    const hashPassword = await bcrypt.hash(password, saltRounds);
    let connection,response;
    try {
        connection = await pool.connect();
        response = await pool.query(`INSERT INTO users(id_company, name, email, password, image) VALUES ($1, $2, $3, $4, $5 )`,
        [
            id_company, 
            username, 
            email, 
            hashPassword,
            image
        ]
        );
        console.log({username} ,"registrado correctamente")
    } catch (error) {
        console.log(error.detail);
    } finally {
        connection.release();
    }
     return response
}

const userLogin = async(req, res) => {
    let connection,response;
    try {
        const {email, password} = req.body;
        connection = await pool.connect();
        response = await pool.query('SELECT * FROM users WHERE email = $1', [email])
        console.log(response.rows)
        const match = await bcrypt.compare(password, response.rows.password);
        // if(!match) return res.status(400).json({msg: "Wrong Password"});
        // const userId = user[0].id;
        // const name = user[0].name;
        // const email = user[0].email;
        // const accessToken = jwt.sign({userId, name, email}, process.env.ACCESS_TOKEN_SECRET,{
        //     expiresIn: '15s'
        // });
        // const refreshToken = jwt.sign({userId, name, email}, process.env.REFRESH_TOKEN_SECRET,{
        //     expiresIn: '1d'
        // });
        // await Users.update({refresh_token: refreshToken},{
        //     where:{
        //         id: userId
        //     }
        // });
        // res.cookie('refreshToken', refreshToken,{
        //     httpOnly: true,
        //     maxAge: 24 * 60 * 60 * 1000
        // });
        // res.json({ accessToken });
    } catch (error) {
        console.log(error);
        res.status(404).json({msg:"Email not found"});
    } finally {
        connection.release();
    }
     return response
}

module.exports = {
    getUsers,
    createUser,
    getActualUser,
    userLogin
}