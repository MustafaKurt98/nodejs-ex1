const mongoose = require('mongoose');
const adminSchema = new mongoose.Schema({
      email: {
        type: String,
      },
      password: {
        type: String,
      },
      token:{
        type:String
      },
      date: {
        type: Date,
        default: Date.now,
      },

})

module.exports = mongoose.model('admin', adminSchema);