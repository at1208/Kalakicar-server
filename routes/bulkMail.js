const express = require('express')
const router = express.Router();

//import controllers
const { sendBulkMail } = require('../controllers/bulkMail');

//import validators
const { sendBulkMailValidator } = require('../validators/bulkMail');
const { runValidation } = require('../validators/index');

router.post('/bulk-mail',sendBulkMailValidator,runValidation, sendBulkMail);

module.exports = router;
