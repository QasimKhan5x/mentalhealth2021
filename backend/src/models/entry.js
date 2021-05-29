const mongoose = require('mongoose');

const entrySchema = new mongoose.Schema({
  mood: {
    type: String,
    required: true,
    lowercase: true,
    enum: ["ecstatic", "happy", "content", "sad", "angry"]
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
    lowercase: true,
    enum: ['gaming','study','travel','sports','eating','shows/movies','shopping',
          'painting','driving','photography','music','writing','other']
  }
});

const Entry = new mongoose.model('Entry', entrySchema);
module.exports = Entry;