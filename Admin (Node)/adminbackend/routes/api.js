var express = require('express');
var router = express.Router();
const News = require('../models/news');
const Contact = require('../models/contact');

/* GET home page. */
router.get('/newslist', function(req, res, next) {
    News.find({}, (err, newsData)=>{
      if(!err){
        //console.log(newsData);
        //res.status(200).render('homepage', { title: 'Hello World', newsData: newsData });
        //console.log(newsData);
        res.status(200).json(newsData);
      }
      else{
        res.json(err);
      }
    }) 
  });

  router.get('/latestnewslist', function(req, res, next) {
    News.find({}, (err, newsData)=>{
      if(!err){
        //console.log(newsData);
        //res.status(200).render('homepage', { title: 'Hello World', newsData: newsData });
        //console.log(newsData);
        res.status(200).json(newsData);
      }
      else{
        res.json(err);
      }
    }) 
  });
  
  router.get('/latestthreenews', function(req, res, next) {
    News.find({}).sort({'createdOn': -1}).limit(3).exec(function(err,data) {
        if(!err){
            
            res.status(200).json(data)
        } else {
            res.json(err)
            
        }
    });
  });

  router.post('/contactus', function(req, res, next) {
    const contactDao = new Contact(req.body);
    contactDao.save((err, status)=>{
      if(!err){
        console.log("Contact Info Saved");
        res.json("<h1>We will contact you soon...</h1>");
      }
      else{
        res.json("<h1>Unable to send...</h1>");
      }
      console.log(req.body);
    })
   });

  module.exports = router;