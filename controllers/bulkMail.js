const sgMail = require('@sendgrid/mail');
const Users =  require('../models/user');

module.exports.sendBulkMail = async (req,res) => {
  const { subject,html } = req.body
   const user = await Users.find()
   const emailList = user.map( email => {
     return email.email
   })

sgMail.setApiKey(process.env.SENDGRID_API_KEY);
sgMail.send({
 to: emailList,
 from: 'mailmeaktiwari@gmail.com',
 subject: subject,
 html: html,
}, (err, result) => {
  if(err){
    res.status(400).json({
      error: 'bulk mail failed'
    })
  }
  res.status(200).json({
    message: "successfully sent"
  })
});
}
