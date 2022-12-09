
const mongoose = require('mongoose');

const supplySchema = new mongoose.Schema({
  name: {
    type:String,
    required:true
  },
  amount:{
    type:String,
    required:true
  },
  date:{
    type:Date,
    required:true,
    default:Date.now
  }
});

module.exports = mongoose.model('Supply', supplySchema);