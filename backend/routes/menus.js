const router = require('express').Router();
const Menu = require('../models/Menu');
const auth = require('../middleware/auth');

// Get all menus
router.get('/', async (req, res) => {
  const menus = await Menu.find().populate('chef', 'name');
  res.json(menus);
});

// Create menu (chef only)
router.post('/', auth, async (req, res) => {
  if (req.user.role !== 'chef') return res.status(403).json({ message: 'Only chefs can create menus' });
  try {
    const menu = new Menu({ ...req.body, chef: req.user.id });
    await menu.save();
    res.json(menu);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
