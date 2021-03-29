var express = require('express');
var router = express.Router();
const News = require('../models/news');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('add', { title: 'Publish Article' });
});

router.post('/', function(req, res, next) {
    const newsDao = new News(req.body);
    newsDao.save((err, status)=>{
      if(!err){
        console.log("News has been saved");
        res.send("<h1>You article will be published soon...</h1>");
      }
      else{
        res.send("<h1>Unable to publish...</h1>");
      }
      console.log(req.body);
    })
   });
  
module.exports = router;
