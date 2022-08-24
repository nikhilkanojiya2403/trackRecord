const express = require('express');
const router = express.Router();
const usersController = require('../controllers/userController');

router.post('/signup',usersController.signupUser);
router.post('/signin',usersController.signinUser);

module.exports = router;