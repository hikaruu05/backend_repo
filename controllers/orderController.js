// controllers/orderController.js
const Order = require('../models/Order');

// Create an order
exports.createOrder = async (req, res) => {
    const order = new Order(req.body);
    try {
        await order.save();
        res.status(201).json(order);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Get all orders
exports.getOrders = async (req, res) => {
    const orders = await Order.find().populate('user products.product');
    res.status(200).json(orders);
};
