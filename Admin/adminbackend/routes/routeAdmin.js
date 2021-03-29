const express = require('express');

const AdminController = require('../controllers/controlAdmin');

// Middleware - JWT verification
const checkAuth = require('../middleware/check-auth');

const router = express.Router();

// /admin
router.get('/', checkAuth, AdminController.dashboard);

// /admin/news
router.get('/news', checkAuth);//add admin controller functionality on this function call eg. AdminController.getNewsList

// /admin/news/add
router.get('/news/add', checkAuth);//add admin controller functionality on this function call eg. AdminController.addNews

// /admin/news/edit
router.post('/news/edit', checkAuth);//add admin controller functionality on this function call eg. AdminController.update/edit News

module.exports = router;