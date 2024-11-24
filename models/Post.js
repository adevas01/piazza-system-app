const mongoose = require('mongoose')

const PostSchema = new mongoose.Schema({
  user: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  topic: {
    type: String,
    required: true
  },
  message: {
    type: String,
    required: true,
    min: 10,
    max: 5000
  },
  status: {
    type: String,
    required: true
  }, 
  comments: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Post', PostSchema);













































