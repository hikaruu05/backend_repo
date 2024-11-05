const express = require('express');
const app = express();
app.get('/products', (req, res) => {
  res.json([{ id: 1, name: 'Product 1' }, { id: 2, name: 'Product 2' }]);
});
app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});