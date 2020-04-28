require('dotenv').config();
const cors = require('cors');
const morgan = require('morgan');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cloudinary = require('cloudinary');
const app = express();

//import routes
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/user');
const videoRoutes = require('./routes/video');
const eventRoutes = require('./routes/event');
const uploadRoutes = require('./routes/upload');
const allUserRoutes = require('./routes/allUsers');
const bulkMailRoutes = require('./routes/bulkMail');
const contestRoutes = require('./routes/contest');

//app middlewares
app.use(cors());
app.use(morgan('tiny'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}))


//routes middleware
app.use('/api', authRoutes);
app.use('/api', userRoutes);
app.use('/api', videoRoutes);
app.use('/api', eventRoutes);
app.use('/api', uploadRoutes);
app.use('/api', allUserRoutes);
app.use('/api', bulkMailRoutes);
app.use('/api', contestRoutes);

mongoose.connect(process.env.DATABASE, {  useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
   .then(
     () => console.log('Connected to DB'))
   .catch(
     (error) => console.log(error));


cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
})


const Port = process.env.PORT || 8080;
app.listen(Port, () => console.log(`Listening to ${Port}`));
