const mongoose = require('mongoose');

const hospitalSchema = new mongoose.Schema({
  name: { type: String, required: true },
  place: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  document: { type: String },
  isVerified: { type: Boolean, default: false },
  requests: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Request' }],
});

const Hospital = mongoose.model('Hospital', hospitalSchema);

module.exports = Hospital;
