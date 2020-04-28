const User = require('../models/user');
const Video =require('../models/video')

exports.read = (req, res) => {
    const userId = req.params.id;
    User.findById(userId).exec((err, user) => {
        if (err || !user) {
            return res.status(400).json({
                error: 'User not found'
            });
        }
        user.hashed_password = undefined;
        user.salt = undefined;
        res.json(user);
    });
};

exports.update = (req, res) => {
    // console.log('UPDATE USER - req.user', req.user, 'UPDATE DATA', req.body);
    const { name, password } = req.body;

    User.findOne({ _id: req.user._id }, (err, user) => {
        if (err || !user) {
            return res.status(400).json({
                error: 'User not found'
            });
        }
        if (!name) {
            return res.status(400).json({
                error: 'Name is required'
            });
        } else {
            user.name = name;
        }

        if (password) {
            if (password.length < 6) {
                return res.status(400).json({
                    error: 'Password should be min 6 characters long'
                });
            } else {
                user.password = password;
            }
        }

        user.save((err, updatedUser) => {
            if (err) {
                console.log('USER UPDATE ERROR', err);
                return res.status(400).json({
                    error: 'User update failed'
                });
            }
            updatedUser.hashed_password = undefined;
            updatedUser.salt = undefined;
            res.json(updatedUser);
        });
    });
};

// module.exports.videoLiked = async (req,res) => {
//        const { videoId, userId} = req.params
//        var video =await Video.findById(videoId)
//        var user = await User.findById(userId)
//
//       const found = user.likedVideo.find(video => video == video)
//       if(found){
//         const updatedInfo = user.unlikedVideo.filter(video => video._id == videoId)
//                     user.unlikedVideo.update({}, updatedInfo)
//                     user.save()
//       return  res.json({
//           message: 'Already liked'
//         })
//       }
//
//       user.unlikedVideo.filter(video => video._id == videoId)
//       user.save()
//
//       user.likedVideo.push(video)
//       user.save()
//
//
//        res.json({
//           message: "Liked video"
//        })
//
//
// }
// module.exports.videoUnliked = async (req,res) => {
//   const { videoId, userId} = req.params
//
//        var video =await Video.findById(videoId)
//        var user = await User.findById(userId)
//
//         const found = user.unlikedVideo.find(video => video == video)
//         if(found){
//         user.likedVideo.filter(video => video == videoId)
//               user.save()
//           return res.json({
//             message: "Already unliked"
//           })
//         }
//
//         user.likedVideo.filter(video => video._id == videoId)
//         user.save()
//
//       user.unlikedVideo.push(video)
//       user.save()
//
//
//
//         res.json({
//         message: "Unliked video"
//         })
//
//
// }
