const mongoose = require('mongoose');

const reportSchema = new mongoose.Schema({
  customerId: String,
  name: String,
  service: String,
  date: Date,
  cost: Number
});

module.exports = mongoose.model('Report', reportSchema);
