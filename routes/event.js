const express = require('express');
const router = express.Router();

//import controllers
const { createEvent, getAllEvent, updateEvent, deleteEvent, eventById } = require('../controllers/event');

//import validators
const { createEventValidator } = require('../validators/event');
const { runValidation } = require('../validators/index');

router.post('/create-event', createEventValidator, runValidation, createEvent);
router.get('/all-event', getAllEvent);
router.patch('/update-event/:id', updateEvent);
router.delete('/delete-event/:id', deleteEvent);
router.get('/event/:id', eventById);

module.exports = router;
