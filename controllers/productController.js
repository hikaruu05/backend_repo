// controllers/productController.js
const Product = require('../models/Product');

// Create a product
exports.createProduct = async (req, res) => {
    const product = new Product(req.body);
    try {
        await product.save();
        res.status(201).json(product);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Get all products
exports.getProducts = async (req, res) => {
    const products = await Product.find();
    res.status(200).json(products);
};
