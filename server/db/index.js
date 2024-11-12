const mongoose = require('mongoose');
const chalk = require('chalk');

mongoose
  .connect('mongodb://localhost:27017/doctorBookingDB')
  .then(() => {
    console.log(chalk.green('Database Connected'));
  })
  .catch(e => {
    console.log(chalk.red(e.message));
  });

module.exports = mongoose;
