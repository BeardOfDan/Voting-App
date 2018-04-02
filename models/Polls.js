const mongoose, { Schema } = require('mongoose');

const pollSchema = new Schema({
  'createdBy': { 'userID': { 'type': String, required: true }, 'userName': { 'type': String, 'required': true } },
  'name': String, // should be unique (for each user, but multiple users can have the same name for a poll)
  'options': [], // voting options
  'votes': [] // votes cast
});

mongoose.model('poll', pollSchema);
