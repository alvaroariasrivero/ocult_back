require('dotenv').config();
const express = require('express');
const app = express();
const port = 5000;
const cors = require('cors');
const jwt = require('jsonwebtoken');
require('./utils/dbmongocon');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');


//Middlewares
app.use(cors());
app.use(express.json());
// para traernos datos de objetos de un formulario,permite procesarlo y crear el objeto.Extended, no acepta datos como imagen
app.use(bodyParser.json({ limit: "20mb", extended: true })) //we are going to be sendig some images that have to be limited in size
app.use(bodyParser.urlencoded({ limit: "20mb", extended: true }))
app.use(require('./routes/routesUser'));
app.use(cookieParser()); //Permite trabajar con cookies
app.use(cors());

//Routes
app.get('/', (req, res) => {
  res.status(200).send('Plantilla back')
})

//Conexion server
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  });