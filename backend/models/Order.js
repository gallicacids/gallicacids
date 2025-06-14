const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
  customer: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  menu: { type: mongoose.Schema.Types.ObjectId, ref: 'Menu' },
  status: { type: String, enum: ['preparing', 'cooking', 'ready'], default: 'preparing' },
  qrCode: String // placeholder for qr link
}, { timestamps: true });

module.exports = mongoose.model('Order', OrderSchema);
