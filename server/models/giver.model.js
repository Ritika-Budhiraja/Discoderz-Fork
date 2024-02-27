const mongoose = require('mongoose');

const giverSchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  // requests: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Request' }],
});

const Giver = mongoose.model('Giver', giverSchema);

module.exports = Giver;
