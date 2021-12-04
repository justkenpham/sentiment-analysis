const express = require('express');
const router = express.Router()
const productController = require('../controllers/product.controller')

router.get('/search', productController.searchProduct)
router.get('/detail/:product_id', productController.getProductDetail)
router.get('/all', productController.getAllProduct)
module.exports = router;