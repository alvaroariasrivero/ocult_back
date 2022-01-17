const express = require('express');
const router = express.Router();
const questionsApi = require('../controllers/questionsApi');
const userApi = require('../controllers/userApi');
const userControllers = require('../controllers/userControllers');
const verifySignUp = require('../middlewares/verifySignUp');
const verifyUserToken = require('../middlewares/verifyUserToken');


router.get('/', (req, res) => {
  res.send("Localhost working!")
});

//Routes 
router.get('/api/questions', questionsApi.getAllQuestions);
router.post('/api/score', userApi.userScore);

//Admin routes 
router.get('/api/users', verifyUserToken.verifyToken,  verifyUserToken.isAdmin, userControllers.getUsers);

// Autentication Routes 
router.post('/api/signup', verifySignUp.checkDuplicateEmail, userControllers.createUser);
router.post('/api/login', userControllers.userLogin);


// User profile route 
router.get('/api/profile', verifyUserToken.verifyToken, verifyUserToken.isEmployee, userControllers.getActualUser);

module.exports = router;
  