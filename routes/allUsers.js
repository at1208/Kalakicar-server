const express = require('express');
const router = express.Router();

//import controllers
const { allUsers } = require('../controllers/allUsers');

router.get('/all-users', allUsers);

module.exports = router;
