const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  place: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  requests: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Request' }],

});

const User = mongoose.model('User', userSchema);

module.exports = User;
