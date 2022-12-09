//models/coffee.js
const mongoose = require('mongoose');

const coffeeSchema = new mongoose.Schema({
  name: {
    type:String,
    required:true
  },
  coffeeType:{
    type:String,
    required:true
  },
  date:{
    type:Date,
    required:true,
    default:Date.now
  }
});

module.exports = mongoose.model('Coffee', coffeeSchema);