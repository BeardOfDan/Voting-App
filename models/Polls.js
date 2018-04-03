const mongoose, { Schema } = require('mongoose');

const pollSchema = new Schema({
  'createdBy': { 'userID': { 'type': String, 'required': true }, 'userName': { 'type': String, 'required': true } },
  'name': String, // should be unique (for each user, but multiple users can have the same name for a poll)
  'options': [], // voting options
  'votes': [{ 'option': { 'type': String, 'required': true }, 'voter': { 'type': String, 'required': true } }] // votes cast
  // votes.voter is either the user ID or IP address (for unauthenticated users)
  // This prevents a user from voting more than once on the same poll
});

mongoose.model('poll', pollSchema);
