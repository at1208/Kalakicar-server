const Event = require('../models/event');

module.exports.createEvent = (req,res) => {
    const { eventDate, eventPrice, eventVenue, eventTitle, eventImageUrl, eventDescription} = req.body
    const newEvent = new Event({
                         eventDate,
                         eventPrice,
                         eventVenue,
                         eventTitle,
                         eventImageUrl,
                         eventDescription
    })
           newEvent.save((err,result) => {
             if(err){
               res.json({
                 error: 'Error while saving new event in the database'
               })
             }
             res.json({
               message: 'New event is saved in the database'
             })
           })
}

module.exports.getAllEvent = async (req,res) => {
    const events = await Event.find()
    res.json({
      events: events
    })
}

module.exports.updateEvent = async (req,res) => {
    const updatedInfo =req.body
   const _id = req.params.id
   var event = await Event.findByIdAndUpdate({_id: _id}, updatedInfo).exec((err,result) => {
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

module.exports.deleteEvent = async (req,res) => {
   const _id = req.params.id
   var event = await Event.findByIdAndRemove(_id).exec((err,result) => {
     if(err){
       res.status(400).json({
         error: "Failed to delete"
       })
     }
     res.status(200).json({
       message:"Successfully deleted",
       data: result
     })
   })
}

module.exports.eventById = async (req,res) => {
  const _id = req.params.id
    const event = await Event.find({_id: _id})
    res.json({
      event: event
    })
}
