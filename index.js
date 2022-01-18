require('dotenv').config();
const express = require('express');
const app = express();
const port = 5000;
const questionsApi = require('./controllers/questionsApi');
const userApi = require('./controllers/userApi');
const cors = require('cors');
const jwt = require('jsonwebtoken');

require('./utils/dbmongocon');

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).send('Plantilla back')
})

app.get('/api/questions', questionsApi);
app.post('/api/login', userApi.loginRouter);
app.post('/api/signUp', userApi.createUser);
app.post('/api/score', userApi.userScore);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  });