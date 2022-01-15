const express = require('express');
const router =express.Router();


//Routes 
app.get('/', (req, res) => {
    res.status(200).send('Plantilla back')
  })
  
  app.get('/api/questions', questionsApi.getAllQuestions);
  app.post('/api/login', userApi.loginRouter);
  app.post('/api/signUp', userApi.createUser);
  app.post('/api/score', userApi.userScore);
  
  //Routes Postgre
  router.get('/api/users', getUsers);
  
  module.exports = router;
  