const mongoose = require('mongoose');

const MenuSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  ingredients: [String],
  allergens: [String],
  chef: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  tags: [String] // spicy, sweet, etc
});

module.exports = mongoose.model('Menu', MenuSchema);
