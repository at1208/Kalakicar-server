const { check } = require('express-validator');

module.exports.contestValidator = [
      check('contestTitle')
      .not()
      .isEmpty()
      .withMessage('Please enter performer name')
]
