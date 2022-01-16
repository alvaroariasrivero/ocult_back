const express = require('express');
const router =express.Router();
const questionsApi = require('../controllers/questionsApi');
const userApi = require('../controllers/userApi');
const userControllers = require('../controllers/userControllers')


router.get('/', (req, res) => {
  res.send("Localhost working!")
});

//Routes 
  router.get('/api/questions', questionsApi.getAllQuestions);
  router.post('/api/score', userApi.userScore);
  
  //Routes Postgre
  router.get('/api/users', userControllers.getUsers);
  router.post('/api/signup', userControllers.createUser);
  router.post('/api/login', userControllers.userLogin);

  router.get('/api/profile', userControllers.getActualUser);
  
  module.exports = router;
  