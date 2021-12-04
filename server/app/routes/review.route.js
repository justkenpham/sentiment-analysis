const express = require('express');
const router = express.Router()
const reviewController = require('../controllers/review.controller')

router.get('/get-reviews/:product_id', reviewController.getReview)
router.post('/post-reviews/', reviewController.postReview)
module.exports = router;