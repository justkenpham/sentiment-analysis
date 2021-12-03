const express = require('express');
const router = express.Router();
const loginController = require('../controllers/login.controller');

router.post("/logins", loginController.login);
module.exports = router;