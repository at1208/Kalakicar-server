const mongoose = require('mongoose');

const contestSchema = mongoose.Schema({
contestTitle: {
 type: String,
 required: true
},
contestStartAt: {
  type: Date,
  required: true
},
contestEndAt: {
  type: Date,
  required: true
},
participants: []

}, {timestamps: true})

module.exports = mongoose.model('Contest', contestSchema)
