const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');
const Product = require('../models/product');

let mongoServer;

describe('Product Model Test', () => {
  beforeAll(async () => {
    mongoServer = await MongoMemoryServer.create();
    const mongoUri = mongoServer.getUri();
    await mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true });
  });

  afterAll(async () => {
    await mongoose.disconnect();
    await mongoServer.stop();
  });

  it('should create a product', async () => {
    const product = new Product({
      name: 'Test Product',
      price: 10.99,
      description: 'Test product description',
      stock: 10,  
    });

    const savedProduct = await product.save();

    expect(savedProduct._id).toBeDefined();
    expect(savedProduct.name).toBe('Test Product');
    expect(savedProduct.price).toBe(10.99);
    expect(savedProduct.description).toBe('Test product description');
    expect(savedProduct.stock).toBe(10);  
  });
});
