const router = require('express').Router();
const jwt = require('jsonwebtoken');
const User = require('../models/User');

// Register
router.post('/register', async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.json({ message: 'User registered' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Login
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) throw new Error('User not found');
    const isMatch = await user.comparePassword(password);
    if (!isMatch) throw new Error('Invalid credentials');
    const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET || 'secretkey');
    res.json({ token, role: user.role, userId: user._id });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
