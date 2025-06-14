const router = require('express').Router();
const Order = require('../models/Order');
const Menu = require('../models/Menu');
const auth = require('../middleware/auth');

// Create order (customer)
router.post('/', auth, async (req, res) => {
  if (req.user.role !== 'customer') return res.status(403).json({ message: 'Only customers can order' });
  try {
    const menu = await Menu.findById(req.body.menuId);
    const order = new Order({ customer: req.user.id, menu: menu._id, qrCode: `http://example.com/orders/${req.user.id}` });
    await order.save();
    res.json(order);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Update status (chef)
router.put('/:id/status', auth, async (req, res) => {
  if (req.user.role !== 'chef') return res.status(403).json({ message: 'Only chefs can update status' });
  try {
    const order = await Order.findById(req.params.id).populate('menu');
    if (!order.menu.chef.equals(req.user.id)) return res.status(403).json({ message: 'Not your order' });
    order.status = req.body.status;
    await order.save();
    res.json(order);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get orders for user
router.get('/', auth, async (req, res) => {
  const orders = await Order.find({ [req.user.role]: req.user.id }).populate('menu');
  res.json(orders);
});

module.exports = router;
