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
router.get('/home', function(req, res, next) {
  var token = localStorage.getItem('authtoken')
   // console.log("token>>>", token)
    if (!token) {
        res.redirect('/')
    }
    jwt.verify(token, config.secret, function (err, decoded) {
        if (err) {
            res.redirect('/')
        }
        User.findById(decoded.id, { password: 0 }, function (err, user) {
            if (err) { res.redirect('/') }
            if (!user) { res.redirect('/') }
            
            News.find({}, (err, newsData)=>{
              if(!err){
                //console.log(newsData);
                res.status(200).render('homepage', { title: 'Hello World', newsData: newsData, user});
                //console.log(newsData);
                //res.status(200).json(newsData);
              }
              else{
                res.json(err);
              }
            }) 
        });
    });
 
});

router.post('/', function(req, res, next) {

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

      console.log(req.body._id);
      console.log('Router put received')
      News.findOneAndUpdate({_id: req.body._id }, 
        {title: req.body.title ,
         description: req.body.description,
         url: req.body.url,
         urlofimg: req.body.urlofimg},{new: true}, (err, doc) =>{
        if (!err){
          //res.send("<h1>You article will be published soon...</h1>");
          res.send(" <h1>Post has been Edited</h1>");
          console.log("ok" + doc);
        }
        else{
            //console.log(doc);
            //console.log(err);
        }
      })
    });

  });

 });

 router.post('/delete', function(req, res, next) {
 News.findOneAndDelete({_id: req.body._id }, function (err, docs) {
  if (err){
      console.log(err)
  }
  else{
      console.log("Deleted User : ", docs);
      res.send(" <h1>Post has been Deleted</h1>");
  }
})
});

module.exports = router;