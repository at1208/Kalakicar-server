const mongoose = require('mongoose');

const eventSchema = mongoose.Schema({
   eventTitle: {
     type: String,
     required: true
   },
   eventVenue: {
     type: String,
    required: true
  },
  eventPrice: {
    type: Number,
    required: true
  },
  eventImageUrl: {
    type: String
  },
  eventDescription:{
    type:String
  },
  eventDate: {
    type: Date,
    required: true
  }
}, {timestamps: true})

module.exports = mongoose.model('Event', eventSchema);
