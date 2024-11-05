// routes/productRoutes.js
const express = require('express');
const router = express.Router();
const { createProduct, getProducts } = require('../controllers/productController');

// Create a product
router.post('/', createProduct);

// Get all products
router.get('/', getProducts);

module.exports = router;
