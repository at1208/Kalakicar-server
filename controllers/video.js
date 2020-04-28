const Video = require('../models/video');
const User = require('../models/user');

module.exports.uploadVideo = (req,res) => {
 const { videoUrl, videoThumbnailUrl, videoTitle, videoDuration, videoDescription, videoCategory} = req.body;
     const newVideo = new Video({
       videoUrl,
       videoCategory,
       videoThumbnailUrl,
       videoTitle,
       videoDuration,
       videoDescription
     })

     newVideo.save((err, video) => {
       if(err){
         return res.status(400).json({
           error: `Error while Saving the video error`
         })
       }
     return res.status(200).json({
         message: 'Successfully saved the video'
       })
     })
}

module.exports.getAllVideos = async (req,res) => {
  const videos =  await Video.find().sort({x: -1});
  // const video = await Video.find({ videoCategory: "Instrumental"})
     res.json({
       videos:  videos,
     })

}

module.exports.likeVideo = async (req,res) => {
  const _id = req.params.id
    console.log(req)
  var video = await Video.findByIdAndUpdate({_id: _id}, {$inc : {'videoLike' : 1}})

  res.json({
    video: video
  })

}


module.exports.dislikeVideo = async (req,res) => {
  const _id = req.params.id

  var video = await Video.findByIdAndUpdate({_id: _id}, {$inc : {'videoDislike' : 1}})

  res.json({
    video: video
  })

}

module.exports.unLikeVideo = async (req,res) => {
  const _id = req.params.id
  var video = await Video.findByIdAndUpdate({_id: _id}, {$inc : {'videoLike' : -1}})

  res.json({
    video: video
  })

}

module.exports.unDislikeVideo = async (req,res) => {
  const _id = req.params.id
  var video = await Video.findByIdAndUpdate({_id: _id}, {$inc : {'videoDislike' : -1}})

  res.json({
    video: video
  })

}
module.exports.updateVideo = async (req,res) => {
  const updatedInfo =req.body
   const _id = req.params.id
   var video = await Video.findByIdAndUpdate({_id: _id}, updatedInfo).exec((err,result) => {
     if(err){
       res.status(400).json({
         error: "Failed to update"
       })
     }
     res.status(200).json({
       message:"Successfully updated",
       data: result
     })
   })

}

module.exports.deleteVideo = async (req,res) => {
   const _id = req.params.id
   var video = await Video.findByIdAndRemove(_id).exec((err,result) => {
     if(err){
       return res.status(400).json({
         error: "Failed to delete"
       })
     }
     res.status(200).json({
       message:"Successfully deleted",
       data: result
     })
   })
}

module.exports.videoById = async (req,res) => {
  const _id = req.params.id
  var video = await Video.findById(_id).exec((err,result) => {
    if(err){
      return res.status(400).json({
        error: "Failed to find" })
  }
  res.status(200).json({
    result
  })


  })
}

module.exports.videoByCategory = async (req,res) => {
  const category = req.params.category
  console.log(category)
  const video = await Video.find({ videoCategory: category }).exec((err,result) => {
    if(err){
    return res.status(400).json({
        error: `Error while finding video by category ${category}`
      })
    }
    if(result.length===0){
    return res.status(200).json({
        message: `Not found any video by ${category}`
      })
    }
    return res.status(200).json({
      result
    })
  })

}

module.exports.videoById = async (req,res) => {
  const _id = req.params.id
  const video = await Video.findById(_id).exec((err,result) => {
    if(err){
      res.status(400).json({
        error: 'Error while finding video by id'
      })
    }
    res.status(200).json({
      result
    })
  })
}

module.exports.videoLiked = async (req,res) => {
  // const { videoId, userId } = req.params
  // var video = await Video.findById(videoId)
  // var user = await User.findById(userId)
  //
  //
  //
  // var likedVideoIdArray = user.likedVideo.map(item => item._id)
  //     likedVideoIdArray.find((item) => {
  //       if()
  //     })
//   for(var i=0; i<=likedVideoIdArray.length; i++){
//  if(videoId ==likedVideoIdArray[i]){
//     res.status(200).json({
//      message: "Already Liked" })
//  }else{
// user.likedVideo.push(video)
//    await user.save()
//    return res.json({
//      message: 'Liked'
//    })
//  }
//     }


}

module.exports.videoComments = async (req,res) => {
  const _id = req.params.videoId
  const { author,avatar,content,datetime} = req.body
  const video = await Video.findById(_id)

  const updatedInfo = { author, avatar, content, datetime}
     video.videoComments.push(updatedInfo)
     video.save()

  res.json({
   video
  })
}

module.exports.videoCommentsById = async (req,res) => {

  const _id = req.params.videoId
  const video = await Video.findById(_id)
  const comments = video.videoComments
  res.json({
   comments
  })
}
