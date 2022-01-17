const express = require('express');
const router = express.Router();
const questionsApi = require('../controllers/questionsApi');
const userApi = require('../controllers/userApi');
const userControllers = require('../controllers/userControllers');
const verifySignUp = require('../middlewares/verifySignUp');


router.get('/', (req, res) => {
  res.send("Localhost working!")
});

//Routes 
router.get('/api/questions', questionsApi.getAllQuestions);
router.post('/api/score', userApi.userScore);

//Admin routes 
router.get('/api/users', userControllers.getUsers);

// Autentication Routes 
router.post('/api/signup', verifySignUp.checkDuplicateEmail, userControllers.createUser);
router.post('/api/login', userControllers.userLogin);


// User profile route 
router.get('/api/profile', userControllers.getActualUser);

module.exports = router;
  