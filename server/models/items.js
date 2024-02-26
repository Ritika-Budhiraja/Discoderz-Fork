const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  productType: { type: String, required: true }, // Blood, Wheelchair, Nebulizer, Oxygen Cylinder, etc.
  quantity: { type: Number, required: false },
  contactNumber: { type: String, required: true },
  location: { type: String, required: true },
  isApproved: { type: Boolean, default: false },
});

const Item = mongoose.model('Item', itemSchema);

module.exports = Item;
