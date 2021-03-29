var express = require('express');
var router = express.Router();
const News = require('../models/news');

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

  module.exports = router;