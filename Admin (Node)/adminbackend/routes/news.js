var express = require('express');
var router = express.Router();
const News = require('../models/news');
const Contact = require('../models/contact');

/* GET home page. */
router.get('/newsList', function(req, res, next) {
  let numArticles = req.query.numArticles;
  if(numArticles){
    News.find({}).sort({'createdOn': -1}).limit(numArticles).exec(function(err,data) {
      if(!err){
          
          res.status(200).json(data)
      } else {
          res.json(err)
          
      }
  });

  } else {
    News.find({}).sort({'createdOn': -1}).exec((err, newsData)=>{
      if(!err){
        res.status(200).json(newsData);
      }
      else{
        res.json(err);
      }
    }) 
  }
    
  });
/*
  router.get('/latestnewslist', function(req, res, next) {
    News.find({}, (err, newsData)=>{
      if(!err){
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
*/
  router.post('/contactus', function(req, res, next) {
    const contactDao = new Contact(req.body);
    contactDao.save((err, status)=>{
      if(!err){
        console.log("Contact Info Saved");
        res.json("We will contact you soon...");
      }
      else{
        res.json("Unable to send...");
      }
      console.log(req.body);
    })
   });

  module.exports = router;