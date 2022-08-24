const express = require('express');
const router = express.Router();
const {verificationToken} = require('../middlewares/verification')
const transactionController = require('../controllers/transactionController');


router.get('/view',verificationToken,transactionController.view);
router.post('/credit',verificationToken,transactionController.credit);
router.post('/debit',verificationToken,transactionController.debit);


module.exports = router;