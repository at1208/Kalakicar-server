const Contest = require('../models/contest');


module.exports.createContest = async (req,res) => {

    const result = await Contest(req.body)
         result.save()
         res.json({
           result
         })
  // const { performerName, performanceMarks, performerCategory, performerImageUrl} = req.body

  // const newPerformanceVoting = Contest({
  //          performerName,
  //          performanceMarks,
  //          performerCategory,
  //          performerImageUrl
  //        })
  //
  // const result = await newPerformanceVoting.save()
  // res.json({
  //     result
  // })
  //

}

// module.exports.getAllContest = async (req,res) => {
//   const result = await Contest.find()
//   res.status(200).json({
//     result
//   })
// }
//
// module.exports.updateContest = async (req,res) => {
//   const id = req.params.id
//   const { performerName, performanceMarks, performerCategory, performerImageUrl} = req.body
//
//   const updatedInfo = {
//        performerName,
//        performanceMarks,
//        performerCategory,
//        performerImageUrl
//   }
//      await Contest.findByIdAndUpdate({_id: id}, updatedInfo).exec((err,result) => {
//        if(err){
//          res.status(400).json({
//            error: 'failed to update performer detail'
//          })
//        }
//        res.status(200).json({
//          message: 'Successfully updated',
//          result
//        })
//      })
//
// }
//
// module.exports.deleteContest = async (req,res) => {
//     const id = req.params.id
//   const result = await Contest.findByIdAndRemove(id)
//   res.status(200).json({
//     message: 'successfully deleted',
//     result
//   })
// }
