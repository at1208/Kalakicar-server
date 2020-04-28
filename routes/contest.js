const express = require('express');
const router = express.Router();

//import controllers
const { createContest } = require('../controllers/contest');

//import validators
const { contestValidator } = require('../validators/contest');
const { runValidation } =  require('../validators/index');

router.post('/create-contest',contestValidator,runValidation, createContest);
// // router.get('/all-contest',getAllContest);
// // router.patch('/update-contestll/:id',updateContest);
// // router.delete('/delete-contest/:id',deleteContest);
//
module.exports = router;
