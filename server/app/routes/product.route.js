const express = require('express');
const router = express.Router()
const productController = require('../controllers/product.controller')

router.get('/search', productController.searchProduct)
router.get('/search/:product_id', productController.getProductDetail)
module.exports = router;