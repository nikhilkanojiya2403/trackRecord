const express = require('express');
const router = express.Router();


//middleware for the authentication using jwt to be added
router.use('/user',require('./user'));
router.use('/transaction',require('./transaction'));

module.exports = router;