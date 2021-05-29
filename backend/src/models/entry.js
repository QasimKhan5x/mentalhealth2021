const mongoose = require('mongoose');

const entrySchema = new mongoose.Schema({
  mood: {
    type: String,
    required: true,
    lowercase: true,
    enum: ["rad", "good", "meh", "bad", "awful"]
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  time: {
    type: Date,
    default: Date.now
  },
  text: {
    type: String,
    lowercase: true
  },
  imageURL: {
    type: String
  },
  activities: {
    type: [String],
    lowercase: true
  }
});

const Entry = new mongoose.model('Entry', entrySchema);
module.exports = Entry;