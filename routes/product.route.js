const express = require('express');
const router = express.Router();
const { getAllProducts,getProduct,postProduct,updateProduct,deleteProduct, } = require('../controllers/product.controller');

router.post('/', postProduct);

router.get('/', getAllProducts);

router.get('/:id', getProduct);

router.put('/:id', updateProduct);

router.delete('/:id', deleteProduct);

module.exports = router;