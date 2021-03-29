const express = require('express');

const UserController = require('../controllers/controlUser');

// Middleware - JWT verification
const checkAuth = require('../middleware/check-auth');

const router = express.Router();

// /api/users
router.get('/', checkAuth, UserController.getAllUsers);
router.post('/', UserController.addUser);

module.exports = router;