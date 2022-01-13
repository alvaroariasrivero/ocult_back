require('dotenv').config();
const express = require('express');
const app = express();
const port = 5000;
const questionsApi = require('./controllers/questionsApi')
const cors = require('cors');

require('./utils/dbmongo');

app.use(cors());

app.get('/', (req, res) => {
  res.status(200).send('Plantilla back')
})

app.get('/api/questions', questionsApi.getAllQuestions);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  });