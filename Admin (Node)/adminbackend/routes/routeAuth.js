const express = require('express');

const AuthController = require('../controllers/controlAuth');

const router = express.Router();

// /api/sec/auth/login
router.post('/login', AuthController.login);

module.exports = router;