const express = require('express');
const router = express.Router();
const registerController = require('../controllers/register.controller');

router.post('/registers', registerController.register);
module.exports = router;