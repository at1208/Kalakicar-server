const { check } = require('express-validator');

module.exports.sendBulkMailValidator = [
   check('subject')
     .not()
     .isEmpty()
     .withMessage('Please fill subject'),

  check('html')
     .not()
     .isEmpty()
     .withMessage('Please write message')
]
