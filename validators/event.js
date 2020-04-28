const { check } =  require('express-validator')

module.exports.createEventValidator = [
       check('eventTitle')
       .not()
       .isEmpty()
       .withMessage('Event title is required'),

       check('eventImageUrl')
       .not()
       .isEmpty()
       .withMessage('Event image url is required'),

       check('eventVenue')
       .not()
       .isEmpty()
       .withMessage('Event Venue is required'),

       check('eventDescription')
       .not()
       .isEmpty()
       .withMessage('Event description is required'),

       check('eventPrice')
       .not()
       .isEmpty()
       .withMessage('Event price is required'),

       check('eventDate')
       .not()
       .isEmpty()
       .withMessage('Event Date is required'),
]
