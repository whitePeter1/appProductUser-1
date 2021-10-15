const mongoose = require("mongoose");

const iplogging = mongoose.Schema({
  Ip: {
    type: String
  },
  Enviroment:{
      type:String
  },
  Hostname:{
      type:String
  },
  Namespace:{
      type:String
  },
  Time:{
      type:String,
      default:Date.now()
  }
});

exports.ipLog  = mongoose.model("ipLog",iplogging)