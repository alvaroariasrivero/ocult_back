const pool = require('../utils/postgreSQL');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


//Funcion para traer todos los usuarios
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

// //Funcion para crear usuario-Registrar
// const createUser = async (res,req) => {
//     try{
//         const {id_company, name, email, password, image} = req.body;
//         let errors = [];

//         if(!id_company || !name || !email || !password ) {
//             errors.push({msg : "Completa todos los campos"})
//         }

//         if(password.length <= 6) {
//             errors.push({msg : "La contraseña tiene que tener al menos 6 dígitos"});

//         }  else {
//             const result = await User.createUser(req.body);

//                 if (result === 1) {
//                     console.log("usuario creado")
//                 } else {
//                     console.log("error")
//                 }
//         }
//     } catch (error) {
//         console.log(error)
//     }    
// };


const createUser = async (res,req) => {
    // let userData = req.body;
    console.log(req.userData)
    const {id_company, name, email, password, image} = req.body;
    let connection,response;
    try {
        connection = await pool.connect();
        response = await pool.query(`INSERT INTO users(id_company, name, email,password,image) VALUES ($1, $2, $3, $4, $5 )`,
        [
            id_company, 
            name, 
            email, 
            password,
            image
        ]
        );
        res.status(200).json(response.rows)
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