const mongoose = require('mongoose');
const {Schema} = mongoose;

const EKYC_register = new Schema({
    name:{
        type: String,
        required: true,
        unique: true
    },
    aadhar_number:{
        type: String,
        require: true,
        unique: true
    },
    phone_number:{
        type: String,
        require: true,
    },
    wallet_address:{
        type: String,
        require: true,
        unique: true
    },
    date:{
        type: Date,
        default: Date.now
    }
  });
  const EKYC = mongoose.model('Details',EKYC_register);
  module.exports = EKYC;