require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const jwt = require('jsonwebtoken');

require('./utils/dbmongocon');

//Middlewares
app.use(cors());
app.use(express.json());

// Port 
const port = 5000;

// para traernos datos de objetos de un formulario,permite procesarlo y crear el objeto.Extended, no acepta datos como imagen
app.use(bodyParser.json({ limit: "20mb", extended: true })) //we are going to be sendig some images that have to be limited in size
app.use(bodyParser.urlencoded({ limit: "20mb", extended: true }))

// Routes 
app.use(require('./routes/routesUser'));


//Conexion server
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  });