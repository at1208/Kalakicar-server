const EmailPasswordUsers = require('../models/user');

module.exports.allUsers = async (req,res) => {
  const result = await EmailPasswordUsers.find()
    res.json({
     result
    })
}
