const mongoose = require('mongoose');
const chalk = require('chalk');
require('dotenv').config();
const uri = process.env.MONGO_URI;
mongoose
  .connect(uri)
  .then(() => console.log('MongoDB connected successfully'))
  .catch(err => console.error('MongoDB connection error: ', err));

module.exports = mongoose;
