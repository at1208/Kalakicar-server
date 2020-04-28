const { check } = require('express-validator');


module.exports.uploadVideoValidator = [
      check('videoTitle')
        .not()
        .isEmpty()
        .withMessage('Video Title is required'),

      check('videoUrl')
        .not()
        .isEmpty()
        .withMessage('Video url is required'),

      check('videoDuration')
        .not()
        .isEmpty()
        .withMessage('Video duration is required'),

      check('videoThumbnailUrl')
        .not()
        .isEmpty()
        .withMessage('Video thumbnail url is required'),

        check('videoCategory')
          .not()
          .isEmpty()
          .withMessage('Video category is required'),

]
 
