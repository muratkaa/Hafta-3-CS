const { default: mongoose } = require("mongoose");

const logSchema = new mongoose.Schema({
    action: {
      type:String,
      required:true
    },
    type:{
      type:String,
      required:false
    },
    amount:{
      type:Number,
      required:true,
      default:1
    },
      date:{
          type:Date,
          required:true,
          default:Date.now
      }
  });
module.exports=mongoose.model("Log",logSchema);