const express = require('express');
const router = express.Router();

//import controllers
const { uploadVideo,
        getAllVideos,
        likeVideo,
        dislikeVideo,
        unLikeVideo,
        unDislikeVideo,
        updateVideo,
        deleteVideo,
        videoByCategory,
        videoById,
        videoLiked,
        videoComments,
        videoCommentsById
        } = require('../controllers/video');

//import validators
const { uploadVideoValidator } = require('../validators/video');
const { runValidation } = require('../validators/index')

router.post('/upload-video', uploadVideoValidator, runValidation, uploadVideo);
router.get('/all-videos', getAllVideos);
router.patch('/like-video/:id', likeVideo);
router.patch('/dislike-video/:id', dislikeVideo);
router.patch('/unlike-video/:id', unLikeVideo);
router.patch('/undislike-video/:id', unDislikeVideo);
router.patch('/update-video/:id', updateVideo);
router.delete('/delete-video/:id', deleteVideo);
router.get('/all-videos/:category', videoByCategory);
router.get('/video/:id',videoById);
router.patch('/video/liked-video/:userId/:videoId',videoLiked);
router.patch('/video/video-comment/:videoId',videoComments);
router.get('/video/all-video-comment/:videoId',videoCommentsById);

module.exports = router;
