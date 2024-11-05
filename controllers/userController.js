// controllers/userController.js
const User = require('../models/User');

// User registration
exports.registerUser = async (req, res) => {
    const { name, email, password } = req.body;
    const user = new User({ name, email, password });
    try {
        await user.save();
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// User login
exports.loginUser = async (req, res) => {
    const { email, password } = req.body;
    // Authentication logic would go here (not implemented for simplicity)
    res.status(200).json({ message: 'User logged in successfully' });
};
