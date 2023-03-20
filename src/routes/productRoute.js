const express = require('express');
const { getProduct, addProduct, updateProduct, deleteProduct } = require('../controllers/products');

const router = express.Router();

router.get('/',  getProduct);
router.post('/', addProduct);
router.put('/',  updateProduct);
router.delete('/', deleteProduct);


module.exports = router;