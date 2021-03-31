var express = require('express');
var router = express.Router();
const News = require('../models/news');
const User = require('../models/adminuser');
const LocalStorage = require('node-localstorage').LocalStorage;
const config = require('../config.js');
const jwt = require('jsonwebtoken');
localStorage = new LocalStorage('./scratch');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send("<h1>please login</h1>");

});

router.get('/addauth', function (req, res, next) {
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
      res.render('add', { user, title: 'Publish Article' })
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
          console.log("News has been saved");
          res.send("<h1>You article will be published soon...</h1>");
        }
        else {
          res.send("<h1>Unable to publish...</h1>");
        }
        console.log(req.body);
      })
    });

  });
});

module.exports = router;
