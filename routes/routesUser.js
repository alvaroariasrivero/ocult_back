const express = require('express');
const router =express.Router();
const questionsApi = require('../controllers/questionsApi');
const userApi = require('../controllers/userApi');
const postgreControllers = require('../controllers/postgreControllers')


//Routes 
  router.get('/api/questions', questionsApi.getAllQuestions);
  router.post('/api/score', userApi.userScore);
  
  //Routes Postgre
  router.get('/api/users', postgreControllers.getUsers);
  router.post('/api/signUp', postgreControllers.createUser);
  // router.post('/api/login', postgreControllers.loginRouter);
  
  module.exports = router;
  