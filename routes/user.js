const express = require('express');
const router = express.Router();

// import controller
const { requireSignin, adminMiddleware } = require('../controllers/auth');
const { read, update } = require('../controllers/user');

router.get('/user/:id', requireSignin, read);
router.put('/user/update', requireSignin, update);
router.put('/admin/update', requireSignin, adminMiddleware, update);
// router.patch('/user/:userId/video-liked/:videoId',videoLiked);
// router.patch('/user/:userId/video-unliked/:videoId',videoUnliked);

module.exports = router;
