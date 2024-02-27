const mongoose = require('mongoose');

const neederRegistrationsSchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  phno: {type: String, required: true}
});

const NeederRegistrations = mongoose.model('NeederRegistrations', neederRegistrationsSchema);

module.exports = NeederRegistrations;
