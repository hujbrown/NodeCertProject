var express = require('express');
var router = express.Router();
const News = require('../models/news');


/* GET home page. */
router.get('/', function(req, res, next) {
  News.find({}, (err, newsData)=>{
    if(!err){
      //console.log(newsData);
      res.status(200).render('homepage', { title: 'Hello World', newsData: newsData });
      //console.log(newsData);
      //res.status(200).json(newsData);
    }
    else{
      res.json(err);
    }
  }) 
});

router.post('/', function(req, res, next) {
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