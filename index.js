require('dotenv').config();
const express = require('express');
const app = express();
const port = 5000;
const questionsApi = require('./controllers/questionsApi');
const userApi = require('./controllers/userApi');
const cors = require('cors');
const jwt = require('jsonwebtoken');

require('./utils/dbmongocon');


//Middlewares
app.use(cors());
app.use(express.json());
// para traernos datos de objetos de un formulario,permite procesarlo y crear el objeto.Extended, no acepta datos como imagen
app.use(express.urlencoded());



//Conexion server
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  });