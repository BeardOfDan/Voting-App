const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  'email': { 'type': String, 'required': true },
  'username': { 'type': String, 'required': true },
  'polls': [], // array of poll ids
  'votingRecord': [{}] // ex {'pollID': 123, 'vote': 'Piccard'}
});

mongoose.model('user', userSchema);
