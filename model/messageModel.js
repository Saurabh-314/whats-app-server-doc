const mongoose = require('mongoose');

const MessageSchema = new mongoose.Schema({
  senderId: {
    type: String
  },
  receiverId: {
    type: String
  },
  text: {
    type: String
  }
},
  {
    timestamps: true
  })

const message = mongoose.model('Message', MessageSchema);

module.exports = message;