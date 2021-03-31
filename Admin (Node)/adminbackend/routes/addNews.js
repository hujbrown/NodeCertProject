var express = require('express');
var router = express.Router();
const News = require('../models/news');
const User = require('../models/admin');
const LocalStorage = require('node-localstorage').LocalStorage;
const config = require('../config.js');
const jwt = require('jsonwebtoken');
localStorage = new LocalStorage('./scratch');


router.get('/', function (req, res, next) {
  const token = localStorage.getItem('authtoken');
  if (!token) {
    res.redirect('/');
  }
  jwt.verify(token, config.secret, function (err, decoded) {
    if (err) {
      res.redirect('/')
    }
    User.findById(decoded.id, { password: 0 }, function (err, user) {
      if (err) { res.redirect('/') }
      if (!user) { res.redirect('/') }
      res.render('addNews', { user, title: 'Publish Article' })
    });
  });

});

router.post('/', function (req, res, next) {
  const token = localStorage.getItem('authtoken');
  if (!token) {
    res.redirect('/');
  }
  jwt.verify(token, config.secret, function (err, decoded) {
    if (err) {
      res.redirect('/')
    }
    User.findById(decoded.id, { password: 0 }, (err, user) => {
      if (err) { res.redirect('/') }
      if (!user) { res.redirect('/') }

      const newsDao = new News(req.body);
      newsDao.save((err, status) => {
        if (!err) {
          res.redirect("/newsList");
        }
        else {
          res.send("<h1>Unable to publish...</h1>");
        }
      })
    });

  });
});

module.exports = router;
