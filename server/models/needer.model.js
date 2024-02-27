const mongoose = require('mongoose');

const neederSchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  phno: {type: String, required: true}
});

const Needer = mongoose.model('Needer', neederSchema);

module.exports = Needer;
