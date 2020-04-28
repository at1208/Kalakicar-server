const mongoose  = require('mongoose');

const videoSchema = mongoose.Schema({
   videoTitle: {
      type: String
     },

   videoUrl: {
     type: String
     },

   videoCategory: {
     type: String
     },

   videoThumbnailUrl: {
     type: String
     },

   videoDuration: {
      type: String
     },

   videoDescription: {
     type: String
   },

   videoDescription: {
     type: String
   },

   videoLike: {
     type: Number,
     default: 0,
     min: 0
   },

   videoDislike: {
     type: Number,
     default: 0,
     min: 0
   },
   videoComments: []



}, { timestamps: true})

module.exports = mongoose.model('Video', videoSchema);
